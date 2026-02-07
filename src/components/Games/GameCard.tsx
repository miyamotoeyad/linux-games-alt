import { getSteamGame } from "@/lib/SteamData";
import Image from "next/image";
import Link from "next/link";
import { 
  RiArrowRightSLine,
  RiPriceTag3Line, 
  RiShieldKeyholeLine,
  RiDashboard3Line
} from "react-icons/ri";

interface Props {
  unsupportedId: string;
  alternativeId: string;
  antiCheat?: string; 
}

const AntiCheatBadge = ({ status }: { status?: string }) => {
  if (!status) return null;
  const isBypassable = status.toLowerCase().includes("easy") || status.toLowerCase().includes("battleye");
  
  return (
    <div className={`mt-2 flex items-center w-fit gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-black uppercase tracking-tighter
      ${isBypassable ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
      <RiShieldKeyholeLine size={12} />
      <span>{status}</span>
    </div>
  );
};

export default async function GameCard({ unsupportedId, alternativeId, antiCheat }: Props) {
  const [badGame, goodGame] = await Promise.all([
    getSteamGame(unsupportedId),
    getSteamGame(alternativeId)
  ]);

  if (!badGame || !goodGame) return null;

  return (
    <Link 
      href={`/compare/${unsupportedId}/${alternativeId}`}
      className="group block relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all hover:border-indigo-500/40 hover:bg-zinc-900/40"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_auto_1.2fr] items-center gap-4 p-5">
        
        <div className="md:flex grid gap-4 opacity-30 grayscale transition-all group-hover:opacity-60">
          <div className="relative shrink-0 overflow-hidden rounded-2xl">
            <Image src={badGame.header_image} width={500} height={296} className="md:h-24 md:w-36 object-cover" alt={badGame.name} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-black text-zinc-300 truncate text-sm uppercase tracking-tighter">{badGame.name}</h3>
            <AntiCheatBadge status={antiCheat} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10 h-12 w-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-all shadow-2xl">
                <RiArrowRightSLine className="text-indigo-500 md:rotate-0 rotate-90 group-hover:translate-x-0.5 transition-transform" size={28} />
            </div>
            
            <div className="mt-2 text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-indigo-400 transition-colors">
                Compare
            </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse justify-end gap-4 text-right">
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-end gap-2 mb-1">
                <span className="text-[8px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Verified</span>
                <h3 className="font-black text-white truncate text-lg tracking-tighter uppercase italic">{goodGame.name}</h3>
            </div>
            
            <div className="flex items-center justify-end gap-3 text-[11px] font-bold text-emerald-400 uppercase">
               <RiPriceTag3Line size={12} className="text-zinc-600" />
               {goodGame.is_free ? "F2P" : (goodGame.price_overview?.final_formatted || "N/A")}
            </div>

            <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-indigo-400 font-black uppercase tracking-widest opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                View The Game <RiDashboard3Line size={12} />
            </div>
          </div>
          
          <div className="relative shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
            <Image src={goodGame.header_image} width={500} height={296} className="md:h-24 md:w-36 object-cover" alt={goodGame.name} />
          </div>
        </div>

      </div>
    </Link>
  );
}