/**
 * Ambient background glow — the blurred #FD5F00 ellipses scattered through the
 * Figma page. `blur` is Figma's gaussian stdDeviation, which maps 1:1 to CSS px.
 */
export default function Glow({
  x,
  y,
  size,
  blur,
  opacity = 1,
}: {
  x: number;
  y: number;
  size: number;
  blur: number;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute hidden rounded-full bg-[#fd5f00] xl:block"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
}
