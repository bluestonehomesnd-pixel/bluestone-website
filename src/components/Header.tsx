"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                                <div className="flex h-28 items-center justify-between">
                                  <div className="flex items-center">
                                    <Link href="/">
                                      <Image
                                        src="/images/logo.png"
                                        alt="Blue Stone Custom Homes"
                                        width={300}
                                        height={120}
                                        className="h-24 w-auto"
                                      />
                                    </Link>
                                  </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-stone-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-stone-100">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-stone-600"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="mt-2 block rounded-md bg-blue-800 px-4 py-3 text-center text-base font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
