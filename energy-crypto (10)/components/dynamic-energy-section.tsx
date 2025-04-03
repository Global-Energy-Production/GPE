"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface EnergySource {
  id: string
  title: string
  description: string
  image: string
}

interface DynamicEnergySectionProps {
  dict: any
}

export default function DynamicEnergySection({ dict }: DynamicEnergySectionProps) {
  // Mapeamento de imagens para todas as fontes de energia
  const imageMap = {
    hydroelectric:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/barragem-de-uma-usina-hidreletrica-hLHFrOoJxPCmc4EZjS4tmbbunHm12F.webp",
    thermoelectric:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usina-termeletrica.jpg-v0AP4mPRn1HLsEqzhAKEYwHGAaGltF.jpeg",
    nuclear:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usina-nuclear-three-mile-island-241026-1280x720.jpg-H6O8a7dZpMzVsil7rocJEjgVh4vigj.jpeg",
    wind: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/energia-eolica.jpg-pAh2jVl04TumuTHqYvMbD4vNcVWxdK.jpeg",
    solar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_2189330003-scaled-qs5b11t5bkc9lq9o0k5qt3abdxit2jpt0b2b21pm24.jpg-2qUs6Gn77JOXQpmkFlw3V2BEzbwTSN.jpeg",
    biomass:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1299c6e6-thumb-blog-como_maximizar_a_producao_de_etanol_e_outros_biocombustiveis_.jpg-RE8COtHdLTFtOAAoWEqDdTuUu9uFzE.jpeg",
    tidal:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-usina-onda-ceara-scaled-uUup6FXiH9tkUEnFZ25RWoK6wwtthL.webp",
    hydrogen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-02-22-canal-solar-Projetos-inovadores-buscam-impulsionar-hidrogenio-verde-no-Brasil.jpg-j65wOesA2eT3NVyywPPCapajoo7qmM.jpeg",
    geothermal:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figura-1.jpg-aoQBKfPi60fwzPI66nT6g4JZXTUveF.jpeg",
    petroleum: "/images/oil-platform.jpeg",
  }

  // Verificar se dict e dict.energySources existem
  const energySources = dict?.energySources || {
    title: "Energy Sources",
    hydroelectric: {
      title: "Hydroelectric Power",
      description: "Uses the force of water to move turbines and generate electricity.",
    },
    thermoelectric: {
      title: "Thermoelectric Power",
      description: "Thermoelectric plants operate from the burning of fossil fuels.",
    },
    nuclear: {
      title: "Nuclear Energy",
      description: "Based on the fission of atoms to generate heat and produce electricity.",
    },
    wind: {
      title: "Wind Energy",
      description: "Uses the force of winds to move wind turbines and produce electricity.",
    },
    solar: {
      title: "Solar Photovoltaic Energy",
      description: "Harnesses sunlight to generate electricity.",
    },
    biomass: {
      title: "Biomass and Biogas",
      description: "Use organic and plant residues to produce energy.",
    },
    geothermal: {
      title: "Geothermal Energy",
      description: "Harnesses the Earth's internal heat for electrical generation or heating.",
    },
    tidal: {
      title: "Tidal and Wave Energy",
      description: "Use the movement of tides and waves to generate electricity.",
    },
    hydrogen: {
      title: "Hydrogen Energy",
      description: "Considered the fuel of the future, it uses hydrogen to generate electricity with zero emissions.",
    },
    petroleum: {
      title: "Petroleum Energy",
      description:
        "Extração e processamento de petróleo em plataformas offshore, fornecendo combustíveis fósseis que ainda são a principal fonte energética mundial, apesar dos impactos ambientais significativos.",
    },
  }

  // Criar array de fontes de energia com valores padrão se necessário
  const sources = [
    {
      id: "hydroelectric",
      title: energySources?.hydroelectric?.title || "Hydroelectric Power",
      description: energySources?.hydroelectric?.description || "Hydroelectric power description",
      image: imageMap.hydroelectric,
    },
    {
      id: "thermoelectric",
      title: energySources?.thermoelectric?.title || "Thermoelectric Power",
      description: energySources?.thermoelectric?.description || "Thermoelectric power description",
      image: imageMap.thermoelectric,
    },
    {
      id: "nuclear",
      title: energySources?.nuclear?.title || "Nuclear Energy",
      description: energySources?.nuclear?.description || "Nuclear energy description",
      image: imageMap.nuclear,
    },
    {
      id: "wind",
      title: energySources?.wind?.title || "Wind Energy",
      description: energySources?.wind?.description || "Wind energy description",
      image: imageMap.wind,
    },
    {
      id: "solar",
      title: energySources?.solar?.title || "Solar Energy",
      description: energySources?.solar?.description || "Solar energy description",
      image: imageMap.solar,
    },
    {
      id: "biomass",
      title: energySources?.biomass?.title || "Biomass Energy",
      description: energySources?.biomass?.description || "Biomass energy description",
      image: imageMap.biomass,
    },
    {
      id: "petroleum",
      title: energySources?.petroleum?.title || "Petroleum Energy",
      description: energySources?.petroleum?.description || "Petroleum energy description",
      image: imageMap.petroleum,
    },
    {
      id: "tidal",
      title: energySources?.tidal?.title || "Tidal Energy",
      description: energySources?.tidal?.description || "Tidal energy description",
      image: imageMap.tidal,
    },
    {
      id: "hydrogen",
      title: energySources?.hydrogen?.title || "Hydrogen Energy",
      description: energySources?.hydrogen?.description || "Hydrogen energy description",
      image: imageMap.hydrogen,
    },
    {
      id: "geothermal",
      title: energySources?.geothermal?.title || "Geothermal Energy",
      description: energySources?.geothermal?.description || "Geothermal energy description",
      image: imageMap.geothermal,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    if (isTransitioning || sources.length === 0) return
    setIsTransitioning(true)
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sources.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning || sources.length === 0) return
    setIsTransitioning(true)
    const isLastSlide = currentIndex === sources.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning || slideIndex === currentIndex || sources.length === 0) return
    setIsTransitioning(true)
    setCurrentIndex(slideIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Auto-advance slides
  useEffect(() => {
    if (sources.length === 0) return

    const slideInterval = setInterval(() => {
      goToNext()
    }, 8000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  // Touch controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious()
    }
  }

  // Se não houver fontes de energia, retorne null ou um componente de fallback
  if (sources.length === 0) {
    return null
  }

  const currentSource = sources[currentIndex]

  return (
    <section className="py-12 sm:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold title-gradient text-center mb-8">
            {energySources?.title || "Energy Sources"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Carrossel de imagens */}
            <div
              className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg shadow-black/30"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
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
                className={`h-full w-full transition-opacity duration-500 ease-out ${isTransitioning ? "opacity-50" : "opacity-100"}`}
              >
                <Image
                  src={currentSource.image || "/placeholder.svg"}
                  alt={currentSource.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
                {sources.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === slideIndex ? "bg-yellow-500" : "bg-gray-400/50"}`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Conteúdo de texto */}
            <div
              className={`space-y-4 transition-opacity duration-500 ease-out ${isTransitioning ? "opacity-50" : "opacity-100"}`}
            >
              <h3 className="text-xl sm:text-2xl font-bold title-gradient">{currentSource.title}</h3>
              <p className="text-gray-300">{currentSource.description}</p>

              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {sources.map((source, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        currentIndex === index
                          ? "bg-yellow-500 text-black font-medium"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {source.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

