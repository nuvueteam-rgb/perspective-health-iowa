import Image from "next/image";
import Link from "next/link";
import { INSURANCE_PARTNERS } from "@/lib/constants";

export function InsurancePartners() {
  return (
    <section className="section-padding bg-sage/30">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal mb-4">
            OUR INSURANCE{" "}
            <span className="text-teal">PARTNERS</span>
          </h2>
          <div className="w-16 h-1 bg-teal rounded-full mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We accept most major insurance plans and are continuously working to
            add more partners. We also accept HSA/FSA and offer transparent
            self-pay pricing.{" "}
            <Link href="/insurance" className="text-teal font-medium hover:underline">
              Learn more about your coverage options.
            </Link>
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {INSURANCE_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-10">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} insurance accepted at Perspective Health Iowa`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Not sure if we accept your insurance?{" "}
          <Link href="/contact" className="text-teal font-medium hover:underline">
            Contact us
          </Link>{" "}
          — we&apos;re happy to verify your benefits.
        </p>
      </div>
    </section>
  );
}
