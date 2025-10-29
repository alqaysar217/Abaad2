import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';
import { AbaadLogo } from '@/components/icons';

const navLinks = [
  { href: '/about', label: 'من نحن' },
  { href: '/courses', label: 'الدورات' },
  { href: '/trainers', label: 'المدربون' },
  { href: '/contact', label: 'تواصل معنا' },
];

const socialLinks = [
  { href: '#', icon: <Facebook className="h-5 w-5" /> },
  { href: '#', icon: <Twitter className="h-5 w-5" /> },
  { href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { href: '#', icon: <Youtube className="h-5 w-5" /> },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <AbaadLogo className="h-10 w-10" />
              <span className="text-xl font-headline font-bold">معهد أبعاد</span>
            </Link>
            <p className="text-sm text-muted-foreground">نصنع المعرفة ونبني المستقبل.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>اليمن - صنعاء</p>
              <p>هاتف: <a href="tel:+967776999568" className="hover:text-primary">+967 776 999 568</a></p>
              <p>بريد: <a href="mailto:info@abaad.com" className="hover:text-primary">info@abaad.com</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} معهد أبعاد للدراسات والتدريب والتأهيل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
