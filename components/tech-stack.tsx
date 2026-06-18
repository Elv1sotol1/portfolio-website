'use client';

import { Code2, Database, Lock, Zap } from 'lucide-react';

interface TechCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
  description: string;
}

const techCategories: TechCategory[] = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Backend',
    description: 'Core API and server logic',
    items: ['Python', 'Flask', 'FastAPI'],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Databases',
    description: 'Data persistence and optimization',
    items: ['MySQL', '3NF Normalization', 'Async Operations'],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Frontend',
    description: 'User interfaces and interactions',
    items: ['JavaScript', 'HTML5', 'CSS3', 'Jinja2', 'Chart.js'],
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Security & Core',
    description: 'Production-grade essentials',
    items: ['Bcrypt', 'CSRF Protection', 'Async SMTP', 'Automated Backups'],
  },
];

export function TechStack() {
  return (
    <section
      id="stack"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background via-background to-slate-900/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-foreground/60 text-lg">Tools and technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded border border-border hover:border-emerald-500/50 transition-all duration-300 bg-card/50 hover:bg-card/80 backdrop-blur"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-foreground/60">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
