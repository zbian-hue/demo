"use client";

import { ChevronLeft, CloseIcon, FaeAvatarIcon } from "@/components/icons";

type Props = {
  onBack: () => void;
  onClose: () => void;
  onContinue: () => void;
  permissionDenied?: boolean;
};

export default function FaeGetReady({
  onBack,
  onClose,
  onContinue,
  permissionDenied,
}: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-3">
        <button
          onClick={onBack}
          aria-label="Back"
          className="grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onClose}
          aria-label="Close"
          className="grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Title */}
      <div className="px-6 pt-2">
        <h1 className="text-[26px] font-extrabold leading-tight tracking-tight">
          Get ready for the camera
        </h1>
        <p className="mt-2 text-[14px] leading-snug text-white/75">
          This will help us confirm you're [X] years old. Find a space with good
          lighting and take a photo of yourself, not a parent or anyone else.
        </p>
      </div>

      {/* Avatar illustration */}
      <div className="flex flex-1 items-center justify-center px-4">
        <FaeAvatarIcon />
      </div>

      {permissionDenied && (
        <div className="mb-2 px-6 text-[12px] text-rblx-gold">
          Camera access denied. Please allow access to continue.
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-2.5 px-6 pb-6">
        <button
          onClick={onContinue}
          className="w-full rounded-2xl bg-rblx-blue py-3.5 text-[15px] font-bold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] transition-transform active:scale-[0.99]"
        >
          Continue
        </button>
        <button className="w-full rounded-2xl bg-white/10 py-3.5 text-[15px] font-semibold text-white/90 transition-transform active:scale-[0.99]">
          Continue on another device
        </button>
      </div>
    </div>
  );
}
