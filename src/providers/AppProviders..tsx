"use client";

import { AuthProvider } from "@/features/auth/providers/AuthProvider";
import { ThemeProvider } from "@/features/theme/providers/ThemeProvider";
import { TransactionManagerProvider } from "@/features/transactions/providers/TransactionManagerProvider";
import { VaultProvider } from "@/features/vaults/providers/VaultProvider";
import { initialChain, rainbowConfig } from "@/lib/rainbow-config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const client = new QueryClient();

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={rainbowConfig}>
      <ThemeProvider>
        <QueryClientProvider client={client}>
          <RainbowKitProvider initialChain={initialChain}>
            <AuthProvider>
              <TransactionManagerProvider>
                <VaultProvider>{children}</VaultProvider>
              </TransactionManagerProvider>
            </AuthProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </WagmiProvider>
  );
};
