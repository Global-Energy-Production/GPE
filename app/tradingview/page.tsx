import { getDictionary } from "../dictionaries"
import { LineChart, TrendingUp, BarChart, PieChart } from "lucide-react"
import Logo from "@/components/logo"

export default async function TradingViewPage() {
  const dict = await getDictionary()

  // Garantir que dict.pages.tradingview existe
  const pageDict = dict.pages?.tradingview || {
    title: "Trading View",
    description: "Technical analysis and trading indicators for GEP token",
    technicalIndicators: "Technical Indicators",
    viewAnalysis: "View on TradingView",
  }

  // Simulated technical indicators
  const technicalIndicators = [
    { name: "RSI (14)", value: "58.34", status: "Neutral" },
    { name: "MACD (12,26,9)", value: "0.0012", status: "Buy" },
    { name: "MA (50)", value: "$0.0432", status: "Buy" },
    { name: "MA (200)", value: "$0.0387", status: "Buy" },
    { name: "Bollinger Bands", value: "$0.0458", status: "Neutral" },
    { name: "Stochastic Oscillator", value: "75.43", status: "Neutral" },
  ]

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
                <LineChart size={48} className="text-yellow-500" />
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 mb-8">
              <h3 className="text-lg font-medium text-gray-300 mb-4">Price Chart</h3>
              <div className="h-80 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">{dict.common?.comingSoon || "Coming Soon"}</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">{pageDict.technicalIndicators}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {technicalIndicators.map((indicator, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      {index % 3 === 0 && <LineChart className="text-yellow-500" size={20} />}
                      {index % 3 === 1 && <BarChart className="text-yellow-500" size={20} />}
                      {index % 3 === 2 && <PieChart className="text-yellow-500" size={20} />}
                      <h3 className="text-lg font-medium text-gray-300">{indicator.name}</h3>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        indicator.status === "Buy"
                          ? "bg-green-500/20 text-green-500"
                          : indicator.status === "Sell"
                            ? "bg-red-500/20 text-red-500"
                            : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {indicator.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white">{indicator.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 mb-8">
              <h3 className="text-lg font-medium text-gray-300 mb-4">Summary</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-500" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-white">Buy</p>
                    <p className="text-sm text-gray-400">Technical Analysis suggests a bullish trend</p>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">75%</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="https://tradingview.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <LineChart size={20} />
                {pageDict.viewAnalysis}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

