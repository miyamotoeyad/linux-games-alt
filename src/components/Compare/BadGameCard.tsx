// src/components/Compare/BadGameCard.tsx

import { SteamGame } from "@/types/steam";
import Image from "next/image";
import Link from "next/link";
import { RiAlertLine, RiPulseLine, RiStarFill } from "react-icons/ri";

export default function BadGameCard({ badGame }: { badGame: SteamGame }) {
  const isNonSteam = badGame.steam_appid === 0;

  return (
    <div className="relative group p-6 rounded-4xl border border-red-500/20 bg-red-500/2 backdrop-blur-3xl">
      <div className="absolute top-0 left-0 px-4 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest italic rounded-br-xl">
        Restricted
      </div>
      <Image
        width={600}
        height={300}
        src={badGame.header_image}
        className="w-full h-48 object-cover rounded-2xl mb-6 grayscale opacity-80"
        alt={badGame.name}
      />

      <div className="mb-6">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-400 leading-none">
          {badGame.name}
        </h2>

        <div className="flex gap-2 mt-2">
          {badGame.genres?.slice(0, 2).map((g) => (
            <span
              key={g.id}
              className="text-[9px] border border-red-500/20 bg-red-500/10 px-2 py-0.5 rounded text-red-300 font-bold uppercase"
            >
              {g.description}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
          <span className="block text-[8px] font-black text-zinc-500 uppercase mb-1">
            Entry Cost
          </span>

          <span className="text-xl font-black text-red-400/80">
            {badGame.is_free
              ? "FREE"
              : badGame.price_overview?.final_formatted || "N/A"}
          </span>
        </div>

        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
          <span className="block text-[8px] font-black text-zinc-500 uppercase mb-1">
            Metacritic
          </span>

          <div className="flex items-center gap-1.5">
            <RiStarFill className="text-red-500/50" />

            <span className="text-xl font-black text-zinc-300">
              {badGame.metacritic?.score ?? "??"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-[11px] font-bold uppercase text-zinc-500">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>Dev</span>

          <span className="text-zinc-300">{badGame.developers?.[0]}</span>
        </div>

        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>Release</span>

          <span className="text-zinc-300">{badGame.release_date?.date}</span>
        </div>
      </div>

      <div className="mt-6">
        {isNonSteam ? (
          <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[10px] font-black uppercase tracking-widest text-red-500">
            <RiAlertLine size={16} /> Anti-Cheat Blocked
          </div>
        ) : (
          <Link
            href={`https://www.protondb.com/app/${badGame.steam_appid}`}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <RiPulseLine size={16} className="text-red-400" /> View status in
            protondb
          </Link>
        )}
      </div>
    </div>
  );
}
