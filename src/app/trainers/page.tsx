
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronLeft, Search } from 'lucide-react';
import { ALL_TRAINERS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">لا يوجد مدربون يطابقون بحثك حاليًا.</p>
        </div>
      )}
    </div>
  );
}
