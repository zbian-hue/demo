"use client";

import { ChevronRight, LockIcon } from "@/components/icons";
import type { Reward } from "@/lib/data";

export type RewardState = "locked" | "available" | "claimed";

type Props = {
  title: string;
  rewards: Reward[];
  /** Per-tile state by reward id. Default = "available". */
  states?: Partial<Record<string, RewardState>>;
  /** Pulse the slot to indicate an inbound reward animation. */
  pulseId?: string | null;
  /** Stagger reward tiles in on mount (used right after celebrations). */
  animateIn?: boolean;
  /** Optional progress strip below the tiles (3-dot progress in mockup). */
  showProgress?: boolean;
  /** Click the title to navigate (e.g. Feats >). */
  onTitleClick?: () => void;
  /** Render an overlay across the strip, e.g. Subscribe to Plus. */
  overlay?: React.ReactNode;
  /** Compact = smaller tile size. */
  compact?: boolean;
  /** Tile size override. */
  tileSize?: number;
  /** ID prefix used by the reward-pop animation to find DOM targets. */
  stripId: string;
};

export default function RewardStrip({
  title,
  rewards,
  states = {},
  pulseId,
  animateIn,
  showProgress,
  onTitleClick,
  overlay,
  compact,
  tileSize,
  stripId,
}: Props) {
  const size = tileSize ?? (compact ? 76 : 86);

  return (
    <div className="px-5">
      {onTitleClick ? (
        <button
          onClick={onTitleClick}
          className="flex items-center gap-1 text-[18px] font-bold"
        >
          {title} <ChevronRight className="-mb-0.5" />
        </button>
      ) : (
        <div className="text-[18px] font-bold">{title}</div>
      )}

      <div className="relative mt-3">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {rewards.map((r, i) => {
            const state = states[r.id] ?? "available";
            return (
              <RewardTile
                key={r.id}
                reward={r}
                state={state}
                size={size}
                pulse={pulseId === r.id}
                animateIn={animateIn}
                index={i}
                domId={`strip-${stripId}-${r.id}`}
              />
            );
          })}
        </div>
        {showProgress && <ProgressDots />}
        {overlay && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
            {overlay}
          </div>
        )}
      </div>
    </div>
  );
}

function RewardTile({
  reward,
  state,
  size,
  pulse,
  animateIn,
  index,
  domId,
}: {
  reward: Reward;
  state: RewardState;
  size: number;
  pulse?: boolean;
  animateIn?: boolean;
  index: number;
  domId: string;
}) {
  const isClaimed = state === "claimed";
  const isLocked = state === "locked";

  return (
    <div
      className="relative shrink-0"
      style={{
        width: size,
        animation: animateIn
          ? `tile-in 360ms ${index * 60}ms cubic-bezier(0.2,0.7,0.3,1.4) backwards`
          : undefined,
      }}
    >
      <div
        id={domId}
        className={`relative flex items-end justify-center overflow-hidden rounded-2xl ring-1 ring-white/10 transition ${
          pulse ? "ring-2 ring-rblx-blue" : ""
        }`}
        style={{
          width: size,
          height: size,
          background: reward.tile,
        }}
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
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-[18px] font-extrabold tracking-tight text-white/95">
              {reward.badge}
            </span>
          </div>
        )}
        {isLocked && (
          <div className="absolute inset-0 grid place-items-center bg-black/55 text-white/85">
            <LockIcon className="h-3 w-3" />
          </div>
        )}
        {isClaimed && (
          <div className="absolute inset-x-0 top-0 mx-auto mt-1.5 w-fit rounded-md bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold">
            Claimed
          </div>
        )}
      </div>
      <div className="mt-1.5 max-w-full truncate text-[10px] text-white/80">
        {reward.name}
      </div>

      <style jsx>{`
        @keyframes tile-in {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.86);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

function ProgressDots() {
  return (
    <div className="mt-2 flex items-center justify-center gap-1.5 px-1">
      <span className="h-1 w-6 rounded-full bg-white/15" />
      <span className="h-1 w-1.5 rounded-full bg-white/35" />
      <span className="grid h-4 w-4 place-items-center rounded-full bg-white/10 text-[9px] text-white/80">
        3
      </span>
      <span className="h-1 w-1.5 rounded-full bg-white/35" />
      <span className="h-1 w-6 rounded-full bg-white/15" />
    </div>
  );
}
