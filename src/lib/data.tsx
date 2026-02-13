export interface GameMapping {
  badId: string;
  goodId: string;
  title: string;
  genre: string[];
  tags: string[];
  discovery?: string;
  badStatus: "Borked" | "Bronze";
  goodStatus: "Native" | "Platinum" | "Gold" | "Silver";
  deckVerified: "Verified" | "Playable" | "Unsupported" | "Unknown";
  rating?: number;
  customData?: {
    name: string;
    imageUrl: string;
    publisher: string;
  };
  antiCheat?: {
    name: string;
    status: string;
    alternativeFix?: string;
  };
}

export const GameAlt: GameMapping[] = [
  {
    badId: "359550",
    goodId: "730",
    title: "Rainbow Six Siege",
    badStatus: "Borked",
    goodStatus: "Native",
    deckVerified: "Playable",
    rating: 5,
    genre: ["Shooter"],
    tags: ["FPS", "Tactical", "Competitive", "5v5"],
    antiCheat: {
      name: "BattlEye",
      status: "Broken",
      alternativeFix: "VAC (Native)",
    },
  },

  {
    badId: "valorant",
    goodId: "730",
    title: "Valorant",
    deckVerified: "Playable",
    badStatus: "Borked",
    goodStatus: "Native",
    rating: 4.8,
    genre: ["Shooter"],
    tags: ["FPS", "Tactical", "Competitive", "5v5", "Free to Play"],
    antiCheat: {
      name: "Vanguard",
      status: "Kernel Hardlock",
      alternativeFix: "Counter-Strike 2 (VAC, Native Linux)",
    },
  },

  {
    badId: "league-of-legends",
    goodId: "570",
    title: "League of Legends",
    badStatus: "Borked",
    goodStatus: "Native",
    deckVerified: "Playable",
    rating: 4.5,
    genre: ["MOBA", "Strategy"],
    tags: ["Strategy", "5v5", "Fantasy", "Competitive"],
    antiCheat: {
      name: "Vanguard",
      status: "Kernel Hardlock",
      alternativeFix: "Dota 2 (Native Linux)",
    },
  },

  {
    badId: "2807960",
    goodId: "671860",
    title: "Battlefield 6",
    badStatus: "Borked",
    goodStatus: "Gold",
    deckVerified: "Playable",
    rating: 4.5,
    genre: ["Shooter"],
    tags: ["War", "Destruction", "Vehicles", "Large Scale"],
    antiCheat: {
      name: "EA Anti-Cheat",
      status: "Incompatible",
      alternativeFix: "EAC (Linux Supported)",
    },
  },
  {
    badId: "1962663",
    goodId: "1172470",
    title: "Call of Duty",
    badStatus: "Borked",
    goodStatus: "Silver",
    deckVerified: "Unsupported",
    rating: 4.5,
    genre: ["Shooter"],
    tags: ["FPS", "Battle Royale", "Fast-Paced"],
    antiCheat: {
      name: "Ricochet",
      status: "Kernel Block",
      alternativeFix: "EAC (Linux Supported)",
    },
  },

  {
    badId: "578080",
    goodId: "1172470",
    title: "PUBG: BATTLEGROUNDS",
    badStatus: "Borked",
    goodStatus: "Silver",
    deckVerified: "Unsupported",
    rating: 4.5,
    genre: ["Shooter"],
    tags: ["Battle Royale", "Realistic", "FPS"],
    antiCheat: {
      name: "BattlEye",
      status: "Unstable",
      alternativeFix: "EAC (Linux Supported)",
    },
  },

  {
    badId: "fortnite",
    goodId: "1172470",
    title: "Fortnite",
    badStatus: "Borked",
    goodStatus: "Gold",
    deckVerified: "Unsupported",
    rating: 4.2,
    genre: ["Shooter"],
    tags: ["Battle Royale", "Building", "Third-Person", "Free to Play"],
    antiCheat: {
      name: "EAC / BattlEye",
      status: "Kernel Hardlock",
      alternativeFix: "Apex Legends (EAC Enabled)",
    },
  },

  {
    badId: "1085660",
    goodId: "553850",
    title: "Destiny 2",
    badStatus: "Borked",
    goodStatus: "Platinum",
    deckVerified: "Playable",
    rating: 4.7,
    genre: ["Shooter"],
    tags: ["FPS", "Sci-fi", "Loot", "Co-op"],
    antiCheat: {
      name: "Bungie Anti-Cheat",
      status: "Unstable",
      alternativeFix: "Helldivers 2 (Proton Platinum)",
    },
  },

  // {
  //   badId: "2456740",
  //   goodId: "4025700",
  //   title: "Inzo",
  //   badStatus: "Bronze",
  //   goodStatus: "Gold",
  //   deckVerified: "Playable",
  //   rating: 4.7,
  //   genre: ["Multiplayer", "Life Sim", "Simulation", "Third Person"],
  //   tags: [
  //     "Casual",
  //     "Life Sim",
  //     "Multiplayer",
  //     "Free to Play",
  //     "Cute",
  //     "Artificial Intelligence",
  //     "City Builder",
  //     "Relaxing",
  //     "Immersive Sim",
  //     "Simulation",
  //     "3D Platformer",
  //     "Character Customization",
  //     "Cartoony",
  //     "Third Person",
  //     "Funny",
  //     "Realistic",
  //     "Nature",
  //     "Singleplayer",
  //     "Atmospheric",
  //     "Story Rich",
  //   ],
  // },

  {
    badId: "2195250",
    goodId: "1665460",
    title: "EA SPORTS FC 24",
    badStatus: "Borked",
    goodStatus: "Gold",
    deckVerified: "Playable",
    rating: 4.5,
    genre: ["Sports"],
    tags: ["Soccer", "Football", "Simulation"],
    antiCheat: {
      name: "EA Anti-Cheat",
      status: "Incompatible",
      alternativeFix: "Proton Compatible",
    },
  },

  // {
  //   badId: "1599340",
  //   goodId: "238960",
  //   title: "Lost Ark",
  //   badStatus: "Bronze",
  //   goodStatus: "Silver",
  //   rating: 4.5,
  //   genre: ["RPG"],
  //   tags: ["MMO", "ARPG", "Loot", "Isometric"],
  //   antiCheat: {
  //     name: "Easy Anti-Cheat",
  //     status: "Not Enabled",
  //     alternativeFix: "Native / Vulkan",
  //   },
  // },

  {
    badId: "3240220",
    goodId: "55230",
    badStatus: "Borked",
    goodStatus: "Platinum",
    deckVerified: "Playable",
    genre: ["Open World", "Third-Person", "Vehicles"],
    tags: [
      "Open World",
      "Action",
      "Sexual Content",
      "Multiplayer",
      "Crime",
      "Mature",
      "Shooter",
      "Third Person",
      "First-Person",
      "Adventure",
      "Automobile Sim",
      "Racing",
      "Third-Person Shooter",
      "Sandbox",
      "Funny",
      "Atmospheric",
      "Comedy",
      "Moddable",
      "PvP",
      "Co-op",
    ],
    title: "GTA V",
    rating: 5,
    discovery:
      "GTA Online's implementation of BattlEye Anti-Cheat is currently not enabled for Proton, preventing access to multiplayer on Linux and Steam Deck.",
    antiCheat: {
      name: "BattlEye AntiCheat",
      status: "Broke",
    },
  },

  {
    badId: "646910",
    goodId: "1551360",
    title: "The Crew 2",
    badStatus: "Borked",
    goodStatus: "Gold",
    deckVerified: "Playable",
    discovery:
      "This Alternative applied to Forza Horizon 4 and wait for further news about Forza Horizon 6 linux support",
    genre: ["Racing"],
    tags: ["Racing", "Open World", "Automobile Sim"],
    antiCheat: {
      name: "BattlEye AntiCheat",
      status: "Broke",
    },
  },

  {
    badId: "3932890",
    goodId: "252490",
    title: "Escape from Tarkov",
    badStatus: "Bronze",
    goodStatus: "Silver",
    deckVerified: "Unsupported",
    genre: ["Survival"],
    tags: ["Extraction", "Hardcore", "FPS", "Loot"],
    antiCheat: {
      name: "BattlEye",
      status: "Unsupported",
      alternativeFix: "EAC (Community Servers)",
    },
  },

  {
    badId: "yandere-simulator",
    goodId: "2527500",
    title: "Yandere Simulator",
    badStatus: "Borked",
    goodStatus: "Platinum",
    deckVerified: "Playable",
    genre: ["Action", "Simulation", "Single-player"],
    tags: ["Single-player", "Stealth"],
    discovery:
      "Yandere Simulator is a unique indie title that has never been available on Steam. And to work it needs many tweaks to work on linux. There is no official statement about working the game on linux from the developer.",
  },
  {
    badId: "yandere-simulator",
    goodId: "1388880",
    title: "Yandere Simulator",
    badStatus: "Borked",
    goodStatus: "Platinum",
    deckVerified: "Playable",
    genre: ["Action", "Simulation", "Single-player"],
    tags: ["Single-player", "Stealth"],
    discovery:
      "Yandere Simulator is a unique indie title that has never been available on Steam. And to work it needs many tweaks to work on linux. There is no official statement about working the game on linux from the developer.",
  },

  {
    badId: "yandere-simulator",
    goodId: "863550",
    title: "Yandere Simulator",
    badStatus: "Borked",
    goodStatus: "Platinum",
    deckVerified: "Verified",
    genre: ["Action", "Simulation", "Single-player"],
    tags: ["Single-player", "Stealth"],
    discovery:
      "Yandere Simulator is a unique indie title that has never been available on Steam. And to work it needs many tweaks to work on linux. There is no official statement about working the game on linux from the developer.",
  },

  {
    badId: "2488620",
    goodId: "1066890",
    title: "F1® 24",
    badStatus: "Borked",
    goodStatus: "Native",
    deckVerified: "Verified",
    genre: ["Racing", "Sports"],
    tags: ["Racing", "Formula 1", "Simulation"],
    antiCheat: {
      name: "EA Anti-Cheat",
      status: "Unsupported",
      alternativeFix: "EAC (Community Servers)",
    },
  },
  {
    badId: "227940",
    goodId: "236390",
    title: "Heroes & Generals",
    badStatus: "Borked",
    goodStatus: "Native",
    deckVerified: "Verified",
    genre: ["Shooter", "Strategy"],
    tags: [
      "Free to Play",
      "World War II",
      "FPS",
      "Multiplayer",
      "War",
      "Shooter",
      "Action",
      "First-Person",
      "Massively Multiplayer",
      "Strategy",
      "Tactical",
      "Co-op",
      "Historical",
      "Open World",
      "Simulation",
      "Atmospheric",
      "Adventure",
      "Indie",
      "RTS",
    ],
    antiCheat: {
      name: "BattlEye AntiCheat",
      status: "Unsupported",
      alternativeFix: "EAC (Community Servers)",
    },
  },
];
