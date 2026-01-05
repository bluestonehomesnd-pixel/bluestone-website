"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/images/projects/bluestone-home/exterior.jpg",
  "/images/projects/bluestone-home/kitchen.jpg",
  "/images/projects/bluestone-home/living-room.jpg",
  "/images/projects/bluestone-home/staircase.jpg",
  "/images/projects/bluestone-home/bathroom.jpg",
  "/images/projects/bluestone-home/bedroom.jpg",
  "/images/projects/bluestone-home/exterior-winter.jpg",
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((src, index) => (
          <button
            key={src}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-stone-300 z-50"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-stone-300 z-50"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-stone-300 z-50"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="relative w-full h-full max-w-5xl m-8" style={{ maxHeight: "80vh" }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage]}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
