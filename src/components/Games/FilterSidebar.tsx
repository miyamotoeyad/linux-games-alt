"use client";

import { GameAlt } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { RiSearch2Line, RiFilter3Line, RiCloseCircleLine, RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";

const genres = [
  "All", 
  ...Array.from(new Set(GameAlt.flatMap((game) => game.genre))).sort()
];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentGenre = searchParams.get("genre") || "All";
  const currentSearch = searchParams.get("q") || "";

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/browse?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      
      <div className="grid space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-2">
          Search the game
        </label>
        <div className="relative group">
          <RiSearch2Line 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" 
            size={18} 
          />
          <input
            type="text"
            placeholder="Find Game or genres..."
            defaultValue={currentSearch}
            onChange={(e) => updateFilter("q", e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-sm rounded-2xl pl-12 pr-4 py-4 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 focus:bg-zinc-900/80 transition-all text-white placeholder:text-zinc-600 font-bold"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <RiFilter3Line className="text-indigo-500" />
            Sector
          </div>
          
          {(currentGenre !== "All" || currentSearch) && (
            <button
              onClick={() => router.push("/browse")}
              className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <RiCloseCircleLine size={14} />
              Reset
            </button>
          )}
        </div>

        {/* MOBILE DROPDOWN (Hidden on Desktop) */}
        <div className="relative md:hidden">
          <select
            value={currentGenre}
            onChange={(e) => updateFilter("genre", e.target.value)}
            className="w-full appearance-none bg-white/5 border border-white/10 text-zinc-300 px-4 py-4 rounded-xl text-xs font-black uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre} className="bg-zinc-900 text-white">
                {genre}
              </option>
            ))}
          </select>
          <RiArrowDownSLine className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={20} />
        </div>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <nav className="hidden md:flex flex-col gap-2">
          {genres.map((genre) => {
            const isActive = currentGenre === genre;
            return (
              <button
                key={genre}
                onClick={() => updateFilter("genre", genre)}
                className={`group cursor-pointer relative flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 translate-x-2"
                    : "bg-white/5 text-zinc-500 hover:bg-white/10 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center gap-3">
                   <div className={`w-1.5 h-1.5 rounded-full transition-all ${isActive ? "bg-white scale-125" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
                   {genre}
                </div>
                {isActive && <RiArrowRightSLine size={18} className="animate-in fade-in slide-in-from-left-2" />}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}