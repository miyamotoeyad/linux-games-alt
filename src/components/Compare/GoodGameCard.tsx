import { GameMapping, NonSteamGame } from "@/types/steam";
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

  const { icon: Icon, color, bg, border } =
    steamDeckVerify[status as keyof typeof steamDeckVerify];

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 border ${bg} ${border} ${color} font-bold uppercase tracking-wide text-[10px]`}
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
  goodGame: NonSteamGame;
  mapping?: GameMapping;
  deckVerified?: string;
}) {
  const isNonSteam = goodGame.steam_appid === 0;

  return (
    <div className="relative group p-6 rounded-2xl border border-indigo-500/40 bg-indigo-500/5">
      {/* Tag */}
      <div className="absolute top-0 right-0 px-4 py-1 bg-indigo-500 text-white text-[9px] font-bold uppercase tracking-widest italic rounded-bl-lg">
        Recommended Alternative
      </div>

      {/* Cover image */}
      <Image
        width={600}
        height={800}
        src={goodGame.header_image}
        className="w-full object-cover rounded-lg mb-6 shadow-xl ring-1 ring-indigo-500/30"
        alt={goodGame.name}
      />

      {/* Title & genres */}
      <div className="mb-6">
        <h2 className="text-2xl font-blacked uppercase tracking-wide italic text-white leading-none">
          {goodGame.name}
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {goodGame.genres?.slice(0, 2).map((g, i) => (
            <span
              key={i}
              className="text-[9px] border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-indigo-300 font-bold uppercase"
            >
              {g.description}
            </span>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
          <span className="flex text-[8px] font-bold text-indigo-300 uppercase mb-1 items-center gap-1">
            <RiPriceTag3Line /> Current Price
          </span>
          <span className="text-xl font-blacked text-white">
            {goodGame.is_free
              ? "FREE TO PLAY"
              : goodGame.price_overview?.final_formatted || "N/A"}
          </span>
        </div>

        <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
          <span className="text-[8px] font-bold text-indigo-300 uppercase mb-1 flex items-center gap-1">
            <RiUserVoiceLine /> Recommendation Score
          </span>
          <div className="flex items-center gap-1.5">
            <RiStarFill className="text-yellow-400" />
            <span className="text-xl font-blacked text-white">
              {mapping?.rating
                ? `${mapping.rating}/5`
                : (goodGame.metacritic?.score ?? "N/A")}
            </span>
          </div>
        </div>
      </div>

      {/* Details list */}
      <div className="space-y-3 text-[11px] font-bold uppercase text-zinc-500">
        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Developer</span>
          <span className="text-indigo-300">{goodGame.developers?.[0]}</span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Release</span>
          <span className="text-zinc-300">{goodGame.release_date?.date}</span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Compatibility</span>
          <span className={`px-2 py-0.5 border ${getStatusColor(mapping?.goodStatus)}`}>
            {mapping?.goodStatus || "Verified"}
          </span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Steam Deck Verify</span>
          <DeckStatusBadge status={deckVerified} />
        </div>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <Link
          href={
            goodGame.officialUrl
              ? goodGame.officialUrl
              : isNonSteam
              ? `https://www.google.com/search?q=${encodeURIComponent(goodGame.name)}+official+site`
              : `steam://run/${goodGame.steam_appid}`
          }
          target="_blank"
          className="flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 text-[10px] font-blacked uppercase tracking-widest hover:bg-indigo-500 transition-all"
        >
          {isNonSteam || goodGame.officialUrl ? (
            <RiExternalLinkLine size={16} />
          ) : (
            <RiDownload2Line size={16} />
          )}
          {goodGame.officialUrl
            ? "Official Site"
            : isNonSteam
            ? "Visit Site"
            : "Install Game"}
        </Link>

        {!isNonSteam ? (
          <Link
            href={`https://www.protondb.com/app/${goodGame.steam_appid}`}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-blacked uppercase tracking-widest hover:bg-zinc-800 hover:border-zinc-700 transition-all"
          >
            <RiPulseLine size={16} className="text-indigo-500" /> Database
          </Link>
        ) : (
          <Link
            href={`https://store.steampowered.com/search/?term=${encodeURIComponent(goodGame.name)}`}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-blacked uppercase tracking-widest hover:bg-zinc-800 hover:border-zinc-700 transition-all text-zinc-400"
          >
            <RiExternalLinkLine size={16} /> Check Steam
          </Link>
        )}
      </div>
    </div>
  );
}
