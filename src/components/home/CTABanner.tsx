import Link from "next/link";

export function CTABanner() {
  return (
    <section className="relative bg-purple geometric-pattern overflow-hidden py-20">
      <div className="section-container relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">
          Want More Information?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Our team is ready to answer your questions and help you take the first
          step toward a healthier life.
        </p>
        <Link href="/contact" className="btn-teal text-base px-10 py-4">
          CLICK HERE TO CONTACT US
        </Link>
      </div>
    </section>
  );
}
