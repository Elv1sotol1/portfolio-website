'use client';

import { Mail, Download } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1-2.61c2.2-.3 4.53-.29 5.61 1.48a4.56 4.56 0 0 1 1.39 3.54v3a3.37 3.37 0 0 1-1 2.61" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function HeroSection() {
  return (
    <section
      id="bio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Elvis Otoli </span>
          </h1>

          <p className="text-2xl sm:text-3xl font-light text-emerald-400 mb-8">
            Full-Stack Software Developer
          </p>

          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-12 text-balance">
            I&apos;m a Software Development student at KCA University. I build full-stack systems that solve real
            operational problems — from automating rent collection with mobile money integration to digitizing inventory
            management for a multi-site company. I work mainly with Python (FastAPI, Flask), MySQL, and JavaScript,
            and I care about getting the unglamorous parts right: data integrity, idempotent payment handling, and
            systems that don&apos;t break when things go wrong in production. I&apos;m looking for opportunities where I
            can learn and keep building applications that matter to real users and solve real world problems.
          </p>
        </div>

        {/* CTA Buttons and Social Links */}
        <div className="flex flex-col items-center gap-8">
          {/* Download CV and Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Elv1sotol1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded border border-border hover:border-accent hover:text-accent transition-all duration-300 text-foreground/70"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded border border-border hover:border-accent hover:text-accent transition-all duration-300 text-foreground/70"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:elvis@example.com"
              className="w-10 h-10 flex items-center justify-center rounded border border-border hover:border-accent hover:text-accent transition-all duration-300 text-foreground/70"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
