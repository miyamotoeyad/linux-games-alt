"use client";

import { GameAlt } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import {
  RiCloseCircleLine,
  RiFilter2Line,
  RiPulseFill,
} from "react-icons/ri";
import { SiSteamdeck } from "react-icons/si";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const genres = [
  "All",
  ...Array.from(new Set(GameAlt.flatMap((game) => game.genre))).sort(),
];

const deckStatuses = ["Verified", "Playable", "Unsupported"];
const protonStatuses = ["Native", "Platinum", "Gold", "Silver"];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentGenre = searchParams.get("genre") || "All";
  const currentSearch = searchParams.get("q") || "";
  const currentDeck = searchParams.get("deck") || "";
  const currentProton = searchParams.get("proton") || "";

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value || value === "All" || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/browse?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <RiFilter2Line className="text-indigo-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Navigation / Filter
          </span>
        </div>
        {(currentGenre !== "All" ||
          currentSearch ||
          currentDeck ||
          currentProton) && (
          <button
            onClick={() => router.push("/browse")}
            className="text-[10px] cursor-pointer font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
          >
            <RiCloseCircleLine size={14} />
            Reset
          </button>
        )}
      </div>

      <Select
        value={currentGenre}
        onValueChange={(value) => updateFilter("genre", value)}
      >
        <SelectTrigger className="w-full bg-white/5 border border-white/10 text-zinc-300 px-4 py-6 rounded-xl text-xs font-black uppercase tracking-widest focus:ring-2 focus:ring-indigo-500/40 outline-none">
          <SelectValue placeholder="Select Genre" />
        </SelectTrigger>

        <SelectContent className="bg-zinc-900 border-white/10 text-white">
          <SelectGroup>
            {genres.map((genre) => (
              <SelectItem
                key={genre}
                value={genre}
                className="focus:bg-indigo-500 transition-colors duration-100 cursor-pointer focus:text-white uppercase font-bold"
              >
                {genre}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="space-y-4">
        <div className="flex items-center gap-2 px-2 font-black uppercase tracking-[0.3em] text-zinc-500">
          <SiSteamdeck className="text-emerald-500" />
          <span className="text-[10px]">Deck Verification</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {deckStatuses.map((status) => (
            <button
              key={status}
              onClick={() => updateFilter("deck", status)}
              className={`flex-1 text-[9px] font-black uppercase py-2 px-3 rounded-lg border transition-all cursor-pointer ${
                currentDeck === status
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  : "bg-white/5 border-white/10 text-zinc-500 hover:border-white/20"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 px-2 font-black uppercase tracking-[0.3em] text-zinc-500">
          <RiPulseFill className="text-indigo-500" />
          <span className="text-[10px]">Alternative Status</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {protonStatuses.map((status) => (
            <button
              key={status}
              onClick={() => updateFilter("proton", status)}
              className={`text-[9px] font-black uppercase py-2.5 px-3 rounded-lg border transition-all cursor-pointer text-center ${
                currentProton === status
                  ? "bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
