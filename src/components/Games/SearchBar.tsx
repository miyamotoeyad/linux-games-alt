"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("q") || "";

  const updateSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.push(`/browse?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative group z-20">
      <RiSearch2Line
        className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-500 transition-colors z-10 pointer-events-none" 
        size={22}
      />
      <input
        type="text"
        placeholder="Search game titles, genres, or tags..."
        defaultValue={currentSearch}
        onChange={(e) => updateSearch(e.target.value)}
        className="w-full bg-white/5 border border-white/10 text-lg rounded-[2rem] pl-16 pr-6 py-5 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-zinc-900/80 transition-all text-white placeholder:text-zinc-600 font-bold shadow-2xl backdrop-blur-xl"
      />
    </div>
  );
}