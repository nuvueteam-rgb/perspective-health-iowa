import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Perspective Health Iowa to schedule an appointment or ask questions. We offer integrative primary care, hormone health, and functional medicine in Iowa.",
  openGraph: {
    title: "Contact Us | Perspective Health Iowa",
    description:
      "Reach out to schedule your appointment at Perspective Health Iowa.",
  },
};

const hours = [
  { day: "Monday", hours: SITE_CONFIG.hours.monday },
  { day: "Tuesday", hours: SITE_CONFIG.hours.tuesday },
  { day: "Wednesday", hours: SITE_CONFIG.hours.wednesday },
  { day: "Thursday", hours: SITE_CONFIG.hours.thursday },
  { day: "Friday", hours: SITE_CONFIG.hours.friday },
  { day: "Saturday", hours: SITE_CONFIG.hours.saturday },
  { day: "Sunday", hours: SITE_CONFIG.hours.sunday },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="section-container relative z-10">
          <p className="font-script text-3xl text-teal mb-2">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            CONTACT US
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Ready to start your health journey? Our team is here to help.
            Reach out and we&apos;ll be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Contact info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact details */}
              <div>
                <h2 className="text-xl font-bold text-charcoal mb-5">
                  Our Information
                </h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors">
                        <Phone size={18} className="text-teal group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                          Phone
                        </p>
                        <p className="text-charcoal font-medium group-hover:text-teal transition-colors">
                          {SITE_CONFIG.phone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors">
                        <Mail size={18} className="text-teal group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                          Email
                        </p>
                        <p className="text-charcoal font-medium group-hover:text-teal transition-colors break-all">
                          {SITE_CONFIG.email}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Address
                      </p>
                      <p className="text-charcoal font-medium">
                        {SITE_CONFIG.address.street}
                        <br />
                        {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                        {SITE_CONFIG.address.zip}
                      </p>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal text-sm font-medium hover:underline mt-1 inline-flex items-center gap-1"
                      >
                        Get Directions <ArrowRight size={12} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h2 className="text-xl font-bold text-charcoal mb-5 flex items-center gap-2">
                  <Clock size={18} className="text-teal" />
                  Office Hours
                </h2>
                <div className="space-y-2">
                  {hours.map(({ day, hours: h }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">{day}</span>
                      <span
                        className={
                          h === "Closed"
                            ? "text-gray-400"
                            : "text-charcoal font-medium"
                        }
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* New patient note */}
              <div className="bg-teal/10 rounded-xl p-5 border border-teal/20">
                <p className="font-semibold text-teal mb-1">New Patients Welcome</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We&apos;re accepting new patients and would love to be part of
                  your health team. Use the form to introduce yourself, and
                  we&apos;ll reach out to schedule your initial appointment.
                </p>
                <Link
                  href="/for-patients"
                  className="inline-flex items-center gap-1 text-teal font-medium text-sm mt-3 hover:underline"
                >
                  New patient resources <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gray-200 relative overflow-hidden" aria-label="Office location map">
        <div className="absolute inset-0 flex items-center justify-center bg-sage/50">
          <div className="text-center">
            <MapPin size={40} className="text-teal mx-auto mb-3" />
            <p className="font-semibold text-charcoal">
              {SITE_CONFIG.address.full}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal mt-4 inline-flex"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        {/* Replace above with an actual Google Maps embed or next/image map screenshot */}
      </section>
    </>
  );
}
