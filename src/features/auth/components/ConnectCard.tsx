"use client";

import { MorphoIcon } from "@/components/icons/MorphoIcon";
import { InfoCard } from "@/components/ui/molecules/InfoCard";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export const ConnectCard = () => {
  const { openConnectModal } = useConnectModal();
  const { isConnecting, isReconnecting } = useAccount();

  const isDisabled = isConnecting || isReconnecting;

  return (
    <InfoCard
      icon={MorphoIcon}
      title="Welcome to Morpho"
      description="To get started, please connect your wallet below"
      buttonText={isDisabled ? "Loading..." : "Connect Wallet"}
      buttonDisabled={isDisabled}
      onButtonClick={openConnectModal}
    />
  );
};
