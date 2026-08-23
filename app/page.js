import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Users, Sparkles, Star, Calendar, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import TattooPlaceholder from "@/components/TattooPlaceholder";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import HeroGallery from "@/components/HeroGallery";
import CircularMomentsGallery from "@/components/CircularMomentsGallery";

export default function Home() {
  const services = [
    {
      title: "Custom Tattooing",
      subtitle: "Bespoke Body Art",
      description: "Step into our private booths and collaborate on dynamic, custom artwork designed from scratch to flow with your anatomy. Specializing in bold American traditional, fine-line detailing, Japanese Irezumi compositions, and heavy illustrative blackwork.",
      bullets: [
        "Illustrations custom-drawn from your initial concepts",
        "Free touch-ups on all shop work for the first 6 months",
        "Specialist pigment selection and cover-up renovations"
      ],
      cta: "Explore Styles & Portfolio",
      href: "/portfolio",
      type: "skull",
      imageSrc: "/images/gallery-4.jpg",
    },
    {
      title: "Precision Body Piercing",
      subtitle: "Sterile Anatomy Curation",
      description: "Experience advanced piercing executed under strict hospital-grade sterilization protocols. We offer custom-curated ear projects, oral/facial designs, and surface anchors using exclusively implant-grade titanium and solid 14k/18k gold jewelry.",
      bullets: [
        "Strict medical sterilization with spore autoclave verification",
        "Curations with premium titanium and solid gold brands",
        "Detailed anatomical mapping for optimal healing and comfort"
      ],
      cta: "Book Piercing Consultation",
      href: "/booking",
      type: "dagger",
      imageSrc: "/images/hero-2.png",
    },
  ];

  const works = [
    { title: "Hourglass & Patience", artist: "Amal Dev", type: "skull", category: "Tattoo", imageSrc: "/images/gallery-1.jpg" },
    { title: "Guitar Landscape Journey", artist: "Amal Dev", type: "ambience", category: "Tattoo", imageSrc: "/images/gallery-2.jpg" },
    { title: "Belly Piercing Curation", artist: "Amal Dev", type: "mandala", category: "Piercing", imageSrc: "/images/hero-3.png" },
    { title: "Nose Stud Piercing", artist: "Amal Dev", type: "rose", category: "Piercing", imageSrc: "/images/hero-2.png" },
    { title: "Invincible Eagle", artist: "Amal Dev", type: "dagger", category: "Tattoo", imageSrc: "/images/gallery-3.jpg" },
    { title: "Kraken Chest Shoulder", artist: "Amal Dev", type: "waves", category: "Tattoo", imageSrc: "/images/hero-5.png" },
  ];

  const testimonials = [
    {
      name: "Aishwarya R.",
      date: "August 2026",
      text: "Absolutely loved the custom illustrative tattoo. Amal Dev is incredibly skilled, the lines are perfect, and the healing was super smooth. The studio environment is top tier!",
      rating: 5,
      avatar: "/images/moment-1.png",
    },
    {
      name: "Riya Mathew",
      date: "July 2026",
      text: "Got a double helix piercing here. I was extremely nervous, but the sterilization, setup, and care was outstanding. Minimal pain, and it healed beautifully!",
      rating: 5,
      avatar: "/images/moment-2.png",
    },
    {
      name: "Anjana & Sneha",
      date: "June 2026",
      text: "Came here for fine-line ear styling and custom tattoos. Amal Dev is brilliant with anatomical positioning and custom artwork. Posing in the mirror says it all!",
      rating: 5,
      avatar: "/images/moment-5.png",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Main Content Layout */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full lg:h-screen min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-charcoal-dark/70 to-charcoal-dark z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Large Background Vector Art (Subtle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] opacity-5 z-0 pointer-events-none">
            <TattooPlaceholder type="skull" className="bg-transparent border-none" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-primary/30 rounded-full bg-charcoal-medium/55 backdrop-blur-sm text-gold-primary text-xs uppercase tracking-widest animate-pulse">
                  <Sparkles className="h-3 w-3" />
                  <span>Legendary Custom Tattooing & Piercing</span>
                </div>
              </Reveal>

              <Reveal direction="clip-left" delay={200}>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-foreground leading-[1.1]">
                  Forged in Ink,<br />
                  <span className="heading-gradient pb-1">Worn with Honor</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <p className="max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed font-sans">
                  Skull & Sword Tattoos is a premier high-end tattoo and piercing studio delivering custom illustrative art and precise curations. Step into our Changanassery, Kottayam sanctuary and craft your legacy.
                </p>
              </Reveal>

              <Reveal direction="up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                  <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-gold-primary hover:bg-gold-accent text-charcoal-dark px-8 py-4 font-serif text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded-xl shadow-xl shadow-gold-primary/10 hover:scale-[1.02]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/30 hover:border-gold-primary px-8 py-4 font-serif text-sm uppercase tracking-widest text-foreground hover:text-gold-primary transition-all duration-300 rounded-xl hover:scale-[1.02]"
                >
                    <span>Browse Gallery</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Dynamic Flex Accordion Gallery */}
            <div className="lg:col-span-5 w-full h-[350px] sm:h-[450px]">
              <Reveal direction="zoom" delay={300} className="h-full">
                <HeroGallery />
              </Reveal>
            </div>
          </div>

          {/* Bottom Ornate Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
        </section>

        {/* SERVICES / SPECIALTIES SECTION */}
        <section className="py-24 bg-charcoal-medium relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal direction="up">
              <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-black mb-4 heading-gradient">
                  Our Services
                </h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mx-auto mb-4" />
                <p className="text-sm text-foreground/75 leading-relaxed">
                  We design custom heirloom pieces and precision body mappings, combining classic needle craft technique with fine art principles.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <Reveal key={index} direction="up" delay={index * 200} className="h-full">
                  <TiltCard className="bg-charcoal-dark border border-charcoal-light p-8 md:p-10 rounded-2xl hover:border-gold-primary/35 transition-all duration-300 group flex flex-col justify-between shadow-lg h-full">
                    <div>
                      {/* Large Visual Header inside card */}
                      <div className="w-full h-48 mb-8 relative overflow-hidden rounded-xl">
                        {service.imageSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={service.imageSrc}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <TattooPlaceholder type={service.type} className="h-full border-none rounded-xl bg-charcoal-medium/40" />
                        )}
                      </div>
                      <span className="text-[10px] font-serif uppercase tracking-widest text-gold-primary mb-2 block font-semibold">
                        {service.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-black uppercase tracking-wide text-foreground group-hover:text-gold-accent transition-colors mb-4">
                        {service.title}
                      </h3>
                      <p className="text-xs text-foreground/70 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      {/* Detailed bullet list */}
                      <ul className="flex flex-col gap-3 mb-8 border-t border-charcoal-light pt-6">
                        {service.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start text-xs text-foreground/80">
                            <Check className="h-4 w-4 text-crimson-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={service.href}
                      className="w-full text-center bg-transparent border border-gold-primary/45 hover:border-gold-accent text-gold-primary hover:text-charcoal-dark hover:bg-gold-primary py-3 rounded-xl font-serif text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PORTFOLIO PREVIEW */}
        <section className="py-24 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal direction="up">
              <div className="flex flex-col sm:flex-row items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-black mb-4 heading-gradient">
                    The Gallery
                  </h2>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mb-4" />
                  <p className="text-sm text-foreground/75 leading-relaxed max-w-xl">
                    A preview of custom designs crafted by the studio's crew. Each tattoo is customized to match individual placements and sizes.
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  className="border border-gold-primary/40 hover:border-gold-accent text-gold-primary hover:text-white px-6 py-3 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-xl shrink-0"
                >
                  View Full Gallery
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, index) => (
                <Reveal key={index} direction="zoom" delay={index * 100}>
                  <TiltCard className="group relative overflow-hidden bg-charcoal-medium border border-charcoal-light rounded-2xl">
                    {/* Canvas Container */}
                    <div className="h-80 w-full relative">
                      {work.imageSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={work.imageSrc}
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <TattooPlaceholder type={work.type} className="h-full border-none" />
                      )}
                    </div>
                    
                    {/* Overlay Details (Glow slide up) */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between border-t border-gold-primary/10">
                      <div>
                        <p className="text-xs text-gold-primary font-serif uppercase tracking-widest mb-1">{work.category}</p>
                        <h4 className="font-serif text-base font-bold text-foreground">{work.title}</h4>
                        <p className="text-xs text-foreground/60">Artist: {work.artist}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AMBIENCE SECTION */}
        <section className="py-24 bg-charcoal-medium relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="spear-left">
              <div className="flex flex-col gap-6">
                <span className="font-serif text-xs uppercase tracking-widest text-gold-primary">Studio Ambience</span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-black leading-tight heading-gradient">
                  An Atmosphere Built on Heritage & Hygiene
                </h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Skull & Sword is a custom studio structured with your comfort and safety as our highest mandate. Located in the heart of Changanassery, Kottayam, the shop pairs minimal geometry and dark neo-gothic artwork with state-of-the-art sterilization equipment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="h-5 w-5 text-gold-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-foreground uppercase tracking-wider">Medical-Grade</h4>
                      <p className="text-xs text-foreground/60 mt-1">100% single-use disposable needles and autoclave tested instruments.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="h-5 w-5 text-gold-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-foreground uppercase tracking-wider">Licensed Studio</h4>
                      <p className="text-xs text-foreground/60 mt-1">Fully registered artists holding current sterilization and safety certifications.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="h-5 w-5 text-gold-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-foreground uppercase tracking-wider">Private Suites</h4>
                      <p className="text-xs text-foreground/60 mt-1">Spacious individual workspaces offering complete privacy and client focus.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Sparkles className="h-5 w-5 text-gold-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-foreground uppercase tracking-wider">Custom Artwork</h4>
                      <p className="text-xs text-foreground/60 mt-1">Personalized drawings from scratch. No standard flash-book copies.</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/studio"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-gold-primary hover:text-white group hover:underline"
                >
                  <span>Read Studio Standards</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="spear-right" delay={200}>
              <div className="w-full h-80 lg:h-[450px]">
                <TattooPlaceholder type="ambience" className="h-full rounded-2xl" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* STUDIO MOMENTS / REAL LIFE GALLERY */}
        <section className="py-24 bg-charcoal-medium border-t border-charcoal-light">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <CircularMomentsGallery />
          </div>
        </section>

        {/* CUSTOMERS / TESTIMONIALS SECTION */}
        <section className="py-24 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal direction="up">
              <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-black mb-4 heading-gradient">
                  Happy Customers
                </h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mx-auto mb-4" />
                <p className="text-sm text-foreground/75 leading-relaxed">
                  What clients say about their custom tattoo experiences and healing processes at the shop.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <Reveal key={index} direction="up" delay={index * 150} className="h-full">
                  <TiltCard className="bg-charcoal-medium border border-charcoal-light p-8 rounded-2xl hover:border-gold-primary/20 transition-all duration-300 flex flex-col justify-between relative group h-full">
                    {/* Gothic quotes quotation marks decorative */}
                    <span className="absolute top-2 right-4 text-7xl font-serif text-gold-primary/10 select-none pointer-events-none group-hover:text-gold-primary/20 transition-colors">”</span>

                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 text-gold-accent">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-currentColor" />
                        ))}
                      </div>
                      <p className="text-xs text-foreground/80 leading-relaxed italic mb-6 relative z-10">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="border-t border-charcoal-light pt-4 mt-auto flex items-center gap-3">
                      {t.avatar && (
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-primary/20 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-serif text-sm font-bold text-foreground">{t.name}</h4>
                        <p className="text-[10px] text-gold-primary/75 tracking-wider uppercase mt-0.5">{t.date}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AFTERCARE TEASER / CALL TO ACTION */}
        <section className="py-20 bg-charcoal-medium relative overflow-hidden border-t border-gold-primary/10">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
            <Reveal direction="zoom">
              <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-gold-primary font-black">
                Caring For Your Fresh Artwork
              </h2>
            </Reveal>
            <Reveal direction="zoom" delay={150}>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-xl">
                A tattoo is only as good as its healing process. We walk you through step-by-step cleaning routines, products, and practices to ensure your skin heals vibrantly and retains crisp linework.
              </p>
            </Reveal>
            <Reveal direction="zoom" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                <Link
                  href="/aftercare"
                  className="bg-charcoal-dark border border-gold-primary/30 hover:border-gold-primary text-gold-primary hover:text-white px-6 py-3 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-xl"
                >
                  Read Healing Rules
                </Link>
                <Link
                  href="/booking"
                  className="bg-gold-primary text-charcoal-dark px-6 py-3 font-serif text-xs uppercase tracking-widest font-bold hover:bg-gold-accent transition-all duration-300 rounded-xl"
                >
                  Inquire About A Cover-up
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingAction />
    </>
  );
}
