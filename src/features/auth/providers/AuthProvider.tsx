"use client";

import { useIsWrongNetwork } from "@/features/auth/hooks/useIsWrongNetwork";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useAccount } from "wagmi";

export enum AuthState {
  CONNECTING = "connecting",
  DISCONNECTED = "disconnected",
  WRONG_NETWORK = "wrongNetwork",
  CONNECTED = "connected",
}

export type UseAuthReturn = {
  authState: AuthState;
  account: ReturnType<typeof useAccount>;
  isWrongNetwork: ReturnType<typeof useIsWrongNetwork>;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<UseAuthReturn | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const account = useAccount();
  const isWrongNetwork = useIsWrongNetwork();

  const isAuthenticating = account.isConnecting || account.isReconnecting;

  const authState = useMemo(() => {
    if (isAuthenticating) return AuthState.CONNECTING;
    if (account.isDisconnected) return AuthState.DISCONNECTED;
    if (isWrongNetwork) return AuthState.WRONG_NETWORK;
    if (account.isConnected) return AuthState.CONNECTED;
    return AuthState.DISCONNECTED;
  }, [
    isAuthenticating,
    account.isDisconnected,
    isWrongNetwork,
    account.isConnected,
  ]);

  const isAuthenticated = authState === AuthState.CONNECTED;

  const auth: UseAuthReturn = {
    authState,
    account,
    isWrongNetwork,
    isAuthenticating,
    isAuthenticated,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
