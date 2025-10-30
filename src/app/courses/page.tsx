
"use client";

import { useState } from 'react';
import { Stethoscope, Code, Wrench, Briefcase, UserCheck, Cpu, Languages, SprayCan, LandPlot, Shield, Search, ToyBrick, Palette, Sparkles, Phone, ListFilter, TrendingUp, Star, Percent, Wifi } from 'lucide-react';
import { ALL_COURSES } from '@/lib/data';
import { CourseCard } from '@/components/course-card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { name: 'الكل', slug: 'all' },
  { name: 'الطب', slug: 'الطب' },
  { name: 'البرمجة', slug: 'البرمجة' },
  { name: 'الهندسة', slug: 'الهندسة' },
  { name: 'التسويق', slug: 'التسويق' },
  { name: 'التصميم والرسم', slug: 'التصميم والرسم' },
  { name: 'دورات نسائية', slug: 'دورات نسائية' },
  { name: 'صيانة الهواتف', slug: 'صيانة الهواتف' },
  { name: 'خدمة العملاء', slug: 'خدمة العملاء' },
  { name: 'السكرتارية', slug: 'السكرتارية' },
  { name: 'الأمن السيبراني', slug: 'الأمن السيبراني' },
  { name: 'التفكير الإبداعي', slug: 'التفكير الإبداعي' },
  { name: 'الحاسوب', slug: 'الحاسوب' },
  { name: 'اللغات', slug: 'اللغات' },
  { name: 'إدارة', slug: 'إدارة' },
];

const sortOptions = [
  { name: 'الكل', value: 'all' },
  { name: 'الأكثر طلباً', value: 'popular' },
  { name: 'الأعلى تقييماً', value: 'rating' },
  { name: 'عليها خصم', value: 'discount' },
  { name: 'أونلاين', value: 'online' },
];


export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('all');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.trainerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0; // default order
  }).filter(course => {
    if (sortBy === 'popular') {
      return course.tags?.includes('popular');
    }
    if (sortBy === 'discount') {
      return course.tags?.includes('discount');
    }
    if (sortBy === 'online') {
        return course.tags?.includes('online');
    }
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الدورات التدريبية</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          اكتشف مجموعة واسعة من الدورات المصممة لتلبية احتياجاتك وتطوير مهاراتك. اختر مجالك وابدأ رحلتك التعليمية اليوم.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="relative md:col-span-1">
          <Input 
            type="text" 
            placeholder="ابحث عن دورة أو مدرب..." 
            className="w-full pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <div className="md:col-span-1">
          <Select onValueChange={setActiveCategory} defaultValue={activeCategory}>
            <SelectTrigger className="w-full">
                <ListFilter className="h-5 w-5 text-muted-foreground" />
                <SelectValue placeholder="تصنيف حسب المجال" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.slug} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-1">
            <Select onValueChange={setSortBy} defaultValue={sortBy}>
                <SelectTrigger className="w-full">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    <SelectValue placeholder="فرز حسب" />
                </SelectTrigger>
                <SelectContent>
                    {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.name}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
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
