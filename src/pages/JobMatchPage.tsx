import { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, FileText, Lightbulb, Target } from 'lucide-react';
import { PageHeader } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LoadingState } from '@/components/ui/States';
import { Badge, SkillTag } from '@/components/ui/Badge';
import { RadialScore, ScoreBar } from '@/components/ui/RadialScore';
import { DEMO_JOB_DESCRIPTION, DEMO_RESUME_TEXT, DEMO_RESUME_FILE_NAME } from '@/data/mockData';
import { matchResumeToJob } from '@/services/aiService';
import type { JobMatchResult } from '@/types';

export function JobMatchPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<JobMatchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resumeName] = useState(DEMO_RESUME_FILE_NAME);

  const runMatch = async () => {
    if (!jobDescription.trim()) {
      setError('Add a job description before running the match.');
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);
    try {
      setResult(await matchResumeToJob(DEMO_RESUME_TEXT, jobDescription));
    } catch {
      setError('We could not complete the match. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadDemo = () => { setJobDescription(DEMO_JOB_DESCRIPTION); setError(''); };
  const reset = () => { setResult(null); setJobDescription(''); setError(''); };

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader><div className="flex items-start justify-between gap-4"><div><p className="text-sm text-forge-400 font-medium mb-2">Career intelligence</p><h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Job match engine</h1><p className="mt-2 text-ink-400 max-w-xl">See how your experience lines up with the roles you want next.</p></div>{result && <Button variant="ghost" size="sm" onClick={reset}>New match</Button>}</div></PageHeader>

      {!result && !loading && <div className="grid lg:grid-cols-2 gap-5 animate-scale-in">
        <Card className="p-6"><div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-forge-500/10 flex items-center justify-center"><FileText className="w-5 h-5 text-forge-400" /></div><div><h2 className="font-semibold text-white">Your resume</h2><p className="text-xs text-ink-500 mt-0.5">The resume used for comparison</p></div></div><div className="p-4 rounded-xl border border-forge-500/20 bg-forge-500/5 flex items-center gap-3"><FileText className="w-5 h-5 text-forge-400" /><div className="flex-1 min-w-0"><p className="text-sm font-medium text-white truncate">{resumeName}</p><p className="text-xs text-ink-500 mt-1">Last analyzed today · Score 87</p></div><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /></div><div className="mt-6 p-4 rounded-xl bg-ink-950/50 border border-white/5"><div className="flex items-center justify-between mb-3"><span className="text-xs text-ink-500">Skills detected</span><span className="text-xs text-forge-400">24 skills</span></div><div className="flex flex-wrap gap-2">{['Python', 'React', 'SQL', 'Machine Learning', 'TypeScript', 'Git'].map((skill) => <span key={skill} className="px-2.5 py-1 rounded-md text-xs text-ink-300 bg-ink-800">{skill}</span>)}</div></div></Card>
        <Card className="p-6"><div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center"><Target className="w-5 h-5 text-blue-400" /></div><div><h2 className="font-semibold text-white">Job description</h2><p className="text-xs text-ink-500 mt-0.5">Paste the role you are targeting</p></div></div><textarea value={jobDescription} onChange={(event) => { setJobDescription(event.target.value); setError(''); }} placeholder="Paste the job description here..." className="w-full h-52 resize-none rounded-xl border border-ink-700 bg-ink-950/60 p-4 text-sm text-ink-200 placeholder:text-ink-600 outline-none focus:border-forge-500/60 transition-colors" /><div className="flex items-center justify-between mt-3"><button onClick={loadDemo} className="text-xs text-forge-400 hover:text-forge-300 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5" /> Use Demo Job</button><span className="text-xs text-ink-600">{jobDescription.length} characters</span></div>{error && <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-sm text-red-300"><AlertCircle className="w-4 h-4 shrink-0" />{error}</div>}<Button className="w-full mt-5" size="lg" onClick={() => void runMatch()}><Target className="w-4 h-4" /> Analyze my fit <ArrowRight className="w-4 h-4" /></Button></Card>
      </div>}

      {loading && <LoadingState message="Analyzing your career fit..."><p className="mt-2 text-xs text-ink-600">Comparing skills, experience, and requirements</p></LoadingState>}

      {result && !loading && <div className="space-y-6 animate-fade-in-up"><Card className="p-6 sm:p-8 relative overflow-hidden"><div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" /><div className="relative flex flex-col md:flex-row items-center gap-8"><RadialScore score={result.matchScore} size={190} strokeWidth={13} label="Match score" sublabel="out of 100" /><div className="text-center md:text-left flex-1"><div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3"><Badge variant="success"><CheckCircle2 className="w-3.5 h-3.5" /> Excellent fit</Badge><span className="text-xs text-ink-500">{resumeName}</span></div><h2 className="text-3xl font-bold font-display text-white">{result.rating}</h2><p className="mt-3 text-ink-400 max-w-lg">You are a strong candidate for this role. Focus on closing the three skill gaps below to make your application even more compelling.</p></div></div></Card>
        <div className="grid sm:grid-cols-3 gap-4"><Card className="p-5"><ScoreBar label="Experience match" score={result.experienceMatch} /></Card><Card className="p-5"><ScoreBar label="Technical skills" score={result.technicalSkillsMatch} /></Card><Card className="p-5"><ScoreBar label="Education match" score={result.educationMatch} /></Card></div>
        <div className="grid lg:grid-cols-2 gap-4"><Card><h2 className="text-lg font-semibold text-white mb-4">Matching skills <span className="text-xs font-normal text-ink-500 ml-2">{result.matchingSkills.length} found</span></h2><div className="flex flex-wrap gap-2">{result.matchingSkills.map((skill) => <SkillTag key={skill} skill={skill} />)}</div></Card><Card><h2 className="text-lg font-semibold text-white mb-4">Missing skills <span className="text-xs font-normal text-ink-500 ml-2">Worth developing</span></h2><div className="flex flex-wrap gap-2">{result.missingSkills.map((skill) => <SkillTag key={skill} skill={skill} matched={false} />)}</div></Card></div>
        <div className="grid lg:grid-cols-2 gap-4"><Card><h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-5"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Why you are a good match</h2><ul className="space-y-4">{result.whyGoodMatch.map((reason) => <li key={reason} className="flex items-start gap-3 text-sm text-ink-300 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{reason}</li>)}</ul></Card><Card><h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-5"><Target className="w-5 h-5 text-forge-400" /> Skills to improve</h2><div className="space-y-3">{result.skillsToImprove.map((item) => <div key={item.skill} className="flex items-center gap-3"><span className="w-7 h-7 rounded-lg bg-forge-500/10 text-forge-400 text-xs font-bold flex items-center justify-center">{item.priority}</span><span className="text-sm text-ink-200">{item.skill}</span><span className="ml-auto text-xs text-ink-500">Priority {item.priority === 1 ? 'high' : 'medium'}</span></div>)}</div></Card></div>
        <Card><div className="flex items-start gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-forge-500/10 flex items-center justify-center"><Lightbulb className="w-5 h-5 text-forge-400" /></div><div><h2 className="text-lg font-semibold text-white">Recommended actions</h2><p className="text-sm text-ink-500 mt-1">The fastest path to a stronger application</p></div></div><div className="grid md:grid-cols-2 gap-x-8 gap-y-4">{result.recommendedActions.map((action, index) => <div key={action} className="flex items-start gap-3 text-sm text-ink-300 leading-relaxed"><span className="font-mono text-xs text-forge-400 mt-0.5">0{index + 1}</span>{action}</div>)}</div></Card>
      </div>}
    </div>
  );
}
