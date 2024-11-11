"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";
import { useVaultQuery } from "../hooks/queries/useVaultQuery";
import { useVaultAddressForm } from "../hooks/useVaultAddressForm";
import { VaultAsset, VaultConversion, VaultInfo } from "../vaults.types";

type VaultContextType = {
  vaultQuery: ReturnType<typeof useVaultQuery>;
  vaultAddressForm: ReturnType<typeof useVaultAddressForm>;
  vault: {
    info?: VaultInfo;
    asset?: VaultAsset;
    conversion?: VaultConversion;
  };
  canWithdrawMax: boolean;
};

const VaultContext = createContext<VaultContextType | undefined>(undefined);

export function useVault() {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error("useVault must be used within a VaultProvider");
  }
  return context;
}

type VaultProviderProps = {
  children: ReactNode;
};

export function VaultProvider({ children }: VaultProviderProps) {
  const vaultAddressForm = useVaultAddressForm();

  const vaultQuery = useVaultQuery(vaultAddressForm.addressValue ?? undefined);

  const canWithdrawMax = useMemo(() => {
    const maxWithdraw = vaultQuery.data?.conversion?.maxWithdraw;
    return maxWithdraw ? maxWithdraw > BigInt(0) : false;
  }, [vaultQuery.data?.conversion?.maxWithdraw]);

  const contextValue: VaultContextType = {
    vaultQuery,
    vaultAddressForm,
    vault: {
      info: vaultQuery.data?.info,
      asset: vaultQuery.data?.asset,
      conversion: vaultQuery.data?.conversion,
    },
    canWithdrawMax,
  };

  return (
    <VaultContext.Provider value={contextValue}>
      {children}
    </VaultContext.Provider>
  );
}
