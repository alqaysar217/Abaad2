"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { AbaadLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import type { NavLink } from '@/lib/types';
import { MobileNav } from './mobile-nav';

const navLinks: NavLink[] = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'من نحن' },
  { href: '/courses', label: 'الدورات' },
  { href: '/trainers', label: 'المدربون' },
  { href: '/books', label: 'الكتب' },
  { href: '/news', label: 'الأخبار' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/contact', label: 'تواصل معنا' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Name on the right */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <AbaadLogo className="h-8 w-8 ml-2" />
            <span className="font-bold">معهد أبعاد</span>
          </Link>
        </div>

        {/* Desktop Nav in the middle */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary font-bold' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttons and Mobile Nav on the left */}
        <div className="flex flex-1 items-center justify-end">
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