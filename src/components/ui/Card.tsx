import { type HTMLAttributes, type ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`glass-card p-6 ${hover ? 'transition-all duration-300 hover:border-forge-500/30 hover:bg-ink-900/60' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon?: ReactNode;
  accent?: 'forge' | 'blue' | 'green' | 'purple';
}

const accentClasses = {
  forge: 'text-forge-400 bg-forge-500/10',
  blue: 'text-blue-400 bg-blue-500/10',
  green: 'text-emerald-400 bg-emerald-500/10',
  purple: 'text-violet-400 bg-violet-500/10',
};

export function StatCard({ label, value, sublabel, icon, accent = 'forge' }: StatCardProps) {
  return (
    <Card hover className="group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-ink-400 font-medium">{label}</p>
          <p className="mt-2 text-3xl font-bold font-display text-white">{value}</p>
          {sublabel && (
            <p className="mt-1 text-xs text-ink-500">{sublabel}</p>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-xl ${accentClasses[accent]} transition-transform group-hover:scale-110`}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
