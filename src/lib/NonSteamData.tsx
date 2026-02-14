import { NonSteamGame } from "@/types/steam";

export const EXTERNAL_GAMES: Record<string, NonSteamGame> = {
  fortnite: {
    type: "game",
    name: "Fortnite",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://www.fortnite.com/",
    header_image:
      "https://gaming-cdn.com/images/products/2500/orig/fortnite-pc-epic-games-cover.jpg",
    short_description:
      "Build, battle, and create. Fortnite is the constantly evolving multiplayer game where you and your friends battle to be the last one standing in an intense 100-player PvP Battle Royale mode. Also includes Creative mode, Rocket Racing, and Festival.",
    developers: ["Epic Games"],
    publishers: ["Epic Games"],
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 83 },
    tags: ["Multiplayer", "PvP", "Battle Royale", "Free to Play", "Building", "Third-Person"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "25 Jul, 2017" },
    pc_requirements: {
      minimum: "Core i5 2.4GHz or better, 8GB RAM, GTX 960 or better",
      recommended: "Core i7 2.8GHz or better, 16GB RAM, GTX 1080 or better",
    },
  },

  valorant: {
    type: "game",
    name: "Valorant",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://playvalorant.com/",
    header_image:
      "https://wiki.leagueoflegends.com/en-us/images/thumb/Valorant_Cover_05.jpg/640px-Valorant_Cover_05.jpg",
    short_description:
      "Valorant is a free-to-play 5v5 tactical first-person shooter by Riot Games. Play as one of 20+ unique Agents with distinctive abilities. Master tactical gameplay and make every move count in competitive ranked matches.",
    developers: ["Riot Games"],
    publishers: ["Riot Games"],
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 83 },
    tags: ["Multiplayer", "PvP", "FPS", "Tactical", "Competitive", "Free to Play", "Hero Shooter"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "02 Jun, 2020" },
    pc_requirements: {
      minimum: "Intel 2GB RAM, 128-bit processor with SSE2, Intel HD Graphics 4000 equivalent or better",
      recommended: "Intel i3-4150 or better, 4GB RAM, GTX 1050 or better",
    },
  },

  "league-of-legends": {
    type: "game",
    name: "League of Legends",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://www.leagueoflegends.com/",
    header_image:
      "https://gaming-cdn.com/images/products/9456/616x353/league-of-legends-pc-game-cover.jpg",
    short_description:
      "League of Legends is a team-based strategy game where two teams of five battle to destroy the opponent's base. Choose from 170+ unique champions with different abilities and playstyles. Master competitive 5v5 gameplay.",
    developers: ["Riot Games"],
    publishers: ["Riot Games"],
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 78 },
    tags: ["Multiplayer", "Co-op", "MOBA", "Strategy", "Competitive", "Free to Play", "Team-Based"],
    genres: [
      { id: 1, description: "MOBA" },
      { id: 2, description: "Strategy" },
    ],
    release_date: { coming_soon: false, date: "27 Oct, 2009" },
    pc_requirements: {
      minimum: "Intel Pentium 4 1.6GHz or AMD equivalent, 512MB RAM, GeForce 6200 or equivalent",
      recommended: "Intel Core 2 Duo E8400 or better, 2GB RAM, GeForce 8800 GT or equivalent",
    },
  },

  "heroes-of-newerth": {
    type: "game",
    name: "Heroes of Newerth",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://heroesofnewerth.com/",
    header_image:
      "https://bleedingcool.com/wp-content/uploads/2025/10/Heroes-of-Newerth-Reborn-Art.jpeg",
    short_description:
      "Heroes of Newerth is a free-to-play MOBA with native Linux support. Two teams of five battle to destroy the opponent's base. Features 200+ heroes, competitive ranked mode, and full cross-platform support including Linux.",
    developers: ["S2 Games", "Frostburn Studios"],
    publishers: ["S2 Games", "Frostburn Studios"],
    platforms: { windows: true, mac: true, linux: true },
    metacritic: { score: 78 },
    tags: ["Multiplayer", "Co-op", "MOBA", "Strategy", "Native Linux", "Free to Play", "Competitive"],
    genres: [
      { id: 1, description: "MOBA" },
      { id: 2, description: "Strategy" },
    ],
    release_date: { coming_soon: false, date: "16 May, 2010" },
    pc_requirements: {
      minimum: "Intel Pentium Core 2 Duo or AMD equivalent, 1GB RAM, GeForce 7600 or equivalent",
      recommended: "Intel Core i5 or better, 4GB RAM, GeForce GTX 560 or equivalent",
    },
  },

  "yandere-simulator": {
    type: "game",
    name: "Yandere Simulator",
    steam_appid: 0,
    required_age: 18,
    is_free: true,
    officialUrl: "https://yanderesimulator.com/",
    header_image: "https://i.postimg.cc/SRnx3Xzd/image.png",
    short_description:
      "Yandere Simulator is a stealth game about stalking a boy and secretly eliminating anyone who seems interested in him, while maintaining the image of an innocent schoolgirl. Still in active development, not officially released on Steam.",
    developers: ["YandereDev (Alex Mahan)"],
    publishers: ["YandereDev"],
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 0 },
    tags: ["Single-player", "Stealth", "Action", "Simulation", "Indie", "Early Access"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Simulation" },
    ],
    release_date: { coming_soon: true, date: "In Development (Since 2014)" },
    pc_requirements: {
      minimum: "Intel Core i5 or equivalent, 8GB RAM, GTX 1050 or equivalent",
      recommended: "Intel Core i7 or equivalent, 16GB RAM, GTX 1060 or equivalent",
    },
  },

  "genshin-impact": {
    type: "game",
    name: "Genshin Impact",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://genshin.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/c2904ed6cfa731edd18d8ffe285b6695.png",
    short_description:
      "Genshin Impact is a free-to-play open-world action RPG. Explore the beautiful world of Teyvat, switch between 4-character teams with elemental powers, solve puzzles, and experience a rich story. Features cross-platform play.",
    developers: ["HoYoverse (miHoYo)"],
    publishers: ["HoYoverse", "Cognosphere"],
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 84 },
    tags: [
      "Open World",
      "RPG",
      "Gacha",
      "Action",
      "Adventure",
      "Fantasy",
      "Anime",
      "Free to Play",
      "Multiplayer Co-op",
    ],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "RPG" },
      { id: 3, description: "Adventure" },
    ],
    release_date: { coming_soon: false, date: "28 Sep, 2020" },
    pc_requirements: {
      minimum: "Intel i5-6600K or AMD equivalent, 8GB RAM, GTX 1030 or equivalent",
      recommended: "Intel i7-9700 or better, 16GB RAM, GTX 1060 or equivalent",
    },
  },

  "honkai-impact-3rd": {
    type: "game",
    name: "Honkai Impact 3rd",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://honkaiimpact3.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/3b2c2f8d7e9c4a1b5f6g7h8i9j0k1l2m.png",
    short_description:
      "Honkai Impact 3rd is a free-to-play action RPG with fast-paced hack-and-slash combat. Play as beautiful heroines with unique abilities. Features co-op dungeons, challenging bosses, and regular new content updates.",
    developers: ["HoYoverse (miHoYo)"],
    publishers: ["HoYoverse", "Cognosphere"],
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 75 },
    tags: [
      "Action",
      "Anime",
      "Hack and Slash",
      "Female Protagonist",
      "Gacha",
      "Free to Play",
      "Co-op",
      "RPG",
    ],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "RPG" },
    ],
    release_date: { coming_soon: false, date: "14 May, 2016" },
    pc_requirements: {
      minimum: "Intel Core i5 or AMD equivalent, 6GB RAM, GTX 960 or equivalent",
      recommended: "Intel Core i7 or better, 8GB RAM, GTX 1070 or equivalent",
    },
  },

  "honkai-star-rail": {
    type: "game",
    name: "Honkai: Star Rail",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://hsr.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/ea0ac41ec100ed71b192eaa7f45c6692.png",
    short_description:
      "Honkai: Star Rail is a free-to-play space fantasy RPG with turn-based combat. Board the Astral Express and explore the galaxy. Features strategic team composition, beautiful characters, and an engaging story.",
    developers: ["HoYoverse (miHoYo)"],
    publishers: ["HoYoverse", "Cognosphere"],
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 80 },
    tags: [
      "Turn-Based Combat",
      "RPG",
      "Gacha",
      "Sci-Fi",
      "Anime",
      "Free to Play",
      "Strategy",
      "Adventure",
    ],
    genres: [
      { id: 1, description: "RPG" },
      { id: 2, description: "Strategy" },
      { id: 3, description: "Adventure" },
    ],
    release_date: { coming_soon: false, date: "26 Apr, 2023" },
    pc_requirements: {
      minimum: "Intel i5-9400 or AMD equivalent, 6GB RAM, GTX 650 or equivalent",
      recommended: "Intel i7-8700 or better, 8GB RAM, GTX 1060 or equivalent",
    },
  },

  "zenless-zone-zero": {
    type: "game",
    name: "Zenless Zone Zero",
    steam_appid: 0,
    required_age: 16,
    is_free: true,
    officialUrl: "https://zenless.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/fb1c379f0c46eb1224cab79f519bffe2.png",
    short_description:
      "Zenless Zone Zero is a free-to-play urban fantasy action RPG. Dive into the mysterious Hollows and battle ethereal creatures. Features fast-paced action combat, a post-apocalyptic setting, and stylish characters.",
    developers: ["HoYoverse (miHoYo)"],
    publishers: ["HoYoverse", "Cognosphere"],
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 79 },
    tags: [
      "Action",
      "RPG",
      "Gacha",
      "Hack and Slash",
      "Urban Fantasy",
      "Free to Play",
      "Anime",
      "Post-Apocalyptic",
    ],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "RPG" },
    ],
    release_date: { coming_soon: false, date: "04 Jul, 2024" },
    pc_requirements: {
      minimum: "Intel i5-9400 or AMD equivalent, 8GB RAM, GTX 970 or equivalent",
      recommended: "Intel i7-10700 or better, 16GB RAM, GTX 1660 Super or equivalent",
    },
  },

  "warframe": {
    type: "game",
    name: "Warframe",
    steam_appid: 230410,
    required_age: 16,
    is_free: true,
    officialUrl: "https://www.warframe.com/",
    header_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg",
    short_description:
      "Warframe is a free-to-play cooperative online action game. Play as a Tenno warrior in a sci-fi universe. Features fast-paced combat, co-op missions, extensive customization, and full native Linux support.",
    developers: ["Digital Extremes"],
    publishers: ["Digital Extremes"],
    platforms: { windows: true, mac: false, linux: true },
    metacritic: { score: 77 },
    tags: [
      "Multiplayer",
      "Co-op",
      "Action",
      "Free to Play",
      "Third-Person",
      "Sci-Fi",
      "Native Linux",
      "Customization",
    ],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "25 Mar, 2013" },
    pc_requirements: {
      minimum: "Intel Core i5 or AMD equivalent, 4GB RAM, NVIDIA GTX 950 or equivalent",
      recommended: "Intel Core i7 or better, 8GB RAM, NVIDIA GTX 1080 or equivalent",
    },
  },
};