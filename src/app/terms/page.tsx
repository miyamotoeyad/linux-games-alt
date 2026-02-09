import React from 'react';
import { Metadata } from "next";
import {
  RiScales3Line, 
  RiSpam3Line, 
  RiCopyrightLine, 
  RiErrorWarningLine,
  RiHammerLine
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Operating parameters and legal framework for using the Linux Games Alt database and compatibility engine.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  const clauses = [
    {
      icon: <RiScales3Line className="text-indigo-500" />,
      title: "Agreement of Service",
      content: "By accessing Linux Games Alt, you enter into a binding agreement to use this platform for personal, non-commercial research regarding software compatibility and gaming alternatives."
    },
    {
      icon: <RiCopyrightLine className="text-indigo-500" />,
      title: "Intellectual Property",
      content: "All game assets, titles, and descriptions remain the property of their respective owners (e.g., Valve Corp). This site acts as a metadata aggregator under Fair Use for educational and transformative purposes."
    },
    {
      icon: <RiSpam3Line className="text-red-500" />,
      title: "Prohibited Conduct",
      content: "Users are prohibited from attempting to scrape the underlying API, bypassing rate limits, or injecting malicious scripts. Automated data mining is strictly monitored and logged."
    },
    {
      icon: <RiHammerLine className="text-indigo-500" />,
      title: "Disclaimer of Liability",
      content: "Compatibility ratings are community-driven. We do not guarantee that suggested software or 'Alts' will perform as expected on your specific hardware or Linux distribution."
    }
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-200 font-sans">
      
      <div className="absolute top-0 right-0 w-full h-96 bg-linear-to-b from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-indigo-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Legal Documentation</span>
            </div>
            <h1 className="text-5xl text-white md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              TERMS <span className="text-zinc-600">&</span> CONDITIONS
            </h1>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Effective Date</p>
            <p className="text-sm font-bold text-zinc-300">February 06, 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden mb-16">
          {clauses.map((clause, index) => (
            <div key={index} className="bg-zinc-950 p-10 hover:bg-zinc-900/50 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-indigo-500/30 transition-all">
                  {React.cloneElement(clause.icon as React.ReactElement)}
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight italic">{clause.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {clause.content}
              </p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 flex items-start gap-6">
          <RiErrorWarningLine size={40} className="text-indigo-400 shrink-0" />
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-2">Final Provision</h4>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Linux Games Alt reserves the right to modify these parameters at any time. Continuous engagement with our services constitutes an acceptance of all updated protocols. 
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}