import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import TattooPlaceholder from "@/components/TattooPlaceholder";
import { Shield, Sparkles, CheckCircle, ShieldAlert, Award } from "lucide-react";
import Link from "next/link";

export default function Studio() {
  const artists = [
    {
      name: "Amal Dev",
      role: "Founder & Lead Resident Artist",
      style: "Custom Illustrative & Realism",
      bio: "Amal Dev is the founder and lead resident artist at Skull & Sword. Specializing in high-end illustrative blackwork, realism, custom fine-line designs, and bespoke curations individually tailored to flow with your body anatomy.",
      type: "skull",
      imageSrc: "/images/amal-dev.jpg",
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-charcoal-dark pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Legacy section */}
          <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-serif text-xs uppercase tracking-widest text-gold-primary flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>Our Heritage</span>
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider font-black leading-tight heading-gradient">
                The Skull & Sword Legacy
              </h1>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                Founded as a premium destination in Changanassery, Kottayam, Skull & Sword was established as a sanctuary for artists wanting to push boundaries. We moved tattooing away from off-the-shelf catalog drawings towards custom, anatomically conscious fine art.
              </p>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Today, we continue that heritage. We design custom pieces that honors the traditional roots of tattoo culture, while utilizing advanced safety regulations, sterile equipment, and private rooms.
              </p>
            </div>
            
            <div className="w-full h-80 lg:h-[400px]">
              <TattooPlaceholder type="ambience" className="h-full rounded-2xl" />
            </div>
          </section>

          {/* Crew section */}
          <section className="mb-24">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="font-serif text-3xl uppercase tracking-wider font-black mb-4 heading-gradient">
                The Crew
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mx-auto mb-4" />
              <p className="text-sm text-foreground/75 leading-relaxed">
                Meet the resident masters of their craft. Each artist works directly with clients to illustrate custom, bespoke concepts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {artists.map((artist, idx) => (
                <div
                  key={idx}
                  className="bg-charcoal-medium border border-charcoal-light p-8 rounded-2xl hover:border-gold-primary/20 transition-all duration-300 flex flex-col sm:flex-row gap-8"
                >
                  {/* Left canvas portrait placeholder */}
                  <div className="w-full sm:w-40 h-56 sm:h-auto shrink-0 relative overflow-hidden rounded-xl">
                    {artist.imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={artist.imageSrc}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <TattooPlaceholder type={artist.type} className="h-full border-none rounded-xl" />
                    )}
                  </div>
                  
                  {/* Right bio details */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">{artist.name}</h3>
                      <p className="text-xs text-gold-primary tracking-wider uppercase mt-0.5">{artist.role}</p>
                    </div>
                    <div className="text-xs border-y border-charcoal-light py-2">
                      <span className="text-foreground/50">Specialty:</span>{" "}
                      <span className="text-gold-accent font-semibold">{artist.style}</span>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {artist.bio}
                    </p>
                    <Link
                      href="/booking"
                      className="text-xs font-serif uppercase tracking-widest text-gold-primary hover:text-white mt-2 hover:underline"
                    >
                      Book with {artist.name} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Safety & sanitization standards */}
          <section className="bg-charcoal-medium border border-charcoal-light p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Decortative badge */}
            <div className="absolute top-4 right-4 opacity-5 text-gold-primary">
              <Shield className="h-40 w-40" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="h-6 w-6 text-gold-primary shrink-0" />
                <h2 className="font-serif text-2xl uppercase tracking-wider text-foreground font-black">
                  Medical-Grade Sterilization Standards
                </h2>
              </div>
              <div className="w-16 h-[2px] bg-gold-primary mb-6" />
              
              <p className="text-sm text-foreground/80 leading-relaxed mb-8">
                Your health is our single highest priority. We maintain hospital-grade sanitation protocols that exceed standard state regulations. All procedures take place in private stations to ensure safety and comfort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-crimson-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">100% Single-Use Disposables</span>
                    <p className="text-xs text-foreground/60 mt-0.5">Every needle, cartridge, sleeve, and barrier film is opened immediately in front of you and discarded in hazard containers.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-crimson-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Autoclave Spore Testing</span>
                    <p className="text-xs text-foreground/60 mt-0.5">We maintain weekly certified laboratory spore-testing logs on all sterilization machines, open to client review.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-crimson-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Medical Wash & Cleaners</span>
                    <p className="text-xs text-foreground/60 mt-0.5">All surfaces are disinfected with EPA-registered hospital grade virucidal agents before and after every procedure.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-crimson-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Licensed by State Health Dept.</span>
                    <p className="text-xs text-foreground/60 mt-0.5">Every single operator holds an active Body Art Practitioner License and undergoes annual Bloodborne Pathogens training.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-charcoal-light pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-foreground/50 italic">
                  Have questions about our pigments, sanitizers, or setups? Ask your artist during consultation.
                </p>
                <Link
                  href="/booking"
                  className="bg-gold-primary hover:bg-gold-accent text-charcoal-dark px-6 py-3 font-serif text-xs uppercase tracking-widest font-bold transition-colors rounded-xl shrink-0 shadow-lg"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingAction />
    </>
  );
}
