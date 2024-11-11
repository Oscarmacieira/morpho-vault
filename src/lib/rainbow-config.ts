import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  okxWallet,
  rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { mainnet, sepolia } from "viem/chains";
import { envs } from "./envs";
import { siteConfig } from "./site-config";
import { vMainnet } from "./tenderly-config";

export const rainbowConfig = getDefaultConfig({
  appName: siteConfig.title,
  projectId: envs.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
  chains: [
    mainnet,
    ...(envs.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED ? [vMainnet] : []),
    ...(envs.NEXT_PUBLIC_ENABLE_TESTNETS ? [sepolia] : []),
  ],
  wallets: [
    {
      groupName: "Popular",
      wallets: [metaMaskWallet, rabbyWallet, okxWallet],
    },
  ],
  ssr: false,
});

export const initialChain = envs.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED
  ? vMainnet
  : rainbowConfig.chains[0];
