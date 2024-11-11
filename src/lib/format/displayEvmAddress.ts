import { Address } from "viem";

export const displayEvmAddress = (
  address?: Address | string,
  {
    startLength = 6,
    endLength = 4,
  }: {
    startLength?: number;
    endLength?: number;
  } = {},
): string => {
  if (!address) return "";
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};
