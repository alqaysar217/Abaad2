
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronLeft, Search } from 'lucide-react';
import { ALL_TRAINERS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TrainersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrainers = ALL_TRAINERS.filter(trainer =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">المدربون المعتمدون</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          تعرف على فريقنا من الخبراء والمتخصصين الذين يكرسون جهودهم لتقديم أفضل تجربة تعليمية.
        </p>
      </section>

      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="ابحث عن مدرب أو تخصص..." 
            className="w-full pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {filteredTrainers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map(trainer => {
            const trainerImage = PlaceHolderImages.find(p => p.id === trainer.imageId);
            return (
                <Card key={trainer.id} className="text-center flex flex-col items-center p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 border">
                  {trainerImage && (
                    <Image
                      src={trainerImage.imageUrl}
                      alt={trainer.name}
                      width={144}
                      height={144}
                      className="rounded-full w-36 h-36 object-cover border-4 border-primary/20 mb-4"
                      data-ai-hint={trainerImage.imageHint}
                    />
                  )}
                  <CardHeader className="p-0 text-center flex-grow">
                    <CardTitle className="font-headline text-xl">{trainer.name}</CardTitle>
                    <p className="text-primary font-semibold">{trainer.field}</p>
                    <div className="flex items-center justify-center gap-1 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({trainer.rating})</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">{trainer.bio}</p>
                  </CardContent>
                  <CardFooter className="p-0 w-full mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/trainers/${trainer.slug}`}>
                        عرض الملف الشخصي
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">لا يوجد مدربون يطابقون بحثك حاليًا.</p>
        </div>
      )}
    </div>
  );
}
