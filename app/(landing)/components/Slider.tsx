'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/img/hero-slider-1.jpg',
  '/img/hero-slider-2.jpg',
  '/img/hero-slider-3.jpg',
];

export default function AutoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto overflow-hidden relative rounded-lg shadow-lg h-[500px] lg:h-[700px]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            width={1080}
            height={700}
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
