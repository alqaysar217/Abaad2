import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ChevronLeft } from 'lucide-react';
import { NEWS_ARTICLES } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const typeInfo = {
  event: { label: 'فعالية', color: 'bg-green-500' },
  announcement: { label: 'إعلان', color: 'bg-blue-500' },
  offer: { label: 'عرض', color: 'bg-accent' },
};

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">المدونة والإعلانات</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          ابق على اطلاع بآخر مستجدات المعهد من فعاليات ودورات جديدة وعروض خاصة.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS_ARTICLES.map(article => {
          const articleImage = PlaceHolderImages.find(p => p.id === article.imageId);
          return (
            <Card key={article.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              {articleImage && (
                <Image
                  src={articleImage.imageUrl}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={articleImage.imageHint}
                />
              )}
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <Badge className={`${typeInfo[article.type].color} hover:${typeInfo[article.type].color} text-white`}>
                      {typeInfo[article.type].label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{article.summary}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0">
                    {/* In a real app, this would link to a full article page like /news/[slug] */}
                    <p className="text-primary cursor-pointer">
                        اقرأ المزيد <ChevronLeft className="inline-block h-4 w-4" />
                    </p>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
