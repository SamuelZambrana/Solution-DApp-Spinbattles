'use client'

import { useWallet } from '@/lib/hooks/useWallet'
import { useRewards } from '@/lib/hooks/useRewards'
import { ClaimButton } from './ClaimButton'
import { TransactionStatus } from './TransactionStatus'

export function RewardPanel() {
  const { address } = useWallet()
  const {
    balance,
    rewards,
    onChainBalance,
    txStatus,
    txHash,
    errorMessage,
    isLoading,
    claim,
    refresh,
  } = useRewards(address)

  const pendingReward = rewards?.pendingRewards[0]
  const loading = isLoading && !balance // only show full loading state on first load

  return (
    <div className="space-y-4">
      {/* Off-chain balance */}
      <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Off-chain Balance</p>
        <p className="text-lg font-semibold text-white">
          {loading ? '—' : balance ? `${balance.offChainBalance} ${balance.token}` : '—'}
        </p>
      </div>

      {/* On-chain token balance */}
      <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">On-chain Balance</p>
        <p className="text-lg font-semibold text-white">
          {loading ? '—' : onChainBalance ? `${onChainBalance} SPIN` : '—'}
        </p>
      </div>

      {/* Pending reward */}
      <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Pending Reward</p>
        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : pendingReward ? (
          <div>
            <p className="text-base font-semibold text-white">
              {pendingReward.amount} {pendingReward.token}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">ID: {pendingReward.id}</p>
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            {rewards?.claimHistory.length ? 'All rewards claimed.' : 'No pending rewards.'}
          </p>
        )}
      </div>

      {/* Backend reward status */}
      <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Backend Reward Status</p>
        <p className="text-sm text-gray-300">
          Pending: {rewards?.pendingRewards.length ?? '—'}&nbsp;&nbsp;
          Claimed: {rewards?.claimHistory.length ?? '—'}
        </p>
      </div>

      {/* Claim button */}
      <ClaimButton
        reward={pendingReward}
        txStatus={txStatus}
        onClaim={claim}
      />

      {/* Transaction status */}
      <TransactionStatus
        status={txStatus}
        txHash={txHash}
        errorMessage={errorMessage}
      />

      {/* Refresh */}
      <button
        onClick={refresh}
        disabled={isLoading}
        className="text-xs text-gray-600 hover:text-gray-400 transition-colors disabled:opacity-40"
      >
        {isLoading ? 'Refreshing...' : 'Refresh data'}
      </button>
    </div>
  )
}
