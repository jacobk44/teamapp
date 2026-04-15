import Link from "next/link";

export default function Page() {
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
            Learn More About KJB Elite Clean
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
            We provide dependable, detail-focused cleaning services for homes
            and businesses with flexible plans built around your needs.
          </p>
          <Link
            href="/booking"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 rounded text-sm md:text-base hover:bg-gray-700 transition"
          >
            Book Now
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Reliable Team</h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Our experienced professionals follow a consistent checklist so every
            visit meets a high standard of cleanliness.
          </p>
        </article>

        <article className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Flexible Plans
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            From one-time deep cleans to recurring weekly visits, we tailor each
            package to your space and schedule.
          </p>
        </article>

        <article className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Clear Communication
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            We keep booking simple, respond quickly, and confirm all service
            details before your appointment date.
          </p>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white border border-gray-200 rounded-md p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Explore More
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
            Visit our service and contact pages for full details, pricing
            support, and fast booking assistance.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/services"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded text-sm md:text-base hover:bg-gray-700 transition text-center"
            >
              View Services
            </Link>
            <Link
              href="/contacts"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded text-sm md:text-base hover:bg-gray-300 transition text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
