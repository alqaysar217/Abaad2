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
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  if (heroImages.length === 0) {
    return <div className="absolute inset-0 w-full h-full bg-secondary" />;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="absolute inset-0 w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={image.id}>
            <div className="relative w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description || `Hero image ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                data-ai-hint={image.imageHint}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
