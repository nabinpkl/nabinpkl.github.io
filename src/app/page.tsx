import { EducationSection } from '../components/portfolio/EducationSection';
import { ExperienceSection } from '../components/portfolio/ExperienceSection';
import { FooterNote } from '../components/portfolio/FooterNote';
import { HeroSection } from '../components/portfolio/HeroSection';
import { SiteHeader } from '../components/portfolio/SiteHeader';
import { SkillsSection } from '../components/portfolio/SkillsSection';

export default function Home() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <FooterNote />
    </main>
  );
}