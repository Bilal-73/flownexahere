export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-black shadow-sm transition-transform hover:scale-105 shrink-0 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Outer Black Circle Background */}
        <rect width="100" height="100" fill="#000000" />
        
        {/* Inner White Disc */}
        <circle cx="50" cy="50" r="42" fill="#FFFFFF" />

        {/* Top Orbital Arc */}
        <path
          d="M 12 50 C 12 28 40 22 66 36"
          stroke="#000000"
          strokeWidth="8.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Bottom Orbital Arc */}
        <path
          d="M 12 50 C 12 72 40 78 66 64"
          stroke="#000000"
          strokeWidth="8.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Center Horizontal Bar */}
        <path
          d="M 12 50 H 52"
          stroke="#000000"
          strokeWidth="8.5"
          strokeLinecap="round"
        />

        {/* Right Circle Node (Black outline, White core) */}
        <circle cx="66" cy="50" r="15" fill="#FFFFFF" stroke="#000000" strokeWidth="8" />
      </svg>
    </div>
  );
}
