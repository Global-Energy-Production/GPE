import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export default function Logo({ size = "medium", className = "" }: LogoProps) {
  const sizes = {
    small: { default: 32, sm: 40 },
    medium: { default: 48, sm: 60 },
    large: { default: 80, sm: 120 },
  }

  const dimension = sizes[size]

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="GEP Logo"
          width={dimension.sm}
          height={dimension.sm}
          className="object-contain hidden sm:block"
          priority
        />
        <Image
          src="/images/logo.png"
          alt="GEP Logo"
          width={dimension.default}
          height={dimension.default}
          className="object-contain sm:hidden"
          priority
        />
      </div>
    </Link>
  )
}

