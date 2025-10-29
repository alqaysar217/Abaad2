import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AbaadLogo } from '@/components/icons';
import type { NavLink } from '@/lib/types';

type MobileNavProps = {
  navLinks: NavLink[];
};

export function MobileNav({ navLinks }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">فتح القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs p-0">
        <SheetTitle className="sr-only">قائمة التنقل</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="border-b p-4">
            <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2">
                <AbaadLogo className="h-8 w-8" />
                <span className="font-bold">معهد أبعاد</span>
                </Link>
            </SheetClose>
          </div>
          <nav className="flex-1 space-y-2 p-4">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
