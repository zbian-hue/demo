"use client";

import { ChevronRight, LockIcon } from "@/components/icons";
import FeatRow from "./FeatRow";
import PassShell from "./PassShell";
import RewardStrip, { type RewardState } from "./RewardStrip";
import {
  DAILY_FEATS,
  FREE_REWARDS,
  PLUS_REWARDS,
  type Feat,
} from "@/lib/data";

type Props = {
  onClose: () => void;
  onClaim: (feat: Feat, sourceEl: HTMLElement) => void;
  onSubscribe: () => void;
  /** Whether the user has activated Plus. Drives the Plus-strip state. */
  plusActive: boolean;
  /** Reward IDs the user has already claimed in the Free row. */
  freeClaims: Set<string>;
  /** Reward IDs the user has already claimed in the Plus row (only populated when plusActive). */
  plusClaims: Set<string>;
  claimedFeats: Set<string>;
  points: number;
  onOpenFeats: () => void;
  /** Trigger a stagger-in entrance for the Plus strip (used right after the Plus celebration). */
  animatePlusIn?: boolean;
};

/**
 * Single "Roblox Pass" surface. Same screen pre- and post-Plus; the only thing
 * that changes is whether the Plus row is locked behind a Subscribe overlay or
 * shown as live, claimable tiles.
 *
 * This mirrors the spec: feats are shared across both rows. Each feat awards
 * one Free reward (always) plus one Plus reward (only if Plus is active).
 */
export default function PassMain({
  onClose,
  onClaim,
  onSubscribe,
  plusActive,
  freeClaims,
  plusClaims,
  claimedFeats,
  points,
  onOpenFeats,
  animatePlusIn,
}: Props) {
  const freeStates: Partial<Record<string, RewardState>> = Object.fromEntries(
    FREE_REWARDS.map((r) => [
      r.id,
      freeClaims.has(r.id) ? "claimed" : "available",
    ])
  );

  const plusStates: Partial<Record<string, RewardState>> = Object.fromEntries(
    PLUS_REWARDS.map((r) => [
      r.id,
      plusActive
        ? plusClaims.has(r.id)
          ? "claimed"
          : "available"
        : "locked",
    ])
  );

  return (
    <PassShell onClose={onClose} points={points}>
      {/* Feats section */}
      <div className="px-5">
        <button
          onClick={onOpenFeats}
          className="flex items-center gap-1 text-[18px] font-bold"
        >
          Feats <ChevronRight className="-mb-0.5" />
        </button>
        <div className="mt-3 flex flex-col gap-2">
          {DAILY_FEATS.map((feat) => {
            const reward = FREE_REWARDS[feat.awardIndex] ?? FREE_REWARDS[0];
            const initial = claimedFeats.has(feat.id) ? "claimed" : "idle";
            return (
              <FeatRow
                key={feat.id}
                feat={feat}
                reward={reward}
                initialState={initial}
                onClaim={onClaim}
              />
            );
          })}
        </div>
        <p className="mt-2 px-1 text-[11px] leading-snug text-rblx-dim">
          Each feat unlocks the same tier in both the Free and Plus rows.{" "}
          {plusActive
            ? "Plus rewards drop alongside Free rewards."
            : "Plus row is locked until you subscribe."}
        </p>
      </div>

      {/* Plus rewards */}
      <div className="mt-6">
        <RewardStrip
          title="Plus rewards"
          rewards={PLUS_REWARDS}
          stripId={plusActive ? "plus-active" : "plus-locked"}
          states={plusStates}
          tileSize={82}
          showProgress={plusActive}
          animateIn={animatePlusIn}
          overlay={
            !plusActive ? <PlusOverlay onSubscribe={onSubscribe} /> : undefined
          }
        />
      </div>

      {/* Free rewards */}
      <div className="mt-5">
        <RewardStrip
          title="Free rewards"
          rewards={FREE_REWARDS}
          stripId="free-active"
          states={freeStates}
          tileSize={82}
        />
      </div>
    </PassShell>
  );
}

function PlusOverlay({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <div className="flex w-[calc(100%-12px)] items-center justify-between rounded-2xl bg-black/65 px-4 py-2.5 ring-1 ring-white/10 backdrop-blur-sm">
      <div className="flex items-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-rblx-gold">
          <LockIcon className="h-3.5 w-3.5" />
        </span>
        <div className="text-[13px] font-medium text-white">
          Unlock these items with Plus
        </div>
      </div>
      <button
        onClick={onSubscribe}
        className="rounded-full bg-rblx-blue px-4 py-1.5 text-[12px] font-bold text-white transition-transform active:scale-95"
      >
        Subscribe
      </button>
    </div>
  );
}
