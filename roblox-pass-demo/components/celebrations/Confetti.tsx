"use client";

import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

type Variant = "free" | "plus";

type Props = {
  variant: Variant;
  /** Fire only once on mount. */
  once?: boolean;
};

/**
 * A confetti canvas pinned to its parent. The parent must be position: relative.
 * Uses canvas-confetti's `confetti.create` API so the confetti stays within the iPhone frame.
 */
export default function Confetti({ variant, once = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const fn = confetti.create(canvas, {
      resize: true,
      useWorker: false,
    });

    const palette =
      variant === "plus"
        ? ["#F4C84A", "#FFD96B", "#FFFFFF", "#8E5BFF", "#C39BFF"]
        : ["#FFFFFF", "#2D5BFF", "#80A0FF", "#F4C84A"];

    const burst = () => {
      // First wave: wide spread from below the title.
      fn({
        particleCount: variant === "plus" ? 90 : 70,
        spread: 110,
        startVelocity: 42,
        gravity: 0.95,
        ticks: 220,
        scalar: 0.95,
        origin: { x: 0.5, y: 0.55 },
        colors: palette,
      });
      // Side cannons.
      setTimeout(() => {
        fn({
          particleCount: variant === "plus" ? 50 : 35,
          angle: 60,
          spread: 70,
          startVelocity: 50,
          origin: { x: 0.05, y: 0.7 },
          colors: palette,
          ticks: 220,
        });
        fn({
          particleCount: variant === "plus" ? 50 : 35,
          angle: 120,
          spread: 70,
          startVelocity: 50,
          origin: { x: 0.95, y: 0.7 },
          colors: palette,
          ticks: 220,
        });
      }, 220);

      if (variant === "plus") {
        // Final shimmer wave.
        setTimeout(() => {
          fn({
            particleCount: 60,
            spread: 360,
            startVelocity: 18,
            gravity: 0.6,
            ticks: 260,
            scalar: 1.1,
            origin: { x: 0.5, y: 0.4 },
            colors: palette,
            shapes: ["circle"],
          });
        }, 700);
      }
    };

    burst();

    if (!once) {
      const id = setInterval(burst, 1800);
      return () => {
        clearInterval(id);
        fn.reset();
      };
    }
    return () => fn.reset();
  }, [variant, once]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-50 h-full w-full"
    />
  );
}
