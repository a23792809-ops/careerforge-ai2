import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AboutPage } from '@/pages/AboutPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { HistoryPage } from '@/pages/HistoryPage';
import { JobMatchPage } from '@/pages/JobMatchPage';
import { LandingPage } from '@/pages/LandingPage';
import { ResumeAnalyzerPage } from '@/pages/ResumeAnalyzerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzerPage />} />
        <Route path="/job-match" element={<JobMatchPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPlaceholder />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function SettingsPlaceholder() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8"><p className="text-sm text-forge-400 font-medium mb-2">Workspace</p><h1 className="text-3xl font-bold font-display text-white">Settings</h1><p className="mt-2 text-ink-400">Settings will be available when accounts are connected.</p></div>
      <div className="glass-card p-8 text-center"><p className="text-sm text-ink-400">This demo keeps everything local and private. No account is required.</p></div>
    </div>
  );
}

export default App;
