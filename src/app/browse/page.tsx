import { GameAlt } from "@/lib/data";
import GameCard from "@/components/Games/GameCard";
import FilterSidebar from "@/components/Games/FilterSidebar";
import { Suspense } from "react";
import { RiDiscordFill, RiSearchEyeLine } from "react-icons/ri";
import Link from "next/link";
import { Contact } from "@/lib/SocialContact";
import SearchBar from "@/components/Games/SearchBar";
import FilterDrawer from "@/components/Games/FilterDrawer";

interface PageProps {
  searchParams: Promise<{
    genre?: string;
    q?: string;
    deck?: string;
    proton?: string;
  }>;
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-36 bg-zinc-900 border border-zinc-800 animate-pulse overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      ))}
    </div>
  );
}

export default async function BrowsePage({ searchParams }: PageProps) {
  const { genre, q, deck, proton } = await searchParams;

  const filteredGames = GameAlt.filter((game) => {
    const qLower = q?.toLowerCase().trim() || "";
    const searchableText = [game.title, ...game.genre, ...game.tags]
      .join(" ")
      .toLowerCase()
      .replace(/[- ]/g, "");
    const cleanedQuery = qLower.replace(/[- ]/g, "");
    const matchesSearch = !q || searchableText.includes(cleanedQuery);
    const matchesGenre =
      !genre || genre === "All" || game.genre.includes(genre);
    const matchesDeck = !deck || game.deckVerified === deck;
    const matchesProton = !proton || game.goodStatus === proton;

    return matchesGenre && matchesSearch && matchesDeck && matchesProton;
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12 items-start relative">

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-32 w-full lg:w-72 grid gap-6 shrink-0 z-20">
          <SearchBar />
          <div className="mt-2 md:block hidden border border-zinc-800 bg-zinc-900">
            <div className="p-4">
              <FilterSidebar />
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1 w-full">
          <div className="mb-8 md:flex hidden items-center gap-4 px-2">
            <span className="text-xs px-3 py-2 font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 uppercase tracking-widest">
              {filteredGames.length} Matches Found
            </span>
            <div className="hidden sm:block h-px w-24 bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Suspense fallback={<GridSkeleton />}>
              {filteredGames.length > 0 ? (
                filteredGames.map((game, i) => (
                  <div key={`${game.badId}-${i}`}>
                    <GameCard
                      unsupportedId={game.badId}
                      alternativeId={game.goodId}
                      antiCheat={game.antiCheat?.name}
                      disclosure={game.disclosure}
                      // deckStatus={game.deckVerified}
                    />
                  </div>
                ))
              ) : (
                <div className="relative py-24 flex flex-col items-center text-center border border-zinc-800 bg-zinc-900 overflow-hidden">
                  <div className="h-20 w-20 bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-8 mx-auto">
                    <RiSearchEyeLine size={40} className="text-zinc-500" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
                    Game <span className="text-indigo-500">Not Found</span>
                  </h3>
                  <p className="text-zinc-400 max-w-sm mx-auto mb-8 font-medium">
                    No matches located in the current sector. Broaden your
                    filters or submit a new game to the squad.
                  </p>
                  <Link
                    href={Contact.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="PrimaryBtn"
                  >
                    <RiDiscordFill size={24} />
                    Request Addition
                  </Link>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="sticky bottom-4 left-0 right-0 mx-auto flex items-center max-w-7xl justify-between bg-zinc-950 border border-zinc-800 p-2 pl-6 z-50 shadow-2xl lg:hidden">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
          <span className="text-indigo-500 text-sm mr-2">
            {filteredGames.length}
          </span>
          Results
        </span>
        <FilterDrawer />
      </div>
    </>
  );
}
