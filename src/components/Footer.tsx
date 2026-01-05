import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/content";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Custom Homes", href: "/gallery" },
    { name: "Semi-Custom Homes", href: "/gallery" },
    { name: "Our Process", href: "/process" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Blue Stone Custom Homes"
                width={180}
                height={70}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Building luxury custom homes throughout Cass County, North Dakota with exceptional craftsmanship and transparent communication.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-stone-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-stone-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-stone-400">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.serviceArea}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              &copy; {new Date().getFullYear()} Blue Stone Custom Homes. All rights reserved.
            </p>
            <p className="text-sm text-stone-500">
              Licensed & Insured | Fargo, ND
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
