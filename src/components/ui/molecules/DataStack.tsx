import { displayTokenBalance } from "@/lib/format/displayTokenBalance";
import { ComponentProps } from "react";
import { Skeleton } from "../atoms/Skeleton";
import { Typography } from "../atoms/Typography";

type DataStackProps = ComponentProps<"div"> & {
  title: string;
  symbol?: string;
  amount?: bigint;
  decimals?: number;
};

export const DataStack = ({
  title,
  symbol,
  amount,
  decimals,
  ...props
}: DataStackProps) => {
  return (
    <div className="flex flex-col gap-[4px]" {...props}>
      <Typography variant="buttonSmall" className="!text-text-tertiary">
        {title}
      </Typography>
      {!symbol ? (
        <Skeleton className="h-[24px] w-full" /> // Assuming 24px height for body text
      ) : (
        <Typography variant="body" className="!text-text-body">
          {displayTokenBalance(amount, {
            decimals,
            symbol,
          })}
        </Typography>
      )}
    </div>
  );
};
