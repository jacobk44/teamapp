"use client";

import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

export default function Hero({
  title,
  description,
  buttonText,
  image,
}: HeroProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center px-4 md:px-0">
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover brightness-75"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative bg-white/70 backdrop-blur-md px-6 md:px-10 py-6 md:py-8 rounded-md text-center max-w-md md:max-w-lg shadow-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] md:tracking-[0.4em] font-light">
            {title}
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          <Link
            href="/booking"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 text-sm md:text-base tracking-wide hover:bg-gray-700 transition rounded"
          >
            {buttonText}
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-4 md:px-20 py-12 md:py-16 bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
            PREMIUM HOME CLEAN
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Weekly, Biweekly, Monthly or One-Time Cleaning Visits Available
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kitchen */}
          <div>
            <h3 className="font-semibold text-lg mb-3">KITCHEN</h3>
            <ul className="text-sm md:text-base text-gray-600 space-y-2">
              <li>Sanitize countertops, sink & backsplash</li>
              <li>Wash exterior of appliances & interior microwave</li>
              <li>Wash any dirty dishes</li>
              <li>Wipe down table legs, chairs, barstools</li>
              <li>Wipe down cabinet exterior</li>
              <li>Wash under sink by garbage</li>
            </ul>
          </div>

          {/* Bathroom */}
          <div>
            <h3 className="font-semibold text-lg mb-3">BATHROOM</h3>
            <ul className="text-sm md:text-base text-gray-600 space-y-2">
              <li>Wipe-wash-polish sinks, tub/shower</li>
              <li>Wipe-wash-polish toilets, base & bowl</li>
              <li>Clean mirrors</li>
              <li>Wipe down cabinet exterior</li>
              <li>Polish all chrome surfaces</li>
              <li>Wipe down baseboards</li>
            </ul>
          </div>

          {/* Bedrooms */}
          <div>
            <h3 className="font-semibold text-lg mb-3">BEDROOMS</h3>
            <ul className="text-sm md:text-base text-gray-600 space-y-2">
              <li>Quick tidy & pick up</li>
              <li>Dust all surfaces throughout home</li>
              <li>Make beds</li>
            </ul>
          </div>

          {/* Entire Home */}
          <div>
            <h3 className="font-semibold text-lg mb-3">ENTIRE HOME</h3>
            <ul className="text-sm md:text-base text-gray-600 space-y-2">
              <li>Quick tidy & pick up</li>
              <li>Dust all surfaces throughout home</li>
              <li>Wet wipe all surfaces throughout home</li>
              <li>Sanitize door knobs & light switches</li>
              <li>Empty all garbages</li>
              <li>Sweep/Vacuum & wash all floors</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-semibold text-lg mb-3">
            Let our certified staff sweat the details so you don’t have to.
          </h3>
          <Link
            href="/booking"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 text-sm md:text-base tracking-wide hover:bg-gray-700 transition rounded"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    </>
  );
}
