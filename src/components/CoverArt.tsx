import React from "react";

type Props = { variant: "health" | "retail" | "migration" };

/** Original abstract dashboard illustrations (inline SVG, theme-aware). */
export default function CoverArt({ variant }: Props) {
  const id = `g-${variant}`;
  const palette = {
    health: ["#34d399", "#22d3ee"],
    retail: ["#8b5cf6", "#f472b6"],
    migration: ["#22d3ee", "#8b5cf6"],
  }[variant];

  return (
    <svg className="cover" viewBox="0 0 480 270" role="img" aria-label={`${variant} dashboard illustration`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={palette[0]} />
          <stop offset="1" stopColor={palette[1]} />
        </linearGradient>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette[0]} stopOpacity=".35" />
          <stop offset="1" stopColor={palette[0]} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="480" height="270" fill="#0b0d18" />
      <rect x="16" y="16" width="448" height="238" rx="14" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)" />
      <circle cx="34" cy="34" r="4" fill="#ff5f57" /><circle cx="48" cy="34" r="4" fill="#febc2e" /><circle cx="62" cy="34" r="4" fill="#28c840" />

      {variant === "health" && (
        <g>
          <rect x="32" y="56" width="120" height="52" rx="10" fill="rgba(255,255,255,.05)" />
          <rect x="164" y="56" width="120" height="52" rx="10" fill="rgba(255,255,255,.05)" />
          <rect x="296" y="56" width="152" height="52" rx="10" fill="rgba(255,255,255,.05)" />
          <rect x="44" y="68" width="48" height="6" rx="3" fill="rgba(255,255,255,.35)" />
          <rect x="44" y="82" width="70" height="14" rx="4" fill={`url(#${id})`} />
          <rect x="176" y="68" width="40" height="6" rx="3" fill="rgba(255,255,255,.35)" />
          <rect x="176" y="82" width="58" height="14" rx="4" fill={`url(#${id})`} />
          <rect x="308" y="68" width="56" height="6" rx="3" fill="rgba(255,255,255,.35)" />
          <rect x="308" y="82" width="84" height="14" rx="4" fill={`url(#${id})`} />
          <path d="M32 214 C72 190 92 200 128 170 S188 150 224 168 S288 120 332 138 S400 110 448 92 V230 H32Z" fill={`url(#${id}-f)`} />
          <path d="M32 214 C72 190 92 200 128 170 S188 150 224 168 S288 120 332 138 S400 110 448 92" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
          <path d="M32 232 H448" stroke="rgba(255,255,255,.1)" />
          {[128, 224, 332].map((x, k) => (
            <circle key={x} cx={x} cy={[170, 168, 138][k]} r="5" fill="#0b0d18" stroke={palette[1]} strokeWidth="2.5" />
          ))}
        </g>
      )}

      {variant === "retail" && (
        <g>
          {[0, 1, 2, 3, 4, 5, 6].map((k) => {
            const h = [60, 96, 78, 130, 110, 150, 124][k];
            return <rect key={k} x={40 + k * 34} y={226 - h} width="22" height={h} rx="5" fill={`url(#${id})`} opacity={0.5 + k * 0.07} />;
          })}
          <circle cx="352" cy="150" r="52" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="18" />
          <circle cx="352" cy="150" r="52" fill="none" stroke={`url(#${id})`} strokeWidth="18" strokeDasharray="210 330" strokeLinecap="round" transform="rotate(-90 352 150)" />
          <rect x="296" y="62" width="152" height="10" rx="5" fill="rgba(255,255,255,.2)" />
          <rect x="296" y="80" width="96" height="8" rx="4" fill="rgba(255,255,255,.12)" />
          <rect x="40" y="62" width="120" height="10" rx="5" fill="rgba(255,255,255,.2)" />
          <rect x="40" y="80" width="70" height="8" rx="4" fill="rgba(255,255,255,.12)" />
          <path d="M32 232 H270" stroke="rgba(255,255,255,.1)" />
        </g>
      )}

      {variant === "migration" && (
        <g>
          <g>
            {[0, 1, 2, 3].map((k) => (
              <rect key={k} x="36" y={62 + k * 44} width="108" height="32" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
            ))}
            {[0, 1, 2, 3].map((k) => (
              <rect key={k} x="48" y={74 + k * 44} width={52 + (k % 2) * 24} height="7" rx="3.5" fill="rgba(255,255,255,.3)" />
            ))}
          </g>
          <path d="M150 78 C200 78 200 138 236 138 M150 122 C200 122 200 138 236 138 M150 166 C200 166 200 138 236 138 M150 210 C200 210 200 138 236 138" fill="none" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 6" />
          <rect x="236" y="104" width="68" height="68" rx="16" fill={`url(#${id})`} />
          <path d="M254 150 v-14 M270 150 v-24 M286 150 v-18" stroke="#0b0d18" strokeWidth="6" strokeLinecap="round" />
          <path d="M310 138 H340" stroke={`url(#${id})`} strokeWidth="2.5" strokeDasharray="4 6" />
          <rect x="340" y="74" width="108" height="128" rx="12" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.12)" />
          <rect x="352" y="88" width="56" height="8" rx="4" fill="rgba(255,255,255,.3)" />
          <path d="M352 182 L376 154 L396 166 L436 118" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  );
}
