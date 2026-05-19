"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Tier = "free" | "plus";

type Pop = {
  id: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  size: number;
  tile: string;
  image?: string;
  imagePosition?: string;
  tier: Tier;
  points: number;
};

export type RewardPopHandle = {
  fire: (opts: {
    fromEl: HTMLElement | null;
    toEl: HTMLElement | null;
    tile: string;
    image?: string;
    imagePosition?: string;
    tier: Tier;
    points: number;
    onPointsLand?: () => void;
  }) => void;
};

const RewardPopLayer = forwardRef<RewardPopHandle, { children?: ReactNode }>(
  function RewardPopLayer(_, ref) {
    const layerRef = useRef<HTMLDivElement | null>(null);
    const [pops, setPops] = useState<Pop[]>([]);
    const [pointsBubbles, setPointsBubbles] = useState<
      { id: number; x: number; y: number; amount: number }[]
    >([]);
    const seq = useRef(0);

    useImperativeHandle(
      ref,
      (): RewardPopHandle => ({
        fire: ({
          fromEl,
          toEl,
          tile,
          image,
          imagePosition,
          tier,
          points,
          onPointsLand,
        }) => {
          const layer = layerRef.current;
          if (!layer || !fromEl || !toEl) return;
          const layerBox = layer.getBoundingClientRect();
          const a = fromEl.getBoundingClientRect();
          const b = toEl.getBoundingClientRect();

          const fromX = a.left - layerBox.left + a.width / 2;
          const fromY = a.top - layerBox.top + a.height / 2;
          const toX = b.left - layerBox.left + b.width / 2;
          const toY = b.top - layerBox.top + b.height / 2;

          const id = ++seq.current;
          const size = Math.max(a.width, 36);
          setPops((p) => [
            ...p,
            { id, fromX, fromY, toX, toY, size, tile, image, imagePosition, tier, points },
          ]);

          // Points bubble float-up from the row.
          setPointsBubbles((p) => [
            ...p,
            { id, x: fromX, y: fromY - 4, amount: points },
          ]);

          window.setTimeout(() => {
            setPops((p) => p.filter((x) => x.id !== id));
            onPointsLand?.();
          }, 720);
          window.setTimeout(() => {
            setPointsBubbles((p) => p.filter((x) => x.id !== id));
          }, 1100);
        },
      }),
      []
    );

    return (
      <div
        ref={layerRef}
        className="pointer-events-none absolute inset-0 z-40 overflow-hidden"
      >
        <AnimatePresence>
          {pops.map((p) => (
            <motion.div
              key={p.id}
              className="absolute overflow-hidden rounded-2xl ring-1 ring-white/20"
              style={{
                width: p.size,
                height: p.size,
                background: p.tile,
                boxShadow:
                  p.tier === "plus"
                    ? "0 8px 22px rgba(244,200,74,0.45)"
                    : "0 8px 22px rgba(45,91,255,0.4)",
              }}
              initial={{
                left: p.fromX - p.size / 2,
                top: p.fromY - p.size / 2,
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                left: p.toX - 18,
                top: p.toY - 18,
                scale: 0.42,
                opacity: 1,
                rotate: p.tier === "plus" ? 14 : -8,
              }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.2, 0.75, 0.2, 1],
              }}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: p.imagePosition ?? "50% 0%",
                  }}
                />
              )}
            </motion.div>
          ))}

          {pointsBubbles.map((b) => (
            <motion.div
              key={`pts-${b.id}`}
              className="absolute select-none rounded-full bg-rblx-blue px-2.5 py-1 text-[11px] font-bold text-white shadow-[0_4px_18px_rgba(45,91,255,0.55)]"
              style={{ left: b.x - 24, top: b.y - 12 }}
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{ opacity: [0, 1, 1, 0], y: -52, scale: 1 }}
              transition={{ duration: 1.05, ease: "easeOut" }}
            >
              +{b.amount} pts
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

export default RewardPopLayer;
