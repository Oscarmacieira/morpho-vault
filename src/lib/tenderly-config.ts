import dotenv from "dotenv";
import { Chain, defineChain } from "viem";
import { siteConfig } from "./site-config";
dotenv.config();

export const VNET_RPC_URL = `https://virtual.mainnet.rpc.tenderly.co/${process.env.NEXT_PUBLIC_TENDERLY_PROJECT_ID}`;
export const VNET_EXPLORER_URL = `https://dashboard.tenderly.co/explorer/vnet/${process.env.NEXT_PUBLIC_TENDERLY_PROJECT_ID}`;

export const vMainnet: Chain = defineChain({
  id: 4242,
  name: siteConfig.title,
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [VNET_RPC_URL],
    },
  },
  blockExplorers: {
    default: {
      name: `${siteConfig.title} Explorer`,
      url: VNET_EXPLORER_URL,
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
});
