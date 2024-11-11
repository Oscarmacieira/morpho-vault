import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from "wagmi/codegen";

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MetaMorpho
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const metaMorphoAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "morpho", internalType: "address", type: "address" },
      { name: "initialTimelock", internalType: "uint256", type: "uint256" },
      { name: "_asset", internalType: "address", type: "address" },
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
    ],
    stateMutability: "nonpayable",
  },
  { type: "error", inputs: [], name: "AboveMaxTimelock" },
  {
    type: "error",
    inputs: [{ name: "target", internalType: "address", type: "address" }],
    name: "AddressEmptyCode",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "AddressInsufficientBalance",
  },
  { type: "error", inputs: [], name: "AllCapsReached" },
  { type: "error", inputs: [], name: "AlreadyPending" },
  { type: "error", inputs: [], name: "AlreadySet" },
  { type: "error", inputs: [], name: "BelowMinTimelock" },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "DuplicateMarket",
  },
  { type: "error", inputs: [], name: "ECDSAInvalidSignature" },
  {
    type: "error",
    inputs: [{ name: "length", internalType: "uint256", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
  },
  {
    type: "error",
    inputs: [{ name: "s", internalType: "bytes32", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
  {
    type: "error",
    inputs: [{ name: "deadline", internalType: "uint256", type: "uint256" }],
    name: "ERC2612ExpiredSignature",
  },
  {
    type: "error",
    inputs: [
      { name: "signer", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC2612InvalidSigner",
  },
  {
    type: "error",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "assets", internalType: "uint256", type: "uint256" },
      { name: "max", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxDeposit",
  },
  {
    type: "error",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "shares", internalType: "uint256", type: "uint256" },
      { name: "max", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxMint",
  },
  {
    type: "error",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "shares", internalType: "uint256", type: "uint256" },
      { name: "max", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxRedeem",
  },
  {
    type: "error",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "assets", internalType: "uint256", type: "uint256" },
      { name: "max", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxWithdraw",
  },
  { type: "error", inputs: [], name: "FailedInnerCall" },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "InconsistentAsset",
  },
  { type: "error", inputs: [], name: "InconsistentReallocation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "currentNonce", internalType: "uint256", type: "uint256" },
    ],
    name: "InvalidAccountNonce",
  },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "InvalidMarketRemovalNonZeroCap",
  },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "InvalidMarketRemovalNonZeroSupply",
  },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "InvalidMarketRemovalTimelockNotElapsed",
  },
  { type: "error", inputs: [], name: "InvalidShortString" },
  { type: "error", inputs: [], name: "MarketNotCreated" },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "MarketNotEnabled",
  },
  { type: "error", inputs: [], name: "MathOverflowedMulDiv" },
  { type: "error", inputs: [], name: "MaxFeeExceeded" },
  { type: "error", inputs: [], name: "MaxQueueLengthExceeded" },
  { type: "error", inputs: [], name: "NoPendingValue" },
  { type: "error", inputs: [], name: "NonZeroCap" },
  { type: "error", inputs: [], name: "NotAllocatorRole" },
  { type: "error", inputs: [], name: "NotCuratorNorGuardianRole" },
  { type: "error", inputs: [], name: "NotCuratorRole" },
  { type: "error", inputs: [], name: "NotEnoughLiquidity" },
  { type: "error", inputs: [], name: "NotGuardianRole" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "PendingCap",
  },
  { type: "error", inputs: [], name: "PendingRemoval" },
  {
    type: "error",
    inputs: [
      { name: "bits", internalType: "uint8", type: "uint8" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "SafeCastOverflowedUintDowncast",
  },
  {
    type: "error",
    inputs: [{ name: "token", internalType: "address", type: "address" }],
    name: "SafeERC20FailedOperation",
  },
  {
    type: "error",
    inputs: [{ name: "str", internalType: "string", type: "string" }],
    name: "StringTooLong",
  },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "SupplyCapExceeded",
  },
  { type: "error", inputs: [], name: "TimelockNotElapsed" },
  {
    type: "error",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "UnauthorizedMarket",
  },
  { type: "error", inputs: [], name: "ZeroAddress" },
  { type: "error", inputs: [], name: "ZeroFeeRecipient" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newTotalAssets",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "feeShares",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "AccrueInterest",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "assets",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "shares",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Deposit",
  },
  { type: "event", anonymous: false, inputs: [], name: "EIP712DomainChanged" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferStarted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
      {
        name: "suppliedAssets",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "suppliedShares",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ReallocateSupply",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
      {
        name: "withdrawnAssets",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "withdrawnShares",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ReallocateWithdraw",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
    ],
    name: "RevokePendingCap",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RevokePendingGuardian",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
    ],
    name: "RevokePendingMarketRemoval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RevokePendingTimelock",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
      { name: "cap", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "SetCap",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newCurator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "SetCurator",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newFee",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "SetFee",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newFeeRecipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "SetFeeRecipient",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "guardian",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "SetGuardian",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "allocator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "isAllocator",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
    ],
    name: "SetIsAllocator",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newSkimRecipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "SetSkimRecipient",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newSupplyQueue",
        internalType: "Id[]",
        type: "bytes32[]",
        indexed: false,
      },
    ],
    name: "SetSupplyQueue",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newTimelock",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "SetTimelock",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newWithdrawQueue",
        internalType: "Id[]",
        type: "bytes32[]",
        indexed: false,
      },
    ],
    name: "SetWithdrawQueue",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "token",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Skim",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
      { name: "cap", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "SubmitCap",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newGuardian",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "SubmitGuardian",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "id", internalType: "Id", type: "bytes32", indexed: true },
    ],
    name: "SubmitMarketRemoval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newTimelock",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "SubmitTimelock",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "updatedTotalAssets",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "UpdateLastTotalAssets",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "receiver",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "assets",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "shares",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Withdraw",
  },
  {
    type: "function",
    inputs: [],
    name: "DECIMALS_OFFSET",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "MORPHO",
    outputs: [{ name: "", internalType: "contract IMorpho", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "marketParams",
        internalType: "struct MarketParams",
        type: "tuple",
        components: [
          { name: "loanToken", internalType: "address", type: "address" },
          { name: "collateralToken", internalType: "address", type: "address" },
          { name: "oracle", internalType: "address", type: "address" },
          { name: "irm", internalType: "address", type: "address" },
          { name: "lltv", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "acceptCap",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "acceptGuardian",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "acceptTimelock",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "asset",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "Id", type: "bytes32" }],
    name: "config",
    outputs: [
      { name: "cap", internalType: "uint184", type: "uint184" },
      { name: "enabled", internalType: "bool", type: "bool" },
      { name: "removableAt", internalType: "uint64", type: "uint64" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "shares", internalType: "uint256", type: "uint256" }],
    name: "convertToAssets",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    name: "convertToShares",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "curator",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "assets", internalType: "uint256", type: "uint256" },
      { name: "receiver", internalType: "address", type: "address" },
    ],
    name: "deposit",
    outputs: [{ name: "shares", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "fee",
    outputs: [{ name: "", internalType: "uint96", type: "uint96" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "feeRecipient",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "guardian",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "isAllocator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "lastTotalAssets",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "maxDeposit",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "maxMint",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "maxRedeem",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "maxWithdraw",
    outputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "shares", internalType: "uint256", type: "uint256" },
      { name: "receiver", internalType: "address", type: "address" },
    ],
    name: "mint",
    outputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "data", internalType: "bytes[]", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ name: "results", internalType: "bytes[]", type: "bytes[]" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "Id", type: "bytes32" }],
    name: "pendingCap",
    outputs: [
      { name: "value", internalType: "uint192", type: "uint192" },
      { name: "validAt", internalType: "uint64", type: "uint64" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "pendingGuardian",
    outputs: [
      { name: "value", internalType: "address", type: "address" },
      { name: "validAt", internalType: "uint64", type: "uint64" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "pendingOwner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "pendingTimelock",
    outputs: [
      { name: "value", internalType: "uint192", type: "uint192" },
      { name: "validAt", internalType: "uint64", type: "uint64" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    name: "previewDeposit",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "shares", internalType: "uint256", type: "uint256" }],
    name: "previewMint",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "shares", internalType: "uint256", type: "uint256" }],
    name: "previewRedeem",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    name: "previewWithdraw",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "allocations",
        internalType: "struct MarketAllocation[]",
        type: "tuple[]",
        components: [
          {
            name: "marketParams",
            internalType: "struct MarketParams",
            type: "tuple",
            components: [
              { name: "loanToken", internalType: "address", type: "address" },
              {
                name: "collateralToken",
                internalType: "address",
                type: "address",
              },
              { name: "oracle", internalType: "address", type: "address" },
              { name: "irm", internalType: "address", type: "address" },
              { name: "lltv", internalType: "uint256", type: "uint256" },
            ],
          },
          { name: "assets", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "reallocate",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "shares", internalType: "uint256", type: "uint256" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "redeem",
    outputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "revokePendingCap",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "revokePendingGuardian",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "id", internalType: "Id", type: "bytes32" }],
    name: "revokePendingMarketRemoval",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "revokePendingTimelock",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newCurator", internalType: "address", type: "address" }],
    name: "setCurator",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newFee", internalType: "uint256", type: "uint256" }],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "newFeeRecipient", internalType: "address", type: "address" },
    ],
    name: "setFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "newAllocator", internalType: "address", type: "address" },
      { name: "newIsAllocator", internalType: "bool", type: "bool" },
    ],
    name: "setIsAllocator",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "newSkimRecipient", internalType: "address", type: "address" },
    ],
    name: "setSkimRecipient",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "newSupplyQueue", internalType: "Id[]", type: "bytes32[]" },
    ],
    name: "setSupplyQueue",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "token", internalType: "address", type: "address" }],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "skimRecipient",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "marketParams",
        internalType: "struct MarketParams",
        type: "tuple",
        components: [
          { name: "loanToken", internalType: "address", type: "address" },
          { name: "collateralToken", internalType: "address", type: "address" },
          { name: "oracle", internalType: "address", type: "address" },
          { name: "irm", internalType: "address", type: "address" },
          { name: "lltv", internalType: "uint256", type: "uint256" },
        ],
      },
      { name: "newSupplyCap", internalType: "uint256", type: "uint256" },
    ],
    name: "submitCap",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newGuardian", internalType: "address", type: "address" }],
    name: "submitGuardian",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "marketParams",
        internalType: "struct MarketParams",
        type: "tuple",
        components: [
          { name: "loanToken", internalType: "address", type: "address" },
          { name: "collateralToken", internalType: "address", type: "address" },
          { name: "oracle", internalType: "address", type: "address" },
          { name: "irm", internalType: "address", type: "address" },
          { name: "lltv", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "submitMarketRemoval",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newTimelock", internalType: "uint256", type: "uint256" }],
    name: "submitTimelock",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "supplyQueue",
    outputs: [{ name: "", internalType: "Id", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "supplyQueueLength",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "timelock",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalAssets",
    outputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "indexes", internalType: "uint256[]", type: "uint256[]" }],
    name: "updateWithdrawQueue",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "assets", internalType: "uint256", type: "uint256" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "withdraw",
    outputs: [{ name: "shares", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "withdrawQueue",
    outputs: [{ name: "", internalType: "Id", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "withdrawQueueLength",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const metaMorphoAddress = {
  1: "0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB",
  4242: "0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB",
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const metaMorphoConfig = {
  address: metaMorphoAddress,
  abi: metaMorphoAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MetaMorphoFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const metaMorphoFactoryAbi = [
  {
    type: "constructor",
    inputs: [{ name: "morpho", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  { type: "error", inputs: [], name: "ZeroAddress" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metaMorpho",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "initialOwner",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "initialTimelock",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "asset",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "salt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: false,
      },
    ],
    name: "CreateMetaMorpho",
  },
  {
    type: "function",
    inputs: [],
    name: "MORPHO",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "initialOwner", internalType: "address", type: "address" },
      { name: "initialTimelock", internalType: "uint256", type: "uint256" },
      { name: "asset", internalType: "address", type: "address" },
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
    ],
    name: "createMetaMorpho",
    outputs: [
      {
        name: "metaMorpho",
        internalType: "contract IMetaMorpho",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "isMetaMorpho",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const metaMorphoFactoryAddress = {
  1: "0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101",
  4242: "0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101",
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const metaMorphoFactoryConfig = {
  address: metaMorphoFactoryAddress,
  abi: metaMorphoFactoryAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: "event",
    inputs: [
      { name: "owner", type: "address", indexed: true },
      { name: "spender", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "sender", type: "address" },
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ type: "bool" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorpho = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"DECIMALS_OFFSET"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoDecimalsOffset = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "DECIMALS_OFFSET",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "DOMAIN_SEPARATOR",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"MORPHO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoMorpho = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "MORPHO",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoAllowance = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"asset"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoAsset = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "asset",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoBalanceOf = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"config"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoConfig = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "config",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"convertToAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoConvertToAssets = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "convertToAssets",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"convertToShares"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoConvertToShares = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "convertToShares",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"curator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoCurator = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "curator",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoDecimals = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoEip712Domain = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "eip712Domain",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"fee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoFee = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "fee",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"feeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoFeeRecipient = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "feeRecipient",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"guardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoGuardian = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "guardian",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"isAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoIsAllocator = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "isAllocator",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"lastTotalAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoLastTotalAssets = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "lastTotalAssets",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxDeposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoMaxDeposit = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxDeposit",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxMint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoMaxMint = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxMint",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxRedeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoMaxRedeem = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxRedeem",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoMaxWithdraw = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxWithdraw",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoName = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoNonces = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "nonces",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoOwner = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPendingCap = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "pendingCap",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPendingGuardian = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "pendingGuardian",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPendingOwner = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "pendingOwner",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPendingTimelock = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "pendingTimelock",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewDeposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPreviewDeposit = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "previewDeposit",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewMint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPreviewMint = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "previewMint",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewRedeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPreviewRedeem = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "previewRedeem",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoPreviewWithdraw = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "previewWithdraw",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"skimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoSkimRecipient = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "skimRecipient",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"supplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoSupplyQueue = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "supplyQueue",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"supplyQueueLength"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoSupplyQueueLength = /*#__PURE__*/ createReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "supplyQueueLength",
  },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoSymbol = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"timelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoTimelock = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "timelock",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"totalAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoTotalAssets = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "totalAssets",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoTotalSupply = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoWithdrawQueue = /*#__PURE__*/ createReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "withdrawQueue",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdrawQueueLength"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const readMetaMorphoWithdrawQueueLength =
  /*#__PURE__*/ createReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "withdrawQueueLength",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorpho = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoAcceptCap = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "acceptCap",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoAcceptGuardian = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "acceptGuardian",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoAcceptOwnership = /*#__PURE__*/ createWriteContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptOwnership",
  },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoAcceptTimelock = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "acceptTimelock",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoApprove = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoDeposit = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "deposit",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoMint = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoMulticall = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "multicall",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoPermit = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "permit",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"reallocate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoReallocate = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "reallocate",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoRedeem = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "redeem",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoRevokePendingCap =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingCap",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoRevokePendingGuardian =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingGuardian",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoRevokePendingMarketRemoval =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingMarketRemoval",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoRevokePendingTimelock =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingTimelock",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setCurator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSetCurator = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "setCurator",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSetFee = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "setFee",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSetFeeRecipient = /*#__PURE__*/ createWriteContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setFeeRecipient",
  },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setIsAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSetIsAllocator = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "setIsAllocator",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSkimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSetSkimRecipient =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSkimRecipient",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSupplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSetSupplyQueue = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "setSupplyQueue",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"skim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSkim = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "skim",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSubmitCap = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "submitCap",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSubmitGuardian = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "submitGuardian",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSubmitMarketRemoval =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitMarketRemoval",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoSubmitTimelock = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "submitTimelock",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoTransfer = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"updateWithdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoUpdateWithdrawQueue =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "updateWithdrawQueue",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const writeMetaMorphoWithdraw = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "withdraw",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorpho = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoAcceptCap = /*#__PURE__*/ createSimulateContract(
  { abi: metaMorphoAbi, address: metaMorphoAddress, functionName: "acceptCap" },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoAcceptGuardian =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptGuardian",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoAcceptOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoAcceptTimelock =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptTimelock",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoApprove = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoDeposit = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "deposit",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoMint = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoMulticall = /*#__PURE__*/ createSimulateContract(
  { abi: metaMorphoAbi, address: metaMorphoAddress, functionName: "multicall" },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoPermit = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "permit",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"reallocate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoReallocate =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "reallocate",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoRedeem = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "redeem",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoRevokePendingCap =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingCap",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoRevokePendingGuardian =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingGuardian",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoRevokePendingMarketRemoval =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingMarketRemoval",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoRevokePendingTimelock =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingTimelock",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setCurator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSetCurator =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setCurator",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSetFee = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "setFee",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSetFeeRecipient =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setFeeRecipient",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setIsAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSetIsAllocator =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setIsAllocator",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSkimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSetSkimRecipient =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSkimRecipient",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSupplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSetSupplyQueue =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSupplyQueue",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"skim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSkim = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "skim",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSubmitCap = /*#__PURE__*/ createSimulateContract(
  { abi: metaMorphoAbi, address: metaMorphoAddress, functionName: "submitCap" },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSubmitGuardian =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitGuardian",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSubmitMarketRemoval =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitMarketRemoval",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoSubmitTimelock =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitTimelock",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoTransfer = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"updateWithdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoUpdateWithdrawQueue =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "updateWithdrawQueue",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const simulateMetaMorphoWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "withdraw",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"AccrueInterest"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoAccrueInterestEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "AccrueInterest",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoDepositEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Deposit",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "EIP712DomainChanged",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoOwnershipTransferStartedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "OwnershipTransferStarted",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"ReallocateSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoReallocateSupplyEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "ReallocateSupply",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"ReallocateWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoReallocateWithdrawEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "ReallocateWithdraw",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoRevokePendingCapEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingCap",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoRevokePendingGuardianEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingGuardian",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoRevokePendingMarketRemovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingMarketRemoval",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoRevokePendingTimelockEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingTimelock",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetCapEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetCap",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetCurator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetCuratorEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetCurator",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetFeeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetFee",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetFeeRecipientEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetFeeRecipient",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetGuardianEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetGuardian",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetIsAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetIsAllocatorEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetIsAllocator",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetSkimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetSkimRecipientEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetSkimRecipient",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetSupplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetSupplyQueueEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetSupplyQueue",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetTimelockEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetTimelock",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetWithdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSetWithdrawQueueEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetWithdrawQueue",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Skim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSkimEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  eventName: "Skim",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSubmitCapEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitCap",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSubmitGuardianEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitGuardian",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSubmitMarketRemovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitMarketRemoval",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoSubmitTimelockEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitTimelock",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"UpdateLastTotalAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoUpdateLastTotalAssetsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "UpdateLastTotalAssets",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const watchMetaMorphoWithdrawEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Withdraw",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const readMetaMorphoFactory = /*#__PURE__*/ createReadContract({
  abi: metaMorphoFactoryAbi,
  address: metaMorphoFactoryAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"MORPHO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const readMetaMorphoFactoryMorpho = /*#__PURE__*/ createReadContract({
  abi: metaMorphoFactoryAbi,
  address: metaMorphoFactoryAddress,
  functionName: "MORPHO",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"isMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const readMetaMorphoFactoryIsMetaMorpho =
  /*#__PURE__*/ createReadContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "isMetaMorpho",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const writeMetaMorphoFactory = /*#__PURE__*/ createWriteContract({
  abi: metaMorphoFactoryAbi,
  address: metaMorphoFactoryAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"createMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const writeMetaMorphoFactoryCreateMetaMorpho =
  /*#__PURE__*/ createWriteContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "createMetaMorpho",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const simulateMetaMorphoFactory = /*#__PURE__*/ createSimulateContract({
  abi: metaMorphoFactoryAbi,
  address: metaMorphoFactoryAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"createMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const simulateMetaMorphoFactoryCreateMetaMorpho =
  /*#__PURE__*/ createSimulateContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "createMetaMorpho",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const watchMetaMorphoFactoryEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `eventName` set to `"CreateMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const watchMetaMorphoFactoryCreateMetaMorphoEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    eventName: "CreateMetaMorpho",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: "Approval",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: "Transfer",
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorpho = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"DECIMALS_OFFSET"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoDecimalsOffset =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "DECIMALS_OFFSET",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "DOMAIN_SEPARATOR",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"MORPHO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoMorpho = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "MORPHO",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoAllowance = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"asset"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoAsset = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "asset",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"config"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoConfig = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "config",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"convertToAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoConvertToAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "convertToAssets",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"convertToShares"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoConvertToShares =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "convertToShares",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"curator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoCurator = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "curator",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoDecimals = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "eip712Domain",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"fee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoFee = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "fee",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"feeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoFeeRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "feeRecipient",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"guardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoGuardian = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "guardian",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"isAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoIsAllocator = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "isAllocator",
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"lastTotalAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoLastTotalAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "lastTotalAssets",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxDeposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoMaxDeposit = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxDeposit",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxMint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoMaxMint = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxMint",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxRedeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoMaxRedeem = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "maxRedeem",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"maxWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoMaxWithdraw = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "maxWithdraw",
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoName = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoNonces = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "nonces",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoOwner = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPendingCap = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "pendingCap",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPendingGuardian =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "pendingGuardian",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "pendingOwner",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"pendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPendingTimelock =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "pendingTimelock",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewDeposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPreviewDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "previewDeposit",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewMint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPreviewMint = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "previewMint",
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewRedeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPreviewRedeem =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "previewRedeem",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"previewWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoPreviewWithdraw =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "previewWithdraw",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"skimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoSkimRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "skimRecipient",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"supplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoSupplyQueue = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "supplyQueue",
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"supplyQueueLength"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoSupplyQueueLength =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "supplyQueueLength",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoSymbol = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"timelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoTimelock = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "timelock",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"totalAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoTotalAssets = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "totalAssets",
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "totalSupply",
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoWithdrawQueue =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "withdrawQueue",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdrawQueueLength"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useReadMetaMorphoWithdrawQueueLength =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "withdrawQueueLength",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorpho = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoAcceptCap = /*#__PURE__*/ createUseWriteContract(
  { abi: metaMorphoAbi, address: metaMorphoAddress, functionName: "acceptCap" },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoAcceptGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptGuardian",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoAcceptTimelock =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptTimelock",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoApprove = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "deposit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoMint = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoMulticall = /*#__PURE__*/ createUseWriteContract(
  { abi: metaMorphoAbi, address: metaMorphoAddress, functionName: "multicall" },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoPermit = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "permit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"reallocate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoReallocate =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "reallocate",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "redeem",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoRevokePendingCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingCap",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoRevokePendingGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingGuardian",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoRevokePendingMarketRemoval =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingMarketRemoval",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoRevokePendingTimelock =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingTimelock",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setCurator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSetCurator =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setCurator",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSetFee = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "setFee",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSetFeeRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setFeeRecipient",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setIsAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSetIsAllocator =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setIsAllocator",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSkimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSetSkimRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSkimRecipient",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSupplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSetSupplyQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSupplyQueue",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"skim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSkim = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "skim",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSubmitCap = /*#__PURE__*/ createUseWriteContract(
  { abi: metaMorphoAbi, address: metaMorphoAddress, functionName: "submitCap" },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSubmitGuardian =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitGuardian",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSubmitMarketRemoval =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitMarketRemoval",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoSubmitTimelock =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitTimelock",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"updateWithdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoUpdateWithdrawQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "updateWithdrawQueue",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWriteMetaMorphoWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
  functionName: "withdraw",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorpho = /*#__PURE__*/ createUseSimulateContract({
  abi: metaMorphoAbi,
  address: metaMorphoAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoAcceptCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptCap",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoAcceptGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptGuardian",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"acceptTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoAcceptTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "acceptTimelock",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "deposit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "mint",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"multicall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoMulticall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "multicall",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "permit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"reallocate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoReallocate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "reallocate",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "redeem",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoRevokePendingCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingCap",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoRevokePendingGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingGuardian",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoRevokePendingMarketRemoval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingMarketRemoval",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"revokePendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoRevokePendingTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "revokePendingTimelock",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setCurator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSetCurator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setCurator",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSetFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setFee",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSetFeeRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setFeeRecipient",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setIsAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSetIsAllocator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setIsAllocator",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSkimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSetSkimRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSkimRecipient",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"setSupplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSetSupplyQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "setSupplyQueue",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"skim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSkim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "skim",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSubmitCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitCap",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSubmitGuardian =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitGuardian",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSubmitMarketRemoval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitMarketRemoval",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"submitTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoSubmitTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "submitTimelock",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"updateWithdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoUpdateWithdrawQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "updateWithdrawQueue",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useSimulateMetaMorphoWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    functionName: "withdraw",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"AccrueInterest"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoAccrueInterestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "AccrueInterest",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Deposit",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "EIP712DomainChanged",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "OwnershipTransferStarted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"ReallocateSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoReallocateSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "ReallocateSupply",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"ReallocateWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoReallocateWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "ReallocateWithdraw",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoRevokePendingCapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingCap",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoRevokePendingGuardianEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingGuardian",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoRevokePendingMarketRemovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingMarketRemoval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"RevokePendingTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoRevokePendingTimelockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "RevokePendingTimelock",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetCapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetCap",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetCurator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetCuratorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetCurator",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetFeeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetFee",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetFeeRecipientEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetFeeRecipient",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetGuardianEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetGuardian",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetIsAllocator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetIsAllocatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetIsAllocator",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetSkimRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetSkimRecipientEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetSkimRecipient",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetSupplyQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetSupplyQueueEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetSupplyQueue",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetTimelockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetTimelock",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SetWithdrawQueue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSetWithdrawQueueEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SetWithdrawQueue",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Skim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSkimEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Skim",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSubmitCapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitCap",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitGuardian"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSubmitGuardianEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitGuardian",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitMarketRemoval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSubmitMarketRemovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitMarketRemoval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"SubmitTimelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoSubmitTimelockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "SubmitTimelock",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"UpdateLastTotalAssets"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoUpdateLastTotalAssetsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "UpdateLastTotalAssets",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoAbi}__ and `eventName` set to `"Withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)
 */
export const useWatchMetaMorphoWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoAbi,
    address: metaMorphoAddress,
    eventName: "Withdraw",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useReadMetaMorphoFactory = /*#__PURE__*/ createUseReadContract({
  abi: metaMorphoFactoryAbi,
  address: metaMorphoFactoryAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"MORPHO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useReadMetaMorphoFactoryMorpho =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "MORPHO",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"isMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useReadMetaMorphoFactoryIsMetaMorpho =
  /*#__PURE__*/ createUseReadContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "isMetaMorpho",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useWriteMetaMorphoFactory = /*#__PURE__*/ createUseWriteContract({
  abi: metaMorphoFactoryAbi,
  address: metaMorphoFactoryAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"createMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useWriteMetaMorphoFactoryCreateMetaMorpho =
  /*#__PURE__*/ createUseWriteContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "createMetaMorpho",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useSimulateMetaMorphoFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `functionName` set to `"createMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useSimulateMetaMorphoFactoryCreateMetaMorpho =
  /*#__PURE__*/ createUseSimulateContract({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    functionName: "createMetaMorpho",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoFactoryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useWatchMetaMorphoFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link metaMorphoFactoryAbi}__ and `eventName` set to `"CreateMetaMorpho"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 * - [__View Contract on Nexi Nexi Scan__](https://www.nexiscan.com/address/0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101)
 */
export const useWatchMetaMorphoFactoryCreateMetaMorphoEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: metaMorphoFactoryAbi,
    address: metaMorphoFactoryAddress,
    eventName: "CreateMetaMorpho",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: "transfer" },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Transfer",
  });
