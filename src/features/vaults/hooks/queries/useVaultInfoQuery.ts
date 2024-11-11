import { metaMorphoAbi } from "@/lib/wagmi-cli/generated";
import { useMemo } from "react";
import { Address } from "viem";
import { useAccount, useConfig, useReadContracts } from "wagmi";
import { VaultInfo } from "../../vaults.types";

/**
 * @param {Address} vaultAddress - The address of the vault.
 * @returns {Object} - Returns an object with the following properties:
 *   - `data` - An object with the following properties:
 *     - `name` - The name of the vault.
 *     - `symbol` - The symbol of the vault.
 *     - `decimals` - The decimals of the vault.
 *     - `asset` - The asset of the vault.
 *     - `balance` - The balance of the vault.
 *     - `maxRedeem` - The max redeem of the vault.
 */
export const useVaultInfoQuery = (vaultAddress?: Address) => {
  const { address: userAddress } = useAccount();
  const config = useConfig();

  const vaultFunctions = useMemo(
    () => [
      { address: vaultAddress, abi: metaMorphoAbi, functionName: "name" },
      { address: vaultAddress, abi: metaMorphoAbi, functionName: "symbol" },
      { address: vaultAddress, abi: metaMorphoAbi, functionName: "decimals" },
      { address: vaultAddress, abi: metaMorphoAbi, functionName: "asset" },
      ...(userAddress
        ? [
            {
              address: vaultAddress,
              abi: metaMorphoAbi,
              functionName: "balanceOf",
              args: [userAddress],
            },
            {
              address: vaultAddress,
              abi: metaMorphoAbi,
              functionName: "maxRedeem",
              args: [userAddress],
            },
          ]
        : []),
    ],
    [vaultAddress, userAddress],
  );

  return useReadContracts({
    contracts: vaultFunctions,
    config,
    query: {
      staleTime: 0,
      enabled: Boolean(vaultAddress),
      refetchOnMount: "always",
      select: (data) =>
        ({
          name: data[0]?.result,
          symbol: data[1]?.result,
          decimals: data[2]?.result,
          asset: data[3]?.result,
          balance: data[4]?.result,
          maxRedeem: data[5]?.result,
        }) as VaultInfo,
    },
  });
};
