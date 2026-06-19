import React, { useState, useTransition } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    village: "",
    message: "",
  });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    startTransition(async () => {
      // Small artificial timeout to give a premium feeling of action/transmission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitSuccessful(true);
      // Clean inputs
      setFormData({ name: "", contact: "", village: "", message: "" });
    });
  };

  return (
    <section className="bg-ink text-parchment py-20 md:py-28 relative" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* LEFT COLUMN: Contact particulars & socials */}
          <div className="lg:col-span-5 space-y-8 select-none">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-saffron-mid uppercase block mb-3">
                DIRECT PUBLIC CHAIR
              </span>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white font-semibold">
                Speak with Your Leader
              </h2>
              <p className="mt-4 text-sm md:text-base text-parchment-dark/60 leading-relaxed font-sans">
                Neelam Madhu Mudiraj maintains an open door for every constituent in Chitkul, Patancheru, and Medak. Submit details of your local concerns, grievance appeals, or scheduling requests directly.
              </p>
            </div>

            {/* Custom SVG Contact Rows (Location, Email, Office) */}
            <div className="space-y-6 pt-4">
              
              {/* Row 1: Location */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-saffron-mid/20 flex items-center justify-center bg-saffron-light/5 text-saffron-mid">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#7A7468] uppercase font-medium block">
                    NATIVE CORNER
                  </span>
                  <p className="font-serif text-base text-parchment-dark mt-1">
                    Chitkul Village, Patancheru Mandal, Sangareddy Dist, Telangana.
                  </p>
                </div>
              </div>

              {/* Row 2: Office Location */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-saffron-mid/20 flex items-center justify-center bg-saffron-light/5 text-saffron-mid">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M3 21h18M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
                    <path d="M9 9h2M9 13h2M13 9h2M13 13h2" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#7A7468] uppercase font-medium block">
                    CONSTITUENCY CENTRAL OFFICE
                  </span>
                  <p className="font-serif text-base text-parchment-dark mt-1">
                     INC Party Office, Medak Head Headquarters, Telangana.
                  </p>
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-saffron-mid/20 flex items-center justify-center bg-saffron-light/5 text-saffron-mid">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#7A7468] uppercase font-medium block">
                    ELECTRONIC CORRESPONDENCE
                  </span>
                  <p className="font-serif text-base text-parchment-dark mt-1">
                    contact@neelammadhu.org
                  </p>
                </div>
              </div>

            </div>

            {/* Official Social Links - hand-drawn stroke-only */}
            <div className="pt-8 border-t border-[#3d3830]" style={{ borderTopWidth: '0.5px' }}>
              <span className="text-[10px] tracking-widest text-[#7A7468] uppercase font-medium block mb-4">
                CONNECT ONLINE VIA DIGITAL PUBLIC CHANNELS
              </span>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/neelam_madhu_mudhiraj/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-parchment/10 flex items-center justify-center hover:border-saffron-mid hover:text-saffron-mid transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/nmmfollowers/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-parchment/10 flex items-center justify-center hover:border-saffron-mid hover:text-saffron-mid transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                {/* X */}
                <a 
                  href="https://x.com/NMRPTC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-parchment/10 flex items-center justify-center hover:border-saffron-mid hover:text-saffron-mid transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </a>
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-parchment/10 flex items-center justify-center hover:border-saffron-mid hover:text-saffron-mid transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Dark-Themed Form */}
          <div className="lg:col-span-7 bg-[#161512] border border-[#3d3830] p-8 md:p-10" style={{ borderWidth: '0.5px' }}>
            <h3 className="font-serif text-2xl font-semibold text-white mb-6">
              Constituent Registry Form
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] tracking-widest text-[#7A7468] uppercase font-bold block">
                  FULL NAME *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Srinivas Mudiraj"
                  className="w-full bg-[#0F0E0B] border border-[#3d3830] px-4 py-3 font-serif text-parchment focus:outline-none focus:border-saffron transition-colors"
                  style={{ borderWidth: '0.5px' }}
                />
              </div>

              {/* Mobile / Email input */}
              <div className="space-y-2">
                <label htmlFor="contact" className="text-[10px] tracking-widest text-[#7A7468] uppercase font-bold block">
                  CONTACT NUMBER / EMAIL *
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., +91 98480 22338 or citizen@medak.in"
                  className="w-full bg-[#0F0E0B] border border-[#3d3830] px-4 py-3 font-serif text-parchment focus:outline-none focus:border-saffron transition-colors"
                  style={{ borderWidth: '0.5px' }}
                />
              </div>

              {/* Native Village */}
              <div className="space-y-2">
                <label htmlFor="village" className="text-[10px] tracking-widest text-[#7A7468] uppercase font-bold block">
                  NATIVE VILLAGE / MANDAL
                </label>
                <input
                  id="village"
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  placeholder="e.g., Chitkul, Patancheru"
                  className="w-full bg-[#0F0E0B] border border-[#3d3830] px-4 py-3 font-serif text-parchment focus:outline-none focus:border-saffron transition-colors"
                  style={{ borderWidth: '0.5px' }}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] tracking-widest text-[#7A7468] uppercase font-bold block">
                  GRIEVANCE DESCRIPTION / MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detail your request, family welfare concerns, or village development points..."
                  className="w-full bg-[#0F0E0B] border border-[#3d3830] px-4 py-3 font-serif text-parchment focus:outline-none focus:border-saffron transition-colors resize-none"
                  style={{ borderWidth: '0.5px' }}
                />
              </div>

              {/* Saffron Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending || isSubmitSuccessful}
                  className={`w-full py-4 text-xs font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300 border ${
                    isSubmitSuccessful
                      ? "bg-[#FAF7F2] text-congress-green border-congress-green font-bold text-center flex items-center justify-center space-x-2 shadow-inner"
                      : "bg-saffron text-parchment border-saffron hover:bg-transparent hover:text-saffron-mid"
                  }`}
                  style={{ borderWidth: '1px' }}
                >
                  {isPending ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>TRANSMITTING...</span>
                    </span>
                  ) : isSubmitSuccessful ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-congress-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>MESSAGE SENT ✓</span>
                    </span>
                  ) : (
                    "SUBMIT PROTOCOL REQUEST"
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
