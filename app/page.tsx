"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "./ui/card";
import Cardbox from "./ui/cardbox";
import ContactCta from "./ui/contact-cta";

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* LEFT */}
          <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Bringing comfort to your home, one service at a time.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Discover the excellence of our premium cleaning services,
              customized for you.
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
              <li>Regular Cleaning</li>
              <li>Deep Cleaning</li>
              <li>New Home Cleaning</li>
              <li>Recurring Cleaning</li>
            </ul>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="/book"
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition text-center"
              >
                Book Now
              </Link>

              <Link
                href="/learn-more"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center w-full">
            <Image
              src="/clean_home.jpg"
              alt="Cleaning service"
              width={500}
              height={400}
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Reliable"
            description="Count on our team to deliver consistent, high-quality cleaning service you can trust."
            icon="✔️"
          />
          <Card
            title="Customized"
            description="We tailor our cleaning plans to meet your unique needs."
            icon="🧹"
          />
          <Card
            title="Eco-Friendly"
            description="Our environmentally safe products keep your space clean without harmful chemicals."
            icon="🌿"
          />
        </div>
      </section>
      {/* CARDS box SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          How to Book a Clean
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Cardbox
            title="Get a quote"
            description="Simply click the Get a Quote button, fill out your details, and we'll send you a quote within minutes!"
            linkText="Get Quote"
            linkHref="/getquote"
          />

          <Cardbox
            title="Book Your Cleaning Service"
            description="Reach out to us via call or email to schedule your cleaning. Once your appointment is set, you'll receive a confirmation email with all the details."
          />

          <Cardbox
            title="Enjoy your clean home"
            description="Our high-quality clean will provide you with a sigh of relief after a busy day. We do the cleaning, you make the memories"
          />
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* LEFT */}
          <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
            <h3 className="text-1xl sm:text-3xl md:text-2xl font-bold text-gray-800 leading-snug">
              Premium Cleaning Service for Homes and Bussiness
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              For years, Elite Home Shine has provided high-quality cleaning
              solutions, combining excellence and affordability to keep your
              home spotless and welcoming.
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
              <li>We take on project of all sizes with confidence</li>
              <li>Our team delivers fast and effective result on time</li>
              <li>Whether occasional or ongoing, our cleaning adapts to you</li>
              <li>Every job is approached with precision and care</li>
            </ul>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="/book"
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition text-center"
              >
                More About us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center w-full">
            <Image
              src="/clean-home2.jpg"
              alt="Cleaning service"
              width={500}
              height={400}
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
