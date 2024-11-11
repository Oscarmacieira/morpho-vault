import { QueryKey, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { Address } from "viem";
import { VaultAsset, VaultConversion, VaultInfo } from "../../vaults.types";
import { useVaultAssetQuery } from "./useVaultAssetQuery";
import { useVaultConversionQuery } from "./useVaultConversionQuery";
import { useVaultInfoQuery } from "./useVaultInfoQuery";

export type UseVaultQueryReturnType = {
  data?: {
    info?: VaultInfo;
    asset?: VaultAsset;
    conversion?: VaultConversion;
  };
  queryKeys: {
    vault: QueryKey;
    asset: QueryKey;
    conversion: QueryKey;
  };
  isLoading: boolean;
  isError: boolean;
  invalidateVault: () => Promise<void>;
};

/**
 * @param {Address} vaultAddress - The address of the vault.
 * @returns {Object} - Returns an object with the following properties:
 *   - `data` - An object with the following properties:
 *     - `info` - The info of the vault.
 *     - `asset` - The asset of the vault.
 *     - `conversion` - The conversion of the vault.
 *   - `isLoading` - A boolean indicating if the vault is loading.
 *   - `isError` - A boolean indicating if the vault has an error.
 *   - `queryKeys` - An object with the following properties:
 *     - `vault` - The query key for the vault.
 *     - `asset` - The query key for the asset.
 *     - `conversion` - The query key for the conversion.
 *     - invalidateVault: A function to invalidate the vault, asset, and conversion queries.
 */
export const useVaultQuery = (
  vaultAddress?: Address,
): UseVaultQueryReturnType => {
  const queryClient = useQueryClient();

  const {
    data: vaultData,
    isLoading: isLoadingVault,
    isError: isErrorVault,
    queryKey: vaultQueryKey,
  } = useVaultInfoQuery(vaultAddress);

  const {
    data: assetData,
    isLoading: isLoadingAsset,
    isError: isErrorAsset,
    queryKey: assetQueryKey,
  } = useVaultAssetQuery(vaultData?.asset);

  const {
    data: assetsData,
    isLoading: isLoadingConvertToAssets,
    isError: isErrorConvertToAssets,
    queryKey: convertToAssetsQueryKey,
  } = useVaultConversionQuery({
    vaultAddress,
    userShares: vaultData?.balance,
    maxRedeem: vaultData?.maxRedeem,
  });

  const invalidateVault = useCallback(async () => {
    await queryClient.resetQueries({
      queryKey: [vaultQueryKey, assetQueryKey, convertToAssetsQueryKey],
      exact: false,
      type: "all",
    });
  }, [queryClient, vaultQueryKey, assetQueryKey, convertToAssetsQueryKey]);

  return {
    isLoading: isLoadingVault || isLoadingAsset || isLoadingConvertToAssets,
    isError: isErrorVault || isErrorAsset || isErrorConvertToAssets,
    data: {
      info: vaultData,
      asset: assetData,
      conversion: assetsData,
    },
    queryKeys: {
      vault: vaultQueryKey,
      asset: assetQueryKey,
      conversion: convertToAssetsQueryKey,
    },
    invalidateVault,
  };
};
