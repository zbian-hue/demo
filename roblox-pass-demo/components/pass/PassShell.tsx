"use client";

import type { ReactNode } from "react";
import { CloseIcon } from "@/components/icons";

type Props = {
  onClose: () => void;
  /** Optional points pill rendered next to the close button. */
  points?: number | null;
  children: ReactNode;
};

export default function PassShell({ onClose, points = null, children }: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      {/* Header strip */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="w-10" />
        <div className="flex items-center gap-2">
          {points != null && <PointsPill value={points} />}
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Title block */}
      <div className="px-5 pt-1">
        <h1 className="text-[28px] font-extrabold tracking-tight">
          Roblox Pass
        </h1>
        <p className="mt-1 text-[13px] text-rblx-dim">
          Complete feats to earn points and unlock rewards.
        </p>
      </div>

      {/* Body */}
      <div className="no-scrollbar flex-1 overflow-y-auto pb-6 pt-4">{children}</div>
    </div>
  );
}

function PointsPill({ value }: { value: number }) {
  return (
    <div
      data-points-pill
      className="flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-[13px] font-bold"
    >
      <span className="grid h-4 w-4 place-items-center rounded-full bg-rblx-blue text-[9px]">
        P
      </span>
      <span>{value} pts</span>
    </div>
  );
}
