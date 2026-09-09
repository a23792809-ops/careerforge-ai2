import { type ReactNode } from 'react';
import { CheckCircle2, AlertTriangle, Lightbulb, X } from 'lucide-react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'info' | 'danger' | 'neutral';
}

const badgeVariants = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  danger: 'bg-red-500/10 text-red-400 border-red-500/20',
  neutral: 'bg-ink-700/50 text-ink-300 border-ink-600',
};

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeVariants[variant]}`}>
      {children}
    </span>
  );
}

interface ListBlockProps {
  title: string;
  items: string[];
  variant: 'success' | 'warning' | 'info';
}

const listConfig = {
  success: { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/15' },
  warning: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/5', border: 'border-amber-500/15' },
  info: { icon: Lightbulb, color: 'text-forge-400', bg: 'bg-forge-500/5', border: 'border-forge-500/15' },
};

export function ListBlock({ title, items, variant }: ListBlockProps) {
  const config = listConfig[variant];
  const Icon = config.icon;
  return (
    <div className={`rounded-2xl border ${config.border} ${config.bg} p-5`}>
      <h3 className="flex items-center gap-2 text-base font-semibold text-white mb-4">
        <Icon className={`w-5 h-5 ${config.color}`} />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-ink-300">
            <span className={`mt-0.5 shrink-0 ${config.color}`}>
              {variant === 'warning' ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillTagProps {
  skill: string;
  matched?: boolean;
}

export function SkillTag({ skill, matched = true }: SkillTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border ${
        matched
          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
          : 'bg-red-500/10 text-red-300 border-red-500/20'
      }`}
    >
      {matched ? <CheckCircle2 className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
      {skill}
    </span>
  );
}
