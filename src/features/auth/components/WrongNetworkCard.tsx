"use client";

import { AlertIcon } from "@/components/icons/AlertIcon";
import { InfoCard } from "@/components/ui/molecules/InfoCard";
import { useChainModal } from "@rainbow-me/rainbowkit";

export const WrongNetworkCard = () => {
  const { openChainModal } = useChainModal();

  return (
    <InfoCard
      icon={AlertIcon}
      title="Wrong Network"
      description="You are not on Mainnet. Please click the button below to switch."
      buttonText="Switch"
      onButtonClick={openChainModal}
    />
  );
};
