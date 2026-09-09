import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  FileSearch,
  Lightbulb,
  ScanSearch,
  Sparkles,
  Target,
  TrendingUp,
  Upload,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { RadialScore } from '@/components/ui/RadialScore';

const features = [
  {
    icon: FileSearch,
    title: 'AI Resume Analyzer',
    description: 'Get an ATS-style score, uncover your strengths, and see exactly where your resume can improve.',
    color: 'text-forge-400',
    bg: 'bg-forge-500/10',
  },
  {
    icon: Target,
    title: 'Job Match Engine',
    description: 'Compare your resume against any role and see how closely your skills align with the opportunity.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: ScanSearch,
    title: 'Skill Gap Detection',
    description: 'Discover the missing skills that could make the difference between an application and an interview.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Actionable Recommendations',
    description: 'Replace generic advice with clear, prioritized next steps tailored to your career goals.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
];

const stats = [
  { value: '10,000+', label: 'Resumes analyzed' },
  { value: '95%', label: 'Faster career analysis' },
  { value: '50+', label: 'Skills evaluated' },
];

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ink-950 overflow-hidden">
      <Navbar />

      <main>
        <section className="relative min-h-[760px] flex items-center pt-28 pb-20 grid-bg">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-forge-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-forge-500/20 bg-forge-500/5 text-forge-400 text-xs font-semibold mb-7">
                  <Sparkles className="w-3.5 h-3.5" />
                  The smarter way to job search
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
                  Forge a career that <span className="gradient-text">stands out.</span>
                </h1>
                <p className="mt-7 text-lg text-ink-300 leading-relaxed max-w-xl">
                  Analyze your resume, discover your strengths, identify skill gaps, and see how well you match your dream job — all with AI.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button size="lg" onClick={() => navigate('/resume-analyzer')}>
                    Analyze My Resume <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate('/job-match')}>
                    Match a Job <Target className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-3 text-sm text-ink-500">
                  <div className="flex -space-x-2">
                    {['#fb6a0f', '#3b82f6', '#10b981', '#f59e0b'].map((color, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-ink-950 flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: color }}>
                        {['JA', 'MK', 'RL', 'TS'][i]}
                      </div>
                    ))}
                  </div>
                  <span>Built for the next generation of professionals</span>
                </div>
              </div>

              <div className="relative hidden lg:block animate-slide-in-right">
                <div className="absolute -inset-10 bg-forge-500/10 blur-3xl rounded-full animate-pulse-glow" />
                <div className="relative glass-card p-5 glow animate-float">
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-forge-500/15 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-forge-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Career Analysis</p>
                        <p className="text-xs text-ink-500">Software Engineer Resume</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">ANALYZED</span>
                  </div>
                  <div className="py-7 flex items-center gap-8">
                    <div className="shrink-0">
                      <RadialScore score={87} size={150} strokeWidth={10} label="Resume score" />
                    </div>
                    <div className="space-y-4 flex-1">
                      {[
                        { label: 'ATS Compatibility', score: 92, color: 'bg-emerald-500' },
                        { label: 'Skills Match', score: 92, color: 'bg-blue-500' },
                        { label: 'Resume Strength', score: 84, color: 'bg-forge-500' },
                        { label: 'Job Match', score: 89, color: 'bg-violet-500' },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between mb-1.5 text-xs">
                            <span className="text-ink-400">{item.label}</span>
                            <span className="text-white font-mono font-medium">{item.score}%</span>
                          </div>
                          <div className="h-1.5 bg-ink-800 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-ink-400">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Top 15% of analyzed resumes</span>
                    </div>
                    <span className="text-xs text-forge-400 font-medium">View insights <ChevronRight className="inline w-3 h-3" /></span>
                  </div>
                </div>
                <div className="absolute -left-10 bottom-10 glass-card px-4 py-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-emerald-400" /></div>
                    <div><p className="text-xs font-semibold text-white">Strong match found</p><p className="text-[10px] text-ink-500">Cloud Infrastructure Engineer</p></div>
                  </div>
                </div>
                <div className="absolute -right-5 -top-8 glass-card px-4 py-3 animate-fade-in-down" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-forge-400" fill="currentColor" /><span className="text-xs font-semibold text-white">7 insights ready</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-ink-925/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
              {stats.map((stat) => (
                <div key={stat.label} className="py-4 sm:py-0 text-center">
                  <p className="text-2xl font-bold font-display text-white">{stat.value}</p>
                  <p className="text-sm text-ink-500 mt-1">{stat.label} <span className="text-[10px]">• demo stats</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-28 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-sm font-semibold text-forge-400 uppercase tracking-widest mb-4">Built for momentum</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Everything you need to move your career forward.</h2>
              <p className="mt-4 text-ink-400 text-lg">Stop guessing what recruiters want. Get a clearer picture of where you stand and what to do next.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} hover className="group p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className={`w-11 h-11 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}><Icon className="w-5 h-5" /></div>
                    <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm text-ink-400 leading-relaxed">{feature.description}</p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-ink-500 group-hover:text-forge-400 transition-colors">Explore <ArrowRight className="w-3.5 h-3.5" /></div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-28 bg-ink-925/30 border-y border-white/5 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-sm font-semibold text-forge-400 uppercase tracking-widest mb-4">Simple by design</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">From uncertain to unstoppable.</h2>
              <p className="mt-4 text-ink-400">Three focused steps to turn your career questions into a clear plan.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 relative">
              <div className="hidden md:block absolute top-10 left-[20%] right-[20%] border-t border-dashed border-ink-700" />
              {[
                { number: '01', icon: Upload, title: 'Upload', text: 'Upload or provide your resume. No account or setup required for the demo.' },
                { number: '02', icon: BrainCircuit, title: 'Analyze', text: 'CareerForge AI maps your skills, experience, structure, and job requirements.' },
                { number: '03', icon: TrendingUp, title: 'Improve', text: 'Get actionable recommendations and a personalized career improvement plan.' },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-ink-900 border border-white/10 flex flex-col items-center justify-center relative z-10 shadow-xl"><Icon className="w-6 h-6 text-forge-400 mb-1" /><span className="text-[10px] font-mono text-ink-500">{step.number}</span></div>
                    <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm text-ink-400 leading-relaxed max-w-xs mx-auto">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-forge-500/20 bg-gradient-to-br from-forge-950/50 to-ink-900 p-10 sm:p-16 text-center">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-forge-500/20 blur-3xl rounded-full" />
              <div className="relative">
                <Sparkles className="w-7 h-7 text-forge-400 mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Ready to forge your next opportunity?</h2>
                <p className="mt-4 text-ink-300 max-w-lg mx-auto">Your next role is out there. Start with a clearer understanding of what makes you stand out.</p>
                <Button size="lg" className="mt-8" onClick={() => navigate('/resume-analyzer')}>Start Your Career Analysis <ArrowRight className="w-4 h-4" /></Button>
                <p className="mt-4 text-xs text-ink-500">Free demo • No account required</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
