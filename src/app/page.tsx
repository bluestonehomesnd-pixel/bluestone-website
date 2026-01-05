import Image from "next/image";
import { Phone, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig, heroContent, stats, whyBlueStone, processSteps, testimonials, team } from "@/data/content";

export default function Home() {

  return (
    <main>
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Blue Stone Custom Home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {heroContent.headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-200 leading-relaxed">
              {heroContent.subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" variant="primary">
                {heroContent.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {heroContent.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
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
          <div className="mt-12 text-center">
            <Button href="/about" variant="outline">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Build Process"
            subtitle="Building a custom home should feel exciting, not overwhelming. Here's what you can expect."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-stone-200 -translate-x-4" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/process" variant="outline">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Blue Stone?"
            subtitle="At Bluestone Custom Homes, we don't just build houses—we deliver a tailored building experience designed around you."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBlueStone.map((item) => (
              <div key={item.title} className="flex gap-4">
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

      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it—hear from families who've built their dream homes with us."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-semibold text-stone-900">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Let&apos;s start a conversation about your vision. Schedule a free consultation today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Button href="/contact" variant="white" size="lg">
                          Contact Us
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
            <a
              href={`sms:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              Text Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
