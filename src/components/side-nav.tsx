'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Section = {
  id: string;
  label: string;
};

type SideNavProps = {
  sections: Section[];
};

export function SideNav({ sections }: SideNavProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
        threshold: 0,
      }
    );

    const sectionElements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  useEffect(() => {
    const handleSpacebarScroll = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        const currentIndex = sections.findIndex(s => s.id === activeSection);
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        const nextSectionId = sections[nextIndex]?.id;
        if (nextSectionId && currentIndex !== nextIndex) {
            document.getElementById(nextSectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('keydown', handleSpacebarScroll);

    return () => {
      window.removeEventListener('keydown', handleSpacebarScroll);
    };
  }, [activeSection, sections]);


  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex h-5 w-5 items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label={`Go to ${section.label} section`}
          >
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full bg-primary/50 transition-all duration-300 group-hover:bg-primary',
                activeSection === section.id ? 'h-2.5 w-2.5 bg-primary' : ''
              )}
            />
             <span className="absolute left-full ml-4 hidden scale-0 rounded bg-background px-2 py-1 text-sm text-foreground shadow-md transition-all duration-300 group-hover:scale-100 md:block origin-left">
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
