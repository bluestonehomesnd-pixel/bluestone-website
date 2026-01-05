import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { aboutContent, team, whyBlueStone } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | Blue Stone Custom Homes",
  description: "Meet the team behind Blue Stone Custom Homes. We specialize in building high-end custom homes throughout Cass County, North Dakota with exceptional craftsmanship.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury home interior"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Bluestone Custom Homes</h1>
          <p className="mt-6 text-xl text-stone-300 max-w-3xl mx-auto">
            {aboutContent.intro}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Our Mission</h2>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                {aboutContent.mission}
              </p>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                {aboutContent.tagline}
              </p>
              <p className="mt-6 text-xl font-semibold text-stone-900 italic">
                {aboutContent.closing}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Beautiful custom home kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet the Team"
            subtitle="The people behind every Bluestone home. We're a small, dedicated team committed to delivering exceptional results."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-stone-200">
                  <Image
                    src={member.image || "https://placehold.co/400x400/e7e5e4/78716c?text=Team+Member"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-stone-900">{member.name}</h3>
                <p className="text-blue-800 font-medium">{member.role}</p>
                <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="At Bluestone Custom Homes, we don't just build houses—we deliver a tailored building experience designed around you."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyBlueStone.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-stone-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Let&apos;s talk about your vision and how we can bring it to life.
          </p>
          <div className="mt-10">
                        <Button href="/contact" variant="white" size="lg">
                          Contact Us Today
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
