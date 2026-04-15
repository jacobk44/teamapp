"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
};

export default function Page() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        setSubmitError(
          payload.error ?? "Unable to submit your request right now.",
        );
        return;
      }

      setIsSubmitted(true);
      setFormState(initialFormState);
    } catch {
      setSubmitError("Network error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gray-100">
      <section className="relative min-h-[55vh] flex items-center justify-center px-4 md:px-0">
        <div
          className="absolute inset-0 bg-center bg-cover brightness-75"
          style={{ backgroundImage: "url('/clean_service.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative text-center max-w-3xl px-6 py-8 bg-white/75 backdrop-blur-sm rounded-md shadow-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-gray-900">
            Contact KJB Elite Service
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
            Tell us what you need and our team will get back to you quickly with
            a clear quote and flexible scheduling options.
          </p>
          <Link
            href="/services"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 rounded text-sm md:text-base hover:bg-gray-700 transition"
          >
            View Our Services
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-md shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Call Us</h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Speak directly with our team for urgent bookings and same-day
            availability.
          </p>
          <a
            href="tel:+15551234567"
            className="inline-block mt-4 text-blue-700 font-medium hover:text-blue-600"
          >
            +1 (555) 123-4567
          </a>
        </article>

        <article className="bg-white rounded-md shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Email Us</h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Send us your project details and we will reply with a tailored
            cleaning plan.
          </p>
          <a
            href="mailto:info@kjbeliteclean.com"
            className="inline-block mt-4 text-blue-700 font-medium hover:text-blue-600"
          >
            info@kjbeliteclean.com
          </a>
        </article>

        <article className="bg-white rounded-md shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Service Hours</h2>
          <ul className="mt-3 text-sm md:text-base text-gray-600 space-y-1">
            <li>Monday - Friday: 8:00 AM to 7:00 PM</li>
            <li>Saturday: 9:00 AM to 4:00 PM</li>
            <li>Sunday: Emergency requests only</li>
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            We serve homes and businesses across the local area.
          </p>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Request a Free Quote
              </h2>
              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                Share a few details below and we will follow up with pricing,
                timeline, and the right cleaning package for your property.
              </p>

              <div className="mt-8 rounded-md bg-gray-50 border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">What to include</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Type of property and number of rooms</li>
                  <li>Preferred cleaning frequency</li>
                  <li>Any priority areas or special requests</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((previous) => ({
                      ...previous,
                      name: event.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        email: event.target.value,
                      }))
                    }
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        phone: event.target.value,
                      }))
                    }
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Type
                </label>
                <select
                  id="serviceType"
                  required
                  value={formState.serviceType}
                  onChange={(event) =>
                    setFormState((previous) => ({
                      ...previous,
                      serviceType: event.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Choose a service</option>
                  <option value="regular">Regular Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move In or Move Out</option>
                  <option value="office">Office Cleaning</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Tell us about your space and preferred schedule"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 rounded text-sm md:text-base tracking-wide hover:bg-gray-700 transition"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>

              {isSubmitted ? (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
                  Thank you. Your message has been received and our team will
                  contact you shortly.
                </p>
              ) : null}

              {submitError ? (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
                  {submitError}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
