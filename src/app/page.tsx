
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronLeft, Award, Users, Star, GraduationCap, Building, Rss, MessageSquare, ShieldCheck, Target, Eye, FileText, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ALL_COURSES, TESTIMONIALS, ALL_TRAINERS, ALL_BOOKS } from '@/lib/data';
import { Course, Testimonial } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeroSlider } from '@/components/hero-slider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CourseCard = ({ course }: { course: Course }) => {
  const courseImage = PlaceHolderImages.find(p => p.id === course.imageId);
  const trainer = ALL_TRAINERS.find(t => t.slug === course.trainerSlug);
  const trainerImage = trainer ? PlaceHolderImages.find(p => p.id === trainer.imageId) : undefined;
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
          {trainerImage && (
            <Image
              src={trainerImage.imageUrl}
              alt={course.trainerName}
              width={32}
              height={32}
              className="rounded-full ml-2 object-cover w-8 h-8"
              data-ai-hint={trainerImage.imageHint}
            />
          )}
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
  return (
    <div className="break-inside-avoid">
        <Card className="h-full bg-background">
        <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
            {testimonialImage && (
                <Image
                src={testimonialImage.imageUrl}
                alt={testimonial.name}
                width={56}
                height={56}
                className="rounded-full border-2 border-accent"
                data-ai-hint={testimonialImage.imageHint}
                />
            )}
            <div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-primary">{testimonial.course}</p>
            </div>
            </div>
            <p className="text-muted-foreground italic relative pr-8">
            <MessageCircle className="absolute right-0 top-0 h-5 w-5 text-accent" />
            &ldquo;{testimonial.quote}&rdquo;
            </p>
        </CardContent>
        </Card>
    </div>
  );
};


export default function Home() {
  const latestCourses = ALL_COURSES.slice(0, 3);
  const featuredTrainers = ALL_TRAINERS.slice(0, 3);
  const featuredBooks = ALL_BOOKS.slice(0, 4);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);
  const logoImage = PlaceHolderImages.find((p) => p.id === 'abaad-logo');


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <HeroSlider />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="absolute inset-0 z-20 flex h-full items-center justify-center text-center text-white">
            <div className="container mx-auto px-4">
            {logoImage && <Image src={logoImage.imageUrl} alt="Abaad Logo" width={96} height={96} className="h-24 w-auto mx-auto mb-4" data-ai-hint={logoImage.imageHint} />}
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

      {/* Why Choose Us Section */}
      <section id="why-us" className="min-h-screen bg-secondary flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">لماذا تختار معهد أبعاد؟</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              نحن نقدم أكثر من مجرد دورات تدريبية، نحن نقدم لك طريقًا للنجاح.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: 'مدربون معتمدون',
                description: 'نخبة من أفضل المدربين الخبراء والمعتمدين في مجالاتهم لضمان أعلى جودة تعليمية.',
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: 'شهادات رسمية',
                description: 'شهادات معتمدة ومعترف بها تساعدك على تعزيز سيرتك الذاتية وفتح أبواب الفرص الوظيفية.',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: 'تدريب عملي وتطبيقي',
                description: 'نركز على الجانب العملي والتطبيقي لضمان اكتسابك المهارات التي يتطلبها سوق العمل.',
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: 'بيئة تعليمية محفزة',
                description: 'قاعات مجهزة بأحدث التقنيات ومجتمع طلابي داعم يساعد على تبادل المعرفة والخبرات.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section id="explore" className="min-h-screen bg-background flex items-center justify-center py-16">
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
                <div className="p-6 bg-card rounded-lg shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center gap-4 border">
                   <div className="bg-primary/10 text-primary rounded-full p-4 sm:p-6 transition-transform duration-300 group-hover:scale-110">
                    {React.cloneElement(item.icon, { className: 'h-10 w-10 sm:h-12 sm:w-12' })}
                  </div>
                  <h3 className="font-headline text-lg sm:text-xl">{item.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section id="courses" className="min-h-screen bg-secondary flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">أحدث الدورات التدريبية</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              اطلع على أحدث الدورات التي نقدمها في مختلف المجالات لتطوير مهاراتك.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestCourses.map(course => (
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

      {/* Trainers Section */}
      <section id="trainers" className="min-h-screen bg-background flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">مدربونا المتميزون</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              تعرف على نخبة من الخبراء الذين يقودون رحلتك التعليمية.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTrainers.map(trainer => {
              const trainerImage = PlaceHolderImages.find(p => p.id === trainer.imageId);
              return (
                <Card key={trainer.id} className="text-center flex flex-col items-center p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 border">
                  {trainerImage && (
                    <Image
                      src={trainerImage.imageUrl}
                      alt={trainer.name}
                      width={144}
                      height={144}
                      className="rounded-full w-36 h-36 object-cover border-4 border-primary/20 mb-4"
                      data-ai-hint={trainerImage.imageHint}
                    />
                  )}
                  <CardHeader className="p-0 text-center flex-grow">
                    <CardTitle className="font-headline text-xl">{trainer.name}</CardTitle>
                    <p className="text-primary font-semibold">{trainer.field}</p>
                    <div className="flex items-center justify-center gap-1 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({trainer.rating})</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">{trainer.bio}</p>
                  </CardContent>
                  <CardFooter className="p-0 w-full mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/trainers/${trainer.slug}`}>
                        عرض الملف الشخصي
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/trainers">
                تعرف على كل المدربين
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="min-h-screen bg-secondary flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">من إصداراتنا</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              مكتبة غنية بالكتب والمراجع التي أعدها مدربونا الخبراء.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map(book => {
              const bookImage = PlaceHolderImages.find(p => p.id === book.imageId);
              return (
                 <Card key={book.id} className="flex flex-col text-center items-center p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {bookImage && (
                      <Link href={`/books/${book.slug}`} className="flex-shrink-0 mb-4">
                        <Image
                          src={bookImage.imageUrl}
                          alt={book.title}
                          width={150}
                          height={200}
                          className="rounded-md shadow-lg object-cover aspect-[3/4] hover:opacity-90 transition-opacity"
                          data-ai-hint={bookImage.imageHint}
                        />
                      </Link>
                    )}
                    <div className="flex flex-col flex-1">
                      <CardTitle className="font-headline text-lg mb-1 flex-grow">
                        <Link href={`/books/${book.slug}`} className="hover:text-primary">{book.title}</Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">للمؤلف: {book.author}</p>
                      
                      <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground my-2">
                        <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> <span>{book.rating}</span></div>
                        <div className="flex items-center gap-1"><FileText className="h-4 w-4" /> <span>{book.pages} صفحة</span></div>
                      </div>

                       <Button asChild variant="link" size="sm" className="mt-auto">
                          <Link href={`/books/${book.slug}`}>
                            عرض التفاصيل <ChevronLeft className="mr-1 h-4 w-4" />
                          </Link>
                        </Button>
                    </div>
                 </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/books">
                تصفح كل الكتب
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen bg-background flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">ماذا يقول طلابنا عنا؟</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              نفخر بثقة طلابنا ونسعد بمشاركة قصص نجاحهم وتجاربهم الملهمة في معهد أبعاد.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {featuredTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/about#testimonials">
                عرض كل الآراء
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Link>
            </Button>
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

    