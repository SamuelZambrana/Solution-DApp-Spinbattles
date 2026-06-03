'use client'

import type { TxStatus } from '@/types'

interface Props {
  status: TxStatus
  txHash: string | null
  errorMessage: string | null
}

const statusConfig: Record<TxStatus, { label: string; color: string }> = {
  idle: { label: 'No transaction', color: 'text-gray-500' },
  pending: { label: 'Transaction pending...', color: 'text-yellow-400' },
  confirmed: { label: 'Transaction confirmed', color: 'text-green-400' },
  failed: { label: 'Transaction failed', color: 'text-red-400' },
}

export function TransactionStatus({ status, txHash, errorMessage }: Props) {
  const { label, color } = statusConfig[status]

  return (
    <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Transaction Status</p>
      <p className={`text-sm font-medium ${color}`}>{label}</p>
      {txHash && (
        <p className="text-xs text-gray-600 font-mono mt-1 truncate">
          {txHash.slice(0, 18)}...{txHash.slice(-6)}
        </p>
      )}
      {errorMessage && (
        <p className="text-xs text-red-400 mt-2">{errorMessage}</p>
      )}
    </div>
  )
}
