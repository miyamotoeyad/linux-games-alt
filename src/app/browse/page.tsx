import { GameAlt } from "@/lib/data";
import GameCard from "@/components/Games/GameCard";
import FilterSidebar from "@/components/Games/FilterSidebar";
import { Suspense } from "react";
import { RiDiscordFill, RiRadarLine, RiSearchEyeLine } from "react-icons/ri";
import Link from "next/link";
import { Contact } from "@/lib/SocialContact";

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-56 rounded-3xl bg-white/5 border border-white/5 animate-pulse overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      ))}
    </div>
  );
}

interface PageProps {
  searchParams: Promise<{ genre?: string; q?: string }>;
}

export default async function BrowsePage({ searchParams }: PageProps) {
  const { genre, q } = await searchParams;

  const filteredGames = GameAlt.filter((game) => {
    const qLower = q?.toLowerCase().trim() || "";

    const searchableText = [
      game.title,
      ...game.genre,
      ...game.tags,
    ]
      .join(" ")
      .toLowerCase()
      .replace(/[- ]/g, "");

    const cleanedQuery = qLower.replace(/[- ]/g, "");

    const matchesGenre =
      !genre || genre === "All" || game.genre.includes(genre);

    const matchesSearch = !q || searchableText.includes(cleanedQuery);

    return matchesGenre && matchesSearch;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start relative">
      <aside className="lg:sticky lg:top-32 w-full lg:w-72 shrink-0 z-20">
        <div className="p-1 rounded-4xl bg-linear-to-b from-white/10 to-transparent">
          <div className="bg-zinc-950/80 backdrop-blur-2xl rounded-[1.9rem] p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-6 px-2">
              <RiRadarLine className="text-indigo-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Filter Games
              </span>
            </div>
            <FilterSidebar />
          </div>
        </div>
      </aside>

      <div className="flex-1 w-full">
        <div className="mb-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">
                {filteredGames.length} Matches Found
              </span>
            </div>
            <div className="hidden sm:block h-px w-24 bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <Suspense fallback={<GridSkeleton />}>
            {filteredGames.length > 0 ? (
              filteredGames.map((game, i) => (
                <div
                  key={`${game.badId}-${i}`}
                  className="group transition-all duration-300"
                >
                  <GameCard
                    unsupportedId={game.badId}
                    alternativeId={game.goodId}
                    antiCheat={game.antiCheat?.name}
                  />
                </div>
              ))
            ) : (
              <div className="relative py-24 flex flex-col items-center text-center rounded-[3rem] bg-white/5 border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-indigo-500/5 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="h-20 w-20 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                    <RiSearchEyeLine size={40} className="text-zinc-500" />
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
                    Game <span className="text-indigo-500">Not Found</span>
                  </h3>
                  <p className="text-zinc-400 max-w-sm mx-auto mb-10 font-medium">
                    No matches located in the current sector. Broaden your
                    filters or submit new game to the squad.
                  </p>

                  <Link
                    href={Contact.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-2xl font-black uppercase tracking-tight transition-all active:scale-95 shadow-2xl"
                  >
                    <RiDiscordFill size={24} />
                    Request Addition
                  </Link>
                </div>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
