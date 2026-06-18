import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { TechStack } from '@/components/tech-stack';
import { ProjectsSection } from '@/components/projects-section';
import { ContactFooter } from '@/components/contact-footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
