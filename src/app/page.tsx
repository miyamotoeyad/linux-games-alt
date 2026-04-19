import Link from "next/link";
import { GameAlt } from "@/lib/data";
import GameCard from "@/components/Games/GameCard";
import {
  RiDiscordFill,
  RiGamepadLine,
  RiCompass3Line,
  RiInformationLine,
  RiArrowRightUpLine,
  RiShieldKeyholeLine,
  RiLinuxLine,
  RiSearchEyeLine,
} from "react-icons/ri";
import { Contact } from "@/lib/SocialContact";
import FQA from "@/components/Home/FQA";

export default async function Home() {
  const featuredGames = GameAlt.slice(0, 3);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-x-clip selection:bg-indigo-500/40">

      {/* ═══════════════════════════════════════
          HERO — Split layout with stat block
      ════════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 flex flex-col justify-center">

        <div className="w-full h-px bg-zinc-800 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">

          {/* Left — headline */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-8">
              Anti-Cheat Blocked? Keep Playing.
            </p>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-blacked leading-[0.85] uppercase">
              ANTI-CHEAT
              <br />
              <span className="italic text-zinc-600">CAN&apos;T STOP</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500">
                LINUX.
              </span>
            </h1>

            <p className="mt-10 text-base text-zinc-400 max-w-xl font-medium leading-relaxed border-l-2 border-indigo-500/50 pl-5">
              Anti-cheat software locks Linux gamers out of their favourite titles.
              We find you a better game — one that actually respects your OS.
              No workarounds. No Wine. Just native Linux alternatives.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/browse" className="PrimaryBtn">
                <RiCompass3Line size={22} />
                Find Alternatives
              </Link>
              <Link href="/about" className="SecondaryBtn">
                <RiInformationLine size={22} />
                How It Works
              </Link>
            </div>
          </div>

          {/* Right — stat block */}
          <div className="hidden lg:grid grid-rows-3 gap-0 border border-zinc-800 w-52 shrink-0">
            <div className="p-6 border-b border-zinc-800 text-center">
              <div className="text-4xl font-blacked text-white">{GameAlt.length}+</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-1">
                Alternatives
              </div>
            </div>
            <div className="p-6 border-b border-zinc-800 text-center">
              <div className="text-4xl font-blacked text-emerald-400">100%</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-1">
                Linux Native
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-4xl font-blacked text-indigo-400">Free</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-1">
                Always
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800 mt-16" />
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS — 3-step row
      ════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800">
          {[
            {
              step: "01",
              icon: RiShieldKeyholeLine,
              title: "Game Blocked?",
              body: "Your favourite title uses EasyAntiCheat, BattlEye, or Vanguard — all of which refuse to run on Linux.",
              color: "text-red-400",
              accent: "border-red-500/30 bg-red-500/5",
            },
            {
              step: "02",
              icon: RiSearchEyeLine,
              title: "We Find the Swap",
              body: "Browse our curated database of Linux-native and Proton-verified alternatives. Same genre, same energy.",
              color: "text-indigo-400",
              accent: "border-indigo-500/30 bg-indigo-500/5",
            },
            {
              step: "03",
              icon: RiLinuxLine,
              title: "Play on Linux",
              body: "Install the alternative, launch it natively, and keep your grind going — no dual-boot, no Windows VM.",
              color: "text-emerald-400",
              accent: "border-emerald-500/30 bg-emerald-500/5",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative p-10 ${i < 2 ? "border-b md:border-b-0 md:border-r" : ""} border-zinc-800 hover:bg-zinc-900/40 transition-colors`}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6">
                Step {item.step}
              </div>
              <div className={`w-12 h-12 border flex items-center justify-center mb-6 ${item.accent}`}>
                <item.icon className={`text-2xl ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED GAMES
      ════════════════════════════════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800 pb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-3">
              Hand-picked
            </p>
            <h2 className="text-4xl md:text-5xl italic font-blacked uppercase">
              Top <span className="text-indigo-500">Blocked Games</span>
              <br />& Their Linux Swaps
            </h2>
          </div>
          <Link
            href="/browse"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-zinc-500 hover:text-indigo-400 transition-colors group shrink-0"
          >
            See All {GameAlt.length} Swaps
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
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
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
            className="px-8 py-3 bg-zinc-950 border border-zinc-700 hover:border-indigo-500 text-xs font-bold uppercase tracking-widest hover:text-indigo-400 transition-all"
          >
            Browse Full Library — {GameAlt.length} Alternatives
          </Link>
        </div>

        {/* ═══════════════════════════════════════
            WHY US — asymmetric layout
        ════════════════════════════════════════ */}
        <section className="relative max-w-7xl mx-auto mt-40 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0 border border-zinc-800">

            {/* Left — bold statement */}
            <div className="p-10 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Why This Site?
                </p>
                <h2 className="text-4xl md:text-5xl font-blacked uppercase italic leading-tight">
                  We Don&apos;t Fix
                  <br />
                  Broken Games.
                  <br />
                  <span className="text-indigo-500">We Replace Them.</span>
                </h2>
              </div>
              <div className="mt-10 flex items-center gap-3 text-zinc-600 text-xs font-bold uppercase tracking-widest">
                <RiGamepadLine size={16} className="text-indigo-500" />
                Community Verified
              </div>
            </div>

            {/* Right — two feature rows */}
            <div>
              <div className="p-10 border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                <h3 className="text-xl font-bold uppercase mb-3 flex items-center gap-3">
                  <span className="text-indigo-500 font-blacked text-2xl">01</span>
                  Further Than ProtonDB
                </h3>
                <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                  ProtonDB tells you a game is{" "}
                  <strong className="text-red-400 italic">Borked</strong> and leaves you there.
                  We take that dead end and turn it into a starting point — matching
                  you with a Linux-native title in the same genre.
                </p>
              </div>

              <div className="p-10 hover:bg-zinc-900/40 transition-colors">
                <h3 className="text-xl font-bold uppercase mb-3 flex items-center gap-3">
                  <span className="text-indigo-500 font-blacked text-2xl">02</span>
                  Anti-Cheat Watchlist
                </h3>
                <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                  EasyAntiCheat, BattlEye, Vanguard, FACEIT — we track every major
                  anti-cheat wall and flag it on every listing. You see{" "}
                  <strong className="text-indigo-400 italic">exactly why</strong> a game
                  is blocked and what plays natively instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ
        ════════════════════════════════════════ */}
        <section className="relative md:mt-32 mt-0 max-w-7xl mx-auto grid grid-cols-1 gap-14 md:grid-cols-3">
          <div className="lg:sticky top-32 h-fit self-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Got Questions?
            </p>
            <h2 className="text-4xl md:text-5xl font-blacked uppercase italic">
              Things
              <br />
              Gamers
              <br />
              <span className="text-indigo-500">Ask Us</span>
            </h2>
          </div>
          <div className="w-full col-span-2">
            <FQA />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DISCORD CTA
        ════════════════════════════════════════ */}
        <div className="group relative mt-40 border border-zinc-800 hover:border-indigo-500/50 transition-colors overflow-hidden">
          <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8 px-12 py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
                Help Us Grow the Archive
              </p>
              <h3 className="text-4xl md:text-5xl font-blacked uppercase mb-4">
                Your Game
                <br />
                <span className="text-indigo-500">Not Listed?</span>
              </h3>
              <p className="text-zinc-500 text-base max-w-md font-medium leading-relaxed">
                Every entry comes from players in the field. If a game blocks you
                on Linux and you know a better alternative, report it on our Discord
                and we&apos;ll add it to the database.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="w-20 h-20 bg-[#5865F2] flex items-center justify-center group-hover:scale-105 transition-transform">
                <RiDiscordFill size={44} className="text-white" />
              </div>
              <Link href={Contact.discord} className="PrimaryBtn">
                Join the Discord
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
