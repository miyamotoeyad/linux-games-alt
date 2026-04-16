import { Contact } from "@/lib/SocialContact";
import Link from "next/link";
import React from "react";
import { RiCompass3Line, RiDiscordFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="relative mx-auto text-white overflow-hidden">
      <section className="relative max-w-7xl mx-auto mb-20 px-6">
        <div className="relative group overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-12 text-center">

          {/* Gradient — kept as requested */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-blacked uppercase mb-4">
              READY TO <span className="text-indigo-500">SWITCH?</span>
            </h3>
            <p className="max-w-xl mx-auto text-zinc-400 text-lg font-medium mb-10">
              Stop dual-booting and start playing. Join thousands of gamers
              building the future of the Linux frontier.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/browse" className="PrimaryBtn">
                <RiCompass3Line size={22} />
                Browse Library
              </Link>

              <Link
                href={Contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="SecondaryBtn"
              >
                <RiDiscordFill size={22} className="text-[#5865F2]" />
                Join Squad
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-800 pt-10">
          <div className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} — Built By Player for Players
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
