export interface GameMapping {
  badId: string;
  goodId: string;
  title: string;
  genre: string[];
  tags: string[];
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
    genre: ["Shooter"],
    tags: ["FPS", "Battle Royale", "Fast-Paced"],
    antiCheat: {
      name: "Ricochet",
      status: "Kernel Block",
      alternativeFix: "EAC (Linux Supported)",
    },
  },

  {
    badId: "2456740",
    goodId: "1222670",
    title: "InZo",
    genre: ["Life Simulator"],
    tags: ["Life Simulator", "Open World", "Sandbox", "Life Realistic"],
  },

  {
    badId: "578080",
    goodId: "1172470",
    title: "PUBG: BATTLEGROUNDS",
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
    genre: ["Shooter"],
    tags: ["Battle Royale", "Building", "Third-Person", "Free to Play"],
    antiCheat: {
      name: "EAC / BattlEye",
      status: "Kernel Hardlock",
      alternativeFix: "Apex Legends (Linux Verified)",
    },
  },

  {
    badId: "1085660",
    goodId: "553850",
    title: "Destiny 2",
    genre: ["Shooter"],
    tags: ["FPS", "Sci-fi", "Loot", "Co-op"],
    antiCheat: {
      name: "Bungie Anti-Cheat",
      status: "Unstable",
      alternativeFix: "Helldivers 2 (Native Linux, Co-op Shooter)",
    },
  },

  {
    badId: "2195250",
    goodId: "1665460",
    title: "EA SPORTS FC 24",
    genre: ["Sports"],
    tags: ["Soccer", "Football", "Simulation"],
    antiCheat: {
      name: "EA Anti-Cheat",
      status: "Incompatible",
      alternativeFix: "Proton Compatible",
    },
  },

  {
    badId: "1599340",
    goodId: "238960",
    title: "Lost Ark",
    genre: ["RPG"],
    tags: ["MMO", "ARPG", "Loot", "Isometric"],
    antiCheat: {
      name: "Easy Anti-Cheat",
      status: "Not Enabled",
      alternativeFix: "Native / Vulkan",
    },
  },

  {
    badId: "646910",
    goodId: "1551360",
    title: "The Crew 2",
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
    genre: ["Survival"],
    tags: ["Extraction", "Hardcore", "FPS", "Loot"],
    antiCheat: {
      name: "BattlEye",
      status: "Unsupported",
      alternativeFix: "EAC (Community Servers)",
    },
  },

  {
    badId: "2488620",
    goodId: "1066890",
    title: "F1® 24",
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
