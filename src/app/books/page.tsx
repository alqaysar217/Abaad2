
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, FileText, ChevronLeft, Search } from 'lucide-react';
import { ALL_BOOKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = ALL_BOOKS.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الكتب التعليمية</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          مكتبتنا الرقمية تحتوي على مجموعة من الكتب والمراجع التي أعدها مدربونا الخبراء لإثراء رحلتك المعرفية.
        </p>
      </section>

      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="ابحث عن كتاب أو مؤلف..." 
            className="w-full pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map(book => {
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
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">لا توجد كتب تطابق بحثك حاليًا.</p>
        </div>
      )}
    </div>
  );
}
