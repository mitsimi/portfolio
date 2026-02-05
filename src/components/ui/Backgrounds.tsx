// Harsh geometric grid pattern background
export const GridPattern = () => (
  <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
    <svg className="w-full h-full opacity-[0.03]">
      <defs>
        <pattern
          id="brutalist-grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#brutalist-grid)" />
    </svg>
  </div>
);

// Noise texture overlay
export const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-1 opacity-[0.08] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
    aria-hidden="true"
  />
);

// Harsh diagonal stripe
export const DiagonalStripe = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute bg-accent ${className}`}
    style={{
      transform: "rotate(-45deg)",
      transformOrigin: "center",
    }}
    aria-hidden="true"
  />
);
