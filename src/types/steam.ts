export interface SteamGame {
  genres: any;
  platforms(platforms: any): import("react").ReactNode;
  publishers: any;
  developers: any;
  is_free: any;
  name: string;
  header_image: string;
  short_description: string;
  release_date: { date: string };
  price_overview?: {
    final_formatted: string;
    discount_percent: number;
  };
  recommendations?: { total: number }; // Used as a proxy for "Rating"
  metacritic?: { score: number };
}

export interface SteamApiResponse {
  [key: string]: {
    success: boolean;
    data: SteamGame;
  };
}