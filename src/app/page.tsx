import Link from "next/link";
import { GameAlt } from "@/lib/data";
import GameCard from "@/components/Games/GameCard";
import { RiDiscordFill, RiGamepadLine, RiCompass3Line, RiInformationLine, RiArrowRightUpLine } from "react-icons/ri";
import { Contact } from "@/lib/SocialContact";

export default async function Home() {
  const featuredGames = GameAlt.slice(0, 3);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-indigo-500/30">
      
      <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-100 h-100 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[9px] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            <RiGamepadLine className="text-lg" />
            The Ultimate Linux Alternative Index
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic">
            PLAY WITHOUT <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">
              LIMITS.
            </span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Don&apos;t let anti-cheat stop the grind. Discover high-performance, 
            Linux-native alternatives for the world&apos;s most popular games.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
             <Link href="/browse" className="group px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-600/25 flex items-center gap-3">
                <RiCompass3Line size={24} />
                Explore Database
             </Link>
             <Link href="/about" className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-tight transition-all flex items-center gap-3 backdrop-blur-sm">
                <RiInformationLine size={24} />
                Briefing
             </Link>
          </div>
        </div>
      </section>
      
      <section className="relative max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-black uppercase tracking-tight">
                    Priority <span className="text-indigo-500">Swaps</span>
                </h2>
                <div className="h-1 w-12 bg-indigo-600 mt-2 rounded-full" />
            </div>
            <Link href="/browse" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-indigo-400 transition-colors">
                View Full Archive <RiArrowRightUpLine size={16} />
            </Link>
        </div>

        <div 
          className="relative grid grid-cols-1 gap-10"
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        >
          {featuredGames.map((game, i) => (
            <div key={`${game.badId}-${i}`} className="group">
               <GameCard
                unsupportedId={game.badId}
                alternativeId={game.goodId}
                antiCheat={game.antiCheat?.name}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center -mt-20 relative z-20">
            <Link 
              href="/browse" 
              className="px-8 py-3 bg-zinc-900 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
            >
              Access Full Database ({GameAlt.length} Entries)
            </Link>
        </div>

        {/* Discord CTA */}
        <div className="group relative mt-40 p-1 text-center rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative py-20 px-8 bg-zinc-950/80 backdrop-blur-3xl rounded-[1.9rem] flex flex-col items-center border border-white/5">
                <div className="w-20 h-20 bg-[#5865F2] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#5865F2]/40 mb-8 group-hover:scale-110 transition-transform">
                    <RiDiscordFill size={44} className="text-white" />
                </div>
                <h3 className="text-5xl font-black uppercase tracking-tighter mb-4">
                    Missing Game?
                </h3>
                <p className="text-zinc-400 text-lg max-w-md mx-auto mb-10 font-medium leading-relaxed">
                    The archive grows through community field reports. Suggest a new swap on our Discord.
                </p>
                <a 
                    href={Contact.discord}
                    className="px-12 py-5 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl active:scale-95"
                >
                    Connect to Us
                </a>
            </div>
        </div>
      </section>
    </main>
  );
}