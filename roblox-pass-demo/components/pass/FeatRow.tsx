"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CheckIcon } from "@/components/icons";
import type { Feat, Reward } from "@/lib/data";

export type FeatRowState = "idle" | "progress" | "claimable" | "claimed";

type Props = {
  feat: Feat;
  reward: Reward;
  initialState: FeatRowState;
  /** Called when the user finishes the feat (clicks Claim). Provides DOM source for the pop. */
  onClaim: (feat: Feat, sourceEl: HTMLElement) => void;
};

export default function FeatRow({ feat, reward, initialState, onClaim }: Props) {
  const [state, setState] = useState<FeatRowState>(initialState);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const startGo = () => {
    if (state !== "idle") return;
    setState("progress");
    window.setTimeout(() => setState("claimable"), 1900);
  };

  const handleClaim = () => {
    if (thumbRef.current) onClaim(feat, thumbRef.current);
    setState("claimed");
  };

  const buttonLabel =
    state === "claimed"
      ? "Done"
      : state === "claimable"
        ? "Claim"
        : feat.actionVerb;

  const buttonAction = () => {
    if (state === "claimed" || state === "progress") return;
    if (state === "claimable") return handleClaim();
    if (feat.actionVerb === "Claim") return handleClaim();
    return startGo();
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-rblx-row">
      <div className="flex items-center gap-3 px-3.5 py-3">
        {/* Reward thumbnail */}
        <div
          ref={thumbRef}
          className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg ring-1 ring-white/10"
          style={{ background: reward.tile }}
        >
          {reward.image && (
            <img
              src={reward.image}
              alt=""
              className="absolute inset-0 h-full w-full"
              style={{
                objectFit: "cover",
                objectPosition: reward.imagePosition ?? "50% 0%",
              }}
            />
          )}
          {reward.badge && (
            <span className="relative text-[11px] font-bold text-white/95">
              {reward.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="min-w-0 flex-1">
          <div
            className={`truncate text-[14px] font-medium ${
              state === "claimed" ? "text-white/55 line-through" : "text-white"
            }`}
          >
            {feat.title}
          </div>
        </div>

        {/* Points pill */}
        <div
          className={`shrink-0 rounded-full bg-white/8 px-2 py-1 text-[11px] font-bold ${
            state === "claimed" ? "text-white/55" : "text-white"
          }`}
        >
          {feat.points} pts
        </div>

        {/* Action button */}
        <button
          onClick={buttonAction}
          disabled={state === "progress" || state === "claimed"}
          className={`min-w-[64px] shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition-transform active:scale-95 ${
            state === "claimed"
              ? "bg-white/10 text-white/55"
              : state === "progress"
                ? "bg-white/10 text-white/75"
                : state === "claimable"
                  ? "bg-rblx-blue text-white"
                  : feat.actionVerb === "Claim"
                    ? "bg-rblx-blue text-white"
                    : "bg-white/10 text-white"
          }`}
        >
          {state === "claimed" ? (
            <span className="flex items-center justify-center gap-1">
              <CheckIcon className="h-3 w-3" /> Done
            </span>
          ) : (
            buttonLabel
          )}
        </button>
      </div>

      {/* Inline progress strip */}
      {state === "progress" && (
        <div className="px-3.5 pb-3">
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>{feat.inProgressCopy ?? "In progress..."}</span>
            <span className="text-white/55">simulating</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
            <motion.div
              initial={{ width: "8%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.85, ease: [0.2, 0.6, 0.2, 1] }}
              className="h-full rounded-full bg-rblx-blue"
            />
          </div>
        </div>
      )}
    </div>
  );
}
