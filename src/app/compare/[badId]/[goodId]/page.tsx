import { RiArrowRightSLine, RiGroupLine, RiComputerLine } from "react-icons/ri";
import { Metadata } from "next";
import { getSteamGame } from "@/lib/SteamData";
import { GameAlt } from "@/lib/data";
import BadGameCard from "@/components/Compare/BadGameCard";
import GoodGameCard from "@/components/Compare/GoodGameCard";
import Disclosure from "@/components/Compare/Disclosure";

interface PageProps {
  params: Promise<{ badId: string; goodId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { badId, goodId } = await params;
  const [bad, good] = await Promise.all([
    getSteamGame(badId),
    getSteamGame(goodId),
  ]);

  if (!bad || !good) return { title: "Data Corrupted" };

  return {
    title: `${bad.name} Alternatives | Play ${good.name} on Linux`,
    description: `Issues running ${bad.name} in linux? Install ${good.name} instead. Check compatibility status.`,
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { badId, goodId } = await params;
  const [badGame, goodGame] = await Promise.all([
    getSteamGame(badId),
    getSteamGame(goodId),
  ]);

  const mapping = GameAlt.find(
    (alt) =>
      String(alt.badId).toLowerCase() === String(badId).toLowerCase() &&
      String(alt.goodId).toLowerCase() === String(goodId).toLowerCase(),
  );

  if (!badGame || !goodGame) {
    return (
      <div className="bg-black text-red-500 h-screen flex items-center justify-center font-black uppercase tracking-[0.3em]">
        Critical Error: Game Corrupted
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: goodGame.name,
    description: `Linux game alternative to ${badGame.name}.`,
    image: goodGame.header_image,
  };

  return (
    <main className="relative min-h-screen  text-zinc-100 overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-600/10 blur-[120px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            Viable{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">
              Alternative
            </span>
          </h1>
          <p className="mt-4 text-zinc-500 text-xs font-bold uppercase tracking-[0.5em]">
            Compatibility Migration Dossier
          </p>
        </header>

        <Disclosure mapping={mapping} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-start">
          <BadGameCard badGame={badGame} mapping={mapping} />

          <div className="flex lg:flex-col items-center justify-center gap-4 py-8 self-center">
            <div className="h-px lg:h-32 w-24 lg:w-px bg-linear-to-b from-red-500/50 via-indigo-500/50 to-indigo-500/0" />
            <div className="w-14 h-14 rounded-full border border-indigo-500/50  flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)] z-20">
              <RiArrowRightSLine
                size={32}
                className="text-indigo-500 lg:rotate-0 rotate-90"
              />
            </div>
            <div className="h-px lg:h-32 w-24 lg:w-px bg-linear-to-b from-indigo-500/0 to-transparent" />
          </div>

          <GoodGameCard
            goodGame={goodGame}
            mapping={mapping}
            deckVerified={mapping?.deckVerified}
          />
        </div>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/2 border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <RiGroupLine className="text-red-500" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500/60">
                Unsupported Game Description
              </h3>
            </div>
            <div
              className="text-sm text-zinc-400 font-medium leading-relaxed italic"
              dangerouslySetInnerHTML={{ __html: badGame.short_description }}
            />
          </div>

          <div className="p-8 rounded-3xl bg-indigo-500/3 border border-indigo-500/10">
            <div className="flex items-center gap-2 mb-4">
              <RiComputerLine className="text-indigo-500 animate-pulse" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
                Alternative Game
              </h3>
            </div>
            <div
              className="text-sm text-zinc-300 font-medium leading-relaxed"
              dangerouslySetInnerHTML={{ __html: goodGame.short_description }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
