"use client";

import { GameAlt } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  RiFilter3Line,
  RiCloseCircleLine,
  RiArrowDownSLine,
  RiFilter2Line,
  RiPulseFill,
  RiCheckDoubleFill,
} from "react-icons/ri";
import { SiSteamdeck } from "react-icons/si";

const genres = [
  "All",
  ...Array.from(new Set(GameAlt.flatMap((game) => game.genre))).sort(),
];

const deckStatuses = ["Verified", "Playable", "Unsupported"];
const protonStatuses = ["Native", "Platinum", "Gold", "Silver"];

export default function FilterDrawer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);

  const [draftFilters, setDraftFilters] = useState({
    genre: searchParams.get("genre") || "All",
    deck: searchParams.get("deck") || "",
    proton: searchParams.get("proton") || "",
  });

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setDraftFilters({
        genre: searchParams.get("genre") || "All",
        deck: searchParams.get("deck") || "",
        proton: searchParams.get("proton") || "",
      });
    }
  };

  const activeFiltersCount =
    (searchParams.get("genre") && searchParams.get("genre") !== "All" ? 1 : 0) +
    (searchParams.get("deck") ? 1 : 0) +
    (searchParams.get("proton") ? 1 : 0);

  const draftFiltersCount =
    (draftFilters.genre !== "All" ? 1 : 0) +
    (draftFilters.deck ? 1 : 0) +
    (draftFilters.proton ? 1 : 0);

  const updateDraftFilter = (key: keyof typeof draftFilters, value: string) => {
    setDraftFilters((prev) => {
      const isAlreadySelected = prev[key] === value;
      const isResetValue = value === "All" || !value;

      if (isAlreadySelected || isResetValue) {
        return { ...prev, [key]: key === "genre" ? "All" : "" };
      }
      return { ...prev, [key]: value };
    });
  };

  const resetDraftFilters = () => {
    setDraftFilters({ genre: "All", deck: "", proton: "" });
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (draftFilters.genre && draftFilters.genre !== "All") {
      params.set("genre", draftFilters.genre);
    } else {
      params.delete("genre");
    }

    if (draftFilters.deck) params.set("deck", draftFilters.deck);
    else params.delete("deck");

    if (draftFilters.proton) params.set("proton", draftFilters.proton);
    else params.delete("proton");

    router.push(`/browse?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] text-zinc-300">
          <RiFilter2Line size={16} className="text-indigo-500" />
          Open Filters
          {activeFiltersCount > 0 && (
            <span className="bg-indigo-500 text-white flex items-center justify-center h-5 w-5 rounded-full text-[10px]">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="bg-zinc-950/95 border-white/10 backdrop-blur-3xl w-full overflow-y-auto flex flex-col max-h-[90vh]"
      >
        <SheetHeader className="shrink-0 p-8">
          <SheetTitle className="flex items-center justify-between text-left">
            <div className="flex items-center gap-2">
              <RiFilter2Line className="text-indigo-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                Games Filters
              </span>
            </div>
            {draftFiltersCount > 0 && (
              <button
                onClick={resetDraftFilters}
                className="text-[10px] cursor-pointer font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
              >
                <RiCloseCircleLine size={14} />
                reset
              </button>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col px-8 gap-8 flex-1 overflow-y-auto pb-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-2 font-black uppercase tracking-[0.3em] text-zinc-500">
              <RiFilter3Line className="text-indigo-500" />
              <span className="text-[10px]">Genre Sector</span>
            </div>
            <div className="relative">
              <select
                value={draftFilters.genre}
                onChange={(e) => updateDraftFilter("genre", e.target.value)}
                className="w-full appearance-none bg-white/5 border border-white/10 text-zinc-300 px-4 py-4 rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                {genres.map((genre) => (
                  <option
                    key={genre}
                    value={genre}
                    className="bg-zinc-900 text-white"
                  >
                    {genre}
                  </option>
                ))}
              </select>
              <RiArrowDownSLine
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 px-2 font-black uppercase tracking-[0.3em] text-zinc-500">
              <SiSteamdeck className="text-emerald-500" />
              <span className="text-[10px]">Deck Verification</span>
            </div>
            <div className="flex flex-col gap-2">
              {deckStatuses.map((status) => (
                <button
                  key={status}
                  onClick={() => updateDraftFilter("deck", status)}
                  className={`text-xs font-black uppercase py-3 px-4 rounded-xl border transition-all cursor-pointer text-center ${
                    draftFilters.deck === status
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
                  onClick={() => updateDraftFilter("proton", status)}
                  className={`text-[10px] font-black uppercase py-3 px-3 rounded-xl border transition-all cursor-pointer text-center ${
                    draftFilters.proton === status
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

        <SheetFooter className="mt-8 pt-6 m-8 border-t border-white/10 flex-col sm:flex-row gap-3 sm:space-x-0 shrink-0">
          <button
            onClick={applyFilters}
            className="flex-2 flex items-center justify-center gap-2 text-[10px] font-black uppercase py-4 px-4 rounded-xl bg-indigo-500 text-white hover:bg-indigo-400 transition-all shadow-lg shadow-indigo-500/20"
          >
            <RiCheckDoubleFill size={16} />
            Apply Filters
            {draftFiltersCount > 0 && (
              <span className="bg-white/20 text-white flex items-center justify-center h-5 w-5 rounded-full text-[10px] ml-1">
                {draftFiltersCount}
              </span>
            )}
          </button>
          <SheetClose asChild>
            <button className="flex-1 text-[10px] font-black uppercase py-4 px-4 rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all">
              Cancel
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
