'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  features: string[];
  deepDive: string;
  deepDiveTitle: string;
  techStack: string[];
}

function ProjectCard({
  title,
  description,
  problem,
  features,
  deepDive,
  deepDiveTitle,
  techStack,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card/50 hover:bg-card/80 transition-all duration-300 hover:border-emerald-500/30 group">
      {/* Card Header */}
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-foreground/60 text-sm mb-4">{description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-6">
        {/* The Problem */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">The Problem</h4>
          <p className="text-foreground/70 leading-relaxed">{problem}</p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/70">
                <span className="text-emerald-400 font-bold mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Deep Dive */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 bg-emerald-500/5 border border-emerald-500/20 rounded hover:bg-emerald-500/10 transition-colors flex items-center justify-between group/btn"
        >
          <span className="font-semibold text-foreground group-hover/btn:text-emerald-400 transition-colors">
            {deepDiveTitle}
          </span>
          <ChevronDown
            size={20}
            className={`text-emerald-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        {isExpanded && (
          <div className="p-4 bg-slate-900/30 rounded border border-emerald-500/10 text-foreground/80 leading-relaxed animate-in fade-in slide-in-from-top-2">
            {deepDive}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 text-lg">Systems that solved real problems in production</p>
        </div>

        <div className="space-y-8">
          <ProjectCard
            title="BuildRight Inventory Management System"
            description="Enterprise multi-site inventory solution for construction supply company"
            problem="A multi-site construction supply company in Nairobi, operating across three locations, relied entirely on manual spreadsheets and paper logs. This caused frequent stock discrepancies, undetected stockouts, unauthorized procurement, a total lack of an audit trail, and slow, error-prone reporting."
            features={[
              'Role-Based Access Control (Admin/Manager/Staff) with granular permissions',
              'Real-time stock tracking with unique item IDs and location awareness',
              'Automated low-stock email alerts via async SMTP for procurement teams',
              'Data-driven dashboard with trend visualization via Chart.js',
              'Automated daily database backups with one-click restore functionality',
            ]}
            deepDiveTitle="Standout: Multi-Stage Purchase Order Reconciliation"
            deepDive="Designed complex stock-receiving database logic handling partial deliveries with automatic reconciliation of received vs ordered quantities. Implemented safe state transitions with explicit database transaction management (COMMIT/ROLLBACK) across 11 relational tables, guaranteeing absolute data consistency during multi-site scaling. This logic prevents double-counting, handles supplier shortfalls gracefully, and maintains audit trails for compliance."
            techStack={['Python', 'Flask', 'MySQL', 'Chart.js', 'APScheduler']}
          />

          <ProjectCard
            title="Abisaki Rental Management System"
            description="Automated rental platform with M-Pesa payment reconciliation and SMS logistics"
            problem="Residential landlords utilizing manual tracking struggle with rent collection bottlenecks, missing audit trails, and time-consuming manual text/payment verification as portfolios scale past a few units. This system centralizes operations by automating monthly billing runs, digitizing tenant ledgers, and eliminating manual M-Pesa message checking."
            features={[
              'FastAPI backend utilizing SQLAlchemy ORM and Alembic schema migrations.',
              'M-Pesa Daraja API integration featuring STK Push triggers and live webhook callbacks.',
              'Automated monthly rent invoicing engine powered by background APScheduler tasks.',
              'Africa’s Talking SMS integration for automated onboarding alerts, rent receipts, and debt reminders.',
              'Server-side document generation using ReportLab (PDF statements) and OpenPyXL (Excel portfolio sheets).',
            ]}
            deepDiveTitle="Standout: Idempotent Webhook Reconciliation Engine"
            deepDive="Engineered an asynchronous, fault-tolerant webhook processing loop to handle Safaricom Daraja callbacks safely. To fix data fragmentation, the system generates cross-referenced arrays of phone number variations (07..., 254..., +254...) at runtime to guarantee successful multi-format database matching. Crucially, the reconciliation logic enforces absolute idempotency by validating M-Pesa receipt constraints prior to updating state, making sure delayed network retries or duplicate webhook payloads never cause financial balance discrepancies."
            techStack={['Python', 'FastAPI', 'MySQL', 'M-Pesa API', 'Africa\'s Talking']}
          />
        </div>
      </div>
    </section>
  );
}
