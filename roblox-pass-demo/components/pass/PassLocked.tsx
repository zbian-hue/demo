"use client";

import PassShell from "./PassShell";
import RewardStrip from "./RewardStrip";
import { ChevronRight } from "@/components/icons";
import { FREE_REWARDS, PLUS_REWARDS } from "@/lib/data";

type Props = {
  onClose: () => void;
  onUnlock: () => void;
};

export default function PassLocked({ onClose, onUnlock }: Props) {
  return (
    <PassShell onClose={onClose}>
      {/* Feats > section with single 'Unlock feats with age check' row */}
      <div className="px-5">
        <div className="flex items-center gap-1 text-[18px] font-bold">
          Feats <ChevronRight className="-mb-0.5" />
        </div>
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-rblx-row px-4 py-3">
          <div className="text-[15px] font-medium">
            Unlock feats with age check
          </div>
          <button
            onClick={onUnlock}
            className="rounded-full bg-rblx-blue px-4 py-2 text-[13px] font-bold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] transition-transform active:scale-95"
          >
            Unlock
          </button>
        </div>
      </div>

      <div className="mt-6">
        <RewardStrip
          title="Plus rewards"
          rewards={PLUS_REWARDS}
          stripId="plus-locked"
          states={Object.fromEntries(PLUS_REWARDS.map((r) => [r.id, "locked"]))}
          tileSize={82}
        />
      </div>
      <div className="mt-5">
        <RewardStrip
          title="Free rewards"
          rewards={FREE_REWARDS}
          stripId="free-locked"
          states={Object.fromEntries(FREE_REWARDS.map((r) => [r.id, "locked"]))}
          tileSize={82}
        />
      </div>
    </PassShell>
  );
}
