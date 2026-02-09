import React from 'react';
import { Metadata } from "next";
import { 
  RiShieldUserLine, 
  RiLockPasswordLine, 
  RiEyeOffLine, 
  RiDatabaseLine, 
  RiGlobalLine,
  RiFingerprintLine
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Privacy Protocol",
  description: "Transparency report regarding data acquisition, tracking policies, and encryption standards for Linux Games Alt.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      icon: <RiDatabaseLine className="text-indigo-500" />,
      title: "Data Acquisition",
      content: "We exclusively utilize public-tier intelligence via the Steam Web API. This includes application IDs, titles, and technical metadata. No private user profiles, inventories, or sensitive personal identifiers are accessed or stored by Linux Games Alt."
    },
    {
      icon: <RiEyeOffLine className="text-red-500" />,
      title: "Tracking Policy",
      content: "Our infrastructure operates on a minimal-telemetry principle. We do not deploy third-party tracking pixels, invasive marketing cookies, or persistent surveillance scripts within this domain."
    },
    {
      icon: <RiLockPasswordLine className="text-emerald-500" />,
      title: "Security Infrastructure",
      content: "All interactions between your terminal and our infrastructure are secured using high-grade SSL/TLS encryption. IP addresses are utilized solely for temporary routing and are never logged in identifiable formats."
    },
    {
      icon: <RiFingerprintLine className="text-indigo-500" />,
      title: "Identity Protection",
      content: "We do not require account creation or personal registration. Your browsing behavior remains anonymous, ensuring your digital footprint is not cross-referenced with external database nodes."
    }
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-200 font-sans">

      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-indigo-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Information Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-black uppercase tracking-tighter leading-none">
              Privacy <span className="text-zinc-600">Protocol</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Version Control</p>
            <p className="text-sm font-bold text-zinc-300">FEB.2026.V1</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden mb-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-zinc-950 p-10 hover:bg-zinc-900/50 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-indigo-500/30 transition-all">
                  {React.cloneElement(section.icon as React.ReactElement)}
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight italic">{section.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
          <section className="p-8 rounded-3xl bg-white/1 border border-white/5">
            <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">
              <RiGlobalLine size={14} className="text-indigo-400" /> External Node Access
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Redirect links to Steam, ProtonDB, or developer sites exit our secure perimeter. These entities maintain independent privacy standards; we recommend reviewing their specific protocols upon arrival.
            </p>
          </section>
          
          <section className="p-8 rounded-3xl bg-white/1 border border-white/5">
            <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">
              <RiShieldUserLine size={14} className="text-indigo-400" /> Agent Autonomy
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              You retain total control over your session data. We do not utilize cookies to track movements or build profiles. Your right to a private, non-monitored experience is our primary directive.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}