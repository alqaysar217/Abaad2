import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, GraduationCap, Users, Linkedin, Twitter, Globe, BookOpen, CheckCircle, MessageSquare } from 'lucide-react';
import { ALL_TRAINERS, ALL_COURSES } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { formatNumber } from '@/lib/utils';
import { CourseCard } from '@/components/course-card';

export async function generateStaticParams() {
  return ALL_TRAINERS.map((trainer) => ({
    slug: trainer.slug,
  }));
}

export default function TrainerProfilePage({ params }: { params: { slug: string } }) {
  const trainer = ALL_TRAINERS.find((t) => t.slug === params.slug);

  if (!trainer) {
    notFound();
  }
  
  const trainerCourses = ALL_COURSES.filter(course => course.trainerSlug === trainer.slug);
  const trainerImage = PlaceHolderImages.find((p) => p.id === trainer.imageId);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="md:flex">
            {trainerImage && (
              <div className="md:w-1/3">
                <Image
                  src={trainerImage.imageUrl}
                  alt={trainer.name}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover object-top"
                  data-ai-hint={trainerImage.imageHint}
                />
              </div>
            )}
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-headline text-primary mb-2">{trainer.name}</h1>
              <p className="text-xl text-muted-foreground font-semibold mb-4">{trainer.field}</p>
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-2xl">{trainer.rating}</span>
                <span className="text-muted-foreground">تقييم عام</span>
              </div>
              <p className="leading-relaxed mb-6">{trainer.bio}</p>
              <div className="flex items-center gap-4">
                {trainer.socials.linkedin && <a href={trainer.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin /></a>}
                {trainer.socials.twitter && <a href={trainer.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter /></a>}
                {trainer.socials.website && <a href={trainer.socials.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Globe /></a>}
              </div>
            </div>
          </div>
        </Card>
        
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                {/* Courses by Trainer */}
                <div>
                    <h2 className="text-2xl font-headline mb-4">الدورات التي يقدمها {trainer.name}</h2>
                    {trainerCourses.length > 0 ? (
                        <div className="grid sm:grid-cols-2 gap-6">
                            {trainerCourses.map(course => <CourseCard key={course.id} course={course} />)}
                        </div>
                    ) : (
                        <p className="text-muted-foreground">لا توجد دورات حالية لهذا المدرب.</p>
                    )}
                </div>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
                {/* Stats */}
                <Card>
                  <CardHeader><CardTitle>إحصائيات</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3"><BookOpen className="text-primary"/><span>عدد الدورات</span></div>
                        <span className="font-bold text-lg">{formatNumber(trainer.coursesCount)}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3"><Users className="text-primary"/><span>عدد المتدربين</span></div>
                        <span className="font-bold text-lg">{formatNumber(trainer.studentsCount)}+</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Qualifications */}
                <Card>
                  <CardHeader><CardTitle>المؤهلات والشهادات</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {trainer.qualifications.map((q, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="ml-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Accreditations */}
                <Card>
                  <CardHeader><CardTitle>الشهادات المعتمدة</CardTitle></CardHeader>
                  <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {trainer.accreditations.map((a, i) => <Badge key={i} variant="secondary">{a}</Badge>)}
                      </div>
                  </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
