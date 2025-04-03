import { getDictionary } from "../dictionaries"
import { BarChart2, DollarSign, TrendingUp, Activity } from "lucide-react"
import Logo from "@/components/logo"

export default async function DexScreenerPage() {
  const dict = await getDictionary()
  const dexScreenerUrl = "https://dexscreener.com/"

  // Garantir que dict.pages.dexscreener existe
  const pageDict = dict.pages?.dexscreener || {
    title: "DEX Screener",
    description: "Real-time cryptocurrency market data and charts",
    marketData: "Market Data",
    viewChart: "View on DEX Screener",
  }

  // Simulated market data
  const marketData = {
    price: "$0.0458",
    marketCap: "$4,580,000",
    volume24h: "$1,245,678",
    liquidity: "$2,345,678",
    priceChange24h: "+5.67%",
    priceChange7d: "+12.34%",
    holders: "3,456",
    transactions24h: "1,234",
  }

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Logo size="medium" className="mb-6" />
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">{pageDict.title}</h1>
            <p className="text-xl text-gray-300">{pageDict.description}</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-yellow-500/20">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <BarChart2 size={48} className="text-yellow-500" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">{pageDict.marketData}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="text-yellow-500" size={20} />
                  <h3 className="text-lg font-medium text-gray-300">Price</h3>
                </div>
                <p className="text-2xl font-bold text-white">{marketData.price}</p>
                <p className="text-sm text-green-500 mt-1">{marketData.priceChange24h}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="text-yellow-500" size={20} />
                  <h3 className="text-lg font-medium text-gray-300">Market Cap</h3>
                </div>
                <p className="text-2xl font-bold text-white">{marketData.marketCap}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-yellow-500" size={20} />
                  <h3 className="text-lg font-medium text-gray-300">Volume (24h)</h3>
                </div>
                <p className="text-2xl font-bold text-white">{marketData.volume24h}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="text-yellow-500" size={20} />
                  <h3 className="text-lg font-medium text-gray-300">Liquidity</h3>
                </div>
                <p className="text-2xl font-bold text-white">{marketData.liquidity}</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 mb-8">
              <h3 className="text-lg font-medium text-gray-300 mb-4">Price Chart (7 Days)</h3>
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">{dict.common?.comingSoon || "Coming Soon"}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/10 text-center">
                <h4 className="text-sm text-gray-400 mb-1">7d Change</h4>
                <p className="text-lg font-semibold text-green-500">{marketData.priceChange7d}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/10 text-center">
                <h4 className="text-sm text-gray-400 mb-1">24h Change</h4>
                <p className="text-lg font-semibold text-green-500">{marketData.priceChange24h}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/10 text-center">
                <h4 className="text-sm text-gray-400 mb-1">Holders</h4>
                <p className="text-lg font-semibold text-white">{marketData.holders}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/10 text-center">
                <h4 className="text-sm text-gray-400 mb-1">Transactions (24h)</h4>
                <p className="text-lg font-semibold text-white">{marketData.transactions24h}</p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href={dexScreenerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <BarChart2 size={20} />
                {pageDict.viewChart}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

