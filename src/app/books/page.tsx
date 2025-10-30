
import Image from 'next/image';
import { Star, BookOpen, User, List, FileText } from 'lucide-react';
import { ALL_BOOKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الكتب التعليمية</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          مكتبتنا الرقمية تحتوي على مجموعة من الكتب والمراجع التي أعدها مدربونا الخبراء لإثراء رحلتك المعرفية.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_BOOKS.map(book => {
          const bookImage = PlaceHolderImages.find(p => p.id === book.imageId);
          return (
            <Card key={book.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
              {bookImage && (
                <div className="relative aspect-[3/4]">
                  <Image
                    src={bookImage.imageUrl}
                    alt={book.title}
                    fill
                    className="object-cover"
                    data-ai-hint={bookImage.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{book.title}</CardTitle>
                <div className="text-sm text-muted-foreground pt-1 flex items-center gap-2">
                  <User className="h-4 w-4" /> <span>{book.author}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-4">
                  <div className="flex items-center"><Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" /> <span>{book.rating} تقييم</span></div>
                  <div className="flex items-center"><FileText className="ml-1 h-4 w-4" /> <span>{book.pages} صفحة</span></div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={`https://wa.me/967776999568?text=${encodeURIComponent(`أرغب بالاستفسار عن كتاب: ${book.title}`)}`} target="_blank" rel="noopener noreferrer">
                    اطلب نسخة أو استفسر
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
