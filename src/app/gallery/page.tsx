import { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery | Blue Stone Custom Homes",
  description: "Explore our portfolio of luxury custom homes built throughout Fargo, ND and the surrounding areas. View our craftsmanship and attention to detail.",
};

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>
    </main>
  );
}
