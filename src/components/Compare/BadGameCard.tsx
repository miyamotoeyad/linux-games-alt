import { GameMapping, NonSteamGame } from "@/types/steam";
import Image from "next/image";
import Link from "next/link";
import { RiAlertLine, RiReactjsLine, RiShieldKeyholeLine } from "react-icons/ri";

const AntiCheatBadge = ({ status }: { status?: string }) => {
  if (!status) return null;
  const isBypassable =
    status.toLowerCase().includes("easy") ||
    status.toLowerCase().includes("battleye");

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 border font-bold uppercase text-[10px]
      ${isBypassable ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}
    >
      <RiShieldKeyholeLine size={12} />
      <span>{status}</span>
    </div>
  );
};

export default function BadGameCard({
  badGame,
  mapping,
}: {
  badGame: NonSteamGame;
  mapping?: GameMapping;
}) {
  const isNonSteam = badGame.steam_appid === 0;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Borked":
        return "text-red-400 border-red-500/30 bg-red-500/10";
      case "Bronze":
        return "text-amber-400 border-amber-500/30 bg-amber-500/10";
    }
  };

  return (
    <div className="relative group p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.02]">
      {/* Status tag */}
      <div className="absolute top-0 left-0 px-4 py-1 bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest italic rounded-br-lg flex gap-2 items-center">
        <RiAlertLine /> {mapping?.badStatus || "Restricted"}
      </div>

      {/* Cover image */}
      <Image
        width={600}
        height={800}
        src={badGame.header_image}
        className="w-full h-56 object-cover rounded-lg mb-6 shadow-xl grayscale opacity-80 ring-1 ring-red-500/30"
        alt={badGame.name}
      />

      {/* Title & genres */}
      <div className="mb-6">
        <h2 className="text-2xl font-blacked uppercase text-zinc-400 leading-none">
          {badGame.name}
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {badGame.genres?.slice(0, 3).map((genre, i) => (
            <span
              key={i}
              className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-700 px-2 py-0.5"
            >
              {genre.description}
            </span>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
          <span className="block text-[8px] font-bold text-zinc-500 uppercase mb-1">
            Entry Cost
          </span>
          <span className="text-xl font-blacked text-red-400/80">
            {badGame.is_free
              ? "FREE"
              : badGame.price_overview?.final_formatted || "N/A"}
          </span>
        </div>

        <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
          <span className="block text-[8px] font-bold text-zinc-500 uppercase mb-1">
            Proton Status
          </span>
          <span
            className={`text-xl font-blacked uppercase ${
              mapping?.badStatus === "Borked"
                ? "text-red-500"
                : "text-amber-400"
            }`}
          >
            {mapping?.badStatus ?? "???"}
          </span>
        </div>
      </div>

      {/* Details list */}
      <div className="space-y-3 text-[11px] font-bold uppercase text-zinc-500">
        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Developer</span>
          <span className="text-red-300">{badGame.developers?.join(", ")}</span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Release</span>
          <span className="text-zinc-300">{badGame.release_date?.date}</span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
          <span>Compatibility</span>
          <span className={`px-2 py-0.5 border ${getStatusColor(mapping?.badStatus)}`}>
            {mapping?.badStatus ?? "???"}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
          <span>Anti-Cheat</span>
          <AntiCheatBadge status={mapping?.antiCheat?.name} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        {isNonSteam ? (
          <div className="flex items-center justify-center gap-2 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] font-bold uppercase tracking-widest text-red-500">
            <RiAlertLine size={16} /> Anti-Cheat Blocked
          </div>
        ) : (
          <Link
            href={`https://www.protondb.com/app/${badGame.steam_appid}`}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-blacked uppercase tracking-widest hover:bg-zinc-800 hover:border-zinc-700 transition-all"
          >
            <RiReactjsLine size={16} className="text-red-400" /> View on ProtonDB
          </Link>
        )}
      </div>
    </div>
  );
}
