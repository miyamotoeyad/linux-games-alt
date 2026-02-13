import React from "react";
import Link from "next/link";
import { RiDiscordFill, RiGithubFill } from "react-icons/ri";
import { Contact } from "@/lib/SocialContact";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky w-full top-0 z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image src="/Logo.svg" alt="Logo" width={52} height={52} className="rounded-sm" />
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white leading-none">
              LINUX GAMES<span className="text-indigo-400">ALT</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Linux Gaming Intel
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8">
            {["Browse", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          <Link
            href={Contact.github}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
          >
            <RiGithubFill size={20} />
          </Link>

          <Link
            href={Contact.discord}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-indigo-600/20"
          >
            <RiDiscordFill size={18} />
            <span className="hidden sm:inline">Join Community</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
