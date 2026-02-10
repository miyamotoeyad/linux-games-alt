export default function Loading() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
      {/* Mirror Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-600/10 blur-[120px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Header Skeleton */}
        <header className="text-center mb-16 animate-pulse">
          <div className="h-16 w-3/4 max-w-xl bg-zinc-800 mx-auto rounded-xl mb-4" />
          <div className="h-3 w-48 bg-zinc-900 mx-auto rounded-full" />
        </header>

        {/* Discloser Skeleton */}
        <div className="max-w-3xl mx-auto mb-16 h-32 bg-zinc-900/50 border border-white/5 rounded-3xl animate-pulse" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <div className="h-100 w-full bg-zinc-900/50 border border-red-500/10 rounded-3xl animate-pulse" />

          {/* Connection Divider */}
          <div className="flex lg:flex-col items-center justify-center gap-4 py-8 opacity-20">
            <div className="h-px lg:h-32 w-24 lg:w-px bg-zinc-700" />
            <div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-900" />
            <div className="h-px lg:h-32 w-24 lg:w-px bg-zinc-700" />
          </div>

          <div className="h-100 w-full bg-zinc-900/50 border border-indigo-500/10 rounded-3xl animate-pulse" />
        </div>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-40 rounded-3xl bg-white/2 border border-white/5 animate-pulse" />
          <div className="h-40 rounded-3xl bg-indigo-500/3 border border-indigo-500/10 animate-pulse" />
        </section>
      </div>

      <div className="fixed bottom-8 right-8 flex items-center gap-3">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 animate-pulse">
          Syncing Sector Data
        </div>
        <div className="w-4 h-4 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    </main>
  );
}