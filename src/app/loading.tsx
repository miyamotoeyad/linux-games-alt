import { RiLoader4Line } from "react-icons/ri";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950">
      <RiLoader4Line className="animate-spin text-indigo-500" size={40} />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-zinc-600 animate-pulse">
        Fetching Game Data...
      </p>
    </div>
  );
}
