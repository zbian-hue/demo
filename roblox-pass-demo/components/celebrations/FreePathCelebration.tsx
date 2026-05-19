"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Confetti from "./Confetti";
import { FREE_REWARDS } from "@/lib/data";
import { SparkleIcon } from "@/components/icons";

type Props = {
  onDismiss: () => void;
};

export default function FreePathCelebration({ onDismiss }: Props) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4500);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <button
      onClick={onDismiss}
      className="relative z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black text-left text-white"
      aria-label="Dismiss"
    >
      {/* Soft radial backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 35%, rgba(45,91,255,0.35) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <Confetti variant="free" />

      {/* Title */}
      <motion.div
        className="z-10 flex flex-col items-center px-6 pt-16 text-center"
        initial={{ opacity: 0, y: 12, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        <div className="mb-3 flex items-center gap-2 text-rblx-blue">
          <SparkleIcon />
          <SparkleIcon />
          <SparkleIcon />
        </div>
        <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/70">
          Free Path
        </div>
        <h1 className="mt-1 text-[34px] font-extrabold leading-tight tracking-tight">
          Unlocked!
        </h1>
        <p className="mt-2 max-w-[280px] text-[14px] leading-snug text-white/75">
          Earn rewards just by playing. New feats every day - claim before they
          refresh.
        </p>
      </motion.div>

      {/* Reward thumbnails */}
      <div className="z-10 mt-10 flex gap-3 px-6">
        {FREE_REWARDS.slice(0, 4).map((r, i) => (
          <motion.div
            key={r.id}
            className="relative h-[68px] w-[68px] overflow-hidden rounded-2xl ring-1 ring-white/15"
            style={{ background: r.tile }}
            initial={{ opacity: 0, y: 30, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 16,
              delay: 0.35 + i * 0.07,
            }}
          >
            {r.image && (
              <img
                src={r.image}
                alt=""
                className="h-full w-full"
                style={{
                  objectFit: "cover",
                  objectPosition: r.imagePosition ?? "50% 0%",
                }}
              />
            )}
            {r.badge && (
              <span className="absolute inset-0 grid place-items-center text-[15px] font-extrabold text-white/95">
                {r.badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA hint */}
      <motion.div
        className="z-10 mt-10 text-[13px] text-white/65"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Tap anywhere to start
      </motion.div>
    </button>
  );
}
