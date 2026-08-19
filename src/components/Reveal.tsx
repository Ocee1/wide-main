"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * Drop-in replacement for a <div> that fades/rises in the first time it
 * scrolls into view. Safe to use as a positioned container (it IS the box
 * that transitions, not a wrapper around it), so absolutely-positioned
 * children still measure against it correctly.
 */
export default function Reveal({
  delay = 0,
  className = "",
  style,
  ...rest
}: ComponentPropsWithoutRef<"div"> & { delay?: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    />
  );
}
