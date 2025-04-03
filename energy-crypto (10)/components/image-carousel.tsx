"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/barragem-de-uma-usina-hidreletrica-hLHFrOoJxPCmc4EZjS4tmbbunHm12F.webp",
    alt: "Energia Hidrelétrica: Utiliza a força da água para movimentar turbinas e gerar eletricidade. Países como Brasil, China e Canadá investem fortemente nessa matriz devido à abundância de rios. No entanto, grandes represas podem causar impactos ambientais e sociais significativos.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usina-termeletrica.jpg-v0AP4mPRn1HLsEqzhAKEYwHGAaGltF.jpeg",
    alt: "Energia Termelétrica (Carvão, Gás Natural e Óleo): Usinas termelétricas operam a partir da queima de combustíveis fósseis, gerando vapor para movimentar turbinas. Essa matriz é confiável e tem alta capacidade de geração, mas contribui para a emissão de gases poluentes e depende de recursos não renováveis.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_2189330003-scaled-qs5b11t5bkc9lq9o0k5qt3abdxit2jpt0b2b21pm24.jpg-2qUs6Gn77JOXQpmkFlw3V2BEzbwTSN.jpeg",
    alt: "Energia Solar Fotovoltaica: Aproveita a luz do sol para gerar eletricidade e cresce exponencialmente com avanços tecnológicos. Países como China, Índia e Brasil investem nessa alternativa sustentável. Porém, a dependência da radiação solar e a necessidade de armazenamento ainda são desafios.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1299c6e6-thumb-blog-como_maximizar_a_producao_de_etanol_e_outros_biocombustiveis_.jpg-uFOobT4Id0UqnyHokJGxapJaAEVvaV.jpeg",
    alt: "Biomassa e Biogás: Utilizam resíduos orgânicos e vegetais para produzir energia, contribuindo para a redução de resíduos. Essa tecnologia é usada com sucesso em países como Brasil e Suécia. No entanto, sua viabilidade econômica e a competição com outras demandas agrícolas são pontos de atenção.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-usina-onda-ceara-scaled-uUup6FXiH9tkUEnFZ25RWoK6wwtthL.webp",
    alt: "Energia Maremotriz e de Ondas: Utilizam o movimento das marés e das ondas para gerar eletricidade. Apesar do grande potencial, essa tecnologia ainda enfrenta desafios técnicos e altos custos, sendo explorada principalmente em países como França e Reino Unido.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-02-22-canal-solar-Projetos-inovadores-buscam-impulsionar-hidrogenio-verde-no-Brasil.jpg-cePqHFRfad0Kd8p4qherNQzDAJJQzE.jpeg",
    alt: "Energia de Hidrogênio: Considerada o combustível do futuro, utiliza hidrogênio para gerar eletricidade com zero emissões, produzindo apenas água como resíduo. Projetos inovadores buscam tornar a produção de hidrogênio verde mais acessível, especialmente através da eletrólise alimentada por fontes renováveis.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oil-extraction-platform.jpg-Wd9Yd9Yd9Yd9Yd9Yd9Yd9Y",
    alt: "Extração de Petróleo: Plataformas de extração de petróleo operam em terra e no mar para obter este combustível fóssil que ainda é a principal fonte de energia do mundo. Apesar de sua eficiência energética, a extração e queima de petróleo contribuem significativamente para as mudanças climáticas e poluição ambiental.",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext()
    }, 5000)

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

  return (
    <div
      className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg shadow-black/30"
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

      <div className="h-full w-full transition-transform duration-500 ease-out">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
          <p className="text-sm sm:text-base font-medium line-clamp-3 sm:line-clamp-4">{images[currentIndex].alt}</p>
        </div>
      </div>

      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === slideIndex ? "bg-yellow-500" : "bg-gray-400/50"}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

