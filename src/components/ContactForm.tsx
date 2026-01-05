"use client";

import { useState } from "react";
import Button from "./Button";
import { budgetRanges, timeframes, siteConfig } from "@/data/content";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeframe: "",
    location: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      return;
    }

    setStatus("submitting");

    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Location: ${formData.location || "Not specified"}\n` +
      `Budget: ${formData.budget || "Not specified"}\n` +
      `Timeframe: ${formData.timeframe || "Not specified"}\n\n` +
      `Message:\n${formData.message || "No message provided"}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        timeframe: "",
        location: "",
        message: "",
        honeypot: "",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          We&apos;ve received your message and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors"
            placeholder="(701) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-stone-700 mb-2">
            Preferred Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors"
            placeholder="West Fargo, Fargo, etc."
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-stone-700 mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors bg-white"
          >
            <option value="">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeframe" className="block text-sm font-medium text-stone-700 mb-2">
            Desired Timeframe
          </label>
          <select
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors bg-white"
          >
            <option value="">Select a timeframe</option>
            {timeframes.map((tf) => (
              <option key={tf} value={tf}>
                {tf}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-colors resize-none"
          placeholder="Share any details about your dream home, lot information, or questions you have..."
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700 text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-stone-500 text-center">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
