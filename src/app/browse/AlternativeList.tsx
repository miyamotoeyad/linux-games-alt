"use client";

import { useState } from "react";
import GameCard from "@/components/Games/GameCard";
import { RiLoader3Line, RiAddLine } from "react-icons/ri";
import { GameMapping } from "@/types/steam";

interface GameGridProps {
  games: GameMapping[];
}

export default function AlternativeList({ games }: GameGridProps) {
  const [displayCount, setDisplayCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + 10);
      setIsLoading(false);
    }, 600);
  };

  const visibleGames = games.slice(0, displayCount);
  const hasMore = displayCount < games.length;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8">
        {visibleGames.map((game, i) => (
          <div 
            key={`${game.badId}-${i}`}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${(i % 10) * 50}ms` }}
          >
            <GameCard
              unsupportedId={game.badId}
              alternativeId={game.goodId}
              antiCheat={game.antiCheat?.name}
              disclosure={game.disclosure}
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl overflow-hidden transition-all hover:border-indigo-500/50 disabled:opacity-50"
          >
            <div className="relative z-10 flex items-center gap-3">
              {isLoading ? (
                <RiLoader3Line className="animate-spin text-indigo-500" size={20} />
              ) : (
                <RiAddLine className="text-indigo-500 group-hover:rotate-90 transition-transform" size={20} />
              )}
              <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-100">
                {isLoading ? "Fetching Data..." : "Load More Dossiers"}
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}