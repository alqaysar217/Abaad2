"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Home, GraduationCap, Users, BookOpen, Rss, HelpCircle, Info, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { NavLink } from '@/lib/types';
import { MobileNav } from './mobile-nav';
import { ThemeToggleButton } from '../theme-toggle-button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks: NavLink[] = [
  { href: '/', label: 'الرئيسية', icon: <Home /> },
  { href: '/courses', label: 'الدورات', icon: <GraduationCap /> },
  { href: '/trainers', label: 'المدربون', icon: <Users /> },
  { href: '/books', label: 'الكتب', icon: <BookOpen /> },
  { href: '/news', label: 'المدونة', icon: <Rss /> },
  { href: '/faq', label: 'الأسئلة الشائعة', icon: <HelpCircle /> },
  { href: '/about', label: 'من نحن', icon: <Info /> },
  { href: '/contact', label: 'تواصل معنا', icon: <Phone /> },
];

function NavigationLinks() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-6 text-sm">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'flex items-center gap-2 transition-colors hover:text-primary',
            pathname === link.href ? 'font-bold text-primary' : 'text-muted-foreground'
          )}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
    const logoImage = PlaceHolderImages.find((p) => p.id === 'abaad-logo');
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
            {logoImage && <Image src={logoImage.imageUrl} alt="Abaad Logo" width={32} height={32} className="h-8 w-8" data-ai-hint={logoImage.imageHint} />}
          <span className="font-bold hidden sm:inline-block">معهد أبعاد</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
            <NavigationLinks />
        </div>

        <div className="flex items-center justify-end gap-2">
          <ThemeToggleButton />
          <div className="md:hidden">
            <MobileNav navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}

    