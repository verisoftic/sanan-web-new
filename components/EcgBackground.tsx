/**
 * Dim, animated medical ECG / heartbeat line for dark hero backgrounds.
 * A faint static trace with a brighter pulse that sweeps across it.
 * Pure CSS animation (respects prefers-reduced-motion via globals.css).
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

export function EcgBackground({ className = "" }: { className?: string }) {
  const d = buildPath();
  const width = SEGMENTS * SEG_WIDTH;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute left-0 top-1/2 h-[55%] w-full -translate-y-1/2"
        viewBox={`0 0 ${width} 180`}
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
          <filter id="ecg-glow" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint continuous trace */}
        <path
          className="ecg-base"
          d={d}
          stroke="url(#ecg-fade)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Bright pulse sweeping across the trace */}
        <path
          className="ecg-beam"
          d={d}
          pathLength={1}
          stroke="#7defff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ecg-glow)"
          vectorEffect="non-scaling-stroke"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
