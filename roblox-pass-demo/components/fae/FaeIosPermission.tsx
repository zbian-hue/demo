"use client";

import { CameraGlyph } from "@/components/icons";

type Props = {
  onAllow: () => void;
  onDeny: () => void;
};

export default function FaeIosPermission({ onAllow, onDeny }: Props) {
  return (
    <div className="relative h-full w-full bg-black/65 backdrop-blur-[2px]">
      {/* Faux dimmed FaeGetReady backdrop */}
      <div className="absolute inset-0 opacity-40 blur-[2px]" aria-hidden>
        <div className="h-full w-full bg-black" />
      </div>

      {/* iOS permission modal */}
      <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-[20px] bg-[#252528]/95 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/8">
          {/* Hand-on-camera glyph */}
          <div className="flex justify-center pt-5">
            <div className="relative grid h-[58px] w-[58px] place-items-center rounded-2xl bg-white/8 ring-1 ring-white/10">
              <CameraGlyph className="text-white/95" />
              <div className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-rblx-blue text-[12px] font-bold">
                ✋
              </div>
            </div>
          </div>

          <div className="px-5 pt-4 text-[15px] font-semibold leading-snug">
            "Roblox" would like to access the camera.
          </div>

          <div className="px-5 pb-4 pt-1.5 text-[12px] leading-snug text-white/70">
            Roblox uses your camera to check your age, animate your avatar, and
            scan QR codes.
          </div>

          <div className="grid grid-cols-2 border-t border-white/10 text-[15px]">
            <button
              onClick={onDeny}
              className="border-r border-white/10 py-3 text-rblx-blue active:bg-white/5"
            >
              Don't Allow
            </button>
            <button
              onClick={onAllow}
              className="py-3 font-semibold text-rblx-blue active:bg-white/5"
            >
              Allow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
