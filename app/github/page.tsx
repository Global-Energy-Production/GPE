import { getDictionary } from "../dictionaries"
import { Github, Code, GitBranch } from "lucide-react"
import Logo from "@/components/logo"

export default async function GithubPage() {
  const dict = await getDictionary()

  // Garantir que dict.pages.github existe
  const pageDict = dict.pages?.github || {
    title: "GitHub",
    description: "Check out our open source repositories and contribute to the project",
    viewRepositories: "View Repositories",
    contributeButton: "Contribute",
  }

  // Simulated repository data
  const repositories = [
    {
      name: "gep-core",
      description: "Core smart contracts for the Global Energy Production token",
      stars: 124,
      forks: 45,
      language: "Solidity",
    },
    {
      name: "gep-frontend",
      description: "Official frontend application for the GEP platform",
      stars: 87,
      forks: 32,
      language: "TypeScript",
    },
    {
      name: "gep-docs",
      description: "Documentation and technical papers",
      stars: 56,
      forks: 21,
      language: "Markdown",
    },
  ]

  const githubUrl =
    "https://github.com/lhtbr/Global-Energy-Production/tree/d33ed96c71fe16b1299935f141e7c9c74b53a362?tab=readme-ov-file"

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
                <Github size={48} className="text-yellow-500" />
              </div>
            </div>

            <div className="space-y-8">
              {repositories.map((repo, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-2">{repo.name}</h3>
                      <p className="text-gray-300 mb-4">{repo.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                          {repo.language}
                        </span>
                        <span className="flex items-center gap-1">
                          <Code size={14} />
                          {repo.stars} stars
                        </span>
                        <span className="flex items-center gap-1">
                          <GitBranch size={14} />
                          {repo.forks} forks
                        </span>
                      </div>
                    </div>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                {pageDict.viewRepositories}
              </a>
              <button className="px-6 py-3 bg-transparent hover:bg-gray-800 text-yellow-500 border border-yellow-500 font-medium rounded-lg transition-colors">
                {pageDict.contributeButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

