/**
 * Presentational carousel dots (Figma "Frame 1321315859").
 *
 * One pill for the active slide followed by stroked circles. The design draws
 * this at 9px on desktop and 6.169px on mobile — every other measurement in
 * the frame scales off that one number, so it is the only knob here.
 */
export default function CarouselDots({
  count,
  size = 9,
  className = "",
}: {
  count: number;
  size?: number;
  className?: string;
}) {
  const unit = size / 9;
  const gap = 8 * unit;

  return (
    <div
      aria-hidden
      className={`flex items-center ${className}`}
      style={{ gap: `${gap}px`, height: `${size}px` }}
    >
      <span
        className="shrink-0"
        style={{
          width: `${26 * unit}px`,
          height: `${size}px`,
          borderRadius: `${4.5 * unit}px`,
          backgroundImage: "linear-gradient(180deg, #e17918 0%, #f1392f 100%)",
        }}
      />
      {Array.from({ length: Math.max(count - 1, 0) }).map((_, i) => (
        <span
          key={i}
          className="shrink-0 rounded-full border-solid border-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderWidth: `${unit}px`,
          }}
        />
      ))}
    </div>
  );
}
