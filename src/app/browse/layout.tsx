import React from "react";
import { Metadata } from "next";
import { RiListCheck2 } from "react-icons/ri";
import { GameAlt } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Library | Browse Gaming Alternatives",
  description: 
    "Explore our complete list of high-fidelity Linux gaming alternatives. Filter by anti-cheat compatibility, performance ratings, and community verification.",
  openGraph: {
    title: "The Library | Combat Redirect",
    description: "Access the full database of Linux-compatible gaming alternatives.",
    images: [{ url: "/main.webp" }],
  },
};

export default function BrowseLayout({ children }: { children: React.ReactNode }) {

  const totalGames = GameAlt.length;
  
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30">
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
        
        <header className="relative mb-16">
          <div className="flex flex-col mt-14 md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-6">
                THE <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-400 to-zinc-600">LIBRARY</span>
              </h1>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed border-l-4 border-white/5 pl-6">
                Access the full list of high-fidelity Linux alternatives games. 
                Filtered by performance, verified by the community, and 
                optimized for the modern desktop.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-center px-4 border-r border-white/10">
                    <div className="text-2xl font-black text-white leading-none">+{totalGames}</div>
                    <div className="text-[10px] font-bold text-zinc-500 uppercase mt-1">Titles</div>
                </div>
                <div className="text-center px-4">
                    <div className="text-2xl font-black text-green-500 leading-none">100%</div>
                    <div className="text-[10px] font-bold text-zinc-500 uppercase mt-1">Native</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                    <RiListCheck2 size={24} className="text-white" />
                </div>
            </div>
          </div>
        </header>

        <section className="relative min-h-100">
           {children}
        </section>

      </div>
    </main>
  );
}