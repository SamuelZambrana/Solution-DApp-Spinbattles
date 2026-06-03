'use client'

import type { TxStatus, Reward } from '@/types'

interface Props {
  reward: Reward | undefined
  txStatus: TxStatus
  onClaim: (reward: Reward) => void
}

export function ClaimButton({ reward, txStatus, onClaim }: Props) {
  const isPending = txStatus === 'pending'
  const canClaim = reward?.status === 'pending' && !isPending

  return (
    <button
      onClick={() => reward && onClaim(reward)}
      disabled={!canClaim}
      className={`
        w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors
        ${canClaim
          ? 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer'
          : 'bg-gray-800 text-gray-500 cursor-not-allowed'
        }
      `}
    >
      {isPending
        ? 'Claiming...'
        : reward?.status === 'claimed'
        ? 'Already Claimed'
        : 'Claim Reward'}
    </button>
  )
}
