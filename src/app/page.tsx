'use client';
import { useEffect, useState } from 'react';
import { MenuBar } from '@/components/MenuBar';
import { RetroWindow } from '@/components/RetroWindow';
import { DesktopIcon } from '@/components/DesktopIcon';
import { IntroContent } from '@/components/content/IntroContent';
import { ExperienceContent } from '@/components/content/ExperienceContent';
import { ProjectsContent } from '@/components/content/ProjectsContent';
import { EducationContent } from '@/components/content/EducationContent';
import { InterestsContent } from '@/components/content/InterestsContent';

export default function Home() {
  // Prevent Hydration errors with Rnd
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <main className="h-screen w-screen overflow-hidden">
      <MenuBar />

      {/* Desktop Icons Area */}
      <div className="pt-12 p-4 grid gap-4 w-32">
        <DesktopIcon id="about" label="Intro" />
        <DesktopIcon id="experience" label="Experience" />
        <DesktopIcon id="projects" label="Projects" />
        <DesktopIcon id="education" label="Education" />
        <DesktopIcon id="interests" label="Interests" />
      </div>

      {/* Windows Layer */}
      <RetroWindow id="about" title="Intro" defaultPos={{ x: 110, y: 50 }}>
        <IntroContent />
      </RetroWindow>

      <RetroWindow id="experience" title="Experience" defaultPos={{ x: 110, y: 310 }}>
        <ExperienceContent />
      </RetroWindow>

      <RetroWindow id="projects" title="Projects" defaultPos={{ x: 1030, y: 50 }}>
        <ProjectsContent />
      </RetroWindow>

      <RetroWindow id="education" title="Education" defaultPos={{ x: 655, y: 50 }}>
        <EducationContent />
      </RetroWindow>

      <RetroWindow id="interests" title="Interests" defaultPos={{ x: 655, y: 295 }}>
        <InterestsContent />
      </RetroWindow>
    </main>
  );
}
