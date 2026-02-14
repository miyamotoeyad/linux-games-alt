interface SteamGenre {
  id: number;
  description: string;
}

export interface GameMapping {
  badId: string;
  goodId: string;
  title: string;
  genre: string[];
  tags: string[];
  disclosure?: string;
  officialUrl?: string;
  badStatus: "Borked" | "Bronze" | "Silver";
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

export interface NonSteamGame {
  genres: SteamGenre[];
  platforms: { windows: boolean; mac: boolean; linux: boolean };
  publishers: string[];
  developers: string[];
  is_free: boolean;
  type: string;
  steam_appid: number;
  required_age: number;
  name: string;
  header_image: string;
  officialUrl: string;
  short_description: string;
  tags: string[];
  pc_requirements: { minimum: string; recommended: string };
  release_date: { coming_soon: boolean; date: string };
  price_overview?: {
    final_formatted: string;
    discount_percent: number;
  };
  recommendations?: { total: number };
  metacritic?: { score: number };
}

export interface SteamApiResponse {
  [key: string]: {
    success: boolean;
    data: NonSteamGame;
  };
}
