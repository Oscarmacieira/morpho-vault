import { metaMorphoAbi } from "@/lib/wagmi-cli/generated";
import { useMemo } from "react";
import { Address } from "viem";
import { useConfig, useReadContracts } from "wagmi";
import { VaultConversion } from "../../vaults.types";

type UseVaultConversionQueryProps = {
  userShares?: bigint;
  maxRedeem?: bigint;
  vaultAddress?: Address;
};

/**
 * @param {UseVaultConversionQueryProps} props - The props for the useVaultConversionQuery hook.
 * @returns {Object} - Returns an object with the following properties:
 *   - `data` - An object with the following properties:
 *     - `assets` - The assets of the vault.
 *     - `maxWithdraw` - The max withdraw of the vault.
 */
export const useVaultConversionQuery = ({
  userShares,
  maxRedeem,
  vaultAddress,
}: UseVaultConversionQueryProps) => {
  const config = useConfig();

  const convertToAssetsFunction = useMemo(
    () => [
      {
        address: vaultAddress,
        abi: metaMorphoAbi,
        functionName: "convertToAssets",
        args: [userShares || BigInt(0)],
      },
      {
        address: vaultAddress,
        abi: metaMorphoAbi,
        functionName: "convertToAssets",
        args: [maxRedeem || BigInt(0)],
      },
    ],
    [vaultAddress, userShares, maxRedeem],
  );

  return useReadContracts({
    contracts: convertToAssetsFunction,
    config,
    query: {
      enabled: Boolean(userShares),
      staleTime: 0,
      refetchOnMount: "always",
      select: (data) =>
        ({
          assets: data[0]?.result,
          maxWithdraw: data[1]?.result,
        }) as VaultConversion,
    },
  });
};
