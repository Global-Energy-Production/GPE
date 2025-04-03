import Logo from "@/components/logo"
import { getDictionary } from "@/lib/dictionary"

export default async function AboutPage() {
  const dict = await getDictionary()

  // Garantir que dict.pages.about existe
  const pageDict = dict.pages?.about || {
    title: "About the Project",
    subtitle: "Project Presentation: Global Energy Production (GEP)",
    content: "<p>Information about the Global Energy Production project.</p>",
  }

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Logo size="medium" className="mb-6" />
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">{pageDict.title}</h1>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-yellow-500/20">
            <article className="prose prose-invert prose-yellow max-w-none">
              <h1 className="text-center title-gradient">{pageDict.subtitle}</h1>

              {/* Conteúdo da página About */}
              {pageDict.content && <div dangerouslySetInnerHTML={{ __html: pageDict.content }} />}
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

