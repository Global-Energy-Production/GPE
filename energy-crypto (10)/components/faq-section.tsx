"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  dict: any
}

export default function FAQSection({ dict }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Verificar se dict.faq existe e fornecer um objeto vazio como fallback
  const faq = dict?.faq || {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is Global Energy Production (GEP)?",
        answer:
          "Global Energy Production (GEP) is a digital asset (token) developed to finance research, projects, and innovations in the energy sector.",
      },
      {
        question: "How can GEP help advance the energy sector?",
        answer:
          "GEP allows researchers, companies, and developers of new energy matrices to obtain funding through tokenization.",
      },
      {
        question: "How can I invest in GEP?",
        answer: "You can acquire GEP tokens on compatible trading platforms or participate in launch events (IDO/ICO).",
      },
    ],
  }

  // Verificar se faq.items existe e fornecer um array vazio como fallback
  const items = faq?.items || []
  const title = faq?.title || "Frequently Asked Questions"

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const FAQItem = ({ item, isOpen, toggleOpen }: { item: FAQItem; isOpen: boolean; toggleOpen: () => void }) => {
    return (
      <div className="border-b border-yellow-500/20 last:border-0">
        <button
          className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          <h3 className="text-lg font-medium text-white">{item.question}</h3>
          <ChevronDown
            className={`text-yellow-500 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
            size={20}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="px-2 text-gray-300">{item.answer}</p>
        </div>
      </div>
    )
  }

  // Se não houver itens, retorne null ou um componente de fallback
  if (items.length === 0) {
    return null
  }

  return (
    <section className="py-12 sm:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold title-gradient text-center mb-8 sm:mb-12">
            {title}
          </h2>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500/20">
            {items.map((item: FAQItem, index: number) => (
              <FAQItem key={index} item={item} isOpen={openIndex === index} toggleOpen={() => toggleFAQ(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

