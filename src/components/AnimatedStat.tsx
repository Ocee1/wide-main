"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

/** Parses "7k+" / "1.8M+" / "200+" into a numeric target plus its trailing label. */
function parse(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  return {
    target: match ? parseFloat(match[1].replace(/,/g, "")) : 0,
    suffix: match ? match[2] : "",
    decimals: match && match[1].includes(".") ? match[1].split(".")[1].length : 0,
  };
}

/**
 * Ticks a stat like "7k+" up from 0 while `active` is true. Stays static
 * (no wasted animation) until the caller flips `active` on, then re-ticks
 * whenever `value` changes.
 */
export default function AnimatedStat({
  value,
  active,
  className,
  style,
}: {
  value: string;
  active: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const { target, suffix, decimals } = parse(value);
  const [display, setDisplay] = useState(active ? 0 : target);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(target * eased);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [active, target]);

  if (!active) {
    return (
      <span className={className} style={style}>
        {value}
      </span>
    );
  }

  return (
    <span className={className} style={style}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
