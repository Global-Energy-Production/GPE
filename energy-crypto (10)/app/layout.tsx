import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Logo from "@/components/logo"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import { getDictionary } from "@/lib/dictionary"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dict = await getDictionary()

  const navItems = [
    { title: dict.common.home, href: "/" },
    { title: dict.navigation.whitepaper, href: "/whitepaper" },
    { title: dict.navigation.github, href: "https://github.com/Global-Energy-Production", external: true },
    { title: dict.navigation.x, href: "https://x.com/GlobalEnergyPro", external: true },
    {
      title: dict.navigation.dexscreener,
      href: "https://dexscreener.com/solana/9ywhvvkz95tsptqkwkwulekeygpo5vwsq73w3vyntm1x",
      external: true,
    },
    {
      title: "MEXC",
      href: "https://www.mexc.com/dex",
      external: true,
    },
    {
      title: "SolanaScan",
      href: "https://solscan.io/token/2r1oMdfbZaPABJN5BsbocNFNGf8MoC9TzrwLz4FNpump",
      external: true,
    },
  ]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-black text-gray-100 flex flex-col">
            <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/90 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
                <div className="flex items-center gap-4 sm:gap-6">
                  <Logo />
                  <MainNav items={navItems} />
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <MobileNav items={navItems} />
                </div>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="border-t border-yellow-500/20 py-6 sm:py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                  <Logo size="small" className="mb-4" />
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.external ? item.href : item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-xs sm:text-sm text-gray-400 hover:text-yellow-400 transition-colors py-1 px-2 touch-target"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 text-center">
                    &copy; {new Date().getFullYear()} GEP. {dict.common.allRightsReserved}
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
