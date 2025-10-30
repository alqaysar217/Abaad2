
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, GraduationCap, Clock, CheckCircle, UserCircle, MessageCircle } from 'lucide-react';
import { ALL_COURSES, ALL_TRAINERS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CourseRegistrationDialog } from '@/components/course-registration-dialog';

export async function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = ALL_COURSES.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const courseImage = PlaceHolderImages.find((p) => p.id === course.imageId);
  const trainer = ALL_TRAINERS.find(t => t.slug === course.trainerSlug);
  const trainerImage = trainer ? PlaceHolderImages.find((p) => p.id === trainer.imageId) : undefined;


  return (
    <div className="bg-background">
      {/* Header Section */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <Badge className="mb-4">{course.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-headline text-primary mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center">
                  {trainerImage && <Image src={trainerImage.imageUrl} alt={course.trainerName} width={24} height={24} className="rounded-full ml-2 object-cover" data-ai-hint={trainerImage.imageHint} />}
                  المدرب: <Link href={`/trainers/${course.trainerSlug}`} className="text-primary font-bold mr-1 hover:underline">{course.trainerName}</Link>
                </div>
                <div className="flex items-center">
                  <Clock className="ml-2 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="ml-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{course.rating}</span>
                </div>
              </div>
            </div>
            {courseImage && (
              <div className="lg:col-span-1">
                <Image
                  src={courseImage.imageUrl}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full object-cover"
                  data-ai-hint={courseImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Course Outline */}
              <div>
                <h2 className="text-2xl font-headline mb-4">محاور الدورة</h2>
                <ul className="space-y-3">
                  {course.outline.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="ml-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Student Reviews */}
              {course.studentReviews.length > 0 && (
                <div>
                  <h2 className="text-2xl font-headline mb-4">آراء الطلاب حول الدورة</h2>
                  <div className="space-y-6">
                    {course.studentReviews.map((review) => {
                      const reviewImage = PlaceHolderImages.find(p => p.id === review.imageId);
                      return(
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {reviewImage ? <Image src={reviewImage.imageUrl} alt={review.name} width={48} height={48} className="rounded-full" data-ai-hint={reviewImage.imageHint} /> : <UserCircle className="h-12 w-12 text-muted-foreground" />}
                            <div>
                              <div className="flex items-center gap-4 mb-1">
                                <h4 className="font-bold">{review.name}</h4>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground italic">&ldquo;{review.quote}&rdquo;</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )})}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-headline mb-4">هل أنت جاهز للبدء؟</h3>
                  <p className="text-muted-foreground mb-6">
                    انضم إلى عشرات الطلاب الذين طوروا مهاراتهم معنا.
                  </p>
                  <CourseRegistrationDialog course={course} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
