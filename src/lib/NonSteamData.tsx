import { SteamGame } from "@/types/steam";

export const EXTERNAL_GAMES: Record<string, SteamGame> = {
  fortnite: {
    type: "game",
    name: "Fortnite",
    steam_appid: 0,
    required_age: 12,
    is_free: true,

    header_image:
      "https://gaming-cdn.com/images/products/2500/orig/fortnite-pc-epic-games-cover.jpg",
    short_description:
      "Build, battle, and create. Fortnite is the constantly evolving multiplayer game where you and your friends battle to be the last one standing in an intense 100-player PvP mode.",
    developers: ["Epic Games"],
    publishers: ["Epic Games"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 83 },
    categories: [
      { id: 1, description: "Multiplayer" },
      { id: 2, description: "PvP" },
    ],
    genres: [
      { id: "1", description: "Action" },
      { id: "2", description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "21 Jul, 2017" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  valorant: {
    type: "game",
    name: "Valorant",
    steam_appid: 0,
    required_age: 12,
    is_free: true,

    header_image:
      "https://wiki.leagueoflegends.com/en-us/images/thumb/Valorant_Cover_05.jpg/640px-Valorant_Cover_05.jpg",
    short_description:
      "Valorant is a tactical shooter where players use unique abilities to outmaneuver opponents in fast-paced rounds.",
    developers: ["Riot Games"],
    publishers: ["Riot Games"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 83 },
    categories: [
      { id: 1, description: "Multiplayer" },
      { id: 2, description: "PvP" },
    ],
    genres: [
      { id: "1", description: "Action" },
      { id: "2", description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "21 Jul, 2017" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  "league-of-legends": {
    type: "game",
    name: "League of Legends",
    steam_appid: 0,
    required_age: 12,
    is_free: true,

    header_image:
      "https://gaming-cdn.com/images/products/9456/616x353/league-of-legends-pc-game-cover.jpg",
    short_description:
      "A team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays.",
    developers: ["Riot Games"],
    publishers: ["Riot Games"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 78 },
    categories: [
      { id: 1, description: "Multiplayer" },
      { id: 2, description: "Co-op" },
    ],
    genres: [
      { id: "1", description: "MOBA" },
      { id: "2", description: "Strategy" },
    ],
    release_date: { coming_soon: false, date: "27 Oct, 2009" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  "yandere-simulator": {
    type: "game",
    name: "Yandere Simulator",
    steam_appid: 0,
    required_age: 18,
    is_free: true,
    header_image: "https://i.postimg.cc/SRnx3Xzd/image.png", 
    short_description: "A stealth game about stalking a boy and secretly eliminating anyone who seems interested in him, while maintaining the image of an innocent schoolgirl.",
    developers: ["YandereDev"],
    publishers: ["YandereDev"],
    price_overview: undefined,
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 0 },
    categories: [
      { id: 1, description: "Single-player" },
      { id: 3, description: "Stealth" },
    ],
    genres: [
      { id: "1", description: "Action" },
      { id: "2", description: "Simulation" },
    ],
    release_date: { coming_soon: true, date: "In Development" },
    pc_requirements: { 
      minimum: "GTX 1050 or higher, 8GB RAM", 
      recommended: "GTX 1060 or higher, 16GB RAM" 
    },
},
};
