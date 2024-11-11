import { Address } from "viem";

export type VaultInfo = {
  name?: string;
  symbol?: string;
  decimals?: number;
  asset?: Address;
  balance?: bigint;
  maxRedeem?: bigint;
};

export type VaultConversion = {
  assets?: bigint;
  maxWithdraw?: bigint;
};

export type VaultAsset = {
  symbol?: string;
  decimals?: number;
  address?: Address;
};
