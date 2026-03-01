import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-charcoal py-14">
      <div className="section-container relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal/15 flex items-center justify-center flex-shrink-0">
              <Phone size={22} className="text-teal" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">
                Want More Information?
              </p>
              <p className="text-white/60 text-sm">
                We&apos;re here to help — reach out anytime.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="text-teal font-semibold text-sm hover:text-white transition-colors whitespace-nowrap"
            >
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn-teal whitespace-nowrap inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
