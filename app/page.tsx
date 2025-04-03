import CryptoInfo from "@/components/crypto-info"
import HeroSection from "@/components/hero-section"
import DonationSection from "@/components/donation-section"
import DynamicEnergySection from "@/components/dynamic-energy-section"
import FutureEnergyRevolution from "@/components/future-energy-revolution"
import FAQSection from "@/components/faq-section"
import { getDictionary } from "@/lib/dictionary"

export default async function Home() {
  const dict = await getDictionary()

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection dict={dict} />

      {/* Energy Sources Section with Dynamic Carousel */}
      <DynamicEnergySection dict={dict} />

      {/* Nova seção: The Future of Energy and the Digital Revolution */}
      <FutureEnergyRevolution dict={dict} />

      {/* Cryptocurrency Info Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <CryptoInfo dict={dict} />
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection dict={dict} />

      {/* FAQ Section */}
      <FAQSection dict={dict.faq || {}} />
    </div>
  )
}

