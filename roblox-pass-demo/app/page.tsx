"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

import IPhoneFrame from "@/components/IPhoneFrame";
import HomeScreen from "@/components/HomeScreen";
import PassLocked from "@/components/pass/PassLocked";
import PassMain from "@/components/pass/PassMain";
import PlusTrialSheet from "@/components/pass/PlusTrialSheet";
import FeatsScreen from "@/components/pass/FeatsScreen";

import FaeCameraConsent from "@/components/fae/FaeCameraConsent";
import FaeGetReady from "@/components/fae/FaeGetReady";
import FaeIosPermission from "@/components/fae/FaeIosPermission";
import FaeScanning from "@/components/fae/FaeScanning";
import FaeResult from "@/components/fae/FaeResult";

import FreePathCelebration from "@/components/celebrations/FreePathCelebration";
import PlusCelebration from "@/components/celebrations/PlusCelebration";

import RewardPopLayer, {
  type RewardPopHandle,
} from "@/components/animations/RewardPopLayer";

import {
  DAILY_FEATS,
  FREE_REWARDS,
  PLUS_REWARDS,
  type Feat,
  type FeatId,
} from "@/lib/data";

type Screen =
  | "home"
  | "passLocked"
  | "fae-consent"
  | "fae-ready"
  | "fae-permission"
  | "fae-scanning"
  | "fae-result"
  | "free-celebration"
  | "pass"
  | "plus-celebration"
  | "feats";

export default function Page() {
  const [screen, setScreen] = useState<Screen>("home");
  const [hasOpenedPass, setHasOpenedPass] = useState(false);
  const [showPlusSheet, setShowPlusSheet] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  // Pass state - claimedFeats is the source of truth.
  // Free + Plus reward unlocks are derived from it (plus the plusActive flag).
  const [points, setPoints] = useState(0);
  const [claimedFeats, setClaimedFeats] = useState<Set<FeatId>>(new Set());
  const [plusActive, setPlusActive] = useState(false);
  const [animatePlusIn, setAnimatePlusIn] = useState(false);

  const popRef = useRef<RewardPopHandle>(null);

  // Derive which Free / Plus reward IDs are unlocked given the claimed feats.
  const freeClaims = useMemo(() => {
    const out = new Set<string>();
    for (const fId of claimedFeats) {
      const f = DAILY_FEATS.find((d) => d.id === fId);
      if (!f) continue;
      const r = FREE_REWARDS[f.awardIndex];
      if (r) out.add(r.id);
    }
    return out;
  }, [claimedFeats]);

  const plusClaims = useMemo(() => {
    if (!plusActive) return new Set<string>();
    const out = new Set<string>();
    for (const fId of claimedFeats) {
      const f = DAILY_FEATS.find((d) => d.id === fId);
      if (!f) continue;
      const r = PLUS_REWARDS[f.awardIndex];
      if (r) out.add(r.id);
    }
    return out;
  }, [claimedFeats, plusActive]);

  const goHome = () => setScreen("home");

  const openPass = () => {
    setHasOpenedPass(true);
    setScreen("passLocked");
  };

  const onClaimFeat = (feat: Feat, sourceEl: HTMLElement) => {
    if (claimedFeats.has(feat.id)) return;

    // Always award the Free reward.
    const freeReward = FREE_REWARDS[feat.awardIndex];
    const freeTargetEl =
      freeReward && document.getElementById(`strip-free-active-${freeReward.id}`);

    if (freeReward && freeTargetEl) {
      popRef.current?.fire({
        fromEl: sourceEl,
        toEl: freeTargetEl,
        tile: freeReward.tile,
        image: freeReward.image,
        imagePosition: freeReward.imagePosition,
        tier: "free",
        points: feat.points,
        onPointsLand: () => setPoints((p) => p + feat.points),
      });
    }

    // If Plus is active, simultaneously fly the Plus reward to its slot.
    if (plusActive) {
      const plusReward = PLUS_REWARDS[feat.awardIndex];
      const plusTargetEl =
        plusReward &&
        document.getElementById(`strip-plus-active-${plusReward.id}`);
      if (plusReward && plusTargetEl) {
        // Slight delay so the Free pop and Plus pop don't fully overlap.
        window.setTimeout(() => {
          popRef.current?.fire({
            fromEl: sourceEl,
            toEl: plusTargetEl,
            tile: plusReward.tile,
            image: plusReward.image,
            imagePosition: plusReward.imagePosition,
            tier: "plus",
            // Points are awarded once - by the Free pop. Don't double-count.
            points: 0,
          });
        }, 180);
      }
    }

    setClaimedFeats((s) => {
      const next = new Set(s);
      next.add(feat.id);
      return next;
    });
  };

  /** Called when the user finishes the Plus celebration. Activates Plus and
   *  triggers a stagger-in entrance for the Plus strip so already-claimed tiers
   *  visibly backfill. */
  const onPlusActivated = () => {
    setPlusActive(true);
    setAnimatePlusIn(true);
    setScreen("pass");
    window.setTimeout(() => setAnimatePlusIn(false), 1400);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-gradient-to-b from-[#0a0a0c] via-[#0c0c10] to-[#0a0a0c]">
      <IPhoneFrame>
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0"
            >
              {screen === "home" && (
                <HomeScreen
                  hasOpenedPass={hasOpenedPass}
                  onOpenPass={openPass}
                />
              )}

              {screen === "passLocked" && (
                <PassLocked
                  onClose={goHome}
                  onUnlock={() => setScreen("fae-consent")}
                />
              )}

              {screen === "fae-consent" && (
                <FaeCameraConsent
                  onClose={() => setScreen("passLocked")}
                  onContinue={() => {
                    setPermissionDenied(false);
                    setScreen("fae-ready");
                  }}
                />
              )}

              {screen === "fae-ready" && (
                <FaeGetReady
                  onBack={() => setScreen("fae-consent")}
                  onClose={() => setScreen("passLocked")}
                  onContinue={() => setScreen("fae-permission")}
                  permissionDenied={permissionDenied}
                />
              )}

              {screen === "fae-permission" && (
                <FaeIosPermission
                  onAllow={() => setScreen("fae-scanning")}
                  onDeny={() => {
                    setPermissionDenied(true);
                    setScreen("fae-ready");
                  }}
                />
              )}

              {screen === "fae-scanning" && (
                <FaeScanning onComplete={() => setScreen("fae-result")} />
              )}

              {screen === "fae-result" && (
                <FaeResult
                  onClose={() => setScreen("passLocked")}
                  onContinue={() => setScreen("free-celebration")}
                />
              )}

              {screen === "free-celebration" && (
                <FreePathCelebration onDismiss={() => setScreen("pass")} />
              )}

              {screen === "pass" && (
                <PassMain
                  onClose={goHome}
                  onClaim={onClaimFeat}
                  onSubscribe={() => setShowPlusSheet(true)}
                  plusActive={plusActive}
                  freeClaims={freeClaims}
                  plusClaims={plusClaims}
                  claimedFeats={claimedFeats}
                  points={points}
                  onOpenFeats={() => setScreen("feats")}
                  animatePlusIn={animatePlusIn}
                />
              )}

              {screen === "plus-celebration" && (
                <PlusCelebration
                  /** Show how many Plus rewards will backfill on dismiss. */
                  backfillCount={claimedFeats.size}
                  onDismiss={onPlusActivated}
                />
              )}

              {screen === "feats" && (
                <FeatsScreen
                  onBack={() => setScreen("pass")}
                  onClose={goHome}
                  claimedFeats={claimedFeats}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Plus trial bottom sheet (overlay above the Pass screen) */}
          <AnimatePresence>
            {showPlusSheet && (
              <PlusTrialSheet
                key="plus-sheet"
                onClose={() => setShowPlusSheet(false)}
                onStartTrial={() => {
                  setShowPlusSheet(false);
                  setScreen("plus-celebration");
                }}
              />
            )}
          </AnimatePresence>

          {/* Reward fly-in layer (renders above all screens) */}
          <RewardPopLayer ref={popRef} />
        </div>
      </IPhoneFrame>

      <div className="pointer-events-none fixed bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/30">
        Roblox Pass concept demo
      </div>
    </main>
  );
}
