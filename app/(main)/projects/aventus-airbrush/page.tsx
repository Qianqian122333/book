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
  ClipboardList,
  Search,
  FolderOpen,
  LayoutTemplate,
  Target,
  Wrench,
  Palette,
  Sparkles,
  Code2,
  Handshake,
  Flag,
} from "lucide-react";

/* ─── Tech stack icons ─── */
const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/shopify.svg", label: "Shopify" },
];

/* ─── Story heading words ─── */
const storyWords = ["Marketing", "Wanted", "Everything."];

const storyWords2 = ["I", "Made", "Users", "Find", "What", "Matters."];

const storyWords3 = ["Design", "under", "technical", "constraints"];

const storyWords4 = ["Elevate", "the", "Customization", "Experience"];

const storyWords5 = ["November", "Launch", "Outcome"];

export default function AventusAirbrushPage() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyRef2 = useRef<HTMLDivElement>(null);
  const storyRef3 = useRef<HTMLDivElement>(null);
  const storyRef4 = useRef<HTMLDivElement>(null);
  const storyRef5 = useRef<HTMLDivElement>(null);
  const brandVideoRef = useRef<HTMLVideoElement>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedVideo, setZoomedVideo] = useState<string | null>(null);

  useEffect(() => {
    let observerInstance: IntersectionObserver | null = null;
    let observer2Instance: IntersectionObserver | null = null;
    let observer3Instance: IntersectionObserver | null = null;
    let observer4Instance: IntersectionObserver | null = null;
    let observer5Instance: IntersectionObserver | null = null;

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

        /* ─ Story heading animation ─ */
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

        /* ─ Story heading 4 animation ─ */
        if (storyRef4.current) {
          const el4 = storyRef4.current;
          const words4 = el4.querySelectorAll<HTMLElement>(".story-word");
          observer4Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words4,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer4Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observer4Instance.observe(el4);
        }

        /* ─ Story heading 5 animation ─ */
        if (storyRef5.current) {
          const el5 = storyRef5.current;
          const words5 = el5.querySelectorAll<HTMLElement>(".story-word");
          observer5Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words5,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer5Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observer5Instance.observe(el5);
        }
      } catch {
        if (waveRef.current) {
          waveRef.current
            .querySelectorAll<HTMLElement>(".wave-word")
            .forEach((w) => (w.style.opacity = "1"));
        }
        [storyRef, storyRef2, storyRef3, storyRef4, storyRef5].forEach(
          (ref) => {
            if (ref.current) {
              ref.current
                .querySelectorAll<HTMLElement>(".story-word")
                .forEach((w) => (w.style.opacity = "1"));
            }
          },
        );
      }
    }

    init();
    if (brandVideoRef.current) {
      brandVideoRef.current.playbackRate = 0.5;
    }
    return () => {
      observerInstance?.disconnect();
      observer2Instance?.disconnect();
      observer3Instance?.disconnect();
      observer4Instance?.disconnect();
      observer5Instance?.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-white text-black">
      {/* ── Video Lightbox ── */}
      {zoomedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setZoomedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={zoomedVideo}
              controls
              autoPlay
              className="w-full max-h-[85vh] rounded-xl object-contain bg-black"
            >
              <source src={`${zoomedVideo}.webm`} type="video/webm" />
              <source src={`${zoomedVideo}.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

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

      {/* HERO SECTION */}
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
              {["Aventus", "Airbrush"].map((word, i) => (
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
            Aventus Airbrush offers high-quality airbrush makeup systems for
            professionals and enthusiasts. The brand focuses on precision, ease
            of use, and modern aesthetics — bridging the gap between pro tools
            and at-home accessibility.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="w-full">
        <div className="relative w-full">
          <Image
            src="/aventus-airbrush/aventus-hero.webp"
            alt="Aventus Airbrush Hero"
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
            I bridge the gap between conflict and delivery
          </p>

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
                Oct 2025 – Nov 2025
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
                Marketing Team
              </p>
              <p
                className="text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Product Team
              </p>
            </div>
          </div>

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

          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Aventus Airbrush
            </a>
          </div>
        </div>
      </section>

      {/* STORY BANNER 1 */}
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
          <div
            ref={storyRef2}
            className="text-black font-bold leading-relaxed mt-4"
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

      {/* CHALLENGE 1: Marketing IA Restructuring */}
      <section id="challenge1" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-3">
              <ClipboardList className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">Task</h3>
            </div>
          </div>

          <div className="mb-12">
            <Image
              src="/aventus-airbrush/aventus-need.webp"
              alt="Marketing Team Needs"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl"
            />
            <p
              className="mt-4 text-zinc-500 leading-relaxed text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Design introduction pages and a purchase page for Aventus
              Airbrush.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Flag className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">Marketing Team&apos;s Needs</h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-2xl border-2 border-zinc-200 p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <p
                    className="font-bold text-black"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Marketing Team
                  </p>
                  <span
                    className="text-xs bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full border border-zinc-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Product-centric
                  </span>
                </div>
                <h4 className="text-black mb-4">
                  Detailed Product Promotion Website
                </h4>
                <ul className="space-y-3 list-disc list-inside text-zinc-500 leading-relaxed">
                  <li>
                    <span className="font-bold text-black">
                      Their Thinking:{" "}
                    </span>
                    The more product advantages we highlight, the stronger
                    users&apos; purchase intent will be.
                  </li>
                  <li>
                    <span className="font-bold text-black">
                      What They Want:
                    </span>{" "}
                    A website that clearly presents all 11 selling points.
                  </li>
                </ul>
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
                <h4 className="text-black mb-4">User Cognitive Load</h4>
                <ul className="space-y-3 list-disc list-inside text-zinc-500 leading-relaxed">
                  <li>
                    <span className="font-bold text-black">My Question:</span>{" "}
                    Information overload hides what&apos;s truly important.
                  </li>
                  <li>
                    <span className="font-bold text-black">
                      What I Wanted to Know:
                    </span>{" "}
                    Who are our users, what do they prioritize, and where do we
                    stand out?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Search className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">My Findings</h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 ml-0 mb-8">
              <div className="bg-white rounded-2xl border-2 border-zinc-200 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus-airbrush/aventus-expensive.webp"
                  alt="Pricing Insight"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-zinc-50"
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-black mb-2">Pricing Insight</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    At $291.49, priced significantly higher than our previous
                    $67.29 offering — placing it at the{" "}
                    <span className="font-bold text-black">
                      premium end of the market
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-zinc-200 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus-airbrush/aventus-explain.webp"
                  alt="User Targeting"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-zinc-50"
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-black mb-2">Target Users</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    Not for beginners. Experienced users already understand
                    material and performance differences —{" "}
                    <span className="font-bold text-black">
                      they don&apos;t need extensive explanation
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-zinc-200 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus-airbrush/aventus-person.webp"
                  alt="Core User Profile"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-zinc-50"
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-black mb-2">User Preference</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    Deeply passionate model-making enthusiasts.{" "}
                    <span className="font-bold text-black">
                      They value hands-on craftsmanship, personalization, and
                      the freedom to design.
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-zinc-200 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus-airbrush/aventus-color.webp"
                  alt="Competitor Landscape"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-zinc-50"
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-black mb-2">Competitive Advantage</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    Competitors emphasize quality, but our key differentiator is{" "}
                    <span className="font-bold text-black">
                      deep customization
                    </span>{" "}
                    —{" "}
                    <span className="font-bold text-black">
                      users can customize colors, add engravings, and design
                      their own tools
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6">
              <span
                className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Design Strategy
              </span>
              <p className="text-lg text-black leading-relaxed font-bold">
                Prioritize showcasing our customization capabilities as the core
                competitive advantage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6 mt-8">
            <FolderOpen className="w-6 h-6 text-black shrink-0 mt-0.5" />
            <h3 className="text-black m-0">Restructured IA for Scanability</h3>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row mb-12">
            <div className="w-full md:w-1/2">
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-zinc-200"
                onClick={() =>
                  setZoomedImage("/aventus-airbrush/aventus-ia.webp")
                }
              >
                <Image
                  src="/aventus-airbrush/aventus-ia.webp"
                  alt="Restructured Information Architecture"
                  width={600}
                  height={400}
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
                Information Architecture
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-3 text-zinc-500 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold shrink-0">•</span>
                  <span>
                    Restructured IA into{" "}
                    <span className="font-bold text-black">
                      2 main pages + 6 sub-pages
                    </span>{" "}
                    after stakeholder alignment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold shrink-0">•</span>
                  <span>
                    Dedicated a full page to{" "}
                    <span className="font-bold text-black">customization</span>{" "}
                    as our core competitive advantage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold shrink-0">•</span>
                  <span>
                    <span className="font-bold text-black">
                      Other benefits hidden behind a subpage
                    </span>{" "}
                    — only visible if users opt in
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold shrink-0">•</span>
                  <span>
                    Result:{" "}
                    <span className="font-bold text-black">
                      cleaner hierarchy, faster scanning, reduced cognitive load
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <LayoutTemplate className="w-6 h-6 text-black shrink-0 mt-0.5" />
            <h3 className="text-black m-0">Final Main Pages&apos; UI</h3>
          </div>

          <div className="mb-12">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-zinc-200 shadow-lg bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/aventus-airbrush/aventus-tailor.webm"
                  type="video/webm"
                />
                <source
                  src="/aventus-airbrush/aventus-tailor.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                onClick={() =>
                  setZoomedVideo("/aventus-airbrush/aventus-tailor")
                }
              >
                <Maximize2 className="w-4 h-4 text-black" />
              </button>
            </div>
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tailor-Made Page
            </p>
            <div className="mt-3 flex flex-col items-center gap-4 text-center">
              <p
                className="text-zinc-500 leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Dedicated page for personalization;{" "}
                <span className="font-bold text-black">
                  users explore full customization options
                </span>{" "}
                including colors, engravings, and component choices.
              </p>
              <a
                href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Page
              </a>
            </div>
          </div>

          <div className="mb-4">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-zinc-200 shadow-lg bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/aventus-airbrush/aventus-general.webm"
                  type="video/webm"
                />
                <source
                  src="/aventus-airbrush/aventus-general.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                onClick={() =>
                  setZoomedVideo("/aventus-airbrush/aventus-general")
                }
              >
                <Maximize2 className="w-4 h-4 text-black" />
              </button>
            </div>
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              General Page
            </p>
            <div className="mt-3 flex flex-col items-center gap-4 text-center">
              <p
                className="text-zinc-500 leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Consolidated{" "}
                <span className="font-bold text-black">
                  overview of all key product features
                </span>
                ; secondary details available only in the sub-page detail view.
              </p>
              <a
                href="https://www.gaahleri.com/pages/ace-series-aventus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Page
              </a>
            </div>
            <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6 mt-4">
              <span
                className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Outcome
              </span>
              <p className="text-lg text-black leading-relaxed font-bold">
                Highlighting core value while reducing cognitive load: A
                dedicated page for personalization details; other features
                consolidated into one page. Secondary info appears only in the
                detail view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY BANNER 2 */}
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

      {/* CHALLENGE 2: Plugin UX Redesign */}
      <section id="challenge2" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={storyRef4}
            className="text-black font-bold leading-relaxed mb-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords4.map((word, i) => (
              <span
                key={i}
                className="story-word inline-block mr-[0.3em]"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </div>

          <div className="mt-10 mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Target className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                Shopify plugin conflicted with our store
              </h3>
            </div>
            <p className="text-lg text-zinc-500 leading-relaxed ml-10">
              The stakeholders mandated a Shopify plugin for customization,
              ensuring that non-technical staff could handle future product
              updates independently. But...
            </p>
          </div>

          <div className="mb-12">
            <Image
              src="/aventus-airbrush/aventus-uiissue.webp"
              alt="Shopify Plugin UI Issues"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl"
            />
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Plugin&apos;s Problem
            </p>
            <div className="mt-4 ml-6 space-y-3">
              <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                <span className="font-bold text-black">Problem 1:</span> Users
                can only see option images,{" "}
                <span className="font-bold text-black">not option names</span>.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                <span className="font-bold text-black">Problem 2:</span> The
                Shopify plugin is{" "}
                <span className="font-bold text-black">
                  incompatible with our store&apos;s theme
                </span>{" "}
                template.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <Wrench className="w-6 h-6 text-black shrink-0 mt-0.5" />
            <h3 className="text-black m-0">
              Redesigned &amp; Developed the Purchase UI to Improve User
              Experience
            </h3>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row mb-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg text-zinc-500 leading-relaxed">
                I wrote CSS to resolve the Shopify plugin conflict.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="relative w-full rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-zinc-200"
                onClick={() =>
                  setZoomedImage("/aventus-airbrush/aventus-mycss.webp")
                }
              >
                <Image
                  src="/aventus-airbrush/aventus-mycss.webp"
                  alt="Custom CSS Solution"
                  width={600}
                  height={400}
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
                My CSS
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-zinc-200 shadow-lg bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/aventus-airbrush/aventus-uiupdate.webm"
                  type="video/webm"
                />
                <source
                  src="/aventus-airbrush/aventus-uiupdate.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                onClick={() =>
                  setZoomedVideo("/aventus-airbrush/aventus-uiupdate")
                }
              >
                <Maximize2 className="w-4 h-4 text-black" />
              </button>
            </div>
            <p
              className="mt-2 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Purchase Page UI
            </p>
            <p
              className="mt-4 text-lg text-zinc-500 leading-relaxed font-medium text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The redesigned UI allows users to see both option images and names
              simultaneously.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://www.gaahleri.com/products/pen-customization"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Page
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-10 mb-6">
            <Palette className="w-6 h-6 text-black shrink-0 mt-0.5" />
            <h3 className="text-black m-0">
              The plugin conflicted with our brand&apos;s black theme.
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6 mb-6">
            <div>
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-zinc-200"
                onClick={() =>
                  setZoomedImage("/aventus-airbrush/aventus-blacktheme.webp")
                }
              >
                <div className="relative w-full aspect-3/2 overflow-hidden">
                  <Image
                    src="/aventus-airbrush/aventus-blacktheme.webp"
                    alt="Black Theme"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-black" />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-zinc-500">
                Black Theme
              </p>
            </div>
            <div>
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-zinc-200 bg-white"
                onClick={() =>
                  setZoomedImage("/aventus-airbrush/aventus-whitebg.webp")
                }
              >
                <div className="relative w-full aspect-3/2 overflow-hidden">
                  <Image
                    src="/aventus-airbrush/aventus-whitebg.webp"
                    alt="White Background (Unchangeable)"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-black" />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-zinc-500">
                White Background (Unchangeable)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6 mt-8">
            <Sparkles className="w-6 h-6 text-black shrink-0 mt-0.5" />
            <h3 className="text-black m-0">
              I Protected Brand Consistency Through Design
            </h3>
          </div>

          <div className="mb-4">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-zinc-200 shadow-lg bg-black">
              <video
                ref={brandVideoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/aventus-airbrush/aventus-blackwhite.webm"
                  type="video/webm"
                />
                <source
                  src="/aventus-airbrush/aventus-blackwhite.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                onClick={() =>
                  setZoomedVideo("/aventus-airbrush/aventus-blackwhite")
                }
              >
                <Maximize2 className="w-4 h-4 text-black" />
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-zinc-500">
              Black-White Alternating Design
            </p>
          </div>

          <p className="text-base text-zinc-500 leading-relaxed mb-8 text-center">
            I designed a black-white alternating layout that frames the white
            plugin as a feature, not a bug. The purchase flow now feels seamless
            and brand-consistent.
          </p>

          <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-black leading-relaxed font-bold">
              Turning constraints into consistency. Custom CSS reframes the
              white plugin as a deliberate accent within our black theme —
              seamless, intentional, and brand-aligned.
            </p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT BANNER */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef5}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords5.map((word, i) => (
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

      {/* THE ACHIEVEMENT */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-zinc-200 shadow-lg overflow-hidden mb-10">
            <Image
              src="/aventus-airbrush/aventus-result.webp"
              alt="Gaahleri's November Sales Year-over-Year"
              width={1200}
              height={675}
              className="w-full h-auto block"
            />
            <div className="px-8 py-4 border-t border-zinc-200 text-center">
              <p
                className="text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Increased revenue
              </p>
            </div>
            <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-200">
              <div>
                <div
                  className="text-4xl font-bold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  $362,302
                </div>
                <p
                  className="text-zinc-500 text-sm mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  First-month revenue · November launch
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-semibold text-black">
                  Gaahleri&apos;s November Sales Year-over-Year
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Key figures have been blurred for confidentiality.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xl text-zinc-500 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
            After the Aventus Airbrush website launched, Gaahleri&apos;s
            November sales saw significant year-over-year growth — validating
            that a well-structured, brand-consistent product page directly
            supports conversion.
          </p>
        </div>
      </section>

      {/* REFLECTIONS */}
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
              Designing Where Design Meets Engineering
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                Icon: Handshake,
                title: "Stakeholder Navigation",
                body: "Good design isn’t just about users — it’s about aligning competing priorities. I turned an 11-point wish list into a focused, conversion-driven experience.",
              },
              {
                Icon: Code2,
                title: "Code as a Design Tool",
                body: "When the Shopify plugin broke our theme, writing custom CSS wasn’t a workaround — it was the design decision that made the whole experience possible.",
              },
              {
                Icon: Target,
                title: "Constraints Breed Creativity",
                body: "Technical and business constraints forced smarter solutions. The black-white alternating layout turned a visual clash into a brand-consistent feature.",
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

      {/* BOTTOM CTA */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-black mb-6">
            Bridging Design, Production &amp; Marketing
          </h2>
          <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            See how Aventus Airbrush went from zero assets to a live flagship
            product page in just 4 weeks.
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
              href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Aventus Airbrush
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
