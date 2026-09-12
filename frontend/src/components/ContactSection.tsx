import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, Terminal, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const emailAddress = 'pranayogale7@gmail.com';
  const phoneNumber = '+91 9156583932';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [lastSubmittedPayload, setLastSubmittedPayload] = useState<{
    name: string;
    email: string;
    role: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setLastSubmittedPayload({ ...formData });

    const currentForm = { ...formData };
    let delivered = false;

    // 1. Send via Node.js Backend API if active
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || '';
      if (backendUrl) {
        const res = await fetch(`${backendUrl}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentForm),
        });
        if (res.ok) delivered = true;
      }
    } catch (err) {
      console.log('Backend dispatch:', err);
    }

    // 2. Direct Web API dispatch (Web3Forms to pranayogale7@gmail.com)
    if (!delivered) {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'de01267d-9989-4951-b8d1-17e4b5dfff2b';
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: currentForm.name,
            email: currentForm.email,
            subject: `⚡ Portfolio Contact: ${currentForm.name} (${currentForm.role})`,
            message: `Candidate/Recruiter Details:\n--------------------------------\nName: ${currentForm.name}\nEmail: ${currentForm.email}\nOpportunity / Role: ${currentForm.role}\n\nMessage:\n${currentForm.message}\n--------------------------------`,
            from_name: 'Pranay Portfolio Notification',
          }),
        });
      } catch (e) {
        console.log('Web dispatch error:', e);
      }
    }

    setTimeout(() => {
      setIsTransmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', role: '', message: '' });
    }, 600);
  };

  const getMailtoUrl = () => {
    if (!lastSubmittedPayload) {
      return `mailto:${emailAddress}?subject=Portfolio%20Inquiry%20from%20Recruiter`;
    }
    const subject = encodeURIComponent(`Portfolio Inquiry: ${lastSubmittedPayload.name} (${lastSubmittedPayload.role})`);
    const body = encodeURIComponent(
      `Hi Pranay,\n\nName: ${lastSubmittedPayload.name}\nEmail: ${lastSubmittedPayload.email}\nRole / Opportunity: ${lastSubmittedPayload.role}\n\nMessage:\n${lastSubmittedPayload.message}\n`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-left space-y-2 pb-4 border-b border-orange-900/30">
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>05 // DIRECT TRANSMISSION &amp; GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">
            INITIATE CONTACT
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl font-light">
            Available for Full-Stack Software Engineering, AI/ML Developer roles, and high-impact engineering teams.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border-t border-orange-500/40 border-b border-black/80 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-950/60 border border-orange-500/40">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-base text-white">
                    DIRECT EMAIL
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Guaranteed &lt;24h Response
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/80 border border-orange-500/30 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-orange-300 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-orange-950/80 hover:bg-orange-900 border border-orange-500/40 text-white transition-all shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Phone & Location Card */}
            <div className="glass-card rounded-2xl p-6 border-t border-orange-500/40 border-b border-black/80 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-950/60 border border-orange-500/40">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-base text-white">
                    PHONE &amp; LOCATION
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Direct Contact // Chhatrapati Sambhajinagar
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-black/60 border border-orange-900/30">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href={`tel:${phoneNumber}`} className="hover:text-orange-300 transition-colors">
                    {phoneNumber}
                  </a>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-black/60 border border-orange-900/30">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6 border-t border-orange-500/40 border-b border-black/80 shadow-xl space-y-4">
              <h3 className="font-mono font-bold text-sm text-slate-200 uppercase tracking-wider">
                NETWORK &amp; REPOSITORIES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/Pranay25o"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-black/60 border border-orange-900/30 hover:border-orange-400 hover:bg-orange-950/40 text-xs font-mono text-slate-200 transition-all amaterasu-hover"
                >
                  <GithubIcon className="w-4 h-4 text-orange-400" />
                  <span>github.com/Pranay25o</span>
                </a>

                <a
                  href="https://linkedin.com/in/pranay-ogale"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-black/60 border border-orange-900/30 hover:border-orange-400 hover:bg-orange-950/40 text-xs font-mono text-slate-200 transition-all amaterasu-hover"
                >
                  <LinkedinIcon className="w-4 h-4 text-orange-400" />
                  <span>linkedin/pranay-ogale</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-2xl glass-card-subtle border border-orange-900/40 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#f97316]" />
              <div className="text-xs font-mono text-slate-300">
                STATUS: <span className="text-orange-400 font-bold">AVAILABLE FOR HIRE</span> (FULL-TIME &amp; IMMEDIATE JOINING)
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Terminal */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-t border-orange-500/40 border-b border-black/80 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-orange-900/30">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span>TRANSMISSION TERMINAL // DIRECT DISPATCH</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-5 rounded-xl bg-orange-950/40 border border-orange-500/50"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-orange-600/20 border border-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.7)]">
                    <CheckCircle2 className="w-7 h-7 text-orange-400" />
                  </div>
                  <h4 className="text-xl font-mono font-bold text-white">
                    TRANSMISSION RECORDED // DISPATCH READY
                  </h4>
                  <p className="text-sm font-sans text-slate-300 max-w-md mx-auto">
                    Your transmission has been queued for Pranay Ogale (<span className="text-orange-400 font-mono">pranayogale7@gmail.com</span>).
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={getMailtoUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 border border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>OPEN IN GMAIL / MAIL APP</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-mono text-xs font-medium text-slate-300 hover:text-white bg-black/60 hover:bg-black/90 border border-orange-900/40 transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-400">
                        YOUR NAME / ORGANIZATION *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager / Tech Recruiter"
                        className="w-full px-4 py-3 rounded-xl bg-black/70 border border-orange-900/40 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-sm font-mono text-white placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-400">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/70 border border-orange-900/40 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-sm font-mono text-white placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400">
                      OPPORTUNITY TYPE / ROLE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Full-Stack Engineer / AI-ML Developer / High-Impact Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-black/70 border border-orange-900/40 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-sm font-mono text-white placeholder:text-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400">
                      MESSAGE / PROJECT DETAILS *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide job details, interview scheduling, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-black/70 border border-orange-900/40 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-sm font-mono text-white placeholder:text-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className="w-full py-4 rounded-xl font-mono text-sm font-bold tracking-wider text-white bg-gradient-to-r from-orange-700 via-amber-600 to-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.8)] border border-orange-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isTransmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>DISPATCHING TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-orange-200" />
                        <span>DISPATCH TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
