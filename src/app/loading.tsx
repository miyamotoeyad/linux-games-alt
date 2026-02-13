import { RiLoader4Line } from "react-icons/ri";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 min-h-screen flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-20 w-20 animate-ping rounded-full bg-indigo-500/20" />
        <RiLoader4Line className="animate-spin text-indigo-500" size={48} />
      </div>
      
      <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 animate-pulse">
        Fetching Game Data...
      </p>
    </div>
  );
}