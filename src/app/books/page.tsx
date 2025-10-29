import Image from 'next/image';
import { Star, BookOpen, User, List, FileText } from 'lucide-react';
import { ALL_BOOKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الكتب التعليمية</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          مكتبتنا الرقمية تحتوي على مجموعة من الكتب والمراجع التي أعدها مدربونا الخبراء لإثراء رحلتك المعرفية.
        </p>
      </section>

      <div className="space-y-8">
        {ALL_BOOKS.map(book => {
          const bookImage = PlaceHolderImages.find(p => p.id === book.imageId);
          return (
            <Card key={book.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                  {bookImage && (
                    <Image
                      src={bookImage.imageUrl}
                      alt={book.title}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint={bookImage.imageHint}
                    />
                  )}
                </div>
                <div className="md:col-span-2 p-6 flex flex-col">
                  <h2 className="text-2xl font-headline mb-2">{book.title}</h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center"><User className="ml-1 h-4 w-4" /> <span>{book.author}</span></div>
                    <div className="flex items-center"><Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" /> <span>{book.rating} تقييم</span></div>
                    <div className="flex items-center"><FileText className="ml-1 h-4 w-4" /> <span>{book.pages} صفحة</span></div>
                  </div>
                  <p className="text-muted-foreground flex-grow mb-4">{book.description}</p>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h4 className="font-bold mb-3 flex items-center"><List className="ml-2 h-5 w-5"/> محاور الكتاب</h4>
                    <div className="flex flex-wrap gap-2">
                      {book.topics.map((topic, i) => <Badge key={i} variant="outline">{topic}</Badge>)}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <a href={`https://wa.me/967776999568?text=${encodeURIComponent(`أرغب بالاستفسار عن كتاب: ${book.title}`)}`} target="_blank" rel="noopener noreferrer">
                        اطلب نسخة أو استفسر
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
