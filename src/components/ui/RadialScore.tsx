interface RadialScoreProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function RadialScore({
  score,
  size = 180,
  strokeWidth = 12,
  label,
  sublabel,
}: RadialScoreProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 85 ? '#10b981' : score >= 70 ? '#fb6a0f' : score >= 50 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative inline-flex flex-col items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold font-display text-white">{score}</span>
        {label && <span className="text-sm font-medium text-ink-300 mt-1">{label}</span>}
        {sublabel && <span className="text-xs text-ink-500 mt-0.5">{sublabel}</span>}
      </div>
    </div>
  );
}

interface ScoreBarProps {
  label: string;
  score: number;
  description?: string;
}

export function ScoreBar({ label, score, description }: ScoreBarProps) {
  const color =
    score >= 85 ? 'bg-emerald-500' : score >= 70 ? 'bg-forge-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500';

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-medium text-ink-200">{label}</span>
          {description && <p className="text-xs text-ink-500 mt-0.5">{description}</p>}
        </div>
        <span className="text-sm font-bold font-mono text-white">{score}%</span>
      </div>
      <div className="h-2 rounded-full bg-ink-800 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
