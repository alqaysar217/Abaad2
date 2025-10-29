import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronLeft, Award } from 'lucide-react';
import { ALL_TRAINERS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TrainersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">المدربون المعتمدون</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          تعرف على فريقنا من الخبراء والمتخصصين الذين يكرسون جهودهم لتقديم أفضل تجربة تعليمية.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_TRAINERS.map(trainer => {
          const trainerImage = PlaceHolderImages.find(p => p.id === trainer.imageId);
          return (
            <Card key={trainer.id} className="overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                {trainerImage && (
                  <Image
                    src={trainerImage.imageUrl}
                    alt={trainer.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover object-top"
                    data-ai-hint={trainerImage.imageHint}
                  />
                )}
              </CardHeader>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold font-headline">{trainer.name}</h2>
                <p className="text-primary font-medium mt-1">{trainer.field}</p>
                <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">{trainer.rating}</span>
                  <span>تقييم عام</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-secondary">
                <Button asChild className="w-full">
                  <Link href={`/trainers/${trainer.slug}`}>
                    عرض الملف الكامل
                    <ChevronLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
