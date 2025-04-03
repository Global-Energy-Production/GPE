import { FileText } from "lucide-react"
import Logo from "@/components/logo"
import { getDictionary } from "@/lib/dictionary"

export default async function WhitepaperPage() {
  const dict = await getDictionary()

  // Garantir que dict.pages.whitepaper existe
  const pageDict = dict.pages?.whitepaper || {
    title: "Whitepaper",
    description: "Technical document detailing our vision, technology, and roadmap for the future.",
    content: "<p>Whitepaper content will be available soon.</p>",
  }

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Logo size="medium" className="mb-6" />
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">{pageDict.title}</h1>
            <p className="text-xl text-gray-300">{pageDict.description}</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-yellow-500/20">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <FileText size={48} className="text-yellow-500" />
              </div>
            </div>

            <article className="prose prose-invert prose-yellow max-w-none">
              {/* Conteúdo do whitepaper */}
              {pageDict.content && <div dangerouslySetInnerHTML={{ __html: pageDict.content }} />}
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

