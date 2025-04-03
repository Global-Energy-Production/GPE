import Image from "next/image"

interface FutureEnergySectionProps {
  dict: any
}

export default function FutureEnergySection({ dict }: FutureEnergySectionProps) {
  // Verificar se dict existe e fornecer valores padrão
  const futureEnergy = dict || {
    title: "The Future of Energy and the Digital Revolution with Global Energy Production (GEP)",
    paragraph1:
      "The advancement of scientific innovations has driven the search for more efficient and sustainable solutions.",
    paragraph2:
      "In this scenario, the creation of a digital asset becomes an essential tool to finance and accelerate research.",
    paragraph3:
      "Global Energy Production (GEP) emerges as an innovative digital token, designed to provide the necessary mechanisms to drive the energy future.",
    paragraph4:
      "With a decentralized model based on Blockchain, GEP offers transparency, security, and accessibility for investors worldwide.",
    paragraph5:
      "The future of energy is being built now, and Global Energy Production (GEP) is the bridge between innovation, sustainability, and financial opportunities.",
  }

  return (
    <section className="py-12 sm:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold title-gradient text-center mb-8">
            {futureEnergy.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 md:order-1">
              <p className="text-gray-300 mb-4">{futureEnergy.paragraph1}</p>
              <p className="text-gray-300 mb-4">{futureEnergy.paragraph2}</p>
            </div>
            <div className="order-1 md:order-2 relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-02-22-canal-solar-Projetos-inovadores-buscam-impulsionar-hidrogenio-verde-no-Brasil.jpg-j65wOesA2eT3NVyywPPCapajoo7qmM.jpeg"
                alt="Instalação de armazenamento e processamento de hidrogênio (H2)"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">{futureEnergy.paragraph3}</p>
            <p className="text-gray-300">{futureEnergy.paragraph4}</p>
            <p className="text-gray-300">{futureEnergy.paragraph5}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

