"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FutureEnergyRevolutionProps {
  dict: any
}

export default function FutureEnergyRevolution({ dict }: FutureEnergyRevolutionProps) {
  // Imagens para o carrossel
  const images = [
    {
      src: "/images/ai-robot-hand.jpeg",
      alt: "Robotic hand holding an atom representation, symbolizing the fusion of AI and energy technology",
    },
    {
      src: "/images/ai-laptop.jpeg",
      alt: "Human hands typing on a laptop with AI visualization, representing the digital revolution in energy management",
    },
    {
      src: "/images/ai-human-robot.webp",
      alt: "Human and robot hands touching, illustrating the collaboration between humanity and technology for energy solutions",
    },
    {
      src: "/images/wind-turbine-data.png",
      alt: "Wind turbine with data visualization, showing how renewable energy is becoming smarter with AI integration",
    },
    {
      src: "/images/wind-farm-analytics.png",
      alt: "Wind farm with data analytics overlay, demonstrating how blockchain and AI optimize renewable energy production",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning || slideIndex === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(slideIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  // Texto para a seção
  const title = "The Future of Energy and the Digital Revolution with Global Energy Production (GEP)"
  const paragraphs = [
    "The advancement of scientific innovations has driven the search for more efficient and sustainable solutions. With the growing computational demand, driven by the massive use of Artificial Intelligence (AI) and Blockchains, the need for cheaper and renewable energy sources has never been more evident. The world is in a race to find energy alternatives that sustain this technological growth and ensure a more sustainable future.",
    "In this scenario, the creation of a digital asset becomes an essential tool to finance and accelerate research, projects, and implementations of new energy matrices and concepts. The tokenization of investments in the energy sector opens doors for decentralized resource raising, allowing enthusiasts, investors, and researchers to actively collaborate for the development of disruptive technologies in the sector.",
    "Global Energy Production (GEP) emerges as an innovative digital token, designed to provide the necessary mechanisms to drive the energy future. Through GEP, it will be possible to finance research, encourage the development of new technologies, and foster the implementation of efficient energy solutions. Additionally, token holders can benefit financially from the appreciation of these assets, driven by the advancement of research and the positive impact on the global energy sector.",
    "With a decentralized model based on Blockchain, GEP offers transparency, security, and accessibility for investors worldwide. The continuous growth of energy technologies can not only transform the way we produce and consume energy but also generate significant returns for those who believe in the power of innovation and sustainability.",
    "The future of energy is being built now, and Global Energy Production (GEP) is the bridge between innovation, sustainability, and financial opportunities. Join this revolution and invest in tomorrow's energy advancement!",
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold title-gradient text-center mb-8 sm:mb-12">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Carrossel de imagens */}
            <div className="order-2 md:order-1">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg shadow-black/30">
                <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 z-10">
                  <button
                    onClick={goToPrevious}
                    className="p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-target"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} className="sm:hidden" />
                    <ChevronLeft size={24} className="hidden sm:block" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-target"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} className="sm:hidden" />
                    <ChevronRight size={24} className="hidden sm:block" />
                  </button>
                </div>

                <div
                  className={`h-full w-full transition-opacity duration-500 ease-out ${
                    isTransitioning ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <Image
                    src={images[currentIndex].src || "/placeholder.svg"}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
                  {images.map((_, slideIndex) => (
                    <button
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                        currentIndex === slideIndex ? "bg-yellow-500" : "bg-gray-400/50"
                      }`}
                      aria-label={`Go to slide ${slideIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Conteúdo de texto */}
            <div className="order-1 md:order-2 space-y-4">
              <div className="prose prose-invert prose-yellow max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

