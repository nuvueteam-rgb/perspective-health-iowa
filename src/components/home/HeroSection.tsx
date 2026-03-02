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

      {/* Hero text */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 lg:pb-24 pt-32">
        {/* "Be Seen." signature text */}
        <div className="inline-block mb-6">
          <p className="font-script italic text-7xl sm:text-8xl lg:text-9xl text-white mb-2 drop-shadow-lg -rotate-2 tracking-tight">
            Be Seen.
          </p>
          <div className="h-[2px] w-3/4 bg-white/60 ml-2 -mt-1 rounded-full" />
        </div>

        {/* Highlighted headline blocks */}
        <h1 className="flex flex-col items-start gap-2 sm:gap-3">
          <span className="inline-block bg-teal px-4 py-2 sm:px-6 sm:py-3 text-white text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-widest uppercase">
            Experience Healthcare
          </span>
          <span className="inline-block bg-purple px-4 py-2 sm:px-6 sm:py-3 text-white text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-widest uppercase">
            From a New Perspective
          </span>
        </h1>
      </div>
    </section>
  );
}
