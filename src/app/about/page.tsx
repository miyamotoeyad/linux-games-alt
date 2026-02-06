import React from "react";
import { Metadata } from "next";
import {
  RiInformationLine,
  RiShieldFlashLine,
  RiExternalLinkLine,
  RiSearchEyeLine,
} from "react-icons/ri";
import Link from "next/link";

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "The Mission",
  description:
    "Learn how Combat Redirect bridges the gap between Windows-locked titles and Linux-native alternatives using ProtonDB telemetry and community verification.",
  openGraph: {
    title: "The Mission: Combat Redirect",
    description:
      "Our manifesto on migrating players to the open-source gaming frontier.",
  },
};

export default function About() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-zinc-950 py-20 px-6">
      {/* --- PAGE-SPECIFIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #3f3f46 1px, transparent 1px), 
                              linear-gradient(to bottom, #3f3f46 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 90%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent mb-16" />

        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <RiShieldFlashLine
              className="text-indigo-400 animate-pulse"
              size={14}
            />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
              Archive Manifest
            </span>
          </div>

          <h1 className="text-6xl text-white md:text-8xl font-black uppercase tracking-tighter mb-8 italic">
            THE <span className="text-indigo-500">MISSION</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-400 font-medium leading-relaxed">
            A specialized database for migrating players. We cross-reference
            OS-locked software with community-verified Linux alternatives.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* External Intel Module */}
          <section className="relative group p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-start justify-between mb-10">
              <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40">
                <RiSearchEyeLine size={28} className="text-white" />
              </div>
              <Link
                href="https://www.protondb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              >
                Launch ProtonDB <RiExternalLinkLine size={16} />
              </Link>
            </div>

            <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
              ProtonDB Intel
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Telemetry sourced from community reports. Check real-time
              compatibility for Windows binaries running via Proton.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Elden Ring", "Cyberpunk 2077", "Valheim"].map((game) => (
                <a
                  key={game}
                  href={`https://www.protondb.com/search?q=${game.replace(" ", "+")}`}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:border-indigo-500 hover:text-white transition-all"
                >
                  {game}
                </a>
              ))}
            </div>
          </section>

          {/* Guidelines Module */}
          <section className="p-10 rounded-[2.5rem] border border-white/5 bg-linear-to-b from-white/2 to-transparent backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <RiInformationLine className="text-indigo-500" size={32} />
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                System Specs
              </h2>
            </div>

            <ul className="space-y-5">
              {[
                "Verified Alternative Swaps",
                "Community-Driven Telemetry",
                "Anti-Cheat Status Indexing",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sm font-bold text-zinc-400"
                >
                  <span className="text-indigo-500/50 font-mono text-xs">
                    0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-400 leading-tight">
                Status: Compatibility data is subject to change based on
                software patches.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
