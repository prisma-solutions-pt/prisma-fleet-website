/**
 * Prisma Fleet lockup: prism mark + the PRISMA / FLEET wordmark.
 * "FLEET" paths mirror prisma-fleet-wordmark.svg from the Fleet app (skewed -12deg);
 * "PRISMA" is set as HTML (Oswald 700 italic, wide tracking) so it stays legible at
 * navbar size. `tone="light"` is the white knockout for navy backgrounds.
 */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`logo logo-${tone}`} role="img" aria-label="Prisma Fleet">
      <img
        src={tone === "light" ? "/brand/prisma-mark-white.svg" : "/brand/prisma-mark-navy.svg"}
        alt=""
        className="logo-mark"
      />
      <span className="logo-type" aria-hidden="true">
        <span className="logo-prisma">PRISMA</span>
        <svg viewBox="-22 35 433 100" className="logo-word">
          <g transform="translate(0 35) skewX(-12)" className="logo-fleet">
            <path d="M 0 0 L 56 0 L 56 24 L 24 24 L 24 39 L 43.68 39 L 43.68 61 L 24 61 L 24 100 L 0 100 Z" />
            <path transform="translate(60,0)" d="M 0 0 L 24 0 L 24 76 L 52 76 L 52 100 L 0 100 Z" />
            <path transform="translate(116,0)" d="M 0 0 L 112 0 L 112 24 L 24 24 L 24 39 L 97.44 39 L 97.44 61 L 24 61 L 24 76 L 112 76 L 112 100 L 0 100 Z" />
            <path transform="translate(232,0)" d="M 0 0 L 112 0 L 112 24 L 24 24 L 24 39 L 97.44 39 L 97.44 61 L 24 61 L 24 76 L 112 76 L 112 100 L 0 100 Z" />
            <path transform="translate(348,0)" d="M 0 0 L 62 0 L 62 24 L 43 24 L 43 100 L 19 100 L 19 24 L 0 24 Z" />
          </g>
        </svg>
      </span>
    </span>
  );
}
