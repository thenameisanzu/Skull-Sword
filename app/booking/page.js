"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import TattooPlaceholder from "@/components/TattooPlaceholder";
import { Send, CheckCircle2, MessageSquare, Shield, Info, Calendar } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "Email",
    artist: "Amal Dev",
    style: "Blackwork",
    size: "Medium (Palm Size)",
    placement: "Arm / Sleeve",
    description: "",
    dates: "",
    reference: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, reference: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate random ticket reference ID
      const randomId = "SS-" + Math.floor(100000 + Math.random() * 900000);
      setTicketId(randomId);
    }, 1500);
  };

  const artists = ["Amal Dev"];
  const styles = ["American Traditional", "Blackwork", "Japanese Irezumi", "Illustrative", "Cover-up / Refurbish", "Other / Undecided"];
  const sizes = ["Small (2-3 inches)", "Medium (Palm Size)", "Large (Hand/Forearm)", "Extra Large (Sleeve, Chest, Back)"];
  const placements = ["Arm / Sleeve", "Leg / Calf", "Chest / Collarbone", "Back / Ribs", "Neck / Head", "Hand / Foot"];

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-charcoal-dark pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-serif text-xs uppercase tracking-widest text-gold-primary flex items-center justify-center gap-1.5 mb-3">
              <Calendar className="h-4 w-4" />
              <span>Inquiry Portal</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider font-black mb-4 heading-gradient">
              Booking Inquiry
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-primary to-crimson-primary mx-auto mb-6" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              We operate strictly by appointment for custom illustration and tattooing. Submit your concept request below to schedule a consultation with one of our artists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left side details & context */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              {/* Quick links block */}
              <div className="bg-charcoal-medium border border-charcoal-light p-6 rounded-2xl">
                <h3 className="font-serif text-base font-bold text-gold-accent uppercase tracking-wider mb-4 border-b border-charcoal-light pb-2">
                  Need Quick Chat?
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                  For quick questions regarding shop hourly rates, deposits, or same-day walk-in availability, message us directly:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/918921865894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-charcoal-dark py-2.5 rounded-xl text-xs font-serif uppercase tracking-widest font-semibold transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp Chat</span>
                  </a>
                  <a
                    href="https://www.instagram.com/skull_and_sword_tattoos/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-charcoal-dark py-2.5 rounded-xl text-xs font-serif uppercase tracking-widest font-semibold transition-colors"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Instagram DM</span>
                  </a>
                </div>
              </div>

              {/* Consultation instructions */}
              <div className="bg-charcoal-medium border border-charcoal-light p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-3 text-gold-primary">
                  <Info className="h-4 w-4 shrink-0" />
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider">The Process</h4>
                </div>
                <ul className="flex flex-col gap-3 text-xs text-foreground/75 leading-relaxed list-decimal list-inside">
                  <li>Submit your design concept & sizing.</li>
                  <li>Artist reviews and responds in 3-5 days.</li>
                  <li>Pay a deposit to lock in drawing & session dates.</li>
                  <li>Review final drawings on the day of the session.</li>
                </ul>
              </div>

              {/* Autoclave badge */}
              <div className="bg-charcoal-medium border border-charcoal-light p-6 rounded-2xl flex gap-3">
                <Shield className="h-6 w-6 text-gold-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-bold text-foreground uppercase tracking-widest">State Health Dept. Certified</h4>
                  <p className="text-[10px] text-foreground/50 leading-relaxed mt-1">
                    Licensed studio. Spore-tested autoclave. Zero-contamination standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side form panel */}
            <div className="lg:col-span-2 bg-charcoal-medium border border-charcoal-light p-8 md:p-10 rounded-2xl">
              {isSuccess ? (
                /* Success Screen */
                <div className="text-center py-12 flex flex-col items-center gap-6 animate-scale-up">
                  <CheckCircle2 className="h-16 w-16 text-gold-primary animate-bounce" />
                  <div>
                    <h2 className="font-serif text-2xl font-black text-gold-accent uppercase tracking-wider">
                      Inquiry Received
                    </h2>
                    <p className="text-xs text-gold-primary/75 tracking-widest uppercase mt-1">
                      Confirmation: {ticketId}
                    </p>
                  </div>
                  <div className="w-12 h-[1px] bg-gold-primary" />
                  <p className="text-xs text-foreground/80 leading-relaxed max-w-md">
                    Thank you, <strong className="text-foreground">{formData.name}</strong>. Your request has been logged. Our studio coordinator will review the concept with <strong className="text-foreground">{formData.artist}</strong> and contact you via <strong className="text-gold-accent">{formData.contactMethod}</strong> within 3 business days.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-charcoal-dark px-8 py-3 rounded-xl font-serif text-xs uppercase tracking-widest font-bold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* The Booking Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-sm">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors placeholder:text-foreground/20"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors placeholder:text-foreground/20"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Contact Method */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors placeholder:text-foreground/20"
                        placeholder="e.g. +91 89218 65894"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contactMethod" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors"
                      >
                        <option value="Email">Email</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="WhatsApp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Preferred Artist & Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="artist" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Preferred Artist
                      </label>
                      <select
                        id="artist"
                        name="artist"
                        value={formData.artist}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors"
                      >
                        {artists.map((a, idx) => (
                          <option key={idx} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="style" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Tattoo Style
                      </label>
                      <select
                        id="style"
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors"
                      >
                        {styles.map((s, idx) => (
                          <option key={idx} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Size & Placement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="size" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Approximate Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors"
                      >
                        {sizes.map((sz, idx) => (
                          <option key={idx} value={sz}>{sz}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="placement" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                        Body Placement
                      </label>
                      <select
                        id="placement"
                        name="placement"
                        value={formData.placement}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors"
                      >
                        {placements.map((p, idx) => (
                          <option key={idx} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Design Description */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                      Design Description & Concept *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors placeholder:text-foreground/20 text-xs leading-relaxed"
                      placeholder="Describe what you want to tattoo, elements to include, meaning, and if there are any surrounding tattoos to blend with..."
                    />
                  </div>

                  {/* Date preferences */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="dates" className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                      Preferred Months / Availability *
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      required
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full bg-charcoal-dark border border-charcoal-light text-foreground px-4 py-3 rounded-xl focus:border-gold-primary focus:outline-none transition-colors placeholder:text-foreground/20"
                      placeholder="e.g. October, Weekends or Tuesdays"
                    />
                  </div>

                  {/* Reference Image upload */}
                  <div className="flex flex-col gap-2">
                    <span className="font-serif text-xs uppercase tracking-wider text-foreground/80 font-semibold">
                      Reference Images (Optional)
                    </span>
                    <div className="border border-dashed border-charcoal-light hover:border-gold-primary/30 transition-colors p-6 rounded-xl bg-charcoal-dark text-center relative flex flex-col items-center justify-center">
                      <input
                        type="file"
                        id="reference"
                        name="reference"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                      />
                      <div className="w-16 h-16 opacity-30 mb-2">
                        <TattooPlaceholder type="ambience" className="h-full border-none" />
                      </div>
                      <span className="text-xs text-gold-primary hover:underline font-serif tracking-wide">
                        {formData.reference ? formData.reference : "Click to select a file"}
                      </span>
                      <p className="text-[10px] text-foreground/40 mt-1">PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-primary hover:bg-gold-accent disabled:bg-gold-primary/50 text-charcoal-dark py-4 rounded-xl font-serif uppercase tracking-widest font-black transition-colors flex items-center justify-center gap-2 mt-4 hover:cursor-pointer shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingAction />
    </>
  );
}
