"use client";

import { AlertIcon } from "@/components/icons/AlertIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { Button } from "@/components/ui/atoms/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/atoms/Card";
import { Typography } from "@/components/ui/atoms/Typography";
import { cn } from "@/lib/cn";
import { getTxExplorerUrl } from "@/lib/format/block-explorer";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useAccount } from "wagmi";
import { TransactionMessage, TransactionStatus } from "../transactions.types";

export type TxCardProps = TransactionMessage & {
  className?: string;
};

const StateIcon: Record<
  TransactionStatus,
  React.ComponentType<React.SVGProps<SVGSVGElement>> | null
> = {
  pending: null,
  success: CheckIcon,
  failed: AlertIcon,
};

export const TxCard = ({
  hash,
  state,
  title,
  description,
  className,
  button,
}: TxCardProps) => {
  const Icon = StateIcon[state];
  const isPending = state === "pending";
  const { chain } = useAccount();

  return (
    <Card
      size="large"
      className={cn("w-[350px] h-[270px] justify-center", className)}
    >
      <CardContent className="h-full justify-between gap-[8px] text-center">
        <AnimatePresence mode="wait">
          {!isPending && Icon && (
            <motion.div
              key={state}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className={cn("size-[40px] mx-auto")} />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex flex-col gap-[4px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={state}
          transition={{ duration: 0.2 }}
        >
          {title && (
            <Typography
              as="h1"
              variant="body"
              className={cn(
                state === "success" && "text-text-interactive-valid",
                state === "failed" && "text-text-interactive-error",
                state === "pending" && "text-text-body",
              )}
            >
              {title}
            </Typography>
          )}

          <Typography
            as="p"
            variant="buttonSmall"
            className="!text-text-tertiary"
          >
            {isPending ? (
              <span>
                View on{" "}
                <Link
                  href={getTxExplorerUrl(hash, chain)}
                  className="underline underline-offset-2"
                >
                  Etherscan {"->"}
                </Link>
              </span>
            ) : (
              description
            )}
          </Typography>
        </motion.div>
      </CardContent>
      <CardFooter className="w-full">
        {button && (
          <Button
            onClick={button.onClick}
            disabled={button.disabled}
            variant={"default"}
            className="w-full"
          >
            {button.text}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
