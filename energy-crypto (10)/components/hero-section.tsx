import Logo from "@/components/logo"
import Link from "next/link"

interface HeroSectionProps {
  dict: any
}

export default function HeroSection({ dict }: HeroSectionProps) {
  // Garantir que dict.common existe
  const common = dict.common || {
    energyForTheFuture: "Energy for the Future!",
    investingInSustainable:
      "Investing in a sustainable future through decentralized finance and renewable energy infrastructure.",
    whitepaper: "Whitepaper",
    joinPresale: "Join Presale",
    aboutProject: "About the Project",
  }

  const presaleUrl = "XXX.COM.COM.COM.COM"

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-950"></div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <Logo size="large" />

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Global Energy Production
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0 sm:ml-2">{common.energyForTheFuture}</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 px-4 sm:px-0">
            {common.investingInSustainable}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md sm:max-w-none">
            <Link
              href="/whitepaper"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent hover:bg-gray-800 text-yellow-500 border border-yellow-500 font-medium rounded-lg transition-colors touch-target"
            >
              {common.whitepaper}
            </Link>
            <a
              href={presaleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors touch-target"
            >
              {common.joinPresale}
            </a>
            <Link
              href="/about"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent hover:bg-gray-800 text-yellow-500 border border-yellow-500 font-medium rounded-lg transition-colors touch-target"
            >
              {common.aboutProject}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

