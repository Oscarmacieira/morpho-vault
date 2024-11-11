import { defineConfig, loadEnv } from "@wagmi/cli";
import { actions, etherscan, react } from "@wagmi/cli/plugins";
import { Address, erc20Abi } from "viem";
import { mainnet } from "viem/chains";
import { vMainnet } from "../tenderly-config";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });

  const contracts = {
    MetaMorphoFactory: env.NEXT_PUBLIC_META_MORPHO_FACTORY_ADDRESS as Address,
    MetaMorpho: env.NEXT_PUBLIC_META_MORPHO_ADDRESS as Address,
  };

  return {
    out: "src/lib/wagmi-cli/generated.ts",
    contracts: [
      {
        name: "erc20",
        abi: erc20Abi,
      },
    ],
    plugins: [
      etherscan({
        apiKey: env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
        chainId: mainnet.id,
        contracts: [
          {
            name: "MetaMorphoFactory",
            address: {
              [mainnet.id]: contracts.MetaMorphoFactory,
              [vMainnet.id]: contracts.MetaMorphoFactory,
            },
          },
          {
            name: "MetaMorpho",
            address: {
              [mainnet.id]: contracts.MetaMorpho,
              [vMainnet.id]: contracts.MetaMorpho,
            },
          },
        ],
      }),
      actions(),
      react(),
    ],
  };
});
