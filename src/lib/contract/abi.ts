// ERC-20 style ABI for the SpinBattles reward token contract
// Candidates interact with this interface — no deployment required (mock adapter handles calls)
export const SPIN_TOKEN_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'claimReward',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'rewardId', type: 'bytes32' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    name: 'RewardClaimed',
    type: 'event',
    inputs: [
      { name: 'account', indexed: true, type: 'address' },
      { name: 'rewardId', indexed: true, type: 'bytes32' },
      { name: 'amount', indexed: false, type: 'uint256' },
    ],
  },
] as const
