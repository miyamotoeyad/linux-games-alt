import { GameMapping } from "@/lib/data";
import { SteamGame } from "@/types/steam";
import Image from "next/image";
import Link from "next/link";

import {
  RiDownload2Line,
  RiPriceTag3Line,
  RiPulseLine,
  RiStarFill,
  RiUserVoiceLine,
  RiExternalLinkLine,
  RiCheckboxCircleFill,
  RiInformationFill,
  RiCloseCircleFill,
} from "react-icons/ri";

const DeckStatusBadge = ({ status }: { status?: string }) => {
  if (!status || status === "Unknown") return null;

  const steamDeckVerify = {
    Verified: {
      icon: RiCheckboxCircleFill,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    Playable: {
      icon: RiInformationFill,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    Unsupported: {
      icon: RiCloseCircleFill,
      color: "text-zinc-500",
      bg: "bg-zinc-500/10",
      border: "border-zinc-500/20",
    },
  };

  const {
    icon: Icon,
    color,
    bg,
    border,
  } = steamDeckVerify[status as keyof typeof steamDeckVerify];

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 rounded-md border ${bg} ${border} ${color} font-black uppercase tracking-tighter`}
    >
      <Icon size={12} />
      <span>Deck {status}</span>
    </div>
  );
};

const getStatusColor = (status?: string) => {
  switch (status) {
    case "Native":
      return "text-blue-400 border-blue-500/30 bg-blue-500/10";
    case "Platinum":
      return "text-purple-400 border-purple-500/30 bg-purple-500/10";
    case "Gold":
      return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
    case "Silver":
      return "text-gray-400 border-gray-500/30 bg-gray-500/10";
    default:
      return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
  }
};

export default function GoodGameCard({
  goodGame,
  mapping,
  deckVerified,
}: {
  goodGame: SteamGame;
  mapping?: GameMapping;
  deckVerified?: string;
}) {
  const isNonSteam = goodGame.steam_appid === 0;

  return (
    <div className="relative group p-6 rounded-4xl border border-indigo-500/40 bg-indigo-500/5 backdrop-blur-3xl shadow-2xl shadow-indigo-500/10">
      <div className="absolute top-0 right-0 px-4 py-1 bg-indigo-500 text-black text-[9px] font-black uppercase tracking-widest italic rounded-bl-xl">
        Recommended Alternative
      </div>

      <Image
        width={600}
        height={300}
        src={goodGame.header_image}
        className="w-full h-48 object-cover rounded-2xl mb-6 shadow-2xl ring-1 ring-indigo-500/30"
        alt={goodGame.name}
      />

      <div className="mb-6">
        <h2 className="text-3xl font-black uppercase tracking-tighter italic text-white leading-none">
          {goodGame.name}
        </h2>
        <div className="flex gap-2 mt-2">
          {goodGame.genres?.slice(0, 2).map((g) => (
            <span
              key={g.id}
              className="text-[9px] border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 rounded text-indigo-300 font-bold uppercase"
            >
              {g.description}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing and Rating Grid */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-500/5 animate-pulse" />
          <span className="relative z-10 flex text-[8px] font-black text-indigo-300 uppercase mb-1 items-center gap-1">
            <RiPriceTag3Line /> Current Price
          </span>
          <span className="relative z-10 text-xl font-black text-white">
            {goodGame.is_free
              ? "FREE TO PLAY"
              : goodGame.price_overview?.final_formatted || "N/A"}
          </span>
        </div>
        <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20">
          <span className="text-[8px] font-black text-indigo-300 uppercase mb-1 flex items-center gap-1">
            <RiUserVoiceLine /> Recommendation Score
          </span>
          <div className="flex items-center gap-1.5">
            <RiStarFill className="text-yellow-400" />
            <span className="text-xl font-black text-white">
              {mapping?.rating
                ? `${mapping.rating}/5`
                : (goodGame.metacritic?.score ?? "N/A")}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-[11px] font-bold uppercase text-zinc-500">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-zinc-500">Developer</span>
          <span className="text-indigo-300">{goodGame.developers?.[0]}</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>Release</span>

          <span className="text-zinc-300">{goodGame.release_date?.date}</span>
        </div>

        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-zinc-500">Compatibility</span>
          <span
            className={`px-2 py-0.5 rounded border ${getStatusColor(mapping?.goodStatus)}`}
          >
            {mapping?.goodStatus || "Verified"}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/5 pb-2">
          <span className="text-zinc-500">Steam Deck Verify</span>
          <DeckStatusBadge status={deckVerified} />
        </div>
      </div>

      {/* Buttons: Non-Steam Aware */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <Link
          href={
            isNonSteam
              ? `https://www.google.com/search?q=${goodGame.name}+official+site`
              : `https://store.steampowered.com/app/${goodGame.steam_appid}`
          }
          target="_blank"
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
        >
          {isNonSteam ? (
            <RiExternalLinkLine size={16} />
          ) : (
            <RiDownload2Line size={16} />
          )}
          {isNonSteam ? "Official Site" : "Install Game"}
        </Link>

        {!isNonSteam && (
          <Link
            href={`https://www.protondb.com/app/${goodGame.steam_appid}`}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <RiPulseLine size={16} className="text-indigo-500" /> Database
          </Link>
        )}
      </div>
    </div>
  );
}
