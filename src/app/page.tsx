import Link from "next/link";
import { GameAlt } from "@/lib/data";
import GameCard from "@/components/Games/GameCard";
import {
  RiDiscordFill,
  RiGamepadLine,
  RiCompass3Line,
  RiInformationLine,
  RiArrowRightUpLine,
  RiReactjsLine,
} from "react-icons/ri";
import { Contact } from "@/lib/SocialContact";
import FQA from "@/components/Home/FQA";

export default async function Home() {
  const featuredGames = GameAlt.slice(0, 3);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-x-clip selection:bg-indigo-500/40">

      {/* ───────── HERO ───────── */}
      <section className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 py-14 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-blacked leading-[0.85] uppercase italic">
            PLAY WITHOUT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500">
              LIMITS.
            </span>
          </h1>

          <p className="mt-10 text-lg text-zinc-400 max-w-2xl font-medium leading-relaxed border-l-2 border-indigo-500/50 pl-5">
            Don&apos;t let anti-cheat stop the grind. Discover high-performance,
            Linux-native alternatives for the world&apos;s most popular games.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/browse" className="PrimaryBtn">
              <RiCompass3Line size={22} />
              Explore Recommendations
            </Link>
            <Link href="/about" className="SecondaryBtn">
              <RiInformationLine size={22} />
              Who we are?
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── FEATURED GAMES ───────── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800 pb-8">
          <h2 className="text-4xl md:text-5xl italic font-blacked uppercase">
            Priority <span className="text-indigo-500">Swaps</span>
          </h2>
          <Link
            href="/browse"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500 hover:text-indigo-400 transition-colors group"
          >
            View Full Library
            <RiArrowRightUpLine
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        <div
          className="relative grid grid-cols-1 gap-6"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          {featuredGames.map((game, i) => (
            <div
              key={`${game.badId}-${i}`}
              className="group border border-zinc-800 hover:border-indigo-500/50 transition-colors"
            >
              <GameCard
                unsupportedId={game.badId}
                alternativeId={game.goodId}
                antiCheat={game.antiCheat?.name}
                disclosure={game.disclosure}
                deckStatus={game.deckVerified}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center -mt-20 relative z-20">
          <Link
            href="/browse"
            className="px-8 py-3 bg-zinc-950 border border-zinc-700 hover:border-indigo-500 text-xs font-mono uppercase tracking-widest hover:text-indigo-400 transition-all"
          >
            + {GameAlt.length} Alternatives Available
          </Link>
        </div>

        <section className="relative max-w-7xl mx-auto my-40">
          <h2 className="text-4xl md:text-5xl font-blacked uppercase italic text-center mb-16">
            Why Use{" "}
            <span className="text-indigo-500">Linux Games Alt?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-800">
            {/* Card 1 */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800 hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center mb-8">
                <RiReactjsLine className="text-indigo-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">
                Beyond ProtonDB
              </h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                ProtonDB tells you if a game is broken,{" "}
                <strong className="text-indigo-400 italic">
                  we tell you where to go next
                </strong>
                . Instead of hitting a dead end with a &quot;Borked&quot;
                rating, we provide immediate, high-performance swaps so you
                never stop playing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/40 flex items-center justify-center mb-8">
                <RiGamepadLine className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">
                Stay Connected
              </h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                Our website follows gaming community reports. We track the{" "}
                <strong className="text-purple-400 italic">
                  Anti-Cheat Wall
                </strong>{" "}
                so you don&apos;t have to. When a game blocks Linux, we find the
                alternative that respects your OS.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="relative md:mt-32 mt-0 max-w-7xl mx-auto grid grid-cols-1 gap-14 md:grid-cols-3">
          <div className="lg:sticky top-32 h-fit self-start">
            <h2 className="text-4xl md:text-5xl font-blacked uppercase italic">
              Questions <br />
              <span className="text-indigo-500">You may ask</span>
            </h2>
          </div>
          <div className="w-full col-span-2">
            <FQA />
          </div>
        </section>

        {/* ───────── DISCORD CTA ───────── */}
        <div className="group relative mt-40 border border-zinc-800 hover:border-indigo-500/50 transition-colors overflow-hidden">
          <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="relative py-20 px-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#5865F2] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-[0_0_30px_rgba(88,101,242,0.4)]">
              <RiDiscordFill size={44} className="text-white" />
            </div>
            <h3 className="text-5xl font-blacked uppercase mb-4 text-center">
              Missing Game?
            </h3>
            <p className="text-zinc-500 text-base max-w-md mx-auto mb-10 font-medium leading-relaxed text-center">
              The archive grows through community field reports. Suggest a new
              swap on our Discord.
            </p>
            <Link href={Contact.discord} className="PrimaryBtn">
              Connect to Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
