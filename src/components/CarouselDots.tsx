/**
 * Carousel dots (Figma "Frame 1321315859").
 *
 * A pill marks the active slide and stroked circles mark the rest. The design
 * draws this at 9px on desktop and 6.169px on mobile — every other measurement
 * in the frame scales off that one number, so it is the only size knob here.
 *
 * Pass `onSelect` to make the dots clickable; without it they stay decorative.
 */
export default function CarouselDots({
  count,
  active = 0,
  size = 9,
  className = "",
  onSelect,
  label = "Go to slide",
}: {
  count: number;
  active?: number;
  size?: number;
  className?: string;
  onSelect?: (index: number) => void;
  label?: string;
}) {
  const unit = size / 9;
  const gap = 8 * unit;

  return (
    <div
      aria-hidden={onSelect ? undefined : true}
      className={`flex items-center ${className}`}
      style={{ gap: `${gap}px`, height: `${size}px` }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active;
        const style = isActive
          ? {
              width: `${26 * unit}px`,
              height: `${size}px`,
              borderRadius: `${4.5 * unit}px`,
              backgroundImage:
                "linear-gradient(180deg, #e17918 0%, #f1392f 100%)",
            }
          : {
              width: `${size}px`,
              height: `${size}px`,
              borderWidth: `${unit}px`,
            };
        const className = `shrink-0 ${
          isActive ? "" : "rounded-full border-solid border-white"
        }`;

        return onSelect ? (
          <button
            key={i}
            type="button"
            aria-label={`${label} ${i + 1}`}
            aria-current={isActive || undefined}
            className={`${className} cursor-pointer transition-opacity hover:opacity-80`}
            style={style}
            onClick={() => onSelect(i)}
          />
        ) : (
          <span key={i} className={className} style={style} />
        );
      })}
    </div>
  );
}
