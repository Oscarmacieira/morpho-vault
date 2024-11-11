"use client";

import { Button } from "@/components/ui/atoms/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/atoms/Card";
import { LoadingSpinner } from "@/components/ui/atoms/LoadingSpinner";
import { DataStack } from "@/components/ui/molecules/DataStack";
import { displayTokenBalance } from "@/lib/format/displayTokenBalance";
import { useRedeemMutation } from "../hooks/mutations/useReedemMutation";
import { useVault } from "../providers/VaultProvider";

export const VaultCard = () => {
  const { vault, vaultQuery, vaultAddressForm, canWithdrawMax } = useVault();

  const { isLoading, isError } = vaultQuery;
  const { form, addressValue } = vaultAddressForm;
  const { info, asset, conversion } = vault;

  const { mutateAsync: redeem, isPending } = useRedeemMutation(addressValue);

  const { watch } = form;

  const address = watch("address");

  const showCard =
    form.formState.isValid && address && !form.formState.isValidating;

  if (!showCard) return null;

  if (isLoading && !isPending && !isError) {
    return (
      <div className="flex h-[300px] items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Card size={"large"}>
      <CardContent className="flex flex-col gap-[25px]">
        <CardTitle>{info?.name}</CardTitle>
        <div className="flex flex-col gap-[10px]">
          <DataStack
            title="User Shares"
            amount={info?.balance ?? BigInt(0)}
            decimals={info?.decimals}
            symbol={info?.symbol}
          />
          <DataStack
            title="User Assets"
            amount={conversion?.assets ?? BigInt(0)}
            decimals={asset?.decimals}
            symbol={asset?.symbol}
          />
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button
          className="w-full"
          disabled={!canWithdrawMax || isPending}
          onClick={() =>
            redeem({
              shares: info?.balance,
              formattedShares: displayTokenBalance(conversion?.maxWithdraw, {
                decimals: asset?.decimals,
                symbol: asset?.symbol,
              }),
            })
          }
        >
          {isPending
            ? "Sign your transaction..."
            : `Withdraw 
          ${displayTokenBalance(conversion?.maxWithdraw, {
            decimals: asset?.decimals,
            symbol: asset?.symbol,
          })}`}
        </Button>
      </CardFooter>
    </Card>
  );
};
