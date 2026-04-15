"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type BookingFormState = {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceType: string;
  date: string;
  notes: string;
};

const initialBookingFormState: BookingFormState = {
  fullName: "",
  email: "",
  phone: "",
  propertyType: "",
  serviceType: "",
  date: "",
  notes: "",
};

export default function Page() {
  const [formState, setFormState] = useState<BookingFormState>(
    initialBookingFormState,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        setSubmitError(payload.error ?? "Unable to submit your booking right now.");
        return;
      }

      setIsSubmitted(true);
      setFormState(initialBookingFormState);
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
          style={{ backgroundImage: "url('/clean_home.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative text-center max-w-3xl px-6 py-8 bg-white/75 backdrop-blur-sm rounded-md shadow-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-gray-900">
            Book Your Cleaning Service
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
            Choose your service, preferred date, and a few details. Our team
            will confirm your booking quickly.
          </p>
          <Link
            href="/contacts"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 rounded text-sm md:text-base hover:bg-gray-700 transition"
          >
            Need Help? Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Step 1</h2>
          <p className="mt-2 text-sm text-gray-600">
            Tell us about your home or business and select the service type.
          </p>
        </article>

        <article className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Step 2</h2>
          <p className="mt-2 text-sm text-gray-600">
            Pick your preferred date and share any special requests.
          </p>
        </article>

        <article className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Step 3</h2>
          <p className="mt-2 text-sm text-gray-600">
            We confirm details and schedule your cleaning appointment.
          </p>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-md border border-gray-200 p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Booking Details
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Fill in your details below and we will contact you to finalize your
            appointment.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                required
                value={formState.fullName}
                onChange={(event) =>
                  setFormState((previous) => ({
                    ...previous,
                    fullName: event.target.value,
                  }))
                }
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your full name"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Type
                </label>
                <select
                  id="propertyType"
                  required
                  value={formState.propertyType}
                  onChange={(event) =>
                    setFormState((previous) => ({
                      ...previous,
                      propertyType: event.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Choose property type</option>
                  <option value="home">Home</option>
                  <option value="apartment">Apartment</option>
                  <option value="office">Office</option>
                  <option value="medical">Medical Facility</option>
                </select>
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
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Choose service</option>
                  <option value="regular">Regular Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move In or Move Out</option>
                  <option value="commercial">Commercial Cleaning</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                required
                value={formState.date}
                onChange={(event) =>
                  setFormState((previous) => ({
                    ...previous,
                    date: event.target.value,
                  }))
                }
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={5}
                value={formState.notes}
                onChange={(event) =>
                  setFormState((previous) => ({
                    ...previous,
                    notes: event.target.value,
                  }))
                }
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Add any special instructions"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 rounded text-sm md:text-base tracking-wide hover:bg-gray-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </button>

            {isSubmitted ? (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
                Booking request sent. We will contact you shortly to confirm your
                appointment.
              </p>
            ) : null}

            {submitError ? (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
                {submitError}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
