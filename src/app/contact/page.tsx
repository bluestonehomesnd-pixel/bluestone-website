import { Metadata } from "next";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us | Blue Stone Custom Homes",
  description: "Get in touch with Blue Stone Custom Homes. Schedule a free consultation to discuss your custom home project in Fargo, ND and surrounding areas.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900">Get In Touch</h1>
            <p className="mt-6 text-xl text-stone-600 max-w-2xl mx-auto">
              Ready to start building your dream home? We&apos;d love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-stone-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-4 group"
                  >
                                        <div className="w-12 h-12 rounded-full bg-blue-800/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/20 transition-colors">
                                          <Phone className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Call Us</p>
                      <p className="text-stone-600 group-hover:text-blue-800 transition-colors">{siteConfig.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`sms:${siteConfig.phone}`}
                    className="flex items-start gap-4 group"
                  >
                                        <div className="w-12 h-12 rounded-full bg-blue-800/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/20 transition-colors">
                                          <MessageSquare className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Text Us</p>
                      <p className="text-stone-600 group-hover:text-blue-800 transition-colors">{siteConfig.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 group"
                  >
                                        <div className="w-12 h-12 rounded-full bg-blue-800/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/20 transition-colors">
                                          <Mail className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Email Us</p>
                      <p className="text-stone-600 group-hover:text-blue-800 transition-colors">{siteConfig.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-800/10 flex items-center justify-center flex-shrink-0">
                                          <MapPin className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Service Area</p>
                      <p className="text-stone-600">{siteConfig.serviceArea}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Response Time</p>
                    <p className="text-stone-600">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 rounded-lg p-8 text-white">
                <h3 className="text-lg font-semibold mb-4">Why Choose Bluestone?</h3>
                <ul className="space-y-3 text-stone-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                    Hands-on builder involvement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                    Transparent pricing & communication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                    Clean, safe jobsites year-round
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                    Licensed & insured
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-stone-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-stone-400 mx-auto mb-4" />
            <p className="text-stone-600">Serving {siteConfig.serviceArea}</p>
            <p className="text-sm text-stone-500 mt-2">Map placeholder - Add Google Maps embed here</p>
          </div>
        </div>
      </section>
    </main>
  );
}
