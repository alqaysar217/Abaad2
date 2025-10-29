"use client";

import { useState } from 'react';
import { Stethoscope, Code, Wrench, Briefcase, UserCheck, Cpu, Languages, SprayCan, LandPlot, Shield, Search, ToyBrick, Palette, Sparkles, Phone } from 'lucide-react';
import { ALL_COURSES } from '@/lib/data';
import { CourseCard } from '@/components/course-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = [
  { name: 'الكل', slug: 'all', icon: <Code className="h-5 w-5" /> },
  { name: 'الطب', slug: 'الطب', icon: <Stethoscope className="h-5 w-5" /> },
  { name: 'البرمجة', slug: 'البرمجة', icon: <Code className="h-5 w-5" /> },
  { name: 'الهندسة', slug: 'الهندسة', icon: <Wrench className="h-5 w-5" /> },
  { name: 'التسويق', slug: 'التسويق', icon: <LandPlot className="h-5 w-5" /> },
  { name: 'التصميم والرسم', slug: 'التصميم والرسم', icon: <Palette className="h-5 w-5" /> },
  { name: 'الأطفال', slug: 'الأطفال', icon: <ToyBrick className="h-5 w-5" /> },
  { name: 'دورات نسائية', slug: 'دورات نسائية', icon: <SprayCan className="h-5 w-5" /> },
  { name: 'صيانة الهواتف', slug: 'صيانة الهواتف', icon: <Phone className="h-5 w-5" /> },
  { name: 'خدمة العملاء', slug: 'خدمة العملاء', icon: <UserCheck className="h-5 w-5" /> },
  { name: 'السكرتارية', slug: 'السكرتارية', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'الأمن السيبراني', slug: 'الأمن السيبراني', icon: <Shield className="h-5 w-5" /> },
  { name: 'التفكير الإبداعي', slug: 'التفكير الإبداعي', icon: <Sparkles className="h-5 w-5" /> },
  { name: 'الحاسوب', slug: 'الحاسوب', icon: <Cpu className="h-5 w-5" /> },
  { name: 'اللغات', slug: 'اللغات', icon: <Languages className="h-5 w-5" /> },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.trainerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الدورات التدريبية</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          اكتشف مجموعة واسعة من الدورات المصممة لتلبية احتياجاتك وتطوير مهاراتك. اختر مجالك وابدأ رحلتك التعليمية اليوم.
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Input 
            type="text" 
            placeholder="ابحث عن دورة أو مدرب..." 
            className="w-full pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map(category => (
          <Button
            key={category.slug}
            variant={activeCategory === category.slug ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.slug)}
            className="flex items-center gap-2"
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">لا توجد دورات تطابق بحثك حاليًا.</p>
        </div>
      )}
    </div>
  );
}
