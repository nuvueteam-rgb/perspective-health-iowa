import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { INSURANCE_PARTNERS, SITE_CONFIG } from "@/lib/constants";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Insurance & Pricing",
  description:
    "Perspective Health Iowa accepts most major insurance plans including Wellmark BCBS, UnitedHealthcare, Medicare, and more. We also offer HSA/FSA and transparent self-pay pricing.",
  openGraph: {
    title: "Insurance & Pricing | Perspective Health Iowa",
    description:
      "Insurance information and self-pay pricing for Perspective Health Iowa.",
  },
};

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="section-container relative z-10">
          <p className="font-script text-3xl text-teal mb-2">No Surprises</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            INSURANCE & PRICING
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            We believe great healthcare should be accessible. We work with most
            major insurers and offer transparent pricing for all services.
          </p>
        </div>
      </section>

      {/* Insurance partners */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-charcoal mb-4">
              ACCEPTED <span className="text-teal">INSURANCE PLANS</span>
            </h2>
            <div className="w-16 h-1 bg-teal rounded-full mx-auto mb-6" />
            <p className="text-gray-600 text-lg">
              We accept most major insurance plans and are continuously adding
              new partners. We also accept HSA (Health Savings Account) and
              FSA (Flexible Spending Account) for eligible services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
            {INSURANCE_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-4 flex flex-col items-center justify-center h-24 shadow-sm border border-gray-100 hover:border-teal/30 hover:shadow-md transition-all"
              >
                <div className="relative w-full h-10 mb-1">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} — accepted at Perspective Health Iowa`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-1 leading-tight">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-teal/10 border border-teal/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Phone size={24} className="text-teal flex-shrink-0" />
            <div className="flex-grow">
              <p className="font-semibold text-charcoal">
                Not sure if we accept your insurance?
              </p>
              <p className="text-gray-600 text-sm">
                Call us and we&apos;ll verify your benefits before your first
                appointment — no surprises.
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="btn-teal whitespace-nowrap flex-shrink-0"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* HSA / FSA */}
      <section className="section-padding bg-sage/40">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "HSA — Health Savings Account",
                color: "teal",
                points: [
                  "Use pre-tax dollars to pay for eligible healthcare expenses",
                  "Accepted for most services at Perspective Health",
                  "Bring your HSA debit card or reimbursement form",
                  "Great for services with cost-sharing or deductibles",
                ],
              },
              {
                title: "FSA — Flexible Spending Account",
                color: "purple",
                points: [
                  "Employer-sponsored pre-tax healthcare spending account",
                  "Use for copays, deductibles, and eligible services",
                  "Accepted at our clinic for qualifying expenses",
                  "Check your FSA plan for covered services",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-8 shadow-md border-t-4 ${
                  item.color === "teal" ? "border-teal" : "border-purple"
                }`}
              >
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          item.color === "teal" ? "text-teal" : "text-purple"
                        }`}
                      />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-pay / Pricing */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-charcoal mb-4">
            SELF-PAY <span className="text-teal">PRICING</span>
          </h2>
          <div className="w-16 h-1 bg-teal rounded-full mb-6" />
          <p className="text-gray-600 mb-8 text-lg">
            We believe in transparent pricing. If you don&apos;t have insurance
            or your plan doesn&apos;t cover a specific service, we offer clear,
            fair self-pay rates. Contact us for a personalized quote.
          </p>

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left py-4 px-6 font-semibold">Service</th>
                  <th className="text-right py-4 px-6 font-semibold">
                    Self-Pay Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    service: "New Patient Comprehensive Visit (60–90 min)",
                    rate: "Contact for pricing",
                  },
                  {
                    service: "Follow-Up Visit (30 min)",
                    rate: "Contact for pricing",
                  },
                  {
                    service: "Hormone Evaluation & Consultation",
                    rate: "Contact for pricing",
                  },
                  {
                    service: "Functional Medicine Consultation",
                    rate: "Contact for pricing",
                  },
                  {
                    service: "Nutrition Counseling Session",
                    rate: "Contact for pricing",
                  },
                  {
                    service: "Lab Processing (in addition to lab fees)",
                    rate: "Contact for pricing",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-4 px-6 text-charcoal">{row.service}</td>
                    <td className="py-4 px-6 text-right text-teal font-medium">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            * Pricing is subject to change. Lab fees are billed separately by
            the lab. Contact our office for the most current pricing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-teal">
              Get Pricing Info
            </Link>
            <Link href="/for-patients" className="btn-outline-teal inline-flex items-center gap-2">
              Patient Resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
