"use client";

import { AccountLightIcon } from "@/components/icons/AccountLightIcon";
import { Button } from "@/components/ui/atoms/Button";
import { displayEvmAddress } from "@/lib/format/displayEvmAddress";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export const AccountButton = () => {
  const { address } = useAccount();
  const { openAccountModal } = useAccountModal();

  return (
    <Button onClick={openAccountModal} variant={"light"} size={"small"}>
      <AccountLightIcon className="size-[20px]" />
      {displayEvmAddress(address)}
    </Button>
  );
};
