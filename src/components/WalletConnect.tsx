'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useWallet } from '@/lib/hooks/useWallet'

export function WalletConnect() {
  const { address, isConnected } = useWallet()

  return (
    <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Wallet</p>
          {isConnected && address ? (
            <p className="text-sm font-mono text-gray-200">
              {address.slice(0, 6)}...{address.slice(-4)}
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
