import { useMemo } from "react";
import { Address, erc20Abi } from "viem";
import { useReadContracts } from "wagmi";
import { VaultAsset } from "../../vaults.types";

/**
 * @param {Address} assetAddress - The address of the asset.
 * @returns {Object} - Returns an object with the following properties:
 *   - `data` - An object with the following properties:
 *     - `symbol` - The symbol of the asset.
 *     - `decimals` - The decimals of the asset.
 *     - `address` - The address of the asset.
 */
export const useVaultAssetQuery = (assetAddress?: Address) => {
  const assetFunctions = useMemo(
    () => [
      { address: assetAddress, abi: erc20Abi, functionName: "symbol" },
      { address: assetAddress, abi: erc20Abi, functionName: "decimals" },
    ],
    [assetAddress],
  );

  return useReadContracts({
    contracts: assetFunctions,
    query: {
      enabled: Boolean(assetAddress),
      staleTime: 0,
      refetchOnMount: "always",
      select: (data) =>
        ({
          symbol: data[0]?.result,
          decimals: data[1]?.result,
          address: assetAddress,
        }) as VaultAsset,
    },
  });
};
