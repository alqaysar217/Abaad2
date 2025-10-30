"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, GraduationCap, Users, BookOpen, Newspaper, HelpCircle, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';
import { AbaadLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import type { NavLink } from '@/lib/types';
import { MobileNav } from './mobile-nav';
import { ThemeToggleButton } from '../theme-toggle-button';

const navLinks: NavLink[] = [
  { href: '/', label: 'الرئيسية', icon: <Home /> },
  { href: '/about', label: 'من نحن', icon: <Info /> },
  { href: '/courses', label: 'الدورات', icon: <GraduationCap /> },
  { href: '/trainers', label: 'المدربون', icon: <Users /> },
  { href: '/books', label: 'الكتب', icon: <BookOpen /> },
  { href: '/news', label: 'الأخبار', icon: <Newspaper /> },
  { href: '/faq', label: 'الأسئلة الشائعة', icon: <HelpCircle /> },
  { href: '/contact', label: 'تواصل معنا', icon: <Phone /> },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Right side: Logo and Name */}
        <div className="flex items-center justify-start flex-1">
          <Link href="/" className="flex items-center gap-2">
            <AbaadLogo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">معهد أبعاد</span>
          </Link>
        </div>

        {/* Middle: Desktop Navigation */}
        <nav className="hidden md:flex flex-none items-center justify-center gap-4 text-sm">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-2 transition-colors hover:text-primary',
                pathname === link.href ? 'font-bold text-primary' : 'text-muted-foreground'
              )}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Left side: Buttons and Mobile Nav */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggleButton />
          <div className="hidden md:flex">
            <Button asChild>
              <a href="https://wa.me/967776999568" target="_blank" rel="noopener noreferrer">
                سجل الآن
              </a>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
