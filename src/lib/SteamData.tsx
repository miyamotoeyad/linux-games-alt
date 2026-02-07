"use server";

import { SteamApiResponse, SteamGame } from "@/types/steam";
import { EXTERNAL_GAMES } from "./NonSteamData"; // Ensure this path matches

export async function getSteamGame(id: string): Promise<SteamGame | null> {
  if (EXTERNAL_GAMES[id]) {
    return EXTERNAL_GAMES[id];
  }

  try {
    const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}`, {
      next: { revalidate: 86400 } 
    });
    
    const data: SteamApiResponse = await res.json();
    return data[id]?.success ? data[id].data : null;
  } catch (error) {
    console.error("Steam API Error:", error);
    return null;
  }
}