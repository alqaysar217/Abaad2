
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, FileText, CheckCircle, UserCircle, MessageCircle } from 'lucide-react';
import { ALL_BOOKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return ALL_BOOKS.map((book) => ({
    slug: book.slug,
  }));
}

export default function BookDetailsPage({ params }: { params: { slug: string } }) {
  const book = ALL_BOOKS.find((b) => b.slug === params.slug);

  if (!book) {
    notFound();
  }

  const bookImage = PlaceHolderImages.find((p) => p.id === book.imageId);

  return (
    <div className="bg-background">
      {/* Header Section */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {bookImage && (
              <div className="lg:col-span-1">
                <Image
                  src={bookImage.imageUrl}
                  alt={book.title}
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg w-full object-cover aspect-[3/4]"
                  data-ai-hint={bookImage.imageHint}
                />
              </div>
            )}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-headline text-primary mb-2">{book.title}</h1>
              <p className="text-lg text-muted-foreground font-semibold mb-4">الكاتب: {book.author}</p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6">
                <div className="flex items-center">
                  <FileText className="ml-2 h-4 w-4" />
                  <span>{book.pages} صفحة</span>
                </div>
                <div className="flex items-center">
                  <Star className="ml-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{book.rating}</span>
                </div>
              </div>

              <h2 className="text-xl font-headline mb-2">نبذة عن الكتاب</h2>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Topics */}
              <div>
                <h2 className="text-2xl font-headline mb-4">محاور الكتاب</h2>
                <ul className="space-y-3">
                  {book.topics.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="ml-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Student Reviews */}
              {book.reviews.length > 0 && (
                <div>
                  <h2 className="text-2xl font-headline mb-4">ماذا قيل عن الكتاب</h2>
                  <div className="space-y-6">
                    {book.reviews.map((review) => {
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
                  <h3 className="text-xl font-headline mb-4">هل تريد نسخة من الكتاب؟</h3>
                  <p className="text-muted-foreground mb-6">
                    يمكنك طلب نسخة ورقية أو الاستفسار عبر واتساب.
                  </p>
                  <Button asChild className="w-full">
                    <a href={`https://wa.me/967776999568?text=${encodeURIComponent(`أرغب بالاستفسار عن كتاب: ${book.title}`)}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="ml-2 h-4 w-4" />
                        اطلب نسخة أو استفسر
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
