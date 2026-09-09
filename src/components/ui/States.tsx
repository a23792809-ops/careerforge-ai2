import { type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  children?: ReactNode;
}

export function LoadingState({ message = 'Loading...', children }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-ink-800 border-t-forge-500 animate-spin" />
        <Loader2 className="absolute inset-0 m-auto w-6 h-6 text-forge-400 animate-pulse" />
      </div>
      <p className="mt-6 text-ink-300 font-medium">{message}</p>
      {children}
    </div>
  );
}

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
      {icon && <div className="mb-4 text-ink-600">{icon}</div>}
      <h3 className="text-lg font-semibold text-ink-200">{title}</h3>
      {description && <p className="mt-2 text-sm text-ink-500 max-w-md">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
