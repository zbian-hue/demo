"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  CloseIcon,
  ControllerIcon,
  PlusBrandGlyph,
  PriceTagIcon,
  PriceTagUpIcon,
  RobuxHexBadge,
} from "@/components/icons";

type Props = {
  onClose: () => void;
  onStartTrial: () => void;
};

/**
 * Bottom sheet that mirrors the real Roblox Plus upsell page (with X +
 * subheader, hero, "Why join Plus?" cards, sticky Subscribe CTA).
 * Slides up from the bottom on top of the Pass screen.
 */
export default function PlusTrialSheet({ onClose, onStartTrial }: Props) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col">
      <motion.button
        aria-label="Close sheet"
        onClick={onClose}
        className="flex-1 bg-black/55 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
        className="absolute inset-x-0 bottom-0 top-[6%] flex flex-col overflow-hidden rounded-t-[28px] bg-black ring-1 ring-white/8"
      >
        {/* Top status row (sub-username + close) */}
        <div className="relative flex items-center justify-center px-4 pt-3">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute left-3 top-2 grid h-9 w-9 place-items-center rounded-full bg-white/8 text-white active:bg-white/15"
          >
            <CloseIcon />
          </button>
          <div className="text-[12px] text-white/65">
            coffeeemeetswaffles: 13+
          </div>
        </div>

        {/* Sub header */}
        <div className="relative flex items-center px-4 pt-2">
          <button
            onClick={onClose}
            aria-label="Back"
            className="grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
          >
            <ChevronLeft />
          </button>
          <div className="absolute inset-x-0 text-center text-[15px] font-semibold">
            Roblox Plus
          </div>
        </div>

        {/* Scrollable content + grid hero */}
        <div className="no-scrollbar relative flex-1 overflow-y-auto">
          {/* Hero with perspective grid */}
          <div className="relative px-5 pt-5">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[260px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(45,91,255,0.12) 0%, rgba(0,0,0,0) 70%)",
              }}
            />
            <PerspectiveGrid />

            <div className="relative">
              <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                <PlusBrandGlyph className="text-white" />
                <span>Roblox Plus</span>
              </div>

              <h1 className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight">
                Our best deal.
                <br />
                Unlock 20% off.
              </h1>

              <div className="mt-4">
                <span className="text-[28px] font-extrabold tracking-tight">
                  $4.99
                </span>
                <span className="ml-1 text-[14px] text-white/70">/month</span>
              </div>
            </div>
          </div>

          {/* Why join Plus */}
          <div className="px-5 pb-32 pt-7">
            <div className="text-[20px] font-bold">Why join Plus?</div>

            <div className="mt-3 flex flex-col gap-2.5">
              <BenefitCard
                icon={<PriceTagIcon className="text-white/90" />}
                title="10% off in-game items, avatars and more"
                subtitle="Spend less Robux starting now"
              />
              <BenefitCard
                icon={<PriceTagUpIcon className="text-white/90" />}
                title="20% off these items after 2 months"
                subtitle="Double your discount and lock it in"
              />
              <BenefitCard
                icon={<ControllerIcon className="text-white/90" />}
                title="Free and unlimited private servers"
                subtitle="Choose who you play with"
              />
              <BenefitCard
                icon={<RobuxHexBadge className="text-white/90" />}
                title="Send Robux for free"
                subtitle="Transfers may need parental approval"
              />
            </div>
          </div>
        </div>

        {/* Sticky bottom CTA */}
        <div className="relative bg-black/95 px-5 pb-5 pt-3 backdrop-blur ring-t ring-white/8 [box-shadow:0_-12px_24px_rgba(0,0,0,0.6)]">
          <button
            onClick={onStartTrial}
            className="w-full rounded-2xl bg-rblx-blue py-3.5 text-[15px] font-bold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] transition-transform active:scale-[0.99]"
          >
            Subscribe
          </button>
          <p className="mt-2 px-1 text-center text-[10.5px] leading-snug text-white/55">
            By clicking "Subscribe," you agree to the{" "}
            <span className="underline decoration-white/40 underline-offset-2">
              Roblox Subscription Terms
            </span>
            . You will be automatically charged each month until you cancel.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-rblx-row px-4 py-3 ring-1 ring-white/5">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[14px] font-semibold leading-tight">{title}</div>
        <div className="mt-0.5 text-[12px] text-rblx-dim">{subtitle}</div>
      </div>
    </div>
  );
}

function PerspectiveGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 h-[180px] w-full"
      viewBox="0 0 384 180"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {/* Horizontal lines */}
      {[0.05, 0.18, 0.32, 0.48, 0.66, 0.86].map((t, i) => (
        <line
          key={`h-${i}`}
          x1="-40"
          x2="424"
          y1={t * 180}
          y2={t * 180}
          stroke="url(#gridFade)"
          strokeWidth="0.6"
        />
      ))}
      {/* Vertical converging lines */}
      {Array.from({ length: 11 }).map((_, i) => {
        const startX = (i / 10) * 384;
        const vanishX = 192;
        return (
          <line
            key={`v-${i}`}
            x1={startX}
            y1="180"
            x2={vanishX}
            y2="0"
            stroke="url(#gridFade)"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}
