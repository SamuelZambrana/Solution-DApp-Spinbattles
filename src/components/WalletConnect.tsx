'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useWallet } from '@/lib/hooks/useWallet'

export function WalletConnect() {
  const { address, isConnected } = useWallet()

  return (
    <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                isConnected ? 'bg-green-500' : 'bg-gray-600'
              }`}
              aria-hidden="true"
            />
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Wallet · {isConnected ? 'Connected' : 'Disconnected'}
            </p>
          </div>
          {isConnected && address ? (
            <p className="text-sm font-mono text-gray-200 break-all">
              {address}
            </p>
          ) : (
            <p className="text-sm text-gray-500">Not connected</p>
          )}
        </div>
        <ConnectButton
          showBalance={false}
          accountStatus="address"
          chainStatus="none"
        />
      </div>
    </div>
  )
}
