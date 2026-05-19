"use client";

import {
  CaretDown,
  CameraShutterIcon,
  CloseIcon,
  GlobeIcon,
  PersonaWordmark,
  ShieldIcon,
  TrashIcon,
} from "@/components/icons";

type Props = {
  onClose: () => void;
  onContinue: () => void;
};

export default function FaeCameraConsent({ onClose, onContinue }: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      {/* Top close */}
      <div className="flex items-center justify-end px-4 pt-3">
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
          Let's use the camera
          <br />
          to do an age check
        </h1>
      </div>

      {/* Bullet rows */}
      <div className="mt-7 flex flex-col gap-5 px-6">
        <Bullet icon={<CameraShutterIcon />}>
          We use the camera only for this check.
        </Bullet>
        <Bullet icon={<TrashIcon />}>
          We delete your images and video immediately after processing.
        </Bullet>
        <Bullet icon={<ShieldIcon />}>
          An age check unlocks more features and helps keep you safe.{" "}
          <Underlink>View details.</Underlink>
        </Bullet>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Legal copy */}
      <div className="px-6 pb-3 text-[10px] leading-snug text-white/55">
        By selecting "Continue," I agree that Roblox and Roblox's vendor, Persona, and their service providers will process my facial images and video, including my biometric information where permitted, to assess my age and to prevent fraud and abuse in accordance with{" "}
        <Underlink>Roblox's Facial Media Capture Notice</Underlink>. Data
        handling by Persona will be done in accordance with{" "}
        <Underlink>Persona's Privacy Policy</Underlink>.
      </div>

      {/* CTA */}
      <div className="px-6">
        <button
          onClick={onContinue}
          className="w-full rounded-2xl bg-rblx-blue py-3.5 text-[15px] font-bold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] transition-transform active:scale-[0.99]"
        >
          Continue
        </button>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between px-6 pb-6 text-[11px] text-white/55">
        <button className="flex items-center gap-1.5">
          <GlobeIcon /> English <CaretDown />
        </button>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
            Secured with
          </span>
          <PersonaWordmark className="text-white/85" />
        </div>
      </div>
    </div>
  );
}

function Bullet({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="mt-0.5 grid h-6 w-6 place-items-center text-white/85">
        {icon}
      </div>
      <div className="text-[14px] leading-snug text-white/95">{children}</div>
    </div>
  );
}

function Underlink({ children }: { children: React.ReactNode }) {
  return <span className="underline decoration-white/40 underline-offset-2">{children}</span>;
}
