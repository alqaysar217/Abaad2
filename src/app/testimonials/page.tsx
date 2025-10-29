import Image from 'next/image';
import { Star, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">آراء طلابنا</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          نفخر بثقة طلابنا ونسعد بمشاركة قصص نجاحهم وتجاربهم الملهمة في معهد أبعاد.
        </p>
      </section>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {TESTIMONIALS.map(testimonial => {
          const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
          return (
            <div key={testimonial.id} className="break-inside-avoid">
              <Card className="h-full">
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
                  <p className="text-muted-foreground italic relative pl-8">
                    <MessageCircle className="absolute right-0 top-0 h-5 w-5 text-accent" />
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
