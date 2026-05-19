"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Confetti from "./Confetti";
import { PLUS_REWARDS } from "@/lib/data";
import { CrownIcon, SparkleIcon } from "@/components/icons";

type Props = {
  onDismiss: () => void;
  /** Number of feats already claimed before subscribing - shown in the "we're
   *  backfilling your past tiers" copy when > 0. */
  backfillCount?: number;
};

export default function PlusCelebration({ onDismiss, backfillCount = 0 }: Props) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5200);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <button
      onClick={onDismiss}
      className="relative z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black text-left text-white"
      aria-label="Dismiss"
    >
      {/* Backdrop with violet/gold radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 30%, rgba(244,200,74,0.28) 0%, rgba(142,91,255,0.2) 45%, rgba(0,0,0,0) 75%)",
        }}
      />

      <Confetti variant="plus" />

      {/* Crown lockup */}
      <motion.div
        className="z-10 flex flex-col items-center px-6 pt-12 text-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
      >
        <div className="relative">
          <motion.div
            initial={{ rotate: -12, y: 8 }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          >
            <CrownIcon className="h-[64px] w-[80px] text-rblx-gold drop-shadow-[0_4px_24px_rgba(244,200,74,0.55)]" />
          </motion.div>

          {/* Orbiting sparkles */}
          <motion.div
            className="absolute -left-7 -top-2 text-rblx-gold"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0.7, 1], opacity: [0, 1, 0.6, 1] }}
            transition={{ duration: 1.4, delay: 0.3, repeat: 1 }}
          >
            <SparkleIcon />
          </motion.div>
          <motion.div
            className="absolute -right-7 top-3 text-white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0.5, 1], opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 1.6, delay: 0.45, repeat: 1 }}
          >
            <SparkleIcon />
          </motion.div>
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-rblx-violet"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0.6, 1], opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 1.8, delay: 0.6, repeat: 1 }}
          >
            <SparkleIcon />
          </motion.div>
        </div>

        <div className="mt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-rblx-gold">
          Plus Trial
        </div>
        <h1 className="mt-1 text-[34px] font-extrabold leading-tight tracking-tight">
          You're in!
        </h1>
        <p className="mt-2 max-w-[300px] text-[14px] leading-snug text-white/80">
          {backfillCount > 0
            ? `Plus rewards from your last ${backfillCount} feat${
                backfillCount === 1 ? "" : "s"
              } are unlocking now. New feats drop both rewards together.`
            : "Plus rewards are now live. Daily feats will drop both Free and Plus items together."}
        </p>
      </motion.div>

      {/* Reward shower */}
      <div className="z-10 mt-9 flex gap-3 px-6">
        {PLUS_REWARDS.slice(0, 4).map((r, i) => (
          <motion.div
            key={r.id}
            className="relative h-[72px] w-[72px] overflow-hidden rounded-2xl ring-1 ring-white/15"
            style={{
              background: r.tile,
              boxShadow:
                "0 0 0 0 rgba(244,200,74,0.0), 0 8px 24px rgba(244,200,74,0.18)",
            }}
            initial={{ opacity: 0, y: 38, scale: 0.55, rotate: -6 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 14,
              delay: 0.5 + i * 0.08,
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
              <span className="absolute inset-0 grid place-items-center text-[16px] font-extrabold text-white/95">
                {r.badge}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="z-10 mt-9 text-[13px] text-white/65"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Tap anywhere to keep going
      </motion.div>
    </button>
  );
}
