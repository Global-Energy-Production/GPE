// Importação do dicionário em inglês
import en from "@/dictionaries/en.json"

// Garantir que o dicionário tenha a estrutura correta
const defaultDict = {
  navigation: {
    whitepaper: "Whitepaper",
    github: "GitHub",
    x: "X",
    dexscreener: "DEX Screener",
    mexc: "MEXC",
    tradingview: "Trading View",
  },
  common: {
    home: "Home",
    joinPresale: "Join Presale",
    whitepaper: "Whitepaper",
    comingSoon: "Coming Soon",
    allRightsReserved: "All rights reserved",
    energyForTheFuture: "Energy for the Future!",
    investingInSustainable:
      "Investing in a sustainable future through decentralized finance and renewable energy infrastructure.",
    aboutProject: "About the Project",
  },
  pages: {
    whitepaper: {
      title: "Whitepaper",
      description: "Technical document detailing our vision, technology, and roadmap for the future.",
    },
    about: {
      title: "About the Project",
      subtitle: "Project Presentation: Global Energy Production (GEP)",
    },
    github: {
      title: "GitHub",
      description: "Check out our open source repositories and contribute to the project",
      viewRepositories: "View Repositories",
      contributeButton: "Contribute",
    },
    x: {
      title: "X (Twitter)",
      description: "Follow us on X for the latest updates and announcements",
      latestTweets: "Latest Tweets",
      followUs: "Follow us on X",
    },
    dexscreener: {
      title: "DEX Screener",
      description: "Real-time cryptocurrency market data and charts",
      marketData: "Market Data",
      viewChart: "View on DEX Screener",
    },
    mexc: {
      title: "MEXC Exchange",
      description: "Trade GEP tokens on MEXC Exchange",
      marketData: "Market Data",
      viewExchange: "View on MEXC",
    },
    tradingview: {
      title: "Trading View",
      description: "Technical analysis and trading indicators for GEP token",
      technicalIndicators: "Technical Indicators",
      viewAnalysis: "View on TradingView",
    },
  },
  energySources: {
    title: "Energy Matrices",
    hydroelectric: {
      title: "Hydroelectric Power",
      description:
        "Uses the force of water to move turbines and generate electricity. Countries like Brazil, China, and Canada invest heavily in this matrix due to the abundance of rivers. However, large dams can cause significant environmental and social impacts.",
    },
    thermoelectric: {
      title: "Thermoelectric Power",
      description:
        "Thermoelectric plants operate from the burning of fossil fuels, generating steam to move turbines. This matrix is reliable and has high generation capacity, but contributes to the emission of polluting gases and depends on non-renewable resources.",
    },
    nuclear: {
      title: "Nuclear Energy",
      description:
        "Based on the fission of atoms to generate heat and produce electricity, it is highly efficient and low in carbon emissions. Countries like France, Russia, and China invest in this technology. However, the risk of accidents and the management of radioactive waste are critical challenges.",
    },
    wind: {
      title: "Wind Energy",
      description:
        "Uses the force of winds to move wind turbines and produce electricity. China, the United States, and Germany lead its implementation. Although it is a clean source, its intermittency and the need for strategic locations are limitations.",
    },
    solar: {
      title: "Solar Photovoltaic Energy",
      description:
        "Harnesses sunlight to generate electricity and grows exponentially with technological advances. Countries like China, India, and Brazil invest in this sustainable alternative. However, dependence on solar radiation and the need for storage are still challenges.",
    },
    biomass: {
      title: "Biomass and Biogas",
      description:
        "Use organic and plant residues to produce energy, contributing to waste reduction. This technology is successfully used in countries like Brazil and Sweden. However, its economic viability and competition with other agricultural demands are points of attention.",
    },
    geothermal: {
      title: "Geothermal Energy",
      description:
        "Harnesses the Earth's internal heat for electrical generation or heating. Countries like Iceland, Indonesia, and the United States explore this matrix due to their favorable geological characteristics. However, the need for specific locations and high installation costs limit its adoption.",
    },
    tidal: {
      title: "Tidal and Wave Energy",
      description:
        "Use the movement of tides and waves to generate electricity. Despite the great potential, this technology still faces technical challenges and high costs, being explored mainly in countries like France and the United Kingdom.",
    },
    hydrogen: {
      title: "Hydrogen Energy",
      description:
        "Considered the fuel of the future, it uses hydrogen to generate electricity with zero emissions, producing only water as waste. Innovative projects seek to make green hydrogen production more accessible, especially through electrolysis powered by renewable sources.",
    },
    petroleum: {
      title: "Petroleum Energy",
      description:
        "Offshore oil platforms extract fossil fuels that still power most of the world's energy needs. Despite their efficiency, petroleum extraction and consumption contribute significantly to climate change and environmental pollution. Private oil companies project significant growth until 2030, even as the world transitions to cleaner energy sources.",
    },
  },
}

export async function getDictionary() {
  // Mesclar o dicionário padrão com o dicionário importado
  return { ...defaultDict, ...en }
}

