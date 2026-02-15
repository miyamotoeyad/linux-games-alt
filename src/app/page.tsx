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
    <main className="relative min-h-screen  text-white overflow-x-clip selection:bg-indigo-500/30">
      <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-100 h-100 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <section className="relative min-h-screen max-w-7xl mx-auto px-6 py-14">
        <div className="max-w-4xl">

          <h1 className="text-7xl md:text-8xl font-blacked leading-[0.85] uppercase italic">
            PLAY WITHOUT <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-400 to-pink-500">
              LIMITS.
            </span>
          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Don&apos;t let anti-cheat stop the grind. Discover high-performance,
            Linux-native alternatives for the world&apos;s most popular games.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/browse"
              className="PrimaryBtn"
            >
              <RiCompass3Line size={24} />
              Explore Recommendations
            </Link>
            <Link
              href="/about"
              className="SecondaryBtn"
            >
              <RiInformationLine size={24} />
              Who we are?
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl italic font-blacked uppercase">
              Priority <span className="text-indigo-500">Swaps</span>
            </h2>
          </div>
          <Link
            href="/browse"
            className="flex items-center gap-2 text-[10px] font-bold uppercase text-zinc-500 hover:text-indigo-500 transition-colors"
          >
            View Full Library <RiArrowRightUpLine size={16} />
          </Link>
        </div>

        <div
          className="relative grid grid-cols-1 gap-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          {featuredGames.map((game, i) => (
            <div key={`${game.badId}-${i}`} className="group">
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
            className="px-8 py-3 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Get more recommendations ({GameAlt.length} Alternative)
          </Link>
        </div>

        <section className="relative max-w-7xl mx-auto my-50">
          <h2 className="text-4xl md:text-5xl text-center font-blacked uppercase mb-14 italic">
            Why Use <span className="text-indigo-500">Linux Games Alt?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/30">
                <RiReactjsLine className="text-indigo-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">
                Beyond ProtonDB
              </h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                ProtonDB tells you if a game is broken,{" "}
                <strong className="text-indigo-500 italic">
                  we tell you where to go next
                </strong>
                . Instead of hitting a dead end with a &quot;Borked&quot;
                rating, we provide immediate, high-performance swaps so you
                never stop playing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                <RiGamepadLine className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">
                Stay Connected
              </h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                Our website are following to gaming community reports. We track
                the{" "}
                <strong className="text-purple-500 italic">
                  Anti-Cheat Wall
                </strong>{" "}
                so you don&apos;t have to. When a game blocks Linux, we find the
                alternative that respects your OS.
              </p>
            </div>
          </div>
        </section>

        <section className="relative md:mt-32 mt-0 max-w-7xl mx-auto grid grid-cols-1 gap-14 md:grid-cols-3">
          <div className="lg:sticky top-32 h-fit self-start">
            <h2 className="text-5xl font-blacked uppercase italic">
              Questions <br />
              <span className="text-indigo-500">You may ask</span>
            </h2>
          </div>

          <div className="w-full col-span-2">
            <FQA />
          </div>
        </section>

        <div className="group relative mt-40 p-1 text-center rounded-4xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative py-20 px-8 bg-zinc-950/80 backdrop-blur-3xl rounded-[1.9rem] flex flex-col items-center border border-white/5">
            <div className="w-20 h-20 bg-[#5865F2] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#5865F2]/40 mb-8 group-hover:scale-110 transition-transform">
              <RiDiscordFill size={44} className="text-white" />
            </div>
            <h3 className="text-5xl font-blacked uppercase mb-4">
              Missing Game?
            </h3>
            <p className="text-zinc-400 text-lg max-w-md mx-auto mb-10 font-medium leading-relaxed">
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
