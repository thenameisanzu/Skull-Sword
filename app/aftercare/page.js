"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import TattooPlaceholder from "@/components/TattooPlaceholder";
import { Check, X, ShieldAlert, Heart, Calendar, ChevronDown, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Aftercare() {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      title: "Phase 1: The First 24 Hours",
      desc: "Leave the wrap/Saniderm on as instructed by your artist. If utilizing traditional bandages, remove after 2–4 hours. Clean the tattoo immediately using lukewarm water and mild, unscented antibacterial liquid soap (e.g., Dial Gold). Pat dry with a clean paper towel—never rub.",
      type: "dagger",
    },
    {
      title: "Phase 2: Days 2 – 14",
      desc: "Wash the tattoo twice daily. Apply a very thin layer of ointment (Aquaphor or artist-recommended vegan ointment) for the first 3 days, switching to a fragrance-free, dye-free lotion (e.g., Lubriderm) afterwards. Expect peeling and flaking—this is normal. Do not peel or scratch.",
      type: "rose",
    },
    {
      title: "Phase 3: Long-Term Preservation",
      desc: "Once the outer skin layers have fully healed (typically 3–4 weeks), always apply high-grade SPF 50+ sunscreen when exposed to direct sunlight. Sun exposure is the primary cause of tattoo fading and line blur over time. Keep the skin hydrated daily.",
      type: "mandala",
    },
  ];

  const dos = [
    "Wash your hands thoroughly before touching your fresh tattoo.",
    "Wash gently with your fingertips—never use washcloths, sponges, or loofahs.",
    "Apply thin layers of lotion. The skin needs to breathe to heal.",
    "Wear clean, loose-fitting cotton clothing to prevent friction.",
  ];

  const donts = [
    "Do not scratch, pick, or peel scabs. You will pull ink out, leaving spots.",
    "Do not submerge in water (no swimming pools, hot tubs, ocean, or baths) for 2–3 weeks.",
    "Do not expose a healing tattoo to direct sunlight or tanning beds.",
    "Do not apply heavy layers of Vaseline or thick petroleum-based ointments.",
  ];

  const faqs = [
    {
      q: "How long does a custom tattoo take to heal?",
      a: "The outer layers of skin typically heal in 2 to 3 weeks, which is when peeling stops. However, the deeper layers of skin take up to 4 to 6 months to fully restructure and settle. Always follow care protocols during the entire month after your session.",
    },
    {
      q: "Can I exercise or work out after my session?",
      a: "We recommend taking 48 to 72 hours off from heavy workouts. Intense sweating can introduce bacteria, and stretching or friction of the skin near the joint lines can crack the healing scabs. Avoid gym equipment touching your fresh tattoo.",
    },
    {
      q: "My tattoo is peeling and looks dry. Is this normal?",
      a: "Yes, this is completely normal. Around Day 4 to 7, the top layer of skin will flake off, similar to a sunburn. Sometimes the flakes contain colored pigment, which looks alarming but is normal. Keep applying thin layers of unscented lotion.",
    },
    {
      q: "What do I do if I notice signs of infection?",
      a: "If you notice prolonged extreme redness, hot skin, swelling, yellow/green discharge, or have a fever, contact a medical professional immediately, and then inform your artist. Proper hygiene prevents infection, but prompt action is critical if it occurs.",
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-charcoal-dark pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-serif text-xs uppercase tracking-widest text-gold-primary flex items-center justify-center gap-1.5 mb-3">
              <BookOpen className="h-4 w-4" />
              <span>Healing Guidelines</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider font-black mb-4 heading-gradient">
              Aftercare Guide
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mx-auto mb-6" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              A tattoo is a collaborative effort: we provide the line-art and shading, and you provide the healing environment. Follow this guide to ensure your tattoo heals cleanly and retains its color vibrance.
            </p>
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-charcoal-medium border border-charcoal-light p-8 rounded-2xl hover:border-gold-primary/20 transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-full h-44 relative overflow-hidden rounded-xl">
                  <TattooPlaceholder type={step.type} className="h-full rounded-xl border-none bg-charcoal-dark/50" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gold-accent mb-3">{step.title}</h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Do's and Don'ts checklist columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* DO COLUMN */}
            <div className="bg-charcoal-medium border border-charcoal-light p-8 rounded-2xl">
              <div className="flex items-center gap-2 text-gold-accent mb-6 border-b border-charcoal-light pb-4">
                <Check className="h-5 w-5 text-gold-primary shrink-0" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider">What to Do</h3>
              </div>
              <ul className="flex flex-col gap-4 text-xs text-foreground/85 leading-relaxed">
                {dos.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-primary shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DONT COLUMN */}
            <div className="bg-charcoal-medium border border-charcoal-light p-8 rounded-2xl">
              <div className="flex items-center gap-2 text-crimson-accent mb-6 border-b border-charcoal-light pb-4">
                <X className="h-5 w-5 text-crimson-primary shrink-0" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider">What to Avoid</h3>
              </div>
              <ul className="flex flex-col gap-4 text-xs text-foreground/85 leading-relaxed">
                {donts.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-primary shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive FAQs Accordion */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl uppercase tracking-wider text-gold-primary font-black text-center mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-charcoal-light rounded-2xl overflow-hidden bg-charcoal-medium"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-charcoal-light/35 transition-colors focus:outline-none"
                    >
                      <span className="font-serif text-sm font-semibold text-foreground tracking-wide">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-gold-primary shrink-0 transition-transform duration-300 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[250px] border-t border-charcoal-light" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-xs text-foreground/75 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Booking CTA Panel */}
          <div className="bg-gradient-to-r from-charcoal-medium to-charcoal-light border border-gold-primary/20 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-foreground">Need touch ups or advice?</h3>
              <p className="text-xs text-foreground/60 mt-1 max-w-xl">
                Amal Dev offers free touch-ups within the first 3 months if needed. Contact us to schedule a check-in.
              </p>
            </div>
            <Link
              href="/booking"
              className="btn-primary-standout px-6 py-3 font-serif text-xs uppercase tracking-widest font-bold rounded-xl shrink-0"
            >
              Contact Artist
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingAction />
    </>
  );
}
