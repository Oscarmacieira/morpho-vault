# Morpho Vault Interface

A modern, type-safe, and user-friendly interface for interacting with MetaMorpho vaults on Ethereum. Built with Next.js 14, TypeScript, Tailwind CSS, and wagmi v2.

# Table of content

- [Features](#🌟-features)
- [Configuration](#🛠-configuration)
- [Continuous Integration](#🔧-continuous-integration)
- [Project Structure](#📁-project-structure)
- [Available Scripts](#📦-available-scripts)
- [Contributing](#🤝-contributing)
- [License](#📄-license)
- [Acknowledgments](#🙏-acknowledgments)

## 🌟 Features

- **Type-Safe Contract Interactions**: Fully typed smart contract interactions using wagmi v2 codegen
- **Modern Stack**: Built on Next.js 14 with App Router and Server Components
- **Responsive Design**: Mobile-first UI built with Tailwind CSS and shadcn/ui
- **Wallet Integration**: Seamless wallet connection with RainbowKit
- **State Management**: React Query for server state and React Context for local state
- **Developer Experience**:
  - TypeScript for type safety
  - ESLint and Prettier for code quality
  - Husky for git hooks
  - Conventional commits
  - GitHub Actions for CI/CD

## 🚀 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/oscarmacieira/morpho-vault.git
cd morpho-vault
```

2. Install dependencies:

```bash
yarn install
```

This will install all the dependencies and run the codegen script for wagmi.

3. Create a `.env` file and add your environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```sh
src/
├── components/
| ├── icons/ # Custom icons
| ├── ui/ # Custom UI components
| | ├── atoms/ # Atoms
| | ├── molecules/ # Molecules
├── features/ # Feature-based modules
│ ├── auth/ # Authentication & wallet connection
│ ├── transactions/ # Transaction management
│ ├── vaults/ # Vault interactions
│ └── layouts/ # Layout components
├── lib/ # Utility functions & configurations
| ├── format/ # Formatting functions
| ├── wagmi-cli/ # wagmi codegen
| ├── cn.ts # Tailwind CSS classnames
| ├── envs.ts # Environment variables
| ├── logger.ts # Logger
| ├── rainbows-config.ts # RainbowKit config
| ├── site-config.ts # Site configuration
| ├── tenderly-config.ts # Tenderly config
| ├── zod-schemas.ts # Zod reusable schemas
└── providers/ # App level providers
```

Each feature is a module that contains the components, hooks, providers, and types for a specific feature of the app. They follow the feature folder pattern as follows:

```sh
features/
├── auth/
| ├── lib/
| ├── components/
| ├── hooks/
| ├── providers/
| └── types.ts
```

## 🔧 Core Features Implementation

### Theme Management

The app uses the `next-themes` library to manage the theme state and persist the theme preference in `localStorage`.
The available themes are: `light`, `dark`, and `system`.

### Authentication Flow

The app implements a robust authentication system using wagmi and RainbowKit:

[AuthProvider.tsx Lines 1-66](https://github.com/oscarmacieira/morpho-vault/blob/main/src/features/auth/providers/AuthProvider.tsx#L1-L66)

### Transaction Management

Handles blockchain transactions with user feedback and state management:

[TransactionManagerProvider.tsx Lines 1-100](https://github.com/oscarmacieira/morpho-vault/blob/main/src/features/transactions/providers/TransactionManagerProvider.tsx#L1-L100)

### Vault Interactions

Type-safe interactions with MetaMorpho vaults:

[useReedemMutation.ts Lines 1-85](https://github.com/oscarmacieira/morpho-vault/blob/main/src/features/vaults/hooks/mutations/useReedemMutation.ts#L1-L85)

## 🛠 Configuration

### Smart Contract Integration

The project uses wagmi CLI for type-safe contract interactions. Contract ABIs and hooks are auto-generated:

[Generated Lines 1-50](https://github.com/oscarmacieira/morpho-vault/blob/main/src/lib/wagmi-cli/generated.ts#L1-L50)

### Site Configuration

Global configuration is managed through a central config file:

[site-config.ts Lines 1-10](https://github.com/oscarmacieira/morpho-vault/blob/main/src/lib/site-config.ts#L1-L7)

## Continuous Integration

The project uses GitHub Actions to run the linting, type checking, and formatting checks on every commit.
To release on the production environment, create a new Tag release on the `main` branch.

## 📦 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production bundle
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn clean` - Run all code quality checks
- `yarn codegen` - Generate contract types

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Morpho Labs](https://app.morpho.org) for the smart contracts
- [wagmi](https://wagmi.sh) for the Ethereum development toolkit
- [RainbowKit](https://www.rainbowkit.com/) for the wallet connection UI
- [shadcn/ui](https://ui.shadcn.com/) for the component library
