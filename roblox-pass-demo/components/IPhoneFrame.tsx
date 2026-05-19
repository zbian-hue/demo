"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function IPhoneFrame({ children }: Props) {
  return (
    <div className="relative">
      {/* Outer device shell */}
      <div
        className="relative rounded-[58px] p-[14px] shadow-device"
        style={{
          width: 412,
          background:
            "linear-gradient(180deg, #1d1d23 0%, #0a0a0e 50%, #16161c 100%)",
        }}
      >
        {/* Side button hints */}
        <div className="absolute -left-[3px] top-[120px] h-20 w-[3px] rounded-l bg-[#2a2a33]" />
        <div className="absolute -left-[3px] top-[210px] h-12 w-[3px] rounded-l bg-[#2a2a33]" />
        <div className="absolute -left-[3px] top-[260px] h-12 w-[3px] rounded-l bg-[#2a2a33]" />
        <div className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r bg-[#2a2a33]" />

        {/* Inner viewport */}
        <div
          className="relative overflow-hidden rounded-[46px] phone-surface"
          style={{ width: 384, height: 832 }}
        >
          {/* Status bar */}
          <div className="absolute inset-x-0 top-0 z-30 flex h-[54px] items-center justify-between px-8 pt-3 text-white">
            <div className="text-[15px] font-semibold tracking-tight">9:02</div>
            <div className="flex items-center gap-1.5">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          {/* Dynamic island */}
          <div className="absolute left-1/2 top-[11px] z-40 h-[34px] w-[118px] -translate-x-1/2 rounded-full bg-black" />

          {/* Content */}
          <div className="relative z-10 h-full w-full pt-[54px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden>
      <rect x="0.5" y="7" width="3" height="3.5" rx="0.6" fill="white" />
      <rect x="5" y="5" width="3" height="5.5" rx="0.6" fill="white" />
      <rect x="9.5" y="3" width="3" height="7.5" rx="0.6" fill="white" />
      <rect x="14" y="0.5" width="3" height="10" rx="0.6" fill="white" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden>
      <path
        d="M8.5 11.5a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z"
        fill="white"
      />
      <path
        d="M3.6 7.5a7 7 0 019.8 0l1.3-1.3a8.8 8.8 0 00-12.4 0L3.6 7.5z"
        fill="white"
      />
      <path
        d="M.6 4.6a11 11 0 0115.8 0L17.7 3.3a12.8 12.8 0 00-18.4 0L.6 4.6z"
        fill="white"
        fillOpacity="0.95"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="27" height="12" viewBox="0 0 27 12" fill="none" aria-hidden>
      <rect
        x="0.6"
        y="0.6"
        width="22.8"
        height="10.8"
        rx="2.4"
        stroke="white"
        strokeOpacity="0.5"
        fill="none"
      />
      <rect x="24.4" y="3.8" width="1.8" height="4.4" rx="0.6" fill="white" fillOpacity="0.5" />
      <rect x="2" y="2" width="13.5" height="8" rx="1.4" fill="#F4C84A" />
    </svg>
  );
}
