"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Header */}
      <section className="px-6 pt-16 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div />
          <h1 className="text-xl font-bold tracking-widest sm:text-2xl text-left">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                Get in Touch
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, and
                interesting projects. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:qianqianwei112233@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-700 hover:text-black transition-colors group"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
                qianqianwei112233@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/qianqianwei112233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-700 hover:text-black transition-colors group"
              >
                <LinkedInIcon className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
                linkedin.com/in/qianqianwei112233
              </a>
              <a
                href="https://github.com/Qianqian122333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-700 hover:text-black transition-colors group"
              >
                <GitHubIcon className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
                github.com/Qianqian122333
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-700">
                <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <p>
                  Netherlands
                  <br />
                  <span className="text-zinc-400">Willing to relocate</span>
                  <br />
                  <span className="text-zinc-400">
                    Available for remote work
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#F8F4EF] rounded-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-black transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-black transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-black transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-600">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Failed to send. Please try again or email directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
