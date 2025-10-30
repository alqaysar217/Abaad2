'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  if (heroImages.length === 0) {
    return <div className="w-full h-full bg-secondary" />;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        {heroImages.map((image, index) => (
          <CarouselItem key={image.id} className="relative h-full">
              <Image
                src={image.imageUrl}
                alt={image.description || `Hero image ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                data-ai-hint={image.imageHint}
                priority={index === 0}
              />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
    </Carousel>
  );
}
