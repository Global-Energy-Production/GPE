import { getDictionary } from "../dictionaries"
import { Twitter, MessageCircle, Repeat, Heart } from "lucide-react"
import Logo from "@/components/logo"

export default async function XPage() {
  const dict = await getDictionary()
  const xUrl = "https://x.com/GlobalEnergyPro"

  // Garantir que dict.pages.x existe
  const pageDict = dict.pages?.x || {
    title: "X (Twitter)",
    description: "Follow us on X for the latest updates and announcements",
    latestTweets: "Latest Tweets",
    followUs: "Follow us on X",
  }

  // Simulated tweets
  const tweets = [
    {
      id: "1",
      content:
        "Excited to announce our new partnership with SolarTech to bring renewable energy solutions to the blockchain! #RenewableEnergy #Blockchain",
      date: "2h ago",
      likes: 245,
      retweets: 87,
      replies: 32,
    },
    {
      id: "2",
      content:
        "Join our upcoming AMA session this Friday to learn more about our roadmap and tokenomics. Don't miss it! #Crypto #AMA",
      date: "1d ago",
      likes: 189,
      retweets: 56,
      replies: 24,
    },
    {
      id: "3",
      content:
        "Our latest whitepaper update is now available. Check out the new features and improvements we're bringing to the platform! #Whitepaper #Update",
      date: "3d ago",
      likes: 312,
      retweets: 124,
      replies: 45,
    },
  ]

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
                <Twitter size={48} className="text-yellow-500" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">{pageDict.latestTweets}</h2>

            <div className="space-y-6">
              {tweets.map((tweet) => (
                <div
                  key={tweet.id}
                  className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <Logo size="small" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-semibold text-white">Global Energy Production</span>
                          <span className="text-gray-400 ml-2">@GlobalEnergyPro</span>
                        </div>
                        <span className="text-sm text-gray-400">{tweet.date}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{tweet.content}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <MessageCircle size={16} />
                          {tweet.replies}
                        </span>
                        <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
                          <Repeat size={16} />
                          {tweet.retweets}
                        </span>
                        <span className="flex items-center gap-1 hover:text-red-400 cursor-pointer">
                          <Heart size={16} />
                          {tweet.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <Twitter size={20} />
                {pageDict.followUs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

