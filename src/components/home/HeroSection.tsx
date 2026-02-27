import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Warm, welcoming integrative health clinic consultation"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* "Be Seen." script text */}
      <div className="relative z-10 flex flex-col items-start justify-end pb-0 px-6 sm:px-12 lg:px-20 pt-32">
        <p className="font-script text-6xl sm:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg">
          Be Seen.
        </p>
      </div>

      {/* Color-blocked headline bars */}
      <div className="relative z-10 w-full">
        <div className="headline-bar-teal px-6 sm:px-12 lg:px-20 py-4 sm:py-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-widest">
            EXPERIENCE HEALTHCARE
          </h1>
        </div>
        <div className="headline-bar-purple px-6 sm:px-12 lg:px-20 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-widest">
            FROM A NEW PERSPECTIVE
          </span>
          <Link
            href="/contact"
            className="btn-outline-white whitespace-nowrap text-sm sm:text-base px-6 py-3 self-start sm:self-auto"
          >
            Start Your Health Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
