import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Smiling woman representing the warm, personal care at Perspective Health Iowa"
          fill
          priority
          quality={90}
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Warm overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 lg:pb-24 pt-32">
        {/* "Be Seen." — dominant handwritten headline floating above blocks */}
        <p className="font-script text-[8rem] sm:text-[12rem] lg:text-[16rem] text-white -rotate-2 tracking-tight font-light mb-[-0.12em] ml-1 sm:ml-2 relative z-10 leading-[0.75] [text-shadow:_0_2px_16px_rgba(255,255,255,0.15),_0_4px_24px_rgba(0,0,0,0.3)]">
          Be Seen.
        </p>

        {/* Highlighted headline blocks */}
        <h1 className="flex flex-col items-start gap-2.5 sm:gap-3 relative z-0">
          <span className="inline-block bg-teal/90 px-4 py-3 sm:px-6 sm:py-4 text-white text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-normal tracking-wide uppercase">
            Experience Healthcare
          </span>
          <span className="inline-block bg-purple/90 px-4 py-3 sm:px-6 sm:py-4 text-white text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-normal tracking-wide uppercase">
            From a New Perspective
          </span>
        </h1>
      </div>
    </section>
  );
}
