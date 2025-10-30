import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronLeft, Award, Users, Star, GraduationCap, Building, Rss } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AbaadLogo } from '@/components/icons';
import { LATEST_COURSES, TESTIMONIALS } from '@/lib/data';
import { Course } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSlider } from '@/components/hero-slider';
import { SideNav } from '@/components/side-nav';

const CourseCard = ({ course }: { course: Course }) => {
  const courseImage = PlaceHolderImages.find(p => p.id === course.imageId);
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
      <div className="relative">
        {courseImage && <Image src={courseImage.imageUrl} alt={course.title} width={600} height={400} className="object-cover w-full h-48" data-ai-hint={courseImage.imageHint} />}
        <div className="absolute top-2 right-2 flex gap-2">
          {course.tags?.includes('popular') && <Badge variant="destructive" className="bg-red-500 text-white">الأكثر طلباً</Badge>}
          {course.tags?.includes('discount') && <Badge className="bg-accent text-accent-foreground">خصم</Badge>}
        </div>
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">{course.category}</Badge>
        <CardTitle className="font-headline text-xl leading-tight">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <GraduationCap className="w-4 h-4 ml-2 text-primary" />
          <span>المدرب: {course.trainerName}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4 ml-2 text-primary" />
          <span>{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="mr-2 text-sm font-bold">{course.rating}</span>
        </div>
        <Button asChild variant="ghost" size="sm">
          <Link href={`/courses/${course.slug}`}>
            التفاصيل
            <ChevronLeft className="h-4 w-4 mr-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const homeSections = [
    { id: "hero", label: "الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "explore", label: "استكشف" },
    { id: "courses", label: "الدورات" },
    { id: "testimonials", label: "آراء الطلاب" },
    { id: "cta", label: "انضم إلينا" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <SideNav sections={homeSections} />
      {/* Hero Section */}
      <section id="hero" className="relative h-screen">
        <HeroSlider />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="absolute inset-0 z-20 flex h-full items-center justify-center text-center text-white">
            <div className="container mx-auto px-4">
            <AbaadLogo className="h-24 w-auto mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-headline mb-4">نصنع المعرفة ونبني المستقبل</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                معهد أبعاد هو منارتك لاستكشاف عوالم المعرفة واكتساب المهارات التي تفتح لك أبواب المستقبل.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/courses">
                اكتشف دوراتنا
                <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
            </Button>
            </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section id="about" className="min-h-screen bg-background flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline text-primary mb-4">مرحبًا بك في معهد أبعاد</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                نحن في معهد أبعاد نؤمن بأن التعليم هو مفتاح التقدم. نسعى لتقديم تجربة تعليمية فريدة من خلال دورات تدريبية متخصصة ومدربين خبراء، لنساعدك على تحقيق أهدافك المهنية والشخصية.
              </p>
              <Button asChild>
                <Link href="/about">
                  اعرف أكثر عنا
                  <ChevronLeft className="h-4 w-4 mr-1" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 4).map((img, i) => (
                    <Image key={img.id} src={img.imageUrl} alt="Abaad Institute Activities" width={300} height={300} className={`rounded-lg shadow-md object-cover ${i % 2 !== 0 ? 'mt-8' : ''}`} data-ai-hint={img.imageHint} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section id="explore" className="min-h-screen bg-secondary flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline mb-12">استكشف أقسام المعهد</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <GraduationCap />, label: "الدورات", href: "/courses" },
              { icon: <Users />, label: "المدربون", href: "/trainers" },
              { icon: <BookOpen />, label: "الكتب", href: "/books" },
              { icon: <Rss />, label: "المدونة", href: "/news" },
              { icon: <Building />, label: "تواصل معنا", href: "/contact" },
            ].map(item => (
              <Link href={item.href} key={item.label} className="group">
                <div className="p-6 bg-background rounded-lg shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2">
                  <div className="text-primary h-12 w-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                  <h3 className="font-headline text-lg">{item.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section id="courses" className="min-h-screen bg-background flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">أحدث الدورات التدريبية</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              اطلع على أحدث الدورات التي نقدمها في مختلف المجالات لتطوير مهاراتك.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">
                عرض كل الدورات
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen bg-secondary flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">آراء طلابنا</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              نفخر بثقة طلابنا وما حققوه من نجاح. استمع إلى قصصهم.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => {
                const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
                return(
              <Card key={testimonial.id} className="text-center bg-background">
                <CardContent className="pt-6">
                  {testimonialImage && <Image src={testimonialImage.imageUrl} alt={testimonial.name} width={80} height={80} className="rounded-full mx-auto mb-4 border-4 border-accent" data-ai-hint={testimonialImage.imageHint} />}
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
                <CardFooter className="flex-col">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.course}</p>
                </CardFooter>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-primary text-primary-foreground min-h-[50vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-headline mb-4">انضم إلى معهد أبعاد الآن</h2>
          <p className="max-w-2xl mx-auto mb-8">
            ابدأ رحلتك التعليمية معنا اليوم. تواصل معنا عبر واتساب للتسجيل أو الاستفسار.
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
            <a href="https://wa.me/967776999568" target="_blank" rel="noopener noreferrer">
              تواصل عبر واتساب
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
