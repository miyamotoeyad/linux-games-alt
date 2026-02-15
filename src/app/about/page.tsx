import { Metadata } from "next";
import {
  RiInformationLine,
  RiExternalLinkLine,
  RiShieldFlashLine,
  RiReactjsLine,
  RiDatabase2Line,
  RiBarChartLine,
} from "react-icons/ri";
import { SiSteam } from "react-icons/si";

import { GameAlt } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

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
  const totalRedirects = GameAlt.length;

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-zinc-950 py-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px]" />

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

      <div className="relative z-10 max-w-7xl w-full px-6">
        <header className="mb-20 text-center">
          <h1 className="text-6xl text-white md:text-8xl font-blacked uppercase tracking-wide mb-8 italic">
            THE <span className="text-indigo-500">MISSION</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-400 font-medium leading-relaxed">
            A specialized database for migrating players. We cross-reference
            OS-locked software with community-verified Linux alternatives.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <section className="relative group p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative mb-10">
              <div className="h-14 w-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                <RiShieldFlashLine
                  size={28}
                  className="text-indigo-500 animate-pulse"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-6">
                Archive <span className="text-indigo-500">Integrity</span>
              </h2>

              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-4xl font-blacked italic text-white leading-none">
                    +{totalRedirects}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">
                    Alternatives
                  </span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <span className="block text-4xl font-blacked italic text-white leading-none">
                    100%
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">
                    Native
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="relative group p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-start justify-between mb-10">
              <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40">
                <RiReactjsLine size={28} className="text-white" />
              </div>
              <Link
                href="https://www.protondb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors"
              >
                ProtonDB <RiExternalLinkLine size={16} />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-4">
                Telemetry <span className="text-indigo-500">Sync</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Telemetry sourced from community reports. Check real-time
                compatibility for Windows binaries running via Proton.
              </p>
            </div>
          </section>
          
          <section className="relative group p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative mb-10">
              <div className="h-14 w-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                <RiInformationLine size={28} className="text-indigo-500" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-6">
                System <span className="text-indigo-500">Specs</span>
              </h2>
              <ul className="space-y-3">
                {[
                  "Verified Alternative Swaps",
                  "Community Telemetry",
                  "Anti-Cheat Status Indexing",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest"
                  >
                    <span className="text-indigo-500/50 font-mono">
                      0{i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="my-20">
          <div className="flex items-center gap-3 px-2 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-indigo-500/50 to-transparent" />
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
              Other resources we ues
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-indigo-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Steam Store",
                url: "https://store.steampowered.com/",
                icon: SiSteam,
                color: "text-zinc-400",
              },
              {
                name: "SteamDB",
                url: "https://steamdb.info/",
                icon: RiDatabase2Line,
                color: "text-blue-400",
              },
              {
                name: "SteamCharts",
                url: "https://steamcharts.com/",
                icon: RiBarChartLine,
                color: "text-green-400",
              },
              {
                name: "SteamBase",
                url: "https://steambase.io/",
                icon: "https://steambase.io/logo.svg",
                color: "text-green-400",
              },
              {
                name: "PCGamingWiki",
                url: "https://www.pcgamingwiki.com/",
                icon: "https://images.pcgamingwiki.com/0/04/PCGamingWiki_notext.svg",
                color: "text-orange-400",
              },
              {
                name: "ProtonDB",
                url: "https://www.protondb.com/",
                icon: RiReactjsLine,
                color: "text-red-400",
              },
              {
                name: "Anti-Cheat Index",
                url: "https://areweanticheatyet.com/",
                icon: "https://areweanticheatyet.com/icon.webp",
                color: "text-purple-400",
              },
            ].map((resource) => {
              const isImageUrl = typeof resource.icon === "string";
              const IconComponent = resource.icon;

              return (
                <Link
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-indigo-500/5 blur-xl transition-opacity" />

                  <div className="mb-3 transition-all group-hover:scale-110">
                    {isImageUrl ? (
                      <Image
                        src={resource.icon as string}
                        alt={resource.name}
                        width={32}
                        height={36}
                        className="w-8 h-9 object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <IconComponent
                        className={`${resource.color} opacity-70 group-hover:opacity-100 transition-all`}
                        size={20}
                      />
                    )}
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors text-center leading-tight">
                    {resource.name}
                  </span>

                  <RiExternalLinkLine
                    className="absolute top-2 right-2 text-white/10 group-hover:text-indigo-400 transition-colors"
                    size={10}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-full p-8 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="h-14 w-14 shrink-0 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner">
              <SiSteam size={26} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-1">
                Data Source Declaration
              </h3>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                Powered by Steam Public API
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest leading-relaxed md:text-right border-l md:border-l-0 md:border-r border-indigo-500/30 pl-4 md:pl-0 md:pr-4">
              This website is{" "}
              <span className="text-indigo-400">strictly independent</span> and
              is{" "}
              <span className="text-white">
                not affiliated with Valve Corporation
              </span>{" "}
              at all. All directory data is retrieved programmatically via
              public Steam endpoints.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
