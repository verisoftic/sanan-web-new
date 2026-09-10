import Link from "next/link";

/**
 * Crisp, background-free SVG rendition of the Sanan mark:
 * a medical cross + precision syringe inside a technical ring.
 */
export function LogoMark({
  className = "h-9 w-9",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const ring = onDark ? "#9be7ee" : "#0A192F";
  const dotNavy = onDark ? "#9be7ee" : "#0A192F";
  const cross = onDark ? "#40B5AD" : "#006671";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Technical ring */}
      <circle cx="32" cy="32" r="26" stroke={ring} strokeWidth="2.5" strokeDasharray="4 3" />
      <circle cx="32" cy="6.5" r="2.4" fill={dotNavy} />
      <circle cx="32" cy="57.5" r="2.4" fill={dotNavy} />
      <circle cx="6.5" cy="32" r="2.4" fill="#40B5AD" />
      <circle cx="57.5" cy="32" r="2.4" fill="#40B5AD" />
      {/* Medical cross */}
      <path
        d="M27 15h10v12h12v10H37v12H27V37H15V27h12V15Z"
        fill={cross}
        opacity="0.92"
      />
      {/* Syringe barrel (diagonal) */}
      <g transform="rotate(45 32 32)">
        <rect x="20" y="29" width="20" height="6" rx="1" fill="#ffffff" stroke="#0A192F" strokeWidth="1.2" />
        <rect x="21.5" y="30.2" width="1.2" height="3.6" fill="#40B5AD" />
        <rect x="24" y="30.2" width="1.2" height="3.6" fill="#40B5AD" />
        <rect x="26.5" y="30.2" width="1.2" height="3.6" fill="#40B5AD" />
        <rect x="40" y="30.4" width="4" height="3.2" rx="0.6" fill="#0A192F" />
        <rect x="16" y="30.6" width="4" height="2.8" rx="0.6" fill="#0A192F" />
        <rect x="44" y="31.4" width="7" height="1.2" fill="#40B5AD" />
      </g>
    </svg>
  );
}

export function Logo({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Sanan Manufacturing home">
      <span className="transition-transform duration-500 group-hover:rotate-[8deg]">
        <LogoMark className="h-9 w-9" onDark={onDark} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-headline-sm font-bold tracking-tight leading-none transition-colors duration-300 ${
            onDark ? "text-white" : "text-cleanroom-navy"
          }`}
        >
          SANAN
        </span>
        <span
          className={`font-body text-label-caps uppercase tracking-[0.12em] mt-0.5 transition-colors duration-300 ${
            onDark ? "text-clinical-cyan-glow" : "text-primary"
          }`}
        >
          Medical Device Mfg
        </span>
      </span>
    </Link>
  );
}
