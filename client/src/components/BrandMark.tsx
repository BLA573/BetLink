type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <defs>
        <linearGradient id="betlink-logo-gradient" x1="96" y1="72" x2="416" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2dd4a0" />
          <stop offset="0.52" stopColor="#14b87c" />
          <stop offset="1" stopColor="#0f9f6a" />
        </linearGradient>
        <radialGradient id="betlink-logo-shadow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 324) rotate(128) scale(123 164)">
          <stop offset="0" stopColor="#0f8b5a" stopOpacity="0.35" />
          <stop offset="1" stopColor="#0f8b5a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g filter="url(#betlink-logo-filter)">
        <path
          d="M164 64h112c98.4 0 176 77.6 176 176 0 50.8-21.2 92.8-60.8 120 35.2 24 52.8 60.8 52.8 110.4V448c0 35.2-28.8 64-64 64H164c-35.2 0-64-28.8-64-64V128c0-35.2 28.8-64 64-64Z"
          fill="url(#betlink-logo-gradient)"
        />
        <path
          d="M224 210c0-56 44-100 100-100 53.6 0 100 42.4 100 96 0 39.2-19.2 71.2-55.2 91.2 20 12 31.2 32.8 31.2 59.2 0 53.6-42.4 96-96 96h-80c-33.6 0-60.8-27.2-60.8-60.8 0-31.2 18.4-58.4 46.4-74.4-20-16-35.2-42.4-35.2-72.8 0-17.6 4.8-33.6 13.6-47.2 6.4-9.6 14.4-18 24-24.8C203.2 225.6 211.2 216.8 224 210Z"
          fill="url(#betlink-logo-shadow)"
        />
      </g>

      <defs>
        <filter id="betlink-logo-filter" x="40" y="40" width="432" height="432" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#0f8b5a" floodOpacity="0.16" />
        </filter>
      </defs>

      <circle cx="260" cy="272" r="82" fill="#ffffff" />
      <path
        d="M260 196c-42 0-76 34-76 76 0 24 10 45.6 26.4 60.4L260 436l49.6-103.6C326 317.6 336 296 336 272c0-42-34-76-76-76Z"
        fill="#ffffff"
      />
      <circle cx="260" cy="272" r="28" fill="#14b87c" />
    </svg>
  );
}