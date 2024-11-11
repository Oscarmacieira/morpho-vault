"use client";

import { ConnectCard } from "@/features/auth/components/ConnectCard";
import { WrongNetworkCard } from "@/features/auth/components/WrongNetworkCard";
import { AuthState, useAuth } from "@/features/auth/providers/AuthProvider";
import { Header } from "@/features/layouts/components/Header";
import { PageContent, PageLayout } from "@/features/layouts/components/Layouts";
import { TxCard } from "@/features/transactions/components/TxCard";
import { useTransactionManager } from "@/features/transactions/providers/TransactionManagerProvider";
import { SearchVaultFormCard } from "@/features/vaults/components/SearchVaultFormCard";
import { VaultCard } from "@/features/vaults/components/VaultCard";

const Home = () => {
  const { transaction } = useTransactionManager();

  if (transaction) {
    return <TxCard {...transaction} />;
  }

  return (
    <div className="flex flex-col gap-[24px]">
      <SearchVaultFormCard />
      <VaultCard />
    </div>
  );
};

const VIEWS: Record<AuthState, React.ComponentType> = {
  connecting: ConnectCard,
  disconnected: ConnectCard,
  wrongNetwork: WrongNetworkCard,
  connected: Home,
};

export default function RoutePage() {
  const { authState } = useAuth();

  const Component = VIEWS[authState];

  return (
    <PageLayout>
      <Header />
      <PageContent>
        <Component />
      </PageContent>
    </PageLayout>
  );
}
