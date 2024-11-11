import { formatUnits } from "viem";

type DisplayTokenBalanceOptions = {
  decimals?: number;
  symbol?: string;
  decimalsToDisplay?: number;
};

type DisplayTokenBalance = (
  amount?: bigint,
  options?: DisplayTokenBalanceOptions,
) => string;

export const displayTokenBalance: DisplayTokenBalance = (
  amount?: bigint,
  { decimals = 18, symbol, decimalsToDisplay = 2 } = {},
) => {
  const value = Number(formatUnits(amount ?? BigInt(0), decimals));
  const suffix = symbol ? `$${symbol}` : "";
  return `${value.toFixed(decimalsToDisplay)} ${suffix}`;
};
