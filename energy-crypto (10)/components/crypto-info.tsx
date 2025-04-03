import type React from "react"
import { Clock, Zap, Leaf } from "lucide-react"
import Logo from "./logo"

interface BenefitSection {
  title?: string
  point1?: string
  point2?: string
  point3?: string
}

interface CryptoInfoProps {
  dict: any
}

const BenefitCard = ({
  icon: Icon,
  title,
  points,
}: {
  icon: React.ElementType
  title: string
  points: string[]
}) => (
  <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-colors shadow-lg shadow-black/20">
    <div className="flex items-center mb-3 sm:mb-4">
      <Icon className="text-yellow-500 mr-2 flex-shrink-0" size={20} />
      <h4 className="text-lg sm:text-xl font-semibold title-gradient line-clamp-1">{title}</h4>
    </div>
    <ul className="space-y-3 sm:space-y-4">
      {points.map((point, index) => (
        <li key={index} className="text-gray-300 text-sm sm:text-base">
          <span className="text-yellow-500 mr-2 inline-block">🔹</span>
          <span className="inline-block align-top">{point}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default function CryptoInfo({ dict }: CryptoInfoProps) {
  // Fornecer valores padrão para todas as propriedades que podem ser undefined
  const cryptoInfo = dict?.cryptoInfo || {}

  const title = cryptoInfo?.title || "Cryptocurrency for the Energy Sector"
  const intro =
    cryptoInfo?.intro ||
    "In recent years, the energy sector has attracted great interest from the financial market, including investments through cryptocurrencies."
  const conclusion =
    cryptoInfo?.conclusion ||
    "The diversification of energy matrices and the use of cryptocurrencies as a form of investment and financing are complementary strategies that can ensure a sustainable, reliable, and economically viable energy supply for the future."
  const benefits = cryptoInfo?.benefits || "Benefits"

  // Fornecer valores padrão para as seções de benefícios
  const shortTerm = {
    title: cryptoInfo?.shortTerm?.title || "Short Term",
    point1:
      cryptoInfo?.shortTerm?.point1 ||
      "Liquidity and Decentralization: Cryptocurrencies can offer an accessible and decentralized means of investing in energy infrastructure.",
    point2:
      cryptoInfo?.shortTerm?.point2 ||
      "Incentive for Sustainable Projects: Crypto assets can be used to directly finance renewable energy projects.",
    point3:
      cryptoInfo?.shortTerm?.point3 ||
      "Optimization of Energy Consumption: Some blockchain networks are already seeking solutions to make cryptocurrency mining more efficient.",
  }

  const mediumTerm = {
    title: cryptoInfo?.mediumTerm?.title || "Medium Term",
    point1:
      cryptoInfo?.mediumTerm?.point1 ||
      "Tokenization of Energy Assets: The creation of tokens backed by power plants can allow more transparent and traceable investments.",
    point2:
      cryptoInfo?.mediumTerm?.point2 ||
      "Integration with Smart Grids: Blockchain can be used to improve the management of smart electrical grids.",
    point3:
      cryptoInfo?.mediumTerm?.point3 ||
      "Expansion of New Business Models: Cryptocurrencies can enable decentralized energy buying and selling markets.",
  }

  const longTerm = {
    title: cryptoInfo?.longTerm?.title || "Long Term",
    point1:
      cryptoInfo?.longTerm?.point1 ||
      "Global Energy Transition: Financing via blockchain can accelerate the replacement of polluting matrices with renewable sources.",
    point2:
      cryptoInfo?.longTerm?.point2 ||
      "Cost Reduction in Production and Distribution: With greater efficiency and less need for intermediaries, the costs of energy generation can be reduced.",
    point3:
      cryptoInfo?.longTerm?.point3 ||
      "Sustainability and Carbon Neutrality: Well-structured projects can help achieve global sustainability goals.",
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-0">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Logo size="medium" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold title-gradient mb-4 sm:mb-6">{title}</h2>
        <p className="text-gray-300 text-sm sm:text-base">{intro}</p>
      </div>

      {/* Benefits Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold title-gradient mb-6 sm:mb-8 text-center">{benefits}</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <BenefitCard
            icon={Clock}
            title={shortTerm.title}
            points={[shortTerm.point1, shortTerm.point2, shortTerm.point3].filter(Boolean)}
          />
          <BenefitCard
            icon={Zap}
            title={mediumTerm.title}
            points={[mediumTerm.point1, mediumTerm.point2, mediumTerm.point3].filter(Boolean)}
          />
          <BenefitCard
            icon={Leaf}
            title={longTerm.title}
            points={[longTerm.point1, longTerm.point2, longTerm.point3].filter(Boolean)}
          />
        </div>
      </div>

      {/* Conclusion */}
      {conclusion && (
        <div className="max-w-3xl mx-auto text-center bg-gray-800 p-4 sm:p-6 rounded-xl border border-yellow-500/20 shadow-lg shadow-black/20">
          <p className="text-gray-300 italic text-sm sm:text-base">{conclusion}</p>
        </div>
      )}
    </div>
  )
}

