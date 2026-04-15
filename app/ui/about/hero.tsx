"use client";

import Link from "next/link";
import Card from "../card";

type HeroProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
};

export default function Hero({
  buttonText = "BOOK NOW",
  image = "/clean_service.jpg",
}: HeroProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center px-4 md:px-0">
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover brightness-75"
          style={{
            backgroundImage: `url(${image || "/clean_service.jpg"})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative bg-white/70 px-6 md:px-10 py-8 rounded-md text-center max-w-6xl w-full shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
            Why Choose KJB Elite Service
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Card && (
              <>
                <Card
                  title="Industry Specialization"
                  description="We specialize in professional cleaning services for offices, medical facilities, and sports environments."
                  icon="🏢"
                />

                <Card
                  title="Happy Cleaners"
                  description="Our cleaners are trained, valued, and supported long-term, ensuring consistent high-quality results."
                  icon="😊"
                />

                <Card
                  title="Quality Assurance"
                  description="We maintain strict standards to ensure reliability, safety, and excellence in every service."
                  icon="✔️"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-4 md:px-0 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Our Expertise
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            At KJB Elite Service, excellence is built on consistency,
            professionalism, and attention to detail. We deliver high-quality
            cleaning services tailored to offices, medical, and sports facilities.
          </p>
        </div>
      </section>

      {/* CLEANERS */}
      <section className="px-4 md:px-20 py-12 md:py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Happy Cleaners, Better Results
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            Our professional cleaning team is trained, supported, and committed
            to delivering consistent, high-quality service every time.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 md:px-20 py-12 md:py-16 bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Professional Cleaning Services
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Premium, reliable cleaning solutions to keep your space fresh and spotless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">KITCHEN</h3>
            <p className="text-sm text-gray-600">
              Deep cleaning for hygienic and safe cooking environments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">BATHROOM</h3>
            <p className="text-sm text-gray-600">
              Complete sanitation and freshness for comfort and hygiene.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">BEDROOM</h3>
            <p className="text-sm text-gray-600">
              Clean and relaxing spaces for comfort and peace of mind.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">FULL HOME</h3>
            <p className="text-sm text-gray-600">
              Complete cleaning for a healthy, well-maintained environment.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition rounded"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    </>
  );
}