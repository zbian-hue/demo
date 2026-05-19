"use client";

import {
  BellIcon,
  ChartsIcon,
  ChevronRight,
  HomeNavIcon,
  MoreIcon,
  PartyIcon,
  RobloxHexIcon,
  SearchIcon,
  TicketIcon,
} from "@/components/icons";
import { FRIENDS } from "@/lib/data";

type Props = {
  hasOpenedPass: boolean;
  onOpenPass: () => void;
};

export default function HomeScreen({ hasOpenedPass, onOpenPass }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col bg-black text-white">
      {/* Scrollable feed */}
      <div className="no-scrollbar flex-1 overflow-y-auto pb-[92px]">
        {/* Header row */}
        <div className="flex items-center justify-between px-5 pt-3">
          <div className="text-[26px] font-extrabold tracking-tight">Home</div>
          <div className="flex items-center gap-3 text-white">
            <PassEntryButton hasOpenedPass={hasOpenedPass} onClick={onOpenPass} />
            <IconButton aria-label="Search">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="Roblox">
              <RobloxHexIcon />
            </IconButton>
            <IconButton aria-label="Notifications">
              <BellIcon />
            </IconButton>
          </div>
        </div>

        {/* User row */}
        <div className="mt-3 flex items-center gap-3 px-5">
          <div
            className="h-9 w-9 rounded-full ring-1 ring-white/10"
            style={{
              background:
                "linear-gradient(135deg, #c4845a 0%, #6c4422 50%, #f0d0a8 100%)",
            }}
          />
          <div className="text-[15px] font-semibold">coffeeemeetswaffles</div>
        </div>

        {/* Friends */}
        <div className="mt-5 px-5">
          <button className="flex items-center gap-1 text-[17px] font-bold text-white">
            Friends (4) <ChevronRight className="-mb-0.5 text-white" />
          </button>
        </div>
        <div className="no-scrollbar mt-3 flex gap-3.5 overflow-x-auto px-5 pb-1">
          <FriendTile add label="Add Friends" />
          {FRIENDS.map((f) => (
            <FriendTile key={f.id} label={f.name} avatar={f.avatar} online={f.online} />
          ))}
          {/* Tease one more */}
          <FriendTile
            label="vap..."
            avatar="linear-gradient(135deg, #5b8efb 0%, #2a3a8e 100%)"
          />
        </div>

        {/* Standout games */}
        <div className="mt-6 px-5">
          <div className="text-[20px] font-bold">Standout Games</div>
          <div className="mt-1 text-[13px] text-rblx-dim">
            Curated games shaping what's next for Roblox
          </div>
        </div>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pl-5 pr-3">
          <BillieEilishCard />
          <WorldZeroCard />
        </div>

        {/* Recommended */}
        <div className="mt-6 px-5 text-[20px] font-bold">Recommended For You</div>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pl-5 pr-3">
          <RecommendedCard
            tile="linear-gradient(135deg, #6e3aff 0%, #b85bff 50%, #ff8ad2 100%)"
            title="Mystery Mountain"
          />
          <RecommendedCard
            tile="linear-gradient(135deg, #36b859 0%, #f4c84a 100%)"
            title="Critter Cafe"
          />
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/5 bg-black/80 px-2 pb-[26px] pt-2 backdrop-blur">
        <NavItem icon={<HomeNavIcon />} label="Home" active />
        <NavItem icon={<ChartsIcon />} label="Charts" />
        <NavItem icon={<AvatarChip />} label="Avatar" />
        <NavItem icon={<PartyIcon />} label="Party" />
        <NavItem icon={<MoreIcon />} label="More" />
      </div>
    </div>
  );
}

function IconButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className="grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
    >
      {children}
    </button>
  );
}

function PassEntryButton({
  hasOpenedPass,
  onClick,
}: {
  hasOpenedPass: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Roblox Pass"
      className="relative grid h-9 w-9 place-items-center rounded-full text-white active:bg-white/10"
    >
      <TicketIcon />
      {!hasOpenedPass && (
        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rblx-blue ring-2 ring-black animate-pulseDot" />
      )}
    </button>
  );
}

function FriendTile({
  label,
  avatar,
  online,
  add,
}: {
  label: string;
  avatar?: string;
  online?: boolean;
  add?: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-1.5">
      <div className="relative h-[68px] w-[68px] overflow-hidden rounded-full">
        {add ? (
          <div className="grid h-full w-full place-items-center bg-[#2a2a33] text-2xl text-white/80">
            +
          </div>
        ) : (
          <div
            className="h-full w-full"
            style={{ background: avatar }}
          />
        )}
        {online && (
          <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-rblx-green ring-2 ring-black" />
        )}
      </div>
      <div className="max-w-[72px] truncate text-[12px] text-white/90">
        {label}
      </div>
    </div>
  );
}

function BillieEilishCard() {
  return (
    <div className="shrink-0 overflow-hidden rounded-2xl" style={{ width: 220 }}>
      <div
        className="relative h-[170px] w-full"
        style={{
          background:
            "linear-gradient(155deg, #b3e5e3 0%, #2da3a3 35%, #0e3f4f 75%, #0a1f2e 100%)",
        }}
      >
        {/* Event pill */}
        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-black">
          Event
        </div>
        {/* The Block headline */}
        <div className="absolute left-3 top-9 text-[26px] font-extrabold leading-[0.95] text-white drop-shadow">
          The
          <br />
          Block
        </div>
        {/* Faux subject silhouette */}
        <div
          className="absolute right-3 top-2 h-[140px] w-[110px] rounded-2xl"
          style={{
            background:
              "radial-gradient(50% 38% at 50% 32%, #f1d8c4 0%, #d6a48a 60%, transparent 70%), linear-gradient(180deg, #1a1a1a 0%, #2c2c2c 100%)",
          }}
        />
        {/* Bottom strip with takeover info */}
        <div className="absolute inset-x-0 bottom-0 bg-[#0d0d12]/85 px-3 py-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
            Takeover May 4
          </div>
          <div className="text-[15px] font-extrabold text-white">
            Billie Eilish
          </div>
          <div className="text-[9px] leading-tight text-white/70">
            HIT ME HARD &amp; SOFT: The Tour (Live in 3D)
            <br />
            Exclusive Preview Event
            <br />
            MAY 6 STARTS 5:30PM PST
          </div>
        </div>
      </div>
      <div className="mt-2 px-1">
        <div className="text-[15px] font-bold">The Block</div>
        <div className="text-[12px] text-rblx-dim">
          Events, concerts and more!
        </div>
      </div>
    </div>
  );
}

function WorldZeroCard() {
  return (
    <div className="shrink-0 overflow-hidden rounded-2xl" style={{ width: 220 }}>
      <div
        className="relative h-[170px] w-full"
        style={{
          background:
            "linear-gradient(160deg, #211b3a 0%, #4a2a6e 30%, #6f3aa3 60%, #1a0e2e 100%)",
        }}
      >
        {/* Decorative scythe-like shape */}
        <div
          className="absolute right-2 top-2 h-32 w-28"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, #c8a8ff 0%, #6e3aff 40%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute left-3 top-3 text-[10px] font-semibold uppercase tracking-wider text-white/80">
          DEFY
        </div>
        <div className="absolute bottom-3 left-3 text-[20px] font-extrabold leading-tight text-white drop-shadow">
          World // Zero
        </div>
      </div>
      <div className="mt-2 px-1">
        <div className="text-[15px] font-bold">World // Zero</div>
        <div className="text-[12px] text-rblx-dim">Endless adventure...</div>
      </div>
    </div>
  );
}

function RecommendedCard({ tile, title }: { tile: string; title: string }) {
  return (
    <div className="shrink-0" style={{ width: 220 }}>
      <div
        className="h-[120px] w-full rounded-2xl"
        style={{ background: tile }}
      />
      <div className="mt-2 px-1 text-[15px] font-bold">{title}</div>
    </div>
  );
}

function AvatarChip() {
  return (
    <div
      className="h-7 w-7 rounded-full ring-1 ring-white/10"
      style={{
        background:
          "linear-gradient(135deg, #c4845a 0%, #6c4422 50%, #f0d0a8 100%)",
      }}
    />
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-1 px-3 py-1 ${
        active ? "text-white" : "text-rblx-dim"
      }`}
    >
      <div className="h-6 w-6">{icon}</div>
      <div className="text-[10px] font-semibold">{label}</div>
    </button>
  );
}
