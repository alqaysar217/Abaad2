import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Youtube, Facebook, Home, GraduationCap, Users, BookOpen, Rss, HelpCircle, Info, Phone, MapPin, Mail } from 'lucide-react';
import type { NavLink } from '@/lib/types';
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

const socialLinks = [
  { href: '#', icon: <Facebook className="h-5 w-5" /> },
  { href: '#', icon: <Twitter className="h-5 w-5" /> },
  { href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { href: '#', icon: <Youtube className="h-5 w-5" /> },
];

export function Footer() {
    const logoImage = PlaceHolderImages.find((p) => p.id === 'abaad-logo');
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {logoImage && <Image src={logoImage.imageUrl} alt="Abaad Logo" width={40} height={40} className="h-10 w-10" data-ai-hint={logoImage.imageHint} />}
              <span className="text-xl font-headline font-bold">معهد أبعاد</span>
            </Link>
            <p className="text-sm text-muted-foreground">نصنع المعرفة ونبني المستقبل.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />المكلا - فوه - الانشاءات - مقابل رئاسة الجامعة - مبنى مركز الانشاءات الطبي - الدور الثالث</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />هاتف: <a href="tel:+967776999568" className="hover:text-primary">+967 776 999 568</a></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />بريد: <a href="mailto:abaadinstitute24@gmail.com" className="hover:text-primary">abaadinstitute24@gmail.com</a></p>
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

    