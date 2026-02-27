import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore integrative health services at Perspective Health Iowa — comprehensive primary care, hormone health, functional medicine, digestive & metabolic health, and supplementary services.",
  openGraph: {
    title: "Our Services | Perspective Health Iowa",
    description:
      "Personalized integrative health services in Iowa — from primary care to hormone health and functional medicine.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="section-container relative z-10 text-center">
          <p className="font-script text-3xl text-teal mb-2">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            OUR SERVICES
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Comprehensive, integrative healthcare designed around you — not just
            your diagnosis. Explore our full range of services below.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <article
                key={service.slug}
                className="card group overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={idx < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="font-bold text-xl text-charcoal mb-3">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-teal font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="py-12 bg-sage/40">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-3">
            Most Services Covered by Insurance
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            We accept most major insurance plans, Medicare, HSA, and FSA. Not
            sure what&apos;s covered for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/insurance" className="btn-teal">
              View Insurance Info
            </Link>
            <Link href="/contact" className="btn-outline-teal">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
