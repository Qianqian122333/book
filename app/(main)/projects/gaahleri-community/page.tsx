"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Heart,
  User,
  Clock,
  Users,
  Maximize2,
  X,
  Target,
  Flag,
  Search,
  Lightbulb,
  TrendingUp,
  MessageCircle,
  Download,
} from "lucide-react";

/* ─── Tech stack icons ─── */
const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/shopify.svg", label: "Shopify" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
];

/* ─── Story heading words ─── */
const storyWords = [
  "I",
  "used",
  "data-driven",
  "insights",
  "to",
  "elevate",
  "the",
  "brand",
  "beyond",
  "the",
  "checkout",
  "page.",
];

const storyWords2 = [
  "Validation",
  "Through",
  "Action:",
  "Turning",
  "Holidays",
  "and",
  "Hardships",
  "into",
  "Engagement",
];

const storyWords3 = [
  "Systematizing",
  "the",
  "Community",
  "Hub:",
  "The",
  "Architecture",
  "of",
  "Inspiration",
];

export default function GaahleriCommunityPage() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyRef2 = useRef<HTMLDivElement>(null);
  const storyRef3 = useRef<HTMLDivElement>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    let observerInstance: IntersectionObserver | null = null;
    let observer2Instance: IntersectionObserver | null = null;
    let observer3Instance: IntersectionObserver | null = null;

    async function init() {
      try {
        const mod = await import("gsap");
        const gsap = mod.default || mod;

        /* ─ Title wave animation ─ */
        if (waveRef.current) {
          const words = waveRef.current.querySelectorAll(".wave-word");
          gsap.fromTo(
            words,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.12,
              ease: "back.out(1.7)",
            },
          );
        }

        /* ─ Story heading 1 animation ─ */
        if (storyRef.current) {
          const el = storyRef.current;
          const words = el.querySelectorAll<HTMLElement>(".story-word");
          observerInstance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observerInstance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observerInstance.observe(el);
        }

        /* ─ Story heading 2 animation ─ */
        if (storyRef2.current) {
          const el2 = storyRef2.current;
          const words2 = el2.querySelectorAll<HTMLElement>(".story-word");
          observer2Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words2,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer2Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observer2Instance.observe(el2);
        }

        /* ─ Story heading 3 animation ─ */
        if (storyRef3.current) {
          const el3 = storyRef3.current;
          const words3 = el3.querySelectorAll<HTMLElement>(".story-word");
          observer3Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words3,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer3Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observer3Instance.observe(el3);
        }
      } catch {
        if (waveRef.current) {
          waveRef.current
            .querySelectorAll<HTMLElement>(".wave-word")
            .forEach((w) => (w.style.opacity = "1"));
        }
        [storyRef, storyRef2, storyRef3].forEach((ref) => {
          if (ref.current) {
            ref.current
              .querySelectorAll<HTMLElement>(".story-word")
              .forEach((w) => (w.style.opacity = "1"));
          }
        });
      }
    }

    init();
    return () => {
      observerInstance?.disconnect();
      observer2Instance?.disconnect();
      observer3Instance?.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-white text-black">
      {/* ── Image Lightbox ── */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedImage}
              alt="Enlarged view"
              width={1400}
              height={1050}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl mx-auto"
            />
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/home#projects"
            className="inline-flex items-center gap-2 text-black hover:text-zinc-600 transition-colors mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="text-center mb-8">
            <h1
              ref={waveRef}
              className="text-black relative inline-block text-5xl md:text-6xl font-extrabold"
            >
              {["Gaahleri", "Community"].map((word, i) => (
                <span
                  key={i}
                  className="wave-word inline-block mr-[0.3em]"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-lg text-zinc-500 leading-relaxed text-center max-w-3xl mx-auto">
            Gaahleri Community bridges the gap between hardware ownership and
            creative mastery. By transforming a transactional store into a
            resource-rich hub, we turned &quot;one-time buyers&quot; into
            &quot;long-term brand advocates.&quot;
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OVERVIEW — Hero Image + Meta
          ═══════════════════════════════════════════════════════ */}
      <section id="overview" className="w-full">
        <div className="relative w-full">
          <Image
            src="/comminity/comminity-hero.webp"
            alt="Gaahleri Community Hero"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p
            className="text-center text-4xl text-black font-bold mb-16"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I Built the Bridge Between Product and Passion
          </p>

          {/* Role / Duration / Collaboration */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16 text-center">
            <div className="space-y-1">
              <div className="flex justify-center mb-3">
                <User className="w-7 h-7 text-black" />
              </div>
              <p
                className="font-bold text-black mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Role
              </p>
              <p
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                UX Designer
              </p>
              <p
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Front-end Developer
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-3">
                <Clock className="w-7 h-7 text-black" />
              </div>
              <p
                className="font-bold text-black mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Duration
              </p>
              <p
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                6 months
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-3">
                <Users className="w-7 h-7 text-black" />
              </div>
              <p
                className="font-bold text-black mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Collaboration
              </p>
              <p
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                3D Design Team
              </p>
              <p
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Marketing Team
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.label}
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <span
                    className="text-xs font-bold tracking-wide text-zinc-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="https://www.gaahleri.com/pages/gaahleri-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Gaahleri Community
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 1
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords.map((word, i) => (
              <span
                key={i}
                className="story-word inline-block mr-[0.3em]"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 1: THE CHALLENGE
          ═══════════════════════════════════════════════════════ */}
      <section id="challenge" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Challenge */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Target className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">The Challenge</h3>
            </div>

            {/* Old ecommerce screenshot */}
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 mb-4"
              onClick={() => setZoomedImage("/comminity/ecommerce-old.webp")}
            >
              <Image
                src="/comminity/ecommerce-old.webp"
                alt="Old E-commerce Store"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-black" />
              </div>
            </div>
            <p
              className="text-center text-sm text-zinc-500 mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The original &quot;buy-and-leave&quot; store
            </p>

            <div className="ml-10 space-y-3">
              <p className="text-lg text-zinc-500 leading-relaxed">
                Gaahleri&apos;s website was a standard &quot;buy-and-leave&quot;
                e-commerce store.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Brand loyalty was low because there was{" "}
                <span className="font-bold text-black">
                  no reason to return after purchase.
                </span>
              </p>
            </div>
          </div>

          {/* Stakeholder Needs */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Flag className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">Stakeholder Needs</h3>
            </div>

            <p className="ml-10 text-lg text-zinc-500 leading-relaxed mb-8">
              Increase website traffic and user retention.
            </p>

            {/* Stakeholder vs Me */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-2xl border-2 border-zinc-200 p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <p
                    className="font-bold text-black"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Stakeholders (Sales-driven)
                  </p>
                  <span
                    className="text-xs bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full border border-zinc-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Product-centric
                  </span>
                </div>
                <p className="text-black leading-relaxed">
                  &quot;We need more product listings and bigger &apos;Buy
                  Now&apos; buttons.&quot;
                </p>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  They wanted: a high-conversion product catalog.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-zinc-200 p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <p
                    className="font-bold text-black"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Me
                  </p>
                  <span
                    className="text-xs bg-black text-white px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    User-centric
                  </span>
                </div>
                <p className="text-black leading-relaxed">
                  &quot;Why would a user visit our site if they aren&apos;t
                  ready to buy a new airbrush today?&quot;
                </p>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  I wanted to know: what do users actually do with our products
                  once they take them out of the box?
                </p>
              </div>
            </div>
          </div>

          {/* Discovery: The 24k Insight */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-6">
              <Search className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                My Discovery: The &quot;24k Insight&quot;
              </h3>
            </div>

            {/* Data Analysis */}
            <div className="mb-10">
              <h4
                className="font-bold text-black mb-4 ml-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Data Analysis
              </h4>
              <p className="text-lg text-zinc-500 leading-relaxed ml-1 mb-8">
                While auditing YouTube performance, I found a
                &quot;Workstation&quot; video with{" "}
                <span className="font-bold text-black">24,000 views</span>, far
                exceeding the 6k average for product demo videos.
              </p>

              {/* Two video comparison images side by side */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden aspect-video"
                    onClick={() => setZoomedImage("/comminity/24k video.webp")}
                  >
                    <Image
                      src="/comminity/24k video.webp"
                      alt="Workstation Video with 24k Views"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <p
                    className="mt-3 text-center text-sm text-zinc-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Workstation video · 24k views
                  </p>
                  <div className="mt-2 flex justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=U9EroOX14ys&t=85s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-all text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Watch the Video
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden aspect-video"
                    onClick={() =>
                      setZoomedImage("/comminity/other video .webp")
                    }
                  >
                    <Image
                      src="/comminity/other video .webp"
                      alt="Product Demo Videos with ~6k Views"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <p
                    className="mt-3 text-center text-sm text-zinc-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Product demo videos · avg. 6k views
                  </p>
                  <div className="mt-2 flex justify-center">
                    <a
                      href="https://www.youtube.com/@gaahleriofficial/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-zinc-800 transition-all text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      View Streaming Data
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Video Went Viral */}
            <div className="mb-10">
              <h4
                className="font-bold text-black mb-6 ml-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Why This Video Went Viral
              </h4>
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50"
                    onClick={() => setZoomedImage("/comminity/feedback1.png")}
                  >
                    <Image
                      src="/comminity/feedback1.png"
                      alt="User Feedback 1"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50"
                    onClick={() => setZoomedImage("/comminity/feedback2.png")}
                  >
                    <Image
                      src="/comminity/feedback2.png"
                      alt="User Feedback 2"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-zinc-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50">
                      <th
                        className="text-left px-6 py-4 font-bold text-black"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Before (Product-centric)
                      </th>
                      <th
                        className="text-left px-6 py-4 font-bold text-black"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        This Video (User-centric)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { before: "6k views", after: "24k views" },
                      { before: '"0.3mm nozzle"', after: '"Messy desk → clean zone"' },
                      { before: '"Buy our bundle"', after: '"Build your own"' },
                      { before: "Sell the tool", after: "Solve the problem" },
                      { before: "Watch our ad", after: "Free 3D model" },
                      { before: "Free STL as bonus", after: "Free STL as solution" },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors"
                      >
                        <td
                          className="px-6 py-4 text-zinc-500"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {row.before}
                        </td>
                        <td
                          className="px-6 py-4 font-bold text-black"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {row.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Updated User Persona */}
            <div className="mb-10">
              <h4
                className="font-bold text-black mb-6 ml-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Updated User Persona
              </h4>
              <div className="grid gap-6 md:grid-cols-2 items-stretch mb-8">
                {/* Main User image */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                    onClick={() => setZoomedImage("/comminity/main%20user.png")}
                  >
                    <Image
                      src="/comminity/main%20user.png"
                      alt="63.6% of users are model makers"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <p
                    className="mt-3 text-center text-sm text-zinc-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    63.6% of users are model makers
                  </p>
                </div>
                {/* Community Persona image */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                    onClick={() =>
                      setZoomedImage("/comminity/community-persona.png")
                    }
                  >
                    <Image
                      src="/comminity/community-persona.png"
                      alt="User Persona"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <p
                    className="mt-3 text-center text-sm text-zinc-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    User Persona
                  </p>
                </div>
              </div>

              {/* User Pain Points */}
              <div className="space-y-3 ml-1">
                <h4
                  className="font-bold text-black mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  User Pain Points
                </h4>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">
                    Users are tired of searching for free, high-quality 3D models.
                  </span>
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">
                    Users lack inspiration:
                  </span>{" "}
                  they want to know what real-life problems 3D models can actually solve.
                </p>
              </div>
            </div>
          </div>

          {/* My Ideation */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">My Ideation: An Ecosystem of Value</h3>
            </div>
            <p className="text-lg text-zinc-500 leading-relaxed ml-10 mb-6">
              <span className="font-bold text-black">
                User-centered problem:
              </span>{" "}
              Engagement stops once the transaction is over.
            </p>

            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 ml-10 mb-6"
              onClick={() =>
                setZoomedImage("/comminity/community ideation.png")
              }
            >
              <Image
                src="/comminity/community ideation.png"
                alt="My Ideation: An Ecosystem of Value"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-black" />
              </div>
            </div>
            <p
              className="text-center text-sm text-zinc-500 mb-6 ml-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              My Ideation: An Ecosystem of Value
            </p>

            <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6 ml-10">
              <span
                className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User-centered
              </span>
              <p className="text-lg text-black leading-relaxed font-bold">
                Provide free, high-value digital assets (STL files) and
                tutorials that solve real user problems — turning a basic tool
                into a complete, ready-to-use workspace solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 2
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef2}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords2.map((word, i) => (
              <span
                key={i}
                className="story-word inline-block mr-[0.3em]"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2: VALIDATION
          ═══════════════════════════════════════════════════════ */}
      <section id="validation" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Validation 1 — Halloween */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm mb-6 border border-zinc-200">
              <span style={{ fontFamily: "var(--font-body)" }}>
                Validation 1 · The Halloween Experiment
              </span>
            </div>

            <p className="text-lg text-zinc-500 leading-relaxed mb-2">
              <span className="font-bold text-black">Insight:</span> Users want
              a reason to use their pigments{" "}
              <span className="font-bold text-black">right now.</span>
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-2">
              <span className="font-bold text-black">Action:</span> We launched
              a &quot;pet-safe&quot; painting video + free 3D pumpkin STL files
              + a curated pigment bundle.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              <span className="font-bold text-black">Outcome:</span> The first
              wave of organic user-generated content. Pigment set sales spiked
              because the &quot;reason to paint&quot; was provided for free.
            </p>

            {/* Halloween images */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() =>
                    setZoomedImage("/comminity/%E4%B8%87%E5%9C%A3%E8%8A%821.png")
                  }
                >
                  <Image
                    src="/comminity/%E4%B8%87%E5%9C%A3%E8%8A%821.png"
                    alt="Halloween Campaign 1"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() =>
                    setZoomedImage("/comminity/%E4%B8%87%E5%9C%A3%E8%8A%822.png")
                  }
                >
                  <Image
                    src="/comminity/%E4%B8%87%E5%9C%A3%E8%8A%822.png"
                    alt="Halloween Campaign 2"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() =>
                    setZoomedImage("/comminity/halloween user.webp")
                  }
                >
                  <Image
                    src="/comminity/halloween user.webp"
                    alt="Halloween User-Generated Content"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  First wave of organic user-generated content
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() =>
                    setZoomedImage("/comminity/halloween user.webp")
                  }
                >
                  <Image
                    src="/comminity/halloween user.webp"
                    alt="Halloween User-Generated Content"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  First wave of organic user-generated content
                </p>
              </div>
            </div>
          </div>

          {/* Validation 2 — Christmas */}
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm mb-6 border border-zinc-200">
              <span style={{ fontFamily: "var(--font-body)" }}>
                Validation 2 · The Christmas Pivot: From Flaw to Feature
              </span>
            </div>

            <p className="text-lg text-zinc-500 leading-relaxed mb-2">
              <span className="font-bold text-black">Conflict:</span> Users
              reported that airbrush cup lids sometimes get stuck – a negative
              product experience.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-2">
              <span className="font-bold text-black">Strategy:</span> We
              designed Christmas-themed 3D-printable lid grips (Santa hats,
              Christmas trees, etc.).
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-2">
              <span className="font-bold text-black">Message:</span> &quot;This
              idea came directly from your feedback.&quot;
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              <span className="font-bold text-black">Outcome:</span> Negative
              sentiment disappeared. Users began printing, customizing, and
              sharing their own lid designs – marking the birth of co-creation.
            </p>

            {/* Born from your feedback — full width */}
            <div className="mb-8">
              <div
                className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50"
                onClick={() =>
                  setZoomedImage("/comminity/born from your feedback.png")
                }
              >
                <Image
                  src="/comminity/born from your feedback.png"
                  alt="Born From Your Feedback"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-black" />
                </div>
              </div>
              <p
                className="mt-3 text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &quot;Born from your feedback&quot; campaign
              </p>
            </div>

            {/* Co-creation community page — duplicated */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() =>
                    setZoomedImage("/comminity/charisma webpage.png")
                  }
                >
                  <Image
                    src="/comminity/charisma webpage.png"
                    alt="Charisma Webpage"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Co-creation community page
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() =>
                    setZoomedImage("/comminity/charisma webpage.png")
                  }
                >
                  <Image
                    src="/comminity/charisma webpage.png"
                    alt="Charisma Webpage"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Co-creation community page
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 3
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef3}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords3.map((word, i) => (
              <span
                key={i}
                className="story-word inline-block mr-[0.3em]"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3: COMMUNITY HUB FEATURES
          ═══════════════════════════════════════════════════════ */}
      <section id="features" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1 — STL Vault */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm mb-6 border border-zinc-200">
              <span style={{ fontFamily: "var(--font-body)" }}>
                Feature 1 · Free Resource Center (STL Vault)
              </span>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <Download className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <div>
                <p className="text-lg text-zinc-500 leading-relaxed mb-2">
                  <span className="font-bold text-black">Pain point:</span>{" "}
                  Professional workstation accessories are expensive or hard to
                  find.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span> A
                  centralized free download hub (wall mounts, desk organizers,
                  cup grips). This gave users a reason to visit the site often –
                  not yearly.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden aspect-video"
                  onClick={() => setZoomedImage("/comminity/resource1.png")}
                >
                  <Image
                    src="/comminity/resource1.png"
                    alt="Resource Center STL Vault 1"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Free Resource Hub
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden aspect-video"
                  onClick={() => setZoomedImage("/comminity/resource2.png")}
                >
                  <Image
                    src="/comminity/resource2.png"
                    alt="Resource Center STL Vault 2"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  STL File Downloads
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 — Discord */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm mb-6 border border-zinc-200">
              <span style={{ fontFamily: "var(--font-body)" }}>
                Feature 2 · Discord &quot;Creator Lounge&quot;
              </span>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <div>
                <p className="text-lg text-zinc-500 leading-relaxed mb-2">
                  <span className="font-bold text-black">Pain point:</span> No
                  space for real-time feedback or community sharing.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span> A
                  direct site-to-Discord pipeline where users showcase their
                  work, creating a self-sustaining loop of social proof.
                </p>
              </div>
            </div>

            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50"
              onClick={() => setZoomedImage("/comminity/discord.png")}
            >
              <Image
                src="/comminity/discord.png"
                alt="Discord Creator Lounge"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-black" />
              </div>
            </div>
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Discord &quot;Creator Lounge&quot; integration
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          RESULTS & IMPACT
          ═══════════════════════════════════════════════════════ */}
      <section
        id="results"
        className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-wider text-zinc-500 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ── Results &amp; Impact ──
            </p>
            <h2 className="text-black mb-4 text-4xl md:text-5xl font-extrabold">
              From a &quot;linear shop&quot; to a &quot;circular community&quot;
            </h2>
          </div>

          {/* Flywheel diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { step: "01", label: "Shop", sub: "Buy" },
              { step: "02", label: "Community", sub: "Learn / Download" },
              { step: "03", label: "Discord", sub: "Share / Connect" },
              { step: "04", label: "Repeat Purchase", sub: "New Tools" },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center bg-white rounded-2xl border-2 border-zinc-200 p-6 shadow-sm"
              >
                <span
                  className="text-xs font-bold text-zinc-400 mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.step}
                </span>
                <p
                  className="font-bold text-black text-base mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-xs text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.sub}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <span className="text-zinc-400 text-xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Outcome highlight */}
          <div className="bg-white border-l-4 border-black rounded-r-2xl p-6 mb-14">
            <span
              className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-black leading-relaxed font-bold">
              We didn&apos;t just sell more airbrushes – we built a
              &quot;creative home.&quot; Brand perception shifted from hardware
              vendor to &quot;creator ally,&quot; drastically reducing negative
              feedback and doubling the value of each customer.
            </p>
          </div>

          {/* User review placeholder */}
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300 bg-white aspect-3/1">
            <div className="text-center p-6 space-y-3">
              <div className="mx-auto w-14 h-14 rounded-xl border-2 border-zinc-300 flex items-center justify-center bg-[#F8F4EF]">
                <TrendingUp className="w-6 h-6 text-black/40" />
              </div>
              <p
                className="text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REFLECTIONS
          ═══════════════════════════════════════════════════════ */}
      <section
        id="reflections"
        className="w-full bg-[#F8F4EF] relative overflow-hidden"
      >
        <div className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-black mb-4 text-4xl md:text-5xl font-extrabold">
              Reflections
            </h2>
            <p className="text-xl text-zinc-500 mt-6 max-w-3xl mx-auto">
              The UX of Relationship Building
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                Icon: Search,
                title: "Data as a Compass",
                body: "That 24k video was the North Star. UX design is most powerful when it amplifies what users are already signaling they want.",
              },
              {
                Icon: Lightbulb,
                title: 'Turning "Bugs" into "Features"',
                body: "The Christmas lid project taught me that transparency and co-creation build more trust than perfect marketing. A flaw is just an opportunity for a collaborative solution.",
              },
              {
                Icon: TrendingUp,
                title: "Systemic Value Over Isolated Features",
                body: "A community is not a 'page' – it's a system. By aligning STL files, Discord, and Shopify, I created a flywheel: every free download fueled a future sale.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-md border-2 border-zinc-200 transition-all hover:shadow-xl hover:-translate-y-2 text-center flex flex-col items-center"
              >
                <div className="mb-4">
                  <item.Icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-black mb-3">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{item.body}</p>
                <div className="mt-6 w-16 h-1 bg-zinc-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-black mb-6">
            Not Just a Store, But a Creator&apos;s Home
          </h2>
          <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            See how Gaahleri evolved from a hardware seller into the #1 hub for
            airbrush enthusiasts. Gaahleri&apos;s community is still growing.
            This project taught me that true UX is not just about designing
            interfaces – it&apos;s about designing relationships, trust, and the
            possibility of co-creation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white border-2 border-zinc-300 text-black px-10 py-5 rounded-lg hover:bg-zinc-100 transition-all transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact Me
              <Heart className="w-5 h-5" />
            </Link>
            <a
              href="https://www.gaahleri.com/pages/gaahleri-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Gaahleri Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
