import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import {
  RiDiscordFill,
  RiMailSendLine,
  RiExternalLinkLine,
  RiTwitterXLine,
  RiGithubFill,
  RiMessage3Line,
} from "react-icons/ri";
import { Contact } from "../../lib/SocialContact";
import { TbMail } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Contact & Community",
  description:
    "Connect with the Linux Games Alt community. Join our Discord Nexus for real-time game compatibility reports, community patches, and technical support.",
  openGraph: {
    title: "Contact Linux Games Alt",
    description:
      "Join the mission to bridge the gap between Windows and Linux gaming.",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Linux Games Alt",
    url: "https://linuxgamesalt.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "community support",
      url: "https://discord.gg/Fzzn6BgREs",
    },
    sameAs: [
      "https://twitter.com/combatredirect",
      "https://github.com/eyadkhfarah/linux-games-alt/",
    ],
  };

  const { discord, github, x } = Contact;

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-zinc-950 py-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Shared Background System (Matches About Page) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px]" />

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
            GET IN <span className="text-indigo-500">TOUCH</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-400 font-medium leading-relaxed">
            Direct access to the developers, community patches, and
            real-time compatibility reports for Linux gamers.
          </p>
        </header>

        {/* Primary Discord Nexus Banner */}
        <div className="group relative mb-8">
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <Link
            href={discord}
            target="_blank"
            className="relative flex flex-col md:flex-row items-center justify-between p-10 md:p-16 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl hover:border-indigo-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col w-full items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40">
                  <RiDiscordFill size={24} className="text-white animate-pulse" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-indigo-400">
                  Official Server
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-blacked text-white uppercase tracking-wider mb-4 italic">
                Join the <span className="text-indigo-500">Nexus</span>
              </h2>
              <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
                Establish a direct connection. Report findings, request dossiers, and sync with the squad.
              </p>
              
              <div className="PrimaryBtn z-20">
                Connect To Discord <RiExternalLinkLine />
              </div>
            </div>

            <RiDiscordFill
              size={300}
              className="absolute -right-20 -bottom-20 text-white/5 rotate-12 group-hover:rotate-6 group-hover:scale-110 group-hover:text-white/10 transition-all duration-700 pointer-events-none"
            />
          </Link>
        </div>

        {/* Secondary Contact Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Signal Card */}
          <section className="relative group p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative mb-8">
              <div className="h-14 w-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                <TbMail size={28} className="text-zinc-400 group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-4">
                Direct <span className="text-white">Signal</span>
              </h2>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                For professional inquiries, security reports, or partnership technicals regarding Linux Games Alt.
              </p>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/5 w-fit">
                <RiMailSendLine size={16} className="text-indigo-500" />
                <span className="font-bold text-[0.7rem] text-zinc-500 uppercase tracking-widest italic">
                  Email relay temporarily offline
                </span>
              </div>
            </div>
          </section>

          <section className="relative group p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between">

            <div className="relative mb-8 flex justify-between items-start">
              <div className="h-14 w-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                <RiMessage3Line size={28} className="text-zinc-400 group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-4">
                Social <span className="text-white">Feed</span>
              </h2>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Follow our deployment logs, database additions, and update history on our social nodes.
              </p>
              
              <div className="flex gap-4">
                <Link
                  href={x}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-3 text-[0.7rem] rounded-xl bg-white/5 border border-white/5 font-bold text-zinc-300 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
                >
                  <RiTwitterXLine className="text-indigo-500" /> Twitter / X
                </Link>
                <Link
                  href={github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-3 text-[0.7rem] rounded-xl bg-white/5 border border-white/5 font-bold text-zinc-300 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
                >
                  <RiGithubFill className="text-indigo-500" /> GitHub
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}