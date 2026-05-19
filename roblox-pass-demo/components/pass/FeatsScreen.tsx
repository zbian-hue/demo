"use client";

import { useState } from "react";
import { ChevronLeft, CloseIcon } from "@/components/icons";
import {
  COMPLETED_FEATS,
  DAILY_FEATS,
  SEASON_FEATS,
} from "@/lib/data";

type Filter = "all" | "daily" | "season" | "completed";

type Props = {
  onBack: () => void;
  onClose: () => void;
  claimedFeats: Set<string>;
};

export default function FeatsScreen({ onBack, onClose, claimedFeats }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const showDaily = filter === "all" || filter === "daily";
  const showSeason = filter === "all" || filter === "season";
  const showCompleted = filter === "all" || filter === "completed";

  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-3">
        <button
          onClick={onBack}
          aria-label="Back"
          className="grid h-9 w-9 place-items-center rounded-full active:bg-white/10"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onClose}
          aria-label="Close"
          className="grid h-9 w-9 place-items-center rounded-full active:bg-white/10"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Title */}
      <div className="px-5">
        <h1 className="text-[28px] font-extrabold tracking-tight">Feats</h1>
        <p className="mt-1 text-[13px] text-rblx-dim">
          Complete feats to earn points and unlock rewards.
        </p>
      </div>

      {/* Filter pills */}
      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
        <Pill active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </Pill>
        <Pill active={filter === "daily"} onClick={() => setFilter("daily")}>
          Daily
        </Pill>
        <Pill active={filter === "season"} onClick={() => setFilter("season")}>
          Season
        </Pill>
        <Pill
          active={filter === "completed"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Pill>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto px-5 pb-6">
        {showDaily && (
          <Section title="Daily" rightLabel="Refreshes in 9:34">
            {DAILY_FEATS.map((f) => (
              <Row
                key={f.id}
                title={f.title}
                points={f.points}
                state={claimedFeats.has(f.id) ? "done" : f.actionVerb === "Claim" ? "claim" : "go"}
              />
            ))}
          </Section>
        )}

        {showSeason && (
          <Section title="Season">
            {SEASON_FEATS.map((f) => (
              <Row
                key={f.id}
                title={f.title}
                points={f.points}
                progress={f.progress}
                state={f.id === "streak7" ? "claim" : "go"}
              />
            ))}
          </Section>
        )}

        {showCompleted && (
          <Section title="Completed">
            {COMPLETED_FEATS.map((f) => (
              <Row
                key={f.id}
                title={f.title}
                points={f.points}
                progress={f.progress}
                state="done"
              />
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}

function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition ${
        active
          ? "bg-white text-black"
          : "bg-white/10 text-white/85 hover:bg-white/15"
      }`}
    >
      {children}
    </button>
  );
}

function Section({
  title,
  rightLabel,
  children,
}: {
  title: string;
  rightLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-baseline justify-between">
        <div className="text-[18px] font-bold">{title}</div>
        {rightLabel && (
          <div className="text-[11px] text-rblx-dim">{rightLabel}</div>
        )}
      </div>
      <div className="mt-2 flex flex-col gap-2">{children}</div>
    </div>
  );
}

type RowState = "go" | "claim" | "done";

function Row({
  title,
  points,
  progress,
  state,
}: {
  title: string;
  points: number;
  progress?: string;
  state: RowState;
}) {
  const buttonClass =
    state === "done"
      ? "bg-white/10 text-white/55"
      : state === "claim"
        ? "bg-rblx-blue text-white"
        : "bg-white/10 text-white";
  const buttonLabel =
    state === "done" ? "Done" : state === "claim" ? "Claim" : "Go";

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-rblx-row px-4 py-3">
      <div className="min-w-0 flex-1">
        <div
          className={`truncate text-[14px] font-medium ${
            state === "done" ? "text-white/65 line-through" : ""
          }`}
        >
          {title}
        </div>
      </div>
      {progress && (
        <div className="shrink-0 text-[11px] text-rblx-dim">{progress}</div>
      )}
      <div
        className={`shrink-0 rounded-full bg-white/8 px-2 py-1 text-[11px] font-bold ${
          state === "done" ? "text-white/55" : "text-white"
        }`}
      >
        {points} pts
      </div>
      <button
        disabled={state === "done"}
        className={`min-w-[64px] shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition-transform active:scale-95 ${buttonClass}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
