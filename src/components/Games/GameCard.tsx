import { getSteamGame } from "@/lib/SteamData";
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightSLine,
  RiPriceTag3Line,
  RiShieldKeyholeLine,
  RiErrorWarningLine,
  RiGamepadLine,
  RiCheckboxCircleFill,
  RiInformationFill,
  RiCloseCircleFill,
} from "react-icons/ri";

interface Props {
  unsupportedId: string;
  alternativeId: string;
  antiCheat?: string;
  disclosure?: string;
  deckStatus?: "Verified" | "Playable" | "Unsupported" | "Unknown";
}

const DeckStatusBadge = ({ status }: { status?: string }) => {
  if (!status || status === "Unknown") return null;

  const config = {
    Verified: { icon: RiCheckboxCircleFill, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    Playable: { icon: RiInformationFill, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    Unsupported: { icon: RiCloseCircleFill, color: "text-zinc-500", bg: "bg-zinc-500/10", border: "border-zinc-500/20" },
  };

  const { icon: Icon, color, bg, border } = config[status as keyof typeof config];

  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md border ${bg} ${border} ${color} text-[9px] font-black uppercase tracking-tighter`}>
      <Icon size={12} />
      <span>Deck {status}</span>
    </div>
  );
};

const AntiCheatBadge = ({ status }: { status?: string }) => {
  if (!status) return null;
  const isBypassable =
    status.toLowerCase().includes("easy") ||
    status.toLowerCase().includes("battleye");

  return (
    <div
      className={`mt-2 flex items-center w-fit gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-black uppercase tracking-tighter
      ${isBypassable ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}
    >
      <RiShieldKeyholeLine size={12} />
      <span>{status}</span>
    </div>
  );
};

export default async function GameCard({
  unsupportedId,
  alternativeId,
  antiCheat,
  disclosure,
  deckStatus,
}: Props) {
  const [badGame, goodGame] = await Promise.all([
    getSteamGame(unsupportedId),
    getSteamGame(alternativeId),
  ]);

  if (!badGame || !goodGame) return null;

  return (
    <Link
      href={`/compare/${unsupportedId}/${alternativeId}`}
      className="group block relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all hover:border-indigo-500/40 focus:border-indigo-500/40 hover:bg-zinc-900/40 focus:bg-zinc-900/40"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_auto_1.2fr] items-center gap-4 p-5">
        <div className="md:flex grid gap-4 opacity-30 transition-all group-hover:opacity-60 group-focus:opacity-60">
          <div className="relative shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={badGame.header_image}
              width={500}
              height={296}
              className="md:h-24 grayscale md:w-36 object-cover"
              alt={badGame.name}
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-black text-zinc-300 truncate text-lg uppercase tracking-tighter">
              {badGame.name}
            </h3>
            <AntiCheatBadge status={antiCheat} />

            {disclosure ? (
              <div className="mt-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-x-0 transition-all">
                <RiErrorWarningLine
                  size={14}
                  className="text-amber-500 animate-pulse"
                />
                <span className="text-amber-400">Read Disclosure</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 group-focus:scale-150 transition-transform duration-500" />
          <div className="relative z-10 h-12 w-12 rounded-full  border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-focus:border-indigo-500/50 transition-all shadow-2xl">
            <RiArrowRightSLine
              className="text-indigo-500 md:rotate-0 rotate-90 group-hover:translate-x-0.5 transition-transform"
              size={28}
            />
          </div>
          <div className="mt-2 text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-indigo-500 group-focus:text-indigo-500 transition-colors">
            Alternative
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse justify-end gap-4 text-right">
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-end gap-2 mb-1">
              <DeckStatusBadge status={deckStatus} />
              <h3 className="font-black text-white truncate text-lg tracking-tighter uppercase italic">
                {goodGame.name}
              </h3>
            </div>

            <div className="flex items-center justify-end gap-3 font-bold text-emerald-400 uppercase">
              <RiPriceTag3Line size={12} className="text-zinc-600" />
              {goodGame.is_free
                ? "F2P"
                : goodGame.price_overview?.final_formatted || "N/A"}
            </div>
                
            <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-0 translate-x-4 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-x-0 transition-all">
              <span className="text-indigo-500">View The Game</span>
              <RiGamepadLine size={12} className="text-indigo-500" />
            </div>
          </div>

          <div className="relative shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
            <Image
              src={goodGame.header_image}
              width={500}
              height={296}
              className="md:h-24 md:w-36 object-cover"
              alt={goodGame.name}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
