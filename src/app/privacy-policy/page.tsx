import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Perspective Health Iowa.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl font-extrabold text-charcoal mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-gray max-w-none text-gray-600">
          <p>
            <strong>Last updated: January 1, 2025</strong>
          </p>
          <p>
            Perspective Health Iowa (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy and is committed to
            protecting any personal information you share with us through our
            website or services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            fill out our contact form, schedule an appointment, or communicate
            with our team. This may include your name, email address, phone
            number, and health-related information you choose to share.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            schedule and manage appointments, provide healthcare services,
            communicate important health information, and comply with applicable
            legal and regulatory requirements.
          </p>
          <h2>HIPAA Compliance</h2>
          <p>
            As a healthcare provider, we are subject to the Health Insurance
            Portability and Accountability Act (HIPAA). We handle your Protected
            Health Information (PHI) in accordance with HIPAA Privacy and
            Security Rules. Please refer to our Notice of Privacy Practices,
            available at our office, for detailed information about how we use
            and disclose your health information.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
            <a href="mailto:info@perspectivehealthiowa.com">
              info@perspectivehealthiowa.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
