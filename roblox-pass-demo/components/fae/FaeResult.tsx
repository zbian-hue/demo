"use client";

import { CloseIcon } from "@/components/icons";

type Props = {
  onClose: () => void;
  onContinue: () => void;
};

export default function FaeResult({ onClose, onContinue }: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      <div className="flex items-center justify-end px-4 pt-3">
        <button
          onClick={onClose}
          aria-label="Close"
          className="grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="px-6 pt-2">
        <h1 className="text-[26px] font-extrabold leading-tight tracking-tight">
          We estimated your age
          <br />
          is between 13 and 15
        </h1>
        <p className="mt-3 text-[14px] leading-snug text-white/75">
          Roblox Select is for you. You can play games rated for your age, chat
          with people in similar age groups, and access more features.
        </p>
      </div>

      <div className="flex-1" />

      <div className="px-6 pb-6">
        <button
          onClick={onContinue}
          className="w-full rounded-2xl bg-rblx-blue py-3.5 text-[15px] font-bold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] transition-transform active:scale-[0.99]"
        >
          Continue
        </button>
        <p className="mt-2 text-center text-[11px] text-white/55">
          Access to features depends on your account settings and region.{" "}
          <span className="underline decoration-white/40 underline-offset-2">
            View details
          </span>
          .
        </p>
      </div>
    </div>
  );
}
