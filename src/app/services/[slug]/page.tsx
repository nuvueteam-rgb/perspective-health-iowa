import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/services-data";
import { SERVICES } from "@/lib/constants";
import { MedicalServiceSchema } from "@/components/seo/MedicalServiceSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CTABanner } from "@/components/home/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.headline,
    description: service.metaDescription,
    openGraph: {
      title: `${service.headline} | Perspective Health Iowa`,
      description: service.metaDescription,
      images: [{ url: service.heroImage, alt: service.heroImageAlt }],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <MedicalServiceSchema
        name={service.name}
        description={service.metaDescription}
        url={`/services/${service.slug}`}
        image={service.heroImage}
      />
      <FAQSchema faqs={service.faqs} />

      {/* Hero */}
      <section className="relative h-80 sm:h-96 overflow-hidden bg-charcoal">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0">
          <nav
            aria-label="Breadcrumb"
            className="section-container text-sm text-white/70"
          >
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight size={12} className="flex-shrink-0" />
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <ChevronRight size={12} className="flex-shrink-0" />
              <li className="text-white">{service.name}</li>
            </ol>
          </nav>
        </div>
        {/* Heading */}
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight">
            {service.headline}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <p className="text-xl text-gray-700 leading-relaxed mb-12 border-l-4 border-teal pl-5">
              {service.intro}
            </p>

            {/* What It Is */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-teal rounded-full inline-block" />
                What It Is
              </h2>
              <p className="text-gray-600 leading-relaxed">{service.whatItIs}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {/* Who It's For */}
              <section>
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  Who It&apos;s For
                </h2>
                <ul className="space-y-3">
                  {service.whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle
                        size={18}
                        className="text-teal flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What to Expect */}
              <section>
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  What to Expect
                </h2>
                <ol className="space-y-3">
                  {service.whatToExpect.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            {/* Benefits */}
            <section className="bg-sage/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-charcoal mb-5">
                Potential Benefits
              </h2>
              <p className="text-gray-500 text-sm mb-4 italic">
                Individual results may vary. The following benefits are often
                associated with this service and may vary based on individual
                health circumstances.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl p-6 hover:border-teal/30 transition-colors"
                  >
                    <h3 className="font-semibold text-charcoal mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-purple rounded-2xl geometric-pattern p-10 text-center text-white mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Our team is ready to answer your questions and help you take the
                first step toward better health.
              </p>
              <Link href="/contact" className="btn-teal">
                Book Your Appointment
              </Link>
            </section>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  Related Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedServices.map(
                    (related) =>
                      related && (
                        <Link
                          key={related.slug}
                          href={`/services/${related.slug}`}
                          className="card p-5 hover:border-teal border border-transparent transition-colors group"
                        >
                          <h3 className="font-semibold text-charcoal group-hover:text-teal transition-colors mb-1 text-sm">
                            {related.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-teal text-xs font-medium">
                            Learn more <ArrowRight size={10} />
                          </span>
                        </Link>
                      )
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
