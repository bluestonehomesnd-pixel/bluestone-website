import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { processSteps, faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Process | Blue Stone Custom Homes",
  description: "Learn about our custom home building process. From initial consultation to move-in day, we guide you every step of the way with transparency and expertise.",
};

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 bg-stone-900">
        <div className="absolute inset-0 z-0">
                                        <Image
                                          src="/images/process-hero.jpg"
                                          alt="Blue Stone Custom Home"
                                          fill
                                          className="object-cover opacity-50"
                                        />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Build Process</h1>
          <p className="mt-6 text-xl text-stone-300 max-w-3xl mx-auto">
            Building a custom home should feel exciting, not overwhelming. At Bluestone, we&apos;ve refined our process to make it clear, collaborative, and stress-free—from first meeting to move-in day.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-stone-600">
              From day one, we walk with you—not just for you. That&apos;s the Bluestone difference.
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-stone-200 -mb-16" />
                )}
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-bold relative z-10">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-bold text-stone-900">{step.title}</h3>
                    <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="We know building a custom home comes with a lot of questions. Here are answers to a few of the most common ones our clients ask."
          />

          <div className="mt-16 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-stone-900">{faq.question}</h3>
                <p className="mt-4 text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-6">
              Don&apos;t see your question here? We&apos;re happy to walk through every detail during your consultation.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Next Steps"
            subtitle="You've seen what we do. You've met our team. You've walked through our process. Now it's time to bring your vision to life."
            className="text-white [&_p]:text-stone-300"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-800 rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center text-lg font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">Finalize Your Estimate</h3>
              <p className="mt-3 text-stone-400">
                We&apos;ll review your custom estimate together and answer any questions to ensure you feel confident in every detail.
              </p>
            </div>

            <div className="bg-stone-800 rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center text-lg font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">Sign the Build Agreement</h3>
              <p className="mt-3 text-stone-400">
                Once everything is aligned, we&apos;ll prepare and sign your build agreement, outlining your scope of work, selections, and pricing.
              </p>
            </div>

            <div className="bg-stone-800 rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center text-lg font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white">Submit Your Deposit</h3>
              <p className="mt-3 text-stone-400">
                Your deposit secures your place in our schedule and allows us to begin permits, planning, and selections.
              </p>
            </div>

            <div className="bg-stone-800 rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center text-lg font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white">Start Designing Your Home</h3>
              <p className="mt-3 text-stone-400">
                We&apos;ll schedule your design meetings and begin working through selections while our team prepares for construction.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" size="lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
