import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Clock3,
  FileText,
  History,
  Plus,
  Target,
  TrendingUp,
  Upload,
  Users,
} from 'lucide-react';
import { PageHeader } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Card, StatCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { RadialScore } from '@/components/ui/RadialScore';

const activities = [
  { icon: FileText, title: 'Resume analyzed', detail: 'Software Engineer Resume', time: 'Today, 10:42 AM', color: 'text-forge-400', bg: 'bg-forge-500/10' },
  { icon: Target, title: 'Job match completed', detail: 'Cloud Infrastructure Engineer', time: 'Today, 10:38 AM', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: TrendingUp, title: 'Skills updated', detail: 'Added 3 new skills to your profile', time: 'Yesterday, 4:20 PM', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm text-forge-400 font-medium mb-2">Wednesday, September 9, 2026</p>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Good morning.</h1>
            <p className="mt-2 text-ink-400">Let's improve your career profile today.</p>
          </div>
          <Button onClick={() => navigate('/resume-analyzer')}><Plus className="w-4 h-4" /> New analysis</Button>
        </div>
      </PageHeader>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard label="Resume Score" value="87/100" sublabel="Excellent" icon={<FileText className="w-5 h-5" />} accent="forge" />
        <StatCard label="Job Match" value="89%" sublabel="Strong match" icon={<Target className="w-5 h-5" />} accent="blue" />
        <StatCard label="Skills Identified" value="24" sublabel="Across 6 categories" icon={<BarChart3 className="w-5 h-5" />} accent="green" />
        <StatCard label="Improvements" value="7" sublabel="Ready to action" icon={<TrendingUp className="w-5 h-5" />} accent="purple" />
      </div>

      <div className="grid xl:grid-cols-5 gap-6 mb-8">
        <Card className="xl:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div><h2 className="text-lg font-semibold text-white">Profile overview</h2><p className="text-sm text-ink-500 mt-1">Your latest career readiness snapshot</p></div>
            <Badge variant="success"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Strong profile</Badge>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <RadialScore score={87} size={168} strokeWidth={12} label="Overall score" sublabel="out of 100" />
            <div className="flex-1 w-full space-y-5">
              {[
                { label: 'Resume quality', value: 'Strong', score: 87, color: 'bg-forge-500' },
                { label: 'Skills coverage', value: 'Excellent', score: 92, color: 'bg-emerald-500' },
                { label: 'Market readiness', value: 'Good', score: 78, color: 'bg-blue-500' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-2"><span className="text-sm text-ink-300">{item.label}</span><span className="text-xs text-ink-500">{item.value} <span className="text-white font-mono ml-2">{item.score}%</span></span></div>
                  <div className="h-1.5 bg-ink-800 rounded-full"><div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }} /></div>
                </div>
              ))}
              <button onClick={() => navigate('/resume-analyzer')} className="text-sm text-forge-400 hover:text-forge-300 font-medium flex items-center gap-1 mt-1">View full analysis <ArrowRight className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </Card>

        <Card className="xl:col-span-2">
          <div className="flex items-center justify-between mb-5"><div><h2 className="text-lg font-semibold text-white">Recent activity</h2><p className="text-sm text-ink-500 mt-1">Your latest updates</p></div><Clock3 className="w-5 h-5 text-ink-600" /></div>
          <div className="space-y-1">
            {activities.map((activity) => { const Icon = activity.icon; return <div key={activity.title} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0"><div className={`w-9 h-9 rounded-lg ${activity.bg} ${activity.color} flex items-center justify-center shrink-0`}><Icon className="w-4 h-4" /></div><div className="min-w-0"><p className="text-sm font-medium text-ink-200">{activity.title}</p><p className="text-xs text-ink-500 truncate mt-0.5">{activity.detail}</p><p className="text-[10px] text-ink-600 mt-1">{activity.time}</p></div></div>; })}
          </div>
          <button onClick={() => navigate('/history')} className="mt-4 text-sm text-ink-400 hover:text-white font-medium flex items-center gap-1">View all activity <ArrowRight className="w-3.5 h-3.5" /></button>
        </Card>
      </div>

      <div className="mb-8">
        <div className="flex items-end justify-between mb-4"><div><h2 className="text-lg font-semibold text-white">Quick actions</h2><p className="text-sm text-ink-500 mt-1">Keep the momentum going</p></div></div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Upload, title: 'Analyze resume', description: 'Get your latest ATS score', path: '/resume-analyzer', color: 'text-forge-400', bg: 'bg-forge-500/10' },
            { icon: Target, title: 'Match a job', description: 'See how you fit a role', path: '/job-match', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { icon: History, title: 'View history', description: 'Review your past results', path: '/history', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          ].map((action) => { const Icon = action.icon; return <button key={action.title} onClick={() => navigate(action.path)} className="glass-card p-5 flex items-center gap-4 text-left group hover:border-forge-500/30 transition-all"><div className={`w-11 h-11 rounded-xl ${action.bg} ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}><Icon className="w-5 h-5" /></div><div className="flex-1"><p className="text-sm font-semibold text-white">{action.title}</p><p className="text-xs text-ink-500 mt-1">{action.description}</p></div><ArrowRight className="w-4 h-4 text-ink-600 group-hover:text-forge-400 group-hover:translate-x-1 transition-all" /></button>; })}
        </div>
      </div>

      <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-forge-500/20 bg-gradient-to-r from-forge-950/30 to-ink-900/40">
        <div className="w-12 h-12 rounded-xl bg-forge-500/15 flex items-center justify-center shrink-0"><Users className="w-6 h-6 text-forge-400" /></div>
        <div className="flex-1"><h3 className="font-semibold text-white">Your profile is getting noticed</h3><p className="text-sm text-ink-400 mt-1">Your 87 score puts you in the top 15% of analyzed profiles.</p></div>
        <Button variant="outline" size="sm" onClick={() => navigate('/job-match')}>Find matching roles <ArrowRight className="w-3.5 h-3.5" /></Button>
      </Card>
    </div>
  );
}
