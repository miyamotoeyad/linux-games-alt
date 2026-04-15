"use client";

import { useState, useEffect, useRef } from "react";
import GameCard from "@/components/Games/GameCard";
import { RiLoader3Line } from "react-icons/ri";
import { GameMapping } from "@/types/steam";

interface GameGridProps {
  games: GameMapping[];
}

export default function AlternativeList({ games }: GameGridProps) {
  const [displayCount, setDisplayCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const visibleGames = games.slice(0, displayCount);
  const hasMore = displayCount < games.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setDisplayCount((prev) => prev + 10);
            setIsLoading(false);
          }, 600);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
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

      {/* Sentinel — triggers load when scrolled into view */}
      <div ref={sentinelRef} className="h-4" />

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex items-center justify-center gap-3 py-6">
          <RiLoader3Line className="animate-spin text-indigo-500" size={20} />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Loading...
          </span>
        </div>
      )}

      {/* End of list */}
      {!hasMore && visibleGames.length > 0 && (
        <div className="flex items-center gap-4 py-6">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            {games.length} Alternatives Listed
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>
      )}
    </div>
  );
}
