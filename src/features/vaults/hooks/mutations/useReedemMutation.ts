import { useTransactionManager } from "@/features/transactions/providers/TransactionManagerProvider";
import { logger } from "@/lib/logger";
import { rainbowConfig } from "@/lib/rainbow-config";
import { siteConfig } from "@/lib/site-config";
import { useWriteMetaMorphoRedeem } from "@/lib/wagmi-cli/generated";
import { useMutation } from "@tanstack/react-query";
import { Address } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { useAccount } from "wagmi";
import { useVault } from "../../providers/VaultProvider";

type RedeemMutationProps = {
  shares?: bigint;
  formattedShares?: string;
};

export const useRedeemMutation = (vaultAddress?: Address | null) => {
  const { writeContractAsync } = useWriteMetaMorphoRedeem();
  const { address } = useAccount();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();

  const { vaultAddressForm, vaultQuery } = useVault();
  const { reset } = vaultAddressForm;

  return useMutation({
    mutationFn: async (props: RedeemMutationProps) => {
      const { shares, formattedShares } = props;
      if (!vaultAddress || !shares || !address) return;

      let hash: Address | undefined;

      try {
        hash = await writeContractAsync({
          args: [shares, address, address],
        });

        addTransaction({
          hash: hash,
          state: "pending",
          title: "Your transaction is pending",
          button: {
            disabled: true,
            text: "Transaction finalizing...",
          },
        });

        const txReceipt = await waitForTransactionReceipt(
          rainbowConfig.getClient(),
          {
            hash,
            confirmations: siteConfig.txConfirmations,
          },
        );

        if (txReceipt.status === "success") {
          updateTransaction({
            state: "success",
            title: "Success!",
            description: `You have received ${formattedShares}.`,
            button: {
              text: "Reset",
              onClick: async () => {
                reset();
                clearTransaction();
              },
            },
          });
        } else {
          updateTransaction({
            state: "failed",
            title: "Oh no!",
            description: "Please try again.",
            button: {
              text: "Retry",
              onClick: () => clearTransaction(),
            },
          });
        }

        return txReceipt;
      } catch (error) {
        logger.error(error);
      }
    },
    onSuccess: async () => {
      await vaultQuery.invalidateVault();
    },
    throwOnError: false,
  });
};
