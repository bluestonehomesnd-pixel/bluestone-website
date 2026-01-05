import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface Project {
  id: string;
  title: string;
  location: string;
  sqft: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/gallery/${project.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
        <Image
          src={project.images[0] || "https://placehold.co/800x600/e7e5e4/78716c?text=Custom+Home"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-stone-900 group-hover:text-blue-800 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1 mt-1 text-sm text-stone-500">
          <MapPin className="h-4 w-4" />
          {project.location}
        </div>
        <div className="flex items-center gap-4 mt-3 text-sm text-stone-600">
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            {project.sqft} sq ft
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            {project.bedrooms} bed
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {project.bathrooms} bath
          </div>
        </div>
      </div>
    </Link>
  );
}
