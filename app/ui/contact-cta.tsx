import Link from "next/link";

type ContactCtaProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function ContactCta({
  title = "Ready for a Cleaner Space?",
  description = "Let KJB Elite Service build a cleaning plan that fits your schedule and your space.",
  buttonText = "Contact Us Today",
  buttonHref = "/contacts",
}: ContactCtaProps) {
  return (
    <section className="px-4 py-16 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-6xl rounded-md border border-gray-200 bg-white p-8 shadow-sm md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>
          </div>

          <Link
            href={buttonHref}
            className="inline-block rounded bg-gray-800 px-6 py-3 text-sm tracking-wide text-white transition hover:bg-gray-700 md:text-base"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}