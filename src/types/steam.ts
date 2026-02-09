interface SteamGenre {
  id: string;
  description: string;
}

export interface SteamGame {
  genres: SteamGenre[];
  platforms: { windows: boolean; mac: boolean; linux: boolean };
  publishers: string[];
  developers: string[];
  is_free: boolean;
  type: string
  steam_appid: number;
  required_age: number;
  name: string;
  header_image: string;
  short_description: string;
  categories: Array<{ id: number; description: string }>;
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
    data: SteamGame;
  };
}