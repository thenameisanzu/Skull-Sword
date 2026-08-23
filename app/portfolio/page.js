"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import TattooPlaceholder from "@/components/TattooPlaceholder";
import { X, ZoomIn, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  const categories = ["All", "Tattoo", "Piercing"];

  const works = [
    {
      id: 1,
      title: "Hourglass & Patience",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-1.jpg",
      type: "skull",
      desc: "Delicate custom blackwork showing a tilted hourglass inside a clock face, detailed with cracks and bird silhouettes."
    },
    {
      id: 2,
      title: "Guitar Landscape Journey",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-2.jpg",
      type: "ambience",
      desc: "A custom scenic tattoo blending a guitar neck outline with mountains, trees, stars, a traveler, and a dog."
    },
    {
      id: 3,
      title: "Invincible Eagle",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-3.jpg",
      type: "dagger",
      desc: "Sleek traditional fine-line eagle wings spread wide below geometric lines and scripture notation."
    },
    {
      id: 4,
      title: "Koi Fish Sleeve",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-4.jpg",
      type: "waves",
      desc: "Vibrant traditional Japanese orange Koi fish swimming in windbars and waves, accented with a lotus blossom."
    },
    {
      id: 5,
      title: "Realism Eye Gaze",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-5.png",
      type: "mandala",
      desc: "Stunning realism ink depicting expressive female eyes framed in a geometric chest placement box."
    },
    {
      id: 6,
      title: "Skull & Sword Legacy",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/hero-1.png",
      type: "dagger",
      desc: "A highly detailed, professional blackwork tattoo illustration featuring a gothic skull combined with an ornate medieval sword driven vertically through the center."
    },
    {
      id: 7,
      title: "Lotus Backpiece",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/hero-4.png",
      type: "rose",
      desc: "A clean, symmetrical fine-line lotus flower design expanding across the lower back with leaf branches."
    },
    {
      id: 8,
      title: "Belly Piercing Curation",
      artist: "Amal Dev",
      category: "Piercing",
      imageSrc: "/images/hero-3.png",
      type: "mandala",
      desc: "A precise navel piercing curation using double-bezel implant-grade titanium jewelry with clear crystals."
    },
    {
      id: 9,
      title: "Nose Stud Piercing",
      artist: "Amal Dev",
      category: "Piercing",
      imageSrc: "/images/hero-2.png",
      type: "rose",
      desc: "A delicate nostrils stud piercing styled with a premium solid 14k white gold flower jewelry piece."
    },
    {
      id: 10,
      title: "Kraken Chest Shoulder",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/hero-5.png",
      type: "waves",
      desc: "Custom blackwork chest and shoulder sleeve wrapping depicting a dynamic illustrative kraken/octopus with bold suction cups."
    },
    {
      id: 11,
      title: "Trishul & Om Symbol",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-6.png",
      type: "mandala",
      desc: "Sleek fine-line religious tattoo combining the Trishul (trident), Damru (drum), and holy Om calligraphy."
    },
    {
      id: 12,
      title: "Dachshund Pet Portrait",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-7.png",
      type: "skull",
      desc: "Beautiful pet realism portrait of a Dachshund dog detailed with brown highlights and small red hearts."
    },
    {
      id: 13,
      title: "Lionel Messi Tribute",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-8.png",
      type: "dagger",
      desc: "Custom circular portrait frame depicting Lionel Messi wearing the Argentina number 10 jersey, surrounded by olive branches."
    },
    {
      id: 14,
      title: "Olive Branch Dove",
      artist: "Amal Dev",
      category: "Tattoo",
      imageSrc: "/images/gallery-9.png",
      type: "rose",
      desc: "Classic traditional style shoulder tattoo of a flying dove carrying an olive branch, shaded with soft brown tones."
    },
    {
      id: 15,
      title: "Helix & Lobe Gold Curation",
      artist: "Amal Dev",
      category: "Piercing",
      imageSrc: "/images/gallery-10.png",
      type: "mandala",
      desc: "Delicate triple earlobe and helix project curated with solid gold studs, rubies, and a sapphire flower piece."
    },
    {
      id: 16,
      title: "Septum & Lip Curation",
      artist: "Amal Dev",
      category: "Piercing",
      imageSrc: "/images/gallery-11.png",
      type: "waves",
      desc: "Bold dual anatomy curation showing a circular barbell septum ring paired with a vertical labret lip piercing using spiked titanium studs."
    },
    {
      id: 17,
      title: "Gold Flower Nostril Stud",
      artist: "Amal Dev",
      category: "Piercing",
      imageSrc: "/images/gallery-12.png",
      type: "rose",
      desc: "Clean side-profile nostril stud piercing fitted with a high-polish solid 14k gold star flower design."
    },
    {
      id: 18,
      title: "Minimal Nostril Diamond",
      artist: "Amal Dev",
      category: "Piercing",
      imageSrc: "/images/gallery-13.png",
      type: "skull",
      desc: "A classic nostril stud piercing on a male client curated with a single minimalist bezel-set diamond stud."
    }
  ];

  const filteredWorks = activeCategory === "All"
    ? works
    : works.filter(w => w.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-charcoal-dark pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Description */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider font-black mb-4 heading-gradient">
              Works Gallery
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mx-auto mb-6" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              Explore custom tattooing masterpieces crafted by resident artist Amal Dev. Every tattoo is a custom heirloom, illustrated individually and placed to flow with the anatomy of the client.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-xl border ${
                  activeCategory === cat
                    ? "bg-gold-primary text-charcoal-dark border-gold-primary font-bold shadow-lg shadow-gold-primary/10"
                    : "bg-charcoal-medium text-foreground/80 border-charcoal-light hover:border-gold-primary/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => setSelectedWork(work)}
                className="group relative cursor-pointer overflow-hidden bg-charcoal-medium border border-charcoal-light rounded-2xl hover:border-gold-primary/30 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-black/70"
              >
                {/* Visual Canvas */}
                <div className="h-80 w-full relative">
                  {work.imageSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={work.imageSrc}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <TattooPlaceholder type={work.type} className="h-full border-none" />
                  )}
                  
                  {/* Floating Action Trigger on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gold-primary/95 text-charcoal-dark flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Visible Info */}
                <div className="p-5 border-t border-charcoal-light bg-charcoal-medium flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-foreground group-hover:text-gold-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-foreground/60 mt-0.5 flex items-center gap-1">
                      <User className="h-3 w-3 text-gold-primary" />
                      <span>{work.artist}</span>
                    </p>
                  </div>
                  <span className="text-[10px] font-serif uppercase tracking-wider px-2 py-1 rounded-md border border-gold-primary/20 text-gold-primary bg-gold-primary/5">
                    {work.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty fallback state */}
          {filteredWorks.length === 0 && (
            <div className="text-center py-20 border border-dashed border-charcoal-light rounded-2xl">
              <p className="text-sm text-foreground/60 italic">No works found matching the category.</p>
            </div>
          )}
        </div>
      </main>

      {/* DETAILED LIGHTBOX MODAL */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedWork(null)}
        >
          <div
            ref={modalRef}
            className="relative bg-charcoal-medium border border-gold-primary/30 max-w-3xl w-full rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-gold-primary/25 flex items-center justify-center text-gold-primary hover:text-white hover:bg-gold-primary/25 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Column: Image Canvas */}
            <div className="w-full md:w-1/2 h-80 md:h-auto min-h-[350px] relative bg-charcoal-dark border-b md:border-b-0 md:border-r border-charcoal-light">
              {selectedWork.imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedWork.imageSrc}
                  alt={selectedWork.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <TattooPlaceholder type={selectedWork.type} className="h-full w-full border-none" />
              )}
            </div>

            {/* Right Column: Meta details */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-serif uppercase tracking-widest text-gold-primary border-b border-gold-primary/25 pb-1">
                    {selectedWork.category}
                  </span>
                  <h2 className="font-serif text-2xl font-black text-foreground uppercase tracking-wide mt-3">
                    {selectedWork.title}
                  </h2>
                </div>
                
                <p className="text-xs text-foreground/75 leading-relaxed">
                  {selectedWork.desc}
                </p>

                <div className="flex flex-col gap-2 text-xs border-y border-charcoal-light py-4 my-2">
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Creator</span>
                    <span className="font-bold text-foreground">{selectedWork.artist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Tattoo Style</span>
                    <span className="text-gold-accent">{selectedWork.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Session Time</span>
                    <span className="text-foreground/90">Custom Estimate</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/booking"
                  className="w-full text-center bg-gold-primary hover:bg-gold-accent text-charcoal-dark py-3 rounded-xl font-serif uppercase tracking-widest font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Inquire with Amal Dev</span>
                </Link>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-full text-center border border-charcoal-light hover:border-gold-primary/30 text-foreground/80 hover:text-white py-3 rounded-xl text-xs font-serif uppercase tracking-widest transition-colors"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingAction />
    </>
  );
}
