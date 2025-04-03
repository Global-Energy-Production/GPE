"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

interface NavItem {
  title: string
  href: string
  external?: boolean
}

interface MobileNavProps {
  items: NavItem[]
}

export default function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden p-0 text-gray-300 hover:text-white touch-target"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-gray-900 border-r border-yellow-500/20 p-0 w-[280px] sm:w-[320px] max-w-[90vw]"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-yellow-500/20 flex justify-between items-center">
            <Link href="/" onClick={() => setOpen(false)}>
              <Logo size="small" />
            </Link>
            <Button
              variant="ghost"
              className="p-0 text-gray-300 hover:text-white touch-target"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {items.map((item) => {
                const href = item.href
                const isActive = !item.external && pathname === href

                if (item.external) {
                  return (
                    <li key={item.href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-3 px-4 text-base font-medium transition-colors hover:text-yellow-400 rounded-md text-gray-300 touch-target"
                      >
                        <span>{item.title}</span>
                        <ExternalLink size={16} className="ml-2 opacity-70" />
                      </a>
                    </li>
                  )
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 px-4 text-base font-medium transition-colors hover:text-yellow-400 rounded-md ${
                        isActive ? "bg-yellow-500/10 text-yellow-500" : "text-gray-300"
                      } touch-target`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

