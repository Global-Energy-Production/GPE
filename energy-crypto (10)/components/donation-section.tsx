"use client"

import { useState } from "react"
import { Bitcoin, EclipseIcon as Ethereum, DollarSign, Copy, Check } from "lucide-react"

interface DonationSectionProps {
  dict: any
}

export default function DonationSection({ dict }: DonationSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  // Garantir que dict.donations existe, caso contrário, usar valores padrão
  const donations = dict?.donations || {
    title: "Donate to the Project",
    subtitle: "Click on the button below and copy the corresponding key to donate to the project",
    bitcoin: "Bitcoin",
    ethereum: "Ethereum",
    usdt: "USDT",
    copyBtc: "Copy BTC Address",
    copyEth: "Copy ETH Address",
    copyUsdt: "Copy USDT Address",
    copied: "Copied!",
  }

  const cryptoKeys = {
    bitcoin: "19ptAAN6c7govouWzLUDR2bWiE2akLmyGc",
    ethereum: "0x7AADA1cc580c02F5c3aaa1738fc6631b7dE92C8a",
    usdt: "THMiTepksthz93cWLY5kRZ3Bd9o8qx7o42",
  }

  const copyToClipboard = (key: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold title-gradient text-center mb-4 sm:mb-8">{donations.title}</h2>
          <p className="text-center text-gray-300 mb-6 sm:mb-10 px-4 sm:px-0">{donations.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Bitcoin Donation */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Bitcoin className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{donations.bitcoin}</h3>
                <button
                  onClick={() => copyToClipboard("bitcoin", cryptoKeys.bitcoin)}
                  className="mt-3 sm:mt-4 w-full px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors flex items-center justify-center gap-2 touch-target"
                >
                  {copiedKey === "bitcoin" ? (
                    <>
                      <Check size={16} className="text-green-500" />
                      <span>{donations.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="text-sm sm:text-base">{donations.copyBtc}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Ethereum Donation */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Ethereum className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{donations.ethereum}</h3>
                <button
                  onClick={() => copyToClipboard("ethereum", cryptoKeys.ethereum)}
                  className="mt-3 sm:mt-4 w-full px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors flex items-center justify-center gap-2 touch-target"
                >
                  {copiedKey === "ethereum" ? (
                    <>
                      <Check size={16} className="text-green-500" />
                      <span>{donations.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="text-sm sm:text-base">{donations.copyEth}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* USDT Donation - Atualizado para "USDT (TRC-20)" */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-colors sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-xs md:max-w-none">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <DollarSign className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">USDT (TRC-20)</h3>
                <button
                  onClick={() => copyToClipboard("usdt", cryptoKeys.usdt)}
                  className="mt-3 sm:mt-4 w-full px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors flex items-center justify-center gap-2 touch-target"
                >
                  {copiedKey === "usdt" ? (
                    <>
                      <Check size={16} className="text-green-500" />
                      <span>{donations.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="text-sm sm:text-base">{donations.copyUsdt}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

