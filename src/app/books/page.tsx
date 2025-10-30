

import Image from 'next/image';
import Link from 'next/link';
import { Star, FileText, ChevronLeft } from 'lucide-react';
import { ALL_BOOKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الكتب التعليمية</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          مكتبتنا الرقمية تحتوي على مجموعة من الكتب والمراجع التي أعدها مدربونا الخبراء لإثراء رحلتك المعرفية.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ALL_BOOKS.map(book => {
          const bookImage = PlaceHolderImages.find(p => p.id === book.imageId);
          return (
            <Card key={book.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1.5">
              {bookImage && (
                <Link href={`/books/${book.slug}`}>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={bookImage.imageUrl}
                      alt={book.title}
                      fill
                      className="object-cover"
                      data-ai-hint={bookImage.imageHint}
                    />
                  </div>
                </Link>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="font-headline text-md leading-tight">
                  <Link href={`/books/${book.slug}`} className="hover:text-primary">{book.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-2 pb-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center"><Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" /> <span>{book.rating}</span></div>
                  <div className="flex items-center"><FileText className="ml-1 h-4 w-4" /> <span>{book.pages} صفحة</span></div>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-2 p-4 pt-0">
                <Button asChild size="sm">
                  <a href={`https://wa.me/967776999568?text=${encodeURIComponent(`أرغب بالاستفسار عن كتاب: ${book.title}`)}`} target="_blank" rel="noopener noreferrer">
                    اطلب نسخة
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                   <Link href={`/books/${book.slug}`}>
                    عرض التفاصيل
                    <ChevronLeft className="mr-1 h-4 w-4" />
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
