/**
 * Dim, animated medical ECG / heartbeat line for dark hero backgrounds.
 * A static faint trace with a bright pulse sweeping across it.
 *
 * Perf note: the pulse is a plain <div> masked to the trace shape and moved
 * with `transform: translateX()` (GPU-composited, no repaint). The previous
 * version animated the SVG `stroke-dashoffset` of a blurred (`feGaussianBlur`)
 * path — both are main-thread, paint-triggering operations that must
 * re-rasterize every frame, and it ran on every page's hero continuously.
 */
const SEGMENTS = 6;
const SEG_WIDTH = 240;
const BASELINE = 90;

function buildPath() {
  // One ECG segment (relative commands), returning the pen to the baseline.
  const seg =
    "h 70 l 14 -12 l 14 12 h 24 l 8 12 l 10 -100 l 10 130 l 8 -42 h 26 l 16 -20 l 16 20 h 24";
  let d = `M 0 ${BASELINE}`;
  for (let i = 0; i < SEGMENTS; i++) d += ` ${seg}`;
  return d;
}

const PATH = buildPath();
const WIDTH = SEGMENTS * SEG_WIDTH;
// URL-encoded so it can be embedded directly in a CSS mask-image data URI.
const MASK_SVG = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} 180" preserveAspectRatio="none"><path d="${PATH}" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
)}`;

export function EcgBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Static faint trace (drawn once, never repainted) */}
      <svg
        className="absolute left-0 top-1/2 h-[55%] w-full -translate-y-1/2"
        viewBox={`0 0 ${WIDTH} 180`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ecg-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#40B5AD" stopOpacity="0" />
            <stop offset="0.15" stopColor="#40B5AD" stopOpacity="1" />
            <stop offset="0.85" stopColor="#40B5AD" stopOpacity="1" />
            <stop offset="1" stopColor="#40B5AD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={PATH}
          stroke="url(#ecg-fade)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Bright pulse: a blurred gradient streak, masked to the trace shape,
          swept with a compositor-only transform animation. */}
      <div
        className="ecg-beam absolute top-1/2 h-[55%] w-full -translate-y-1/2"
        style={{
          maskImage: `url("${MASK_SVG}")`,
          WebkitMaskImage: `url("${MASK_SVG}")`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <div className="ecg-beam-glow h-full w-1/4" />
      </div>
    </div>
  );
}
