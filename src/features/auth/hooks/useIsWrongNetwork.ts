import { useAccount, useConfig } from "wagmi";

/**
 * @returns {boolean | undefined} - Returns:
 *   - `true` if the user is on an unsupported network.
 *   - `false` if connected to a supported network.
 */
type UseIsWrongNetworkReturnType = boolean | undefined;

export function useIsWrongNetwork(): UseIsWrongNetworkReturnType {
  const config = useConfig();
  const { chain } = useAccount();

  const isSupportedChain = chain
    ? config.chains.some((c) => c.id === chain.id)
    : undefined;

  return chain ? !isSupportedChain : true;
}
