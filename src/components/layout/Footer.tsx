import { Link } from 'react-router-dom';
import { Zap, Github } from 'lucide-react';

export function Footer() {
  const links = [
    { label: 'Product', href: '/dashboard' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/about' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-forge-500 to-forge-700 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold font-display text-white">
                CareerForge <span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400">Forge a career that stands out.</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-ink-400 hover:text-forge-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} CareerForge AI. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
