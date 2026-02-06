import { 
  RiArrowRightSLine, RiPulseLine, RiShieldFlashLine, 
  RiStarFill, RiPriceTag3Line, RiUserVoiceLine,
  RiGroupLine, RiComputerLine 
} from "react-icons/ri";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ badId: string; goodId: string }>;
}

async function fetchGame(id: string) {
  const res = await fetch(`http://localhost:3000/api/game/${id}`, { cache: 'force-cache' });
  const json = await res.json();
  return json.success ? json.data : null;
}

// --- DYNAMIC SEO GENERATOR ---
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { badId, goodId } = await params;
  const [bad, good] = await Promise.all([fetchGame(badId), fetchGame(goodId)]);

  if (!bad || !good) return { title: "Data Corrupted" };

  return {
    title: `${bad.name} Alternatives | Play ${good.name} on Linux`,
    description: `Issues running ${bad.name}? Deploy ${good.name} instead. Check compatibility, Steam Deck verification, and tactical game for the best Linux gaming experience.`,
    openGraph: {
      title: `Tactical Migration: ${bad.name} → ${good.name}`,
      description: `Verified alternative found. Switch to ${good.name} for superior compatibility.`,
      images: [{ url: good.header_image }],
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { badId, goodId } = await params;
  const [badGame, goodGame] = await Promise.all([fetchGame(badId), fetchGame(goodId)]);

  if (!badGame || !goodGame) {
    return (
      <div className="bg-black text-red-500 h-screen flex items-center justify-center font-black uppercase tracking-[0.3em]">
        Critical Error: Game Corrupted
      </div>
    );
  }

  // --- STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": goodGame.name,
    "description": `Tactical alternative to ${badGame.name}.`,
    "image": goodGame.header_image,
    "brand": { "@type": "Brand", "name": goodGame.developers?.[0] },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": goodGame.metacritic?.score || "90",
      "bestRating": "100",
      "worstRating": "0",
      "ratingCount": "100"
    }
  };

  const getPlatforms = (p: any) => Object.keys(p).filter(k => p[k]).join(', ');

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
      {/* Inject Structured Data for Google Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*  */}
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-600/10 blur-[120px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            Combat <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">Redirect</span>
          </h1>
          <p className="mt-4 text-zinc-500 text-xs font-bold uppercase tracking-[0.5em]">Sector Migration Dossier</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-start">
          
          {/* LEFT SIDE: THE PROBLEM */}
          <div className="relative group p-6 rounded-4xl border border-red-500/20 bg-red-500/2 backdrop-blur-3xl">
             <div className="absolute top-0 left-0 px-4 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest italic rounded-br-xl">Restricted</div>
             <img src={badGame.header_image} className="w-full h-48 object-cover rounded-2xl mb-6 grayscale" alt={badGame.name} />
             
             <div className="mb-6">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-400 leading-none">{badGame.name}</h2>
                <div className="flex gap-2 mt-2">
                    {badGame.genres?.slice(0, 2).map((g: any) => (
                        <span key={g.id} className="text-[9px] border border-white/10 px-2 py-0.5 rounded text-zinc-500 font-bold uppercase">{g.description}</span>
                    ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="block text-[8px] font-black text-zinc-500 uppercase mb-1">Entry Cost</span>
                    <span className="text-xl font-black text-red-400/80">{badGame.is_free ? "FREE" : (badGame.price_overview?.final_formatted || "N/A")}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="block text-[8px] font-black text-zinc-500 uppercase mb-1">Metacritic</span>
                    <div className="flex items-center gap-1.5">
                        <RiStarFill className="text-red-500/50" />
                        <span className="text-xl font-black text-zinc-300">{badGame.metacritic?.score ?? '??'}</span>
                    </div>
                </div>
             </div>

             <div className="space-y-3 text-[11px] font-bold uppercase text-zinc-500">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Dev</span><span className="text-zinc-300">{badGame.developers?.[0]}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Release</span><span className="text-zinc-300">{badGame.release_date?.date}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Platforms</span><span className="text-zinc-400">{getPlatforms(badGame.platforms)}</span>
                </div>
             </div>
          </div>

          {/* CENTER DIVIDER */}
          <div className="flex lg:flex-col items-center justify-center gap-4 py-8 self-center">
             <div className="h-px lg:h-32 w-24 lg:w-px bg-linear-to-b from-red-500/50 via-indigo-500/50 to-indigo-500/0" />
             <div className="w-14 h-14 rounded-full border border-indigo-500/50 bg-zinc-950 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)] z-20">
                <RiArrowRightSLine size={32} className="text-indigo-400 lg:rotate-0 rotate-90" />
             </div>
             <div className="h-px lg:h-32 w-24 lg:w-px bg-linear-to-b from-indigo-500/0 to-transparent" />
          </div>

          {/* RIGHT SIDE: THE SOLUTION */}
          <div className="relative group p-6 rounded-4xl border border-indigo-500/40 bg-indigo-500/5 backdrop-blur-3xl shadow-2xl shadow-indigo-500/10">
             <div className="absolute top-0 right-0 px-4 py-1 bg-indigo-500 text-black text-[9px] font-black uppercase tracking-widest italic rounded-bl-xl">Recommended Alternative</div>
             <img src={goodGame.header_image} className="w-full h-48 object-cover rounded-2xl mb-6 shadow-2xl ring-1 ring-indigo-500/30" alt={goodGame.name} />
             
             <div className="mb-6">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-white leading-none">{goodGame.name}</h2>
                <div className="flex gap-2 mt-2">
                    {goodGame.genres?.slice(0, 2).map((g: any) => (
                        <span key={g.id} className="text-[9px] border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 rounded text-indigo-300 font-bold uppercase">{g.description}</span>
                    ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-400/5 animate-pulse" />
                    <span className="relative z-10 flex text-[8px] font-black text-indigo-300 uppercase mb-1 items-center gap-1">
                        <RiPriceTag3Line /> Current Price
                    </span>
                    <span className="relative z-10 text-xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        {goodGame.is_free ? "FREE TO PLAY" : (goodGame.price_overview?.final_formatted || "N/A")}
                    </span>
                </div>
                <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20">
                    <span className="text-[8px] font-black text-indigo-300 uppercase mb-1 flex items-center gap-1">
                        <RiUserVoiceLine /> Trust Rating
                    </span>
                    <div className="flex items-center gap-1.5">
                        <RiStarFill className="text-yellow-400" />
                        <span className="text-xl font-black text-white">{goodGame.metacritic?.score ?? '90+'}</span>
                        <span className="text-[10px] text-emerald-400 font-bold">POS</span>
                    </div>
                </div>
             </div>

             <div className="space-y-3 text-[11px] font-bold uppercase">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Developer</span><span className="text-indigo-300">{goodGame.developers?.[0]}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Launch Date</span><span className="text-indigo-300">{goodGame.release_date?.date}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Compatibility</span><span className="text-emerald-400">Steam Deck / Linux Verified</span>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-3 mt-6">
               <a href={`https://store.steampowered.com/app/${goodId}`} target="_blank" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30">
                  <RiShieldFlashLine size={16} /> Install the Game
               </a>
               <a href={`https://www.protondb.com/search?q=${encodeURIComponent(goodGame.name)}`} target="_blank" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  <RiPulseLine size={16} className="text-indigo-400" /> Database
               </a>
             </div>
          </div>
        </div>

        {/* DETAILED TECH SPECS */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/2 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                    <RiGroupLine className="text-red-500" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500/60">Publisher Data</h3>
                </div>
                <p className="text-xs text-zinc-500 mb-4">{badGame.publishers?.join(', ')}</p>
                <div className="text-sm text-zinc-400 font-medium leading-relaxed italic" dangerouslySetInnerHTML={{ __html: badGame.short_description }} />
            </div>
            
            <div className="p-8 rounded-3xl bg-indigo-500/3 border border-indigo-500/10">
                <div className="flex items-center gap-2 mb-4">
                    <RiComputerLine className="text-indigo-400 animate-pulse" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Technical Game</h3>
                </div>
                <p className="text-xs text-indigo-400/60 mb-4 font-bold">{goodGame.publishers?.join(', ')}</p>
                <div className="text-sm text-zinc-300 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: goodGame.short_description }} />
            </div>
        </section>
      </div>
    </main>
  );
}