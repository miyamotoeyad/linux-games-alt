import { GameMapping } from "@/lib/data";
import { RiAlertLine } from "react-icons/ri";

interface DiscloserProps {
  mapping: GameMapping | undefined | null;
}

export default function Discloser({ mapping }: DiscloserProps ) {
  if (!mapping?.discovery) return null;

  return (
    <>
      {mapping?.discovery && (
        <div className="relative max-w-3xl mx-auto mb-16 group">
          <div className="relative bg-yellow-500/2 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-6 md:p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Icon with Pulsing Effect */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-yellow-500/20 blur-md animate-pulse rounded-full" />
                <div className="relative h-14 w-14 grid place-items-center bg-yellow-500/10 border border-yellow-500/30 rounded-2xl">
                  <RiAlertLine className="text-yellow-500 text-3xl" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="font-black uppercase tracking-[0.4em] text-yellow-500 text-[10px]">
                    Critical Disclosure
                  </span>
                  <span className="h-px w-12 bg-yellow-500/20" />
                </div>

                <h2 className="font-bold text-zinc-200 tracking-tight leading-relaxed italic">
                  {mapping.discovery}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
