import { ReactNode } from "react";
import { Hash } from "viem";

export type TransactionStatus = "pending" | "success" | "failed";

export type TransactionMessage = {
  hash: Hash;
  state: TransactionStatus;
  title?: ReactNode;
  description?: ReactNode;
  button?: {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
  };
};
