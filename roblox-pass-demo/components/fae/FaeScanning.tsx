"use client";

import { useEffect } from "react";

type Props = {
  onComplete: () => void;
};

/** Brief faux-camera scan that bridges iOS permission -> result, so the demo feels real. */
export default function FaeScanning({ onComplete }: Props) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="flex h-full w-full flex-col items-center bg-black text-white">
      <div className="px-6 pt-7 text-center">
        <h1 className="text-[22px] font-extrabold tracking-tight">
          Estimating your age...
        </h1>
        <p className="mt-2 text-[13px] text-white/70">
          Hold still while we scan.
        </p>
      </div>

      {/* Camera viewport */}
      <div className="relative mt-8 grid h-[300px] w-[260px] place-items-center overflow-hidden rounded-[28px] ring-1 ring-white/10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 45%, #1c2a4f 0%, #08101f 60%, #03060c 100%)",
          }}
        />
        {/* Faux face */}
        <svg width="170" height="200" viewBox="0 0 170 200" fill="none">
          <ellipse cx="85" cy="80" rx="52" ry="62" fill="#3a4f7a" opacity="0.85" />
          <ellipse cx="85" cy="80" rx="42" ry="52" fill="#a9b8d8" opacity="0.85" />
          <ellipse cx="70" cy="78" rx="3" ry="4" fill="#10131a" />
          <ellipse cx="100" cy="78" rx="3" ry="4" fill="#10131a" />
          <path
            d="M70 100c5 5 25 5 30 0"
            stroke="#10131a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="40" y="140" width="90" height="60" rx="14" fill="#3a4f7a" />
        </svg>

        {/* Scan line */}
        <div className="pointer-events-none absolute inset-x-3 top-3 bottom-3 overflow-hidden rounded-2xl">
          <div className="scanline absolute inset-x-0 h-1.5 rounded-full bg-rblx-blue/80 shadow-[0_0_18px_4px_rgba(45,91,255,0.6)]" />
        </div>

        {/* Corner brackets */}
        {(["tl", "tr", "bl", "br"] as const).map((c) => (
          <div
            key={c}
            className={`pointer-events-none absolute h-6 w-6 border-rblx-blue ${
              c === "tl" ? "left-3 top-3 border-l-2 border-t-2" : ""
            } ${c === "tr" ? "right-3 top-3 border-r-2 border-t-2" : ""} ${
              c === "bl" ? "bottom-3 left-3 border-b-2 border-l-2" : ""
            } ${c === "br" ? "bottom-3 right-3 border-b-2 border-r-2" : ""}`}
            style={{ borderRadius: 6 }}
          />
        ))}
      </div>

      <style jsx>{`
        .scanline {
          animation: scan 1.6s ease-in-out infinite;
        }
        @keyframes scan {
          0% {
            top: 4%;
            opacity: 0.2;
          }
          50% {
            top: 92%;
            opacity: 0.95;
          }
          100% {
            top: 4%;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
