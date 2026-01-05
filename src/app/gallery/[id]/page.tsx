import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Bed, Bath, Square, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import { projects } from "@/data/content";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    return { title: "Project Not Found | Blue Stone Custom Homes" };
  }

  return {
    title: `${project.title} | Blue Stone Custom Homes`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20">
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
                <Image
                  src={project.images[0] || "https://placehold.co/800x600/e7e5e4/78716c?text=Custom+Home"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-2 mt-4 text-stone-600">
                <MapPin className="h-5 w-5" />
                {project.location}
              </div>

              <div className="flex items-center gap-6 mt-6 py-6 border-y border-stone-200">
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-stone-400" />
                  <span className="font-semibold">{project.sqft}</span>
                  <span className="text-stone-500">sq ft</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-stone-400" />
                  <span className="font-semibold">{project.bedrooms}</span>
                  <span className="text-stone-500">bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-stone-400" />
                  <span className="font-semibold">{project.bathrooms}</span>
                  <span className="text-stone-500">bathrooms</span>
                </div>
              </div>

              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-stone-900 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-stone-600">
                      <CheckCircle className="h-4 w-4 text-blue-800 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Button href="/contact" size="lg">
                  Build Something Similar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
