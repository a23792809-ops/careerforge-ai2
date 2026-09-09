import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, FileText, Lightbulb, RefreshCw, Upload } from 'lucide-react';
import { PageHeader } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LoadingState } from '@/components/ui/States';
import { ListBlock } from '@/components/ui/Badge';
import { RadialScore, ScoreBar } from '@/components/ui/RadialScore';
import { analyzeResume, extractResumeText, getDemoResumeText } from '@/services/aiService';
import type { ResumeAnalysis } from '@/types';

export function ResumeAnalyzerPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');

  const runAnalysis = async (text: string, name: string) => {
    setError('');
    setFileName(name);
    setLoading(true);
    setAnalysis(null);
    try {
      setAnalysis(await analyzeResume(text));
    } catch {
      setError('We could not analyze that resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF resume.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Your file is larger than 5 MB. Please choose a smaller PDF.');
      return;
    }
    setError('');
    setLoading(true);
    setFileName(file.name);
    try {
      const text = await extractResumeText(file);
      await runAnalysis(text, file.name);
    } catch {
      setLoading(false);
      setError('We could not read that file. Please try again.');
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) void handleFile(file);
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) void handleFile(file);
  };

  const loadDemo = () => void runAnalysis(getDemoResumeText(), 'Software Engineer Resume.pdf');
  const reset = () => { setFileName(''); setAnalysis(null); setError(''); };

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader>
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-sm text-forge-400 font-medium mb-2">Career intelligence</p><h1 className="text-3xl sm:text-4xl font-bold font-display text-white">Resume analyzer</h1><p className="mt-2 text-ink-400 max-w-xl">Turn your resume into a competitive advantage with clear, actionable insights.</p></div>
          {analysis && <Button variant="ghost" size="sm" onClick={reset}><RefreshCw className="w-4 h-4" /> Start over</Button>}
        </div>
      </PageHeader>

      {!analysis && !loading && (
        <Card className="max-w-3xl mx-auto p-6 sm:p-10 animate-scale-in">
          <div className="text-center mb-8"><div className="w-14 h-14 mx-auto rounded-2xl bg-forge-500/10 flex items-center justify-center mb-5"><FileText className="w-7 h-7 text-forge-400" /></div><h2 className="text-2xl font-bold font-display text-white">Upload your resume</h2><p className="mt-2 text-ink-400">Get a detailed analysis in under a minute.</p></div>
          <div onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={onDrop} onClick={() => inputRef.current?.click()} className={`border-2 border-dashed rounded-2xl p-10 sm:p-16 text-center cursor-pointer transition-all ${dragging ? 'border-forge-400 bg-forge-500/10' : 'border-ink-700 hover:border-forge-500/50 hover:bg-white/[0.02]'}`}>
            <div className="w-12 h-12 mx-auto rounded-xl bg-ink-800 flex items-center justify-center mb-4"><Upload className="w-5 h-5 text-ink-300" /></div><p className="font-semibold text-white">Drag and drop your PDF here</p><p className="text-sm text-ink-500 mt-2">or <span className="text-forge-400">browse your files</span></p><p className="text-xs text-ink-600 mt-5">PDF only · Maximum file size 5 MB</p>
            <input ref={inputRef} type="file" accept="application/pdf" className="hidden" onChange={onInputChange} />
          </div>
          <div className="flex items-center gap-3 my-6"><div className="h-px flex-1 bg-white/5" /><span className="text-xs text-ink-600">OR</span><div className="h-px flex-1 bg-white/5" /></div>
          <Button variant="secondary" className="w-full" onClick={loadDemo}><Lightbulb className="w-4 h-4 text-forge-400" /> Use Demo Resume</Button>
          {error && <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-sm text-red-300"><AlertCircle className="w-4 h-4 shrink-0" />{error}</div>}
          <p className="text-center text-xs text-ink-600 mt-6">Your resume stays private. This demo uses mock analysis data.</p>
        </Card>
      )}

      {loading && <LoadingState message={fileName ? `Analyzing ${fileName}...` : 'Analyzing your resume...'}><p className="mt-2 text-xs text-ink-600">Checking structure, skills, and impact</p></LoadingState>}

      {analysis && !loading && (
        <div className="space-y-6 animate-fade-in-up">
          <Card className="p-6 sm:p-8 overflow-hidden relative"><div className="absolute top-0 right-0 w-64 h-64 bg-forge-500/10 blur-3xl rounded-full pointer-events-none" /><div className="relative flex flex-col md:flex-row items-center gap-8"><div className="shrink-0"><RadialScore score={analysis.overallScore} size={190} strokeWidth={13} label="Overall score" sublabel="out of 100" /></div><div className="text-center md:text-left flex-1"><div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3"><span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20"><CheckCircle2 className="inline w-3.5 h-3.5 mr-1" /> Strong result</span><span className="text-xs text-ink-500">{fileName}</span></div><h2 className="text-3xl font-bold font-display text-white">{analysis.rating}</h2><p className="mt-3 text-ink-400 max-w-lg">Your resume is in great shape. A few targeted improvements could make it even more competitive for your target roles.</p><Button size="sm" variant="outline" className="mt-5" onClick={reset}><RefreshCw className="w-3.5 h-3.5" /> Analyze another resume</Button></div></div></Card>
          <div className="grid sm:grid-cols-2 gap-4">{analysis.categories.map((category) => <Card key={category.label} className="p-5"><ScoreBar label={category.label} score={category.score} description={category.description} /></Card>)}</div>
          <div className="grid lg:grid-cols-2 gap-4"><ListBlock title="Strengths" items={analysis.strengths} variant="success" /><ListBlock title="Areas to improve" items={analysis.improvements} variant="warning" /></div>
          <section><div className="flex items-end justify-between mb-4"><div><p className="text-sm text-forge-400 font-medium mb-2">Your improvement plan</p><h2 className="text-2xl font-bold font-display text-white">AI recommendations</h2></div><span className="text-sm text-ink-500">{analysis.recommendations.length} insights</span></div><div className="grid md:grid-cols-2 gap-4">{analysis.recommendations.map((rec, index) => <Card key={rec.title} hover className="p-6"><div className="flex items-start gap-3 mb-5"><div className="w-8 h-8 rounded-lg bg-forge-500/10 text-forge-400 flex items-center justify-center text-sm font-bold shrink-0">0{index + 1}</div><div><h3 className="font-semibold text-white">{rec.title}</h3><span className={`text-xs ${rec.impact.startsWith('High') ? 'text-forge-400' : 'text-ink-500'}`}>{rec.impact}</span></div></div><p className="text-sm text-ink-400 leading-relaxed mb-4">{rec.problem}</p><div className="p-4 rounded-xl bg-ink-950/60 border border-white/5 mb-4"><p className="text-xs text-emerald-400 font-semibold mb-2">TRY THIS</p><p className="text-sm text-ink-300 leading-relaxed">{rec.solution}</p><p className="text-xs text-ink-500 mt-3 italic leading-relaxed">{rec.example}</p></div><div className="flex items-center gap-2 text-xs text-forge-400"><Lightbulb className="w-3.5 h-3.5" /> Actionable recommendation</div></Card>)}</div></section>
          <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 border-blue-500/20 bg-blue-500/5"><div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0"><ArrowRight className="w-5 h-5 text-blue-400" /></div><div className="flex-1"><h3 className="text-sm font-semibold text-white">Ready to test your fit?</h3><p className="text-xs text-ink-400 mt-1">Compare this resume against a real job description.</p></div><Button size="sm" onClick={() => window.location.href = '/job-match'}>Match a job <ArrowRight className="w-3.5 h-3.5" /></Button></Card>
        </div>
      )}
    </div>
  );
}
