import Image from "next/image";
import Link from "next/link";

/**
 * Brand wordmark. Renders both the color and white logo stacked, and
 * crossfades between them based on `onDark` (driven by the header scroll state).
 */
export function Logo({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Sanan Manufacturing — home"
      className={`relative block h-9 w-[102px] md:h-10 md:w-[113px] ${className}`}
    >
      {/* Color logo (light backgrounds) */}
      <Image
        src="/images/logo/logo.svg"
        alt="Sanan Manufacturing"
        fill
        priority
        sizes="113px"
        className={`object-contain object-left transition-opacity duration-300 ${
          onDark ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* White logo (dark backgrounds) */}
      <Image
        src="/images/logo/smlogo-wt.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="113px"
        className={`object-contain object-left transition-opacity duration-300 ${
          onDark ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}
