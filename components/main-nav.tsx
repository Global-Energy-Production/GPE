"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
  title: string
  href: string
  external?: boolean
}

interface MainNavProps {
  items: NavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center flex-wrap gap-1 lg:gap-2">
      {items.map((item) => {
        const href = item.href
        const isActive = !item.external && pathname === href

        if (item.external) {
          return (
            <a
              key={item.href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-yellow-400 py-2 px-2 lg:px-3 rounded-md text-gray-300"
            >
              {item.title}
            </a>
          )
        }

        return (
          <Link
            key={item.href}
            href={href}
            className={`text-sm font-medium transition-colors hover:text-yellow-400 py-2 px-2 lg:px-3 rounded-md ${
              isActive ? "bg-yellow-500/10 text-yellow-500" : "text-gray-300"
            }`}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}

