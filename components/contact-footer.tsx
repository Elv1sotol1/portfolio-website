'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

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

const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6" />
    <polyline points="10 14 21 3" />
  </svg>
);

export function ContactFooter() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-t from-slate-900/30 to-background border-t border-border"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-foreground/60 text-lg">
            Open to opportunities in junior developer roles and collaborative projects
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location */}
          <a
            href="#"
            className="p-6 border border-border rounded-lg hover:border-emerald-500/50 hover:bg-card/80 transition-all duration-300 group text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <MapPin size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70 text-sm">Nairobi, Kenya</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+254700000000"
            className="p-6 border border-border rounded-lg hover:border-emerald-500/50 hover:bg-card/80 transition-all duration-300 group text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <Phone size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70 text-sm">+254 (708) 592 842</p>
          </a>

          {/* Email */}
          <a
            href="mailto:elvis@example.com"
            className="p-6 border border-border rounded-lg hover:border-emerald-500/50 hover:bg-card/80 transition-all duration-300 group text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <Mail size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 text-sm">otolielvis001@gmail.com</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 pb-12 border-b border-border">
          <a
            href="https://github.com/Elv1sotol1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-border hover:border-emerald-500 hover:bg-emerald-500/10 text-foreground hover:text-emerald-400 transition-all duration-300 group flex items-center gap-2"
          >
            <GithubIcon />
            <span className="text-sm font-medium hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-border hover:border-emerald-500 hover:bg-emerald-500/10 text-foreground hover:text-emerald-400 transition-all duration-300 group flex items-center gap-2"
          >
            <LinkedinIcon />
            <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="#"
            className="p-3 rounded border border-border hover:border-emerald-500 hover:bg-emerald-500/10 text-foreground hover:text-emerald-400 transition-all duration-300 group flex items-center gap-2"
          >
            <LinkIcon />
            <span className="text-sm font-medium hidden sm:inline">Portfolio</span>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center text-foreground/50 text-sm">
          <p>Designed and built with React, Tailwind CSS, and crafted with attention to detail.</p>
          <p className="mt-2">© 2024 Elvis Otoli Gabriel. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
