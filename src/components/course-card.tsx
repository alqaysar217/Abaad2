import Image from 'next/image';
import Link from 'next/link';
import { Star, GraduationCap, Clock, ChevronLeft, Wifi } from 'lucide-react';

import type { Course } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ALL_TRAINERS } from '@/lib/data';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const courseImage = PlaceHolderImages.find((p) => p.id === course.imageId);
  const trainer = ALL_TRAINERS.find(t => t.slug === course.trainerSlug);
  const trainerImage = trainer ? PlaceHolderImages.find(p => p.id === trainer.imageId) : undefined;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      <Link href={`/courses/${course.slug}`} className="block">
        <div className="relative">
          {courseImage && (
            <Image
              src={courseImage.imageUrl}
              alt={course.title}
              width={600}
              height={400}
              className="aspect-[3/2] w-full object-cover"
              data-ai-hint={courseImage.imageHint}
            />
          )}
          <div className="absolute top-3 right-3 flex gap-2">
            {course.tags?.includes('online') && <Badge className="bg-blue-500 text-white border-blue-500"><Wifi className="h-3 w-3 mr-1" /> أونلاين</Badge>}
            {course.tags?.includes('popular') && <Badge className="bg-red-600 text-white border-red-600">الأكثر طلباً</Badge>}
            {course.tags?.includes('discount') && <Badge className="bg-accent text-accent-foreground border-accent">خصم</Badge>}
          </div>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-lg leading-snug">
          <Link href={`/courses/${course.slug}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center">
          {trainerImage && (
            <Image
              src={trainerImage.imageUrl}
              alt={course.trainerName}
              width={32}
              height={32}
              className="rounded-full ml-2 object-cover"
              data-ai-hint={trainerImage.imageHint}
            />
          )}
          <span>المدرب: {course.trainerName}</span>
        </div>
        <div className="flex items-center">
          <Clock className="ml-2 h-4 w-4 text-primary" />
          <span>المدة: {course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-lg">{course.rating}</span>
          <span className="text-xs text-muted-foreground">(تقييم)</span>
        </div>
        <Button asChild variant="ghost">
          <Link href={`/courses/${course.slug}`}>
            عرض التفاصيل
            <ChevronLeft className="mr-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
