"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  Heart,
  ImageIcon,
  User,
  Clock,
  Users,
  Video,
  Maximize2,
  X,
  FileText,
  Star,
  ThumbsUp,
  Target,
  Search,
  HeartCrack,
  Lightbulb,
  BarChart2,
  Code2,
  Trophy,
} from "lucide-react";

/* ─── Tech stack icons ─── */
const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/nextjs.png", label: "Next.js" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/typescript.svg", label: "TypeScript" },
  { icon: "/sql.svg", label: "SQL" },
];

/* ─── Story heading words ─── */
const storyWords = [
  "I",
  "designed",
  "and",
  "developed",
  "the",
  "color",
  "website",
  "to",
  "integrate",
  "our",
  "product",
  "into",
  "the",
  "user\u2019s",
  "journey.",
];

/* \u2014 Story heading 7 words (moved inside section 2) \u2014 */
const storyWords7 = ["I", "Discovered", "Real", "User", "Pain", "Points"];

/* ─── Story heading 3 words (between Section 2 & 3) ─── */
const storyWords3 = [
  "I",
  "turn",
  "stakeholder",
  "skepticism",
  "into",
  "the",
  "company's",
  "#1",
  "priority",
  "project.",
];

/* ─── Story heading 4 words (Section 4 heading) ─── */
const storyWords4 = [
  "User",
  "Feedback",
  "Proved",
  "Our",
  "Direction",
  "Was",
  "Right",
];

/* ─── Story heading 2 words ─── */
const storyWords2 = [
  "Final",
  "Version:",
  "I",
  "designed",
  "and",
  "developed",
  "four",
  "core",
  "features.",
];

/* ─── Placeholder for missing video/image ─── */
function MediaPlaceholder({
  label,
  type = "video",
  aspect = "video",
  className = "",
}: {
  label: string;
  type?: "video" | "image";
  aspect?: "video" | "square" | "phone";
  className?: string;
}) {
  const aspectCls =
    aspect === "phone"
      ? "aspect-[9/16]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-100 ${aspectCls} ${className}`}
      style={{ transform: "rotate(-0.5deg)" }}
    >
      <div className="text-center p-6 space-y-3">
        {type === "video" ? (
          <div className="mx-auto w-16 h-16 rounded-full border-2 border-zinc-300 flex items-center justify-center bg-zinc-100">
            <Play className="w-7 h-7 text-black ml-1" />
          </div>
        ) : (
          <div className="mx-auto w-14 h-14 rounded-xl border-2 border-zinc-300 flex items-center justify-center bg-[#F8F4EF]">
            <ImageIcon className="w-6 h-6 text-black/40" />
          </div>
        )}
        <p
          className="text-sm text-zinc-500"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {label}
        </p>
      </div>
      {/* Decorative corner doodles */}
    </div>
  );
}

/* ─── Phone-frame video placeholder ─── */
function PhonePlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto flex w-full max-w-70 sm:max-w-80 flex-col items-center">
      <div className="w-full overflow-hidden rounded-3xl border-4 border-zinc-200 shadow-xl">
        <MediaPlaceholder
          label={label}
          type="video"
          aspect="phone"
          className="border-0 rounded-none"
        />
      </div>
    </div>
  );
}

/* ─── Desktop-frame video placeholder ─── */
function DesktopPlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto flex w-full max-w-137.5 flex-col overflow-hidden rounded-xl border-2 border-zinc-200 shadow-2xl bg-white">
      <div className="flex h-8 w-full items-center gap-2 border-b-2 border-zinc-200 bg-zinc-100 px-3 shrink-0">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      </div>
      <MediaPlaceholder
        label={label}
        type="video"
        className="border-0 rounded-none"
      />
    </div>
  );
}

export default function KaleidoColorLabPage() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyRef2 = useRef<HTMLDivElement>(null);
  const storyRef3 = useRef<HTMLDivElement>(null);
  const storyRef4 = useRef<HTMLDivElement>(null);
  const storyRef5 = useRef<HTMLDivElement>(null);
  const storyRef6 = useRef<HTMLDivElement>(null);
  const storyRef7 = useRef<HTMLDivElement>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedVideo, setZoomedVideo] = useState<string | null>(null);

  useEffect(() => {
    let observerInstance: IntersectionObserver | null = null;
    let observer2Instance: IntersectionObserver | null = null;
    let observer3Instance: IntersectionObserver | null = null;
    let observer4Instance: IntersectionObserver | null = null;
    let observer5Instance: IntersectionObserver | null = null;
    let observer6Instance: IntersectionObserver | null = null;
    let observer7Instance: IntersectionObserver | null = null;

    async function init() {
      try {
        const mod = await import("gsap");
        const gsap = mod.default || mod;

        /* ─ Title wave animation (on mount) ─ */
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

        /* ─ Story heading animation (IntersectionObserver) ─ */
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

        /* ─ Story heading 2 animation (IntersectionObserver) ─ */
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

        /* ─ Achievement heading animation (IntersectionObserver) ─ */
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

        /* ─ Section 4 story banner animation (IntersectionObserver) ─ */
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

        /* ─ Reflections heading animation (IntersectionObserver) ─ */
        if (storyRef6.current) {
          const el6 = storyRef6.current;
          const words6 = el6.querySelectorAll<HTMLElement>(".story-word");

          observer6Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words6,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer6Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );

          observer6Instance.observe(el6);
        }

        /* ─ Post-Beta heading animation (IntersectionObserver) ─ */
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

        /* ─ I Discovered Real User Pain Points banner animation (IntersectionObserver) ─ */
        if (storyRef7.current) {
          const el7 = storyRef7.current;
          const words7 = el7.querySelectorAll<HTMLElement>(".story-word");

          observer7Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words7,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer7Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );

          observer7Instance.observe(el7);
        }
      } catch {
        if (waveRef.current) {
          const words =
            waveRef.current.querySelectorAll<HTMLElement>(".wave-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef.current) {
          const words =
            storyRef.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef2.current) {
          const words =
            storyRef2.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef3.current) {
          const words =
            storyRef3.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef4.current) {
          const words =
            storyRef4.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef5.current) {
          const words =
            storyRef5.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef6.current) {
          const words =
            storyRef6.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef7.current) {
          const words =
            storyRef7.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
      }
    }

    init();
    return () => {
      observerInstance?.disconnect();
      observer2Instance?.disconnect();
      observer3Instance?.disconnect();
      observer4Instance?.disconnect();
      observer5Instance?.disconnect();
      observer6Instance?.disconnect();
      observer7Instance?.disconnect();
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

      {/* ── Lightbox ── */}
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
          HERO SECTION — centered
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back nav */}
          <Link
            href="/home#projects"
            className="inline-flex items-center gap-2 text-black hover:text-zinc-600 transition-colors mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Title — centered, word-by-word wave animation */}
          <div className="text-center mb-8">
            <h1
              ref={waveRef}
              className="text-black relative inline-block text-5xl md:text-6xl font-extrabold"
            >
              {["Kaleido", "ColorLab"].map((word, i) => (
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

          {/* Description — centered, updated copy */}
          <p className="text-lg text-zinc-500 leading-relaxed text-center max-w-3xl mx-auto">
            Kaleido ColorLab bridges the gap between inspiration and purchase.
            Users extract colors from photos to create custom palettes, while
            admins gain insights into user preferences and buying behavior to
            optimize inventory.
          </p>
        </div>
      </section>

      {/* Full-width hero video */}
      <section className="w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/kaleidocolorlab/poster.webp"
          className="w-full block"
        >
          <source
            src="/kaleidocolorlab/colorlab-hero-video.webm"
            type="video/webm"
          />
          <source
            src="/kaleidocolorlab/colorlab-hero-video.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 1: PROJECT OVERVIEW
          Hero image fills full width; cards directly below.
          ═══════════════════════════════════════════════════════ */}
      <section id="overview" className="w-full">
        {/* Full-width hero image — no heading above it */}
        <div className="relative w-full">
          <Image
            src="/kaleidocolorlab/colorlab-heropic.webp"
            alt="Kaleido ColorLab Hero"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Bridge statement */}
          <p
            className="text-center text-4xl text-black font-bold mb-16"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I Design and Build from Zero to Hero
          </p>

          {/* Role / Duration / Collaboration — 3 columns */}
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
                Full-stack Developer
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
                Nov 2025 – Apr 2026
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
                Backend Developer
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
              href="https://kaleidocolorlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Kaleido ColorLab
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER — animated heading grouping sections 2-4
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
          SECTION 2: I DISCOVERED THE REAL USER PAIN POINTS
          ═══════════════════════════════════════════════════════ */}
      <section id="insight" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenge */}
          <div className="mt-10 mb-16">
            <div className="flex items-start gap-3 mb-2">
              <Target className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">The Challenge</h3>
            </div>
            <ul className="ml-10 mt-3 space-y-2 list-disc list-inside">
              <li className="text-lg text-zinc-500 leading-relaxed">
                KaleidoColor didn&apos;t meet expected sales.
              </li>
              <li className="text-lg text-zinc-500 leading-relaxed">
                Stakeholders wanted to{" "}
                <span className="text-black font-bold">
                  boost KaleidoColor&apos;s revenue.
                </span>
              </li>
            </ul>

            <Image
              src="/kaleidocolorlab/challenge.webp"
              alt="The challenge overview"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl mt-6 border-2 border-zinc-300"
            />
            <p
              className="text-center text-sm text-zinc-500 mt-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              KaleidoColor didn&apos;t meet expected sales.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">The Solution</h3>
            </div>
            <p className="ml-9 text-lg text-zinc-500 mb-6">
              A digital color mixer to integrate our product into the
              user&apos;s journey
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-zinc-300">
                  <Image
                    src="/kaleidocolorlab/user use website.webp"
                    alt="User using Kaleido ColorLab website"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-center text-sm text-zinc-500 mt-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Mix real colors using our digital color mixer
                </p>
              </div>

              <div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-zinc-300 group">
                  <video
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source
                      src="/kaleidocolorlab/colorlab intro.webm"
                      type="video/webm"
                    />
                    <source
                      src="/kaleidocolorlab/colorlab intro.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                    onClick={() =>
                      setZoomedVideo("/kaleidocolorlab/colorlab intro")
                    }
                  >
                    <Maximize2 className="w-4 h-4 text-black" />
                  </button>
                </div>
                <p
                  className="text-center text-sm text-zinc-500 mt-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Intro: a color-mixing website based on our color products.
                </p>
              </div>
            </div>

            {/* The Result */}
            <div className="mt-12">
              <div className="flex items-start gap-3 mb-4">
                <Trophy className="w-6 h-6 text-black shrink-0 mt-0.5" />
                <h3 className="text-black">The Result</h3>
              </div>
              <p className="ml-9 text-lg text-zinc-500 mb-6">
                Our color product sales surged{" "}
                <span className="text-5xl font-extrabold text-black">227%</span>
                .
              </p>
              <div>
                <Image
                  src="/kaleidocolorlab/result.webp"
                  alt="Color product sales surged 227%"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-2xl border-2 border-zinc-300"
                />
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Color Sales Rose
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── I Discovered Real User Pain Points banner ── */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef7}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords7.map((word, i) => (
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
          SECTION 2 continued: Stakeholder's Needs / Findings
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Design Question 1 */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Search className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                Design Question 1: Who are our users?
              </h3>
            </div>
            <div className="ml-9 mb-6">
              <p className="text-lg font-bold text-black">
                63.6% of users are model makers.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-zinc-300">
                <Image
                  src="/kaleidocolorlab/main user.webp"
                  alt="Main user: 63.6% are model makers"
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="mt-3 text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Main User: Model Maker
              </p>
            </div>
          </div>

          {/* Design Question 2 */}
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-6">
              <Search className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                Design Question 2: What&apos;s their pain points?
              </h3>
            </div>

            {/* Big user pain point image first */}
            <div className="mb-8">
              <Image
                src="/kaleidocolorlab/user-painpoint.webp"
                alt="User Pain Point Analysis"
                width={1200}
                height={675}
                className="w-full h-auto rounded-2xl border-2 border-zinc-300"
              />
              <p
                className="mt-3 text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User Journey Map
              </p>
            </div>

            {/* User Pain Points summary */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartCrack className="w-6 h-6 text-black shrink-0 mt-0.5" />
                <h4
                  className="font-bold text-black text-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  User Pain Points
                </h4>
              </div>
              <div className="space-y-3 ml-11">
                <p className="text-zinc-500 leading-relaxed">
                  1. Users see a color in the real world but
                  <span className="text-black font-bold">
                    {" "}
                    don&apos;t know how to replicate and mix it
                  </span>
                  .
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  2. Users{" "}
                  <span className="text-black font-bold">
                    worry about wasting
                  </span>{" "}
                  money on paints that won&apos;t produce the color they want.
                </p>
              </div>
            </div>
          </div>

          {/* My Ideation */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">My Ideation</h3>
            </div>
            <Image
              src="/kaleidocolorlab/Ideate.webp"
              alt="Ideation Sketches"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl mb-3 border-2 border-zinc-300"
            />
            <p
              className="text-center text-sm text-zinc-500 mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              My Ideation: A Color APP
            </p>
            <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6">
              <span
                className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User-Centered
              </span>
              <p className="text-lg text-black leading-relaxed font-bold">
                <span className="text-black">Problem Statement: </span> Users
                don&apos;t know which paint to buy.
              </p>
              <p className="text-lg text-black leading-relaxed font-bold mt-2">
                <span className="text-black">Solution:</span> Build an app that
                helps users identify which colors they truly need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 3 — between Section 2 & 3
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
          SECTION 3: CONVINCE STAKEHOLDER WITH COMPETITIVE ANALYSIS & CODE
          ═══════════════════════════════════════════════════════ */}
      <section id="leadership" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stakeholder's Answer */}
          <div className="mb-6 text-center">
            <p
              className="text-xl text-black"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Stakeholder&apos;s Answer:{" "}
              <span className="text-zinc-900 font-bold">Good idea!</span>
            </p>
          </div>

          {/* BUT — big rejection */}
          <div className="mb-12 bg-[#F8F4EF] border-2 border-zinc-200 rounded-2xl p-10 text-center">
            <p
              className="text-4xl font-bold text-black mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BUT
            </p>
            <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto">
              Designing and developing an app is{" "}
              <span className="font-bold text-black underline underline-offset-4">
                too difficult
              </span>
              .
            </p>
          </div>

          {/* My Solution 1: Competitive Analysis */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <BarChart2 className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                My Solution 1:{" "}
                <span className="font-bold text-black">Marketing Analysis</span>
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border-2 border-zinc-200 overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/kaleidocolorlab/existing color picker.webp"
                    alt="Color mixing app on market"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-black font-bold mb-3">
                    It&apos;s not difficult.
                  </h4>
                  <p className="text-zinc-500 leading-relaxed">
                    <span className="font-bold text-black">
                      Color-mixing apps already exist on the market.
                    </span>{" "}
                    The technology is proven — we&apos;re{" "}
                    <span className="font-bold text-zinc-900">
                      not starting from zero
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl border-2 border-zinc-200 overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/kaleidocolorlab/color picker and our product.webp"
                    alt="Blue ocean opportunity"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-black font-bold mb-3">
                    If we do, we lead the industry.
                  </h4>
                  <p className="text-zinc-500 leading-relaxed">
                    <span className="font-bold text-black">
                      No competitor at our level has built something similar
                    </span>{" "}
                    — this is a{" "}
                    <span className="font-bold text-zinc-900">blue ocean</span>.
                    Being first means{" "}
                    <span className="font-bold text-zinc-900">
                      industry leadership
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Solution 2: Code MVP */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Code2 className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                My Solution 2: I can quickly{" "}
                <span className="font-bold text-black">
                  code the core features
                </span>
              </h3>
            </div>
            <p className="text-lg text-zinc-500 leading-relaxed ml-10 mb-8">
              I negotiated for{" "}
              <span className="text-black font-bold">
                2 weeks to build a functional MVP with code
              </span>
              . Although it wouldn&apos;t be the final product, it would prove
              the technical feasibility.
            </p>

            {/* Code image (1/3) + MVP video (2/3) */}
            <div className="flex gap-4 mb-8 items-stretch">
              {/* Code screenshot — 1/3 */}
              <div className="flex flex-col flex-1 gap-2">
                <div className="relative rounded-2xl overflow-hidden flex-1 border-2 border-zinc-300">
                  <Image
                    src="/kaleidocolorlab/colorlab-coding.webp"
                    alt="Code Architecture Overview"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I can code
                </p>
              </div>
              {/* Video — 2/3 */}
              <div className="flex flex-col gap-2" style={{ flex: "2 2 0%" }}>
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden bg-black flex-1 group cursor-pointer border-2 border-zinc-300"
                  onClick={() =>
                    setZoomedVideo("/kaleidocolorlab/colorlab-prototype")
                  }
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain"
                  >
                    <source
                      src="/kaleidocolorlab/colorlab-prototype.webm"
                      type="video/webm"
                    />
                    <source
                      src="/kaleidocolorlab/colorlab-prototype.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Build a MVP
                </p>
              </div>
            </div>
          </div>

          {/* Turning Point */}
          <div
            className="bg-[#F8F4EF] border-2 border-zinc-200 rounded-2xl p-8 mb-8"
            style={{ transform: "rotate(0.3deg)" }}
          >
            <p className="text-black leading-relaxed text-lg">
              <span className="font-bold text-black">
                🎯 The Turning Point:
              </span>{" "}
              During the demo, I sampled the color of a dog and generated a
              real-time mixing recipe on my phone.{" "}
              <span className="text-black font-bold">
                This tangible functionality was more persuasive than any deck
              </span>
              .
            </p>
          </div>

          {/* Outcome highlight */}
          <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-black leading-relaxed font-bold">
              Through my MVP, stakeholders realized that{" "}
              <span className="text-black">
                designing and developing an app wasn&apos;t as difficult as they
                had imagined.
              </span>{" "}
              <span className="text-black">
                The project was officially greenlit at the company.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4: USER FEEDBACK PROVED OUR DIRECTION
          ═══════════════════════════════════════════════════════ */}
      <section id="validation" className="w-full bg-white">
        {/* Story banner heading */}
        <div className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              ref={storyRef4}
              className="text-black font-bold leading-relaxed"
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
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Concept Video Testing */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Video className="w-7 h-7 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">User Video Testing</h3>
            </div>
            <p className="text-lg text-zinc-500 leading-relaxed ml-10 mb-4">
              Before prioritizing the project, we released a{" "}
              <span className="text-black font-bold">
                &apos;Let&apos;s Talk&apos; video
              </span>{" "}
              to{" "}
              <span className="text-black font-bold">
                test users&apos; feedback
              </span>{" "}
              for a color mixer.
            </p>
            <div>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-zinc-300">
                <iframe
                  src="https://www.youtube.com/embed/CuCBGLtvFPw?start=340"
                  title="KaleidoColorLab User Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p
                className="mt-3 text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Video for User Feedback (from 5:40)
              </p>
            </div>
          </div>

          {/* User's Positive Feedback heading */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Trophy className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">Users&apos; Positive Feedback</h3>
            </div>
          </div>

          {/* User Positive Feedback — three comment images */}
          <div className="mb-12">
            <h4
              className="font-bold text-black mb-6 text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-black font-bold">
                Users are excited about the upcoming Color Mixer app
              </span>
            </h4>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "/kaleidocolorlab/colorlab-1.webp",
                "/kaleidocolorlab/colorlab-2.webp",
                "/kaleidocolorlab/colorlab-3.webp",
              ].map((src, i) => (
                <div
                  key={src}
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white"
                  onClick={() => setZoomedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`User Comment ${i + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
              ))}
            </div>
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Users&apos; Positive Feedback
            </p>
          </div>

          {/* Outcome */}
          <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-black leading-relaxed font-bold">
              <span className="text-zinc-900 font-bold">
                ColorLab was officially upgraded to the company&apos;s Top 1
                Priority project.
              </span>
            </p>
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
          SECTION 5: CORE SOLUTIONS (3 Features)
          ═══════════════════════════════════════════════════════ */}
      <section id="solutions" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* ─── Feature 1: Image Color Picker ─── */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="relative group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full aspect-video object-cover rounded-xl border-2 border-zinc-300"
                  >
                    <source
                      src="/kaleidocolorlab/colorlab-picker.webm"
                      type="video/webm"
                    />
                    <source
                      src="/kaleidocolorlab/colorlab-picker.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                    onClick={() =>
                      setZoomedVideo("/kaleidocolorlab/colorlab-picker")
                    }
                  >
                    <Maximize2 className="w-4 h-4 text-black" />
                  </button>
                </div>
                <p
                  className="mt-4 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 1 · Image Color Picker
                </p>
              </div>
              <div className="w-full space-y-6">
                <h3 className="text-black">
                  Feature 1 · Image Color Picker：From Pain Point to Profit
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Pain Point:</span>{" "}
                  <span className="font-bold text-black">
                    Real-world inspiration doesn&apos;t map to our color
                    product.
                  </span>
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span>{" "}
                  <span className="font-bold text-black">
                    Instant color extraction that recommends the closest
                    matching paint or a custom mixing recipe.
                  </span>
                </p>
              </div>

              {/* ── Always-On Magnifier (Image Color Picker refinement) ── */}
              <div className="space-y-6">
                <h3 className="text-black">
                  Beta Update: Always-On Magnifier in Color Picker + Add 2 color
                  codes
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      {
                        src: "/kaleidocolorlab/color-picker1.webp",
                        alt: "Color picker before",
                        label: "Before",
                      },
                      {
                        src: "/kaleidocolorlab/color-picker2.webp",
                        alt: "Color picker after",
                        label: "After",
                      },
                    ] as const
                  ).map(({ src, alt, label }) => (
                    <div key={src}>
                      <div
                        className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-[#1a1a1a] aspect-[4/3]"
                        onClick={() => setZoomedImage(src)}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                          <Maximize2 className="w-4 h-4 text-black" />
                        </div>
                      </div>
                      <p
                        className="mt-2 text-center text-sm text-zinc-500"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-zinc-500 leading-relaxed">
                  <p className="font-medium text-black">What I did:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      Integrated a default magnifier into the color picker,
                      allowing pixel‑perfect color sampling from any on‑screen
                      element.
                    </li>
                    <li>
                      Added HEX, HSL, and RGB color input options in the Image
                      Color Picker.
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F8F4EF] border-l-4 border-secondary rounded-r-2xl p-4">
                  <p className="text-sm font-medium text-black">
                    <span className="text-zinc-500">Impact: </span>No extra
                    clicks – precise picking out of the box; Users can enter
                    different color codes without third-party conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Feature 2: Digital Color Lab ─── */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="relative group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full aspect-video object-cover rounded-xl border-2 border-zinc-300"
                  >
                    <source
                      src="/kaleidocolorlab/colorlab-colormix.webm"
                      type="video/webm"
                    />
                    <source
                      src="/kaleidocolorlab/colorlab-colormix.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                    onClick={() =>
                      setZoomedVideo("/kaleidocolorlab/colorlab-colormix")
                    }
                  >
                    <Maximize2 className="w-4 h-4 text-black" />
                  </button>
                </div>
                <p
                  className="mt-4 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 2 · Digital Color Lab
                </p>
              </div>
              <div className="w-full space-y-6">
                <h3 className="text-black">
                  Feature 2 · Digital Color Lab：From Fear to Fearless
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Pain Point:</span>{" "}
                  <span className="font-bold text-black">
                    Fear of wasting expensive material on failed mixing
                    attempts.
                  </span>
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span>{" "}
                  <span className="font-bold text-black">
                    A digital sandbox to test ratios before physical execution.
                    Users combine colors, adjust ratios in real-time, and
                    preview results.
                  </span>
                </p>
              </div>

              {/* ── Beta Update: Enlarged Color area + Sortable Swatches ── */}
              <div className="space-y-6">
                <h3 className="text-black">
                  Beta Update: Enlarged Color area + Sortable Swatches
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      {
                        src: "/kaleidocolorlab/color-card1.webp",
                        alt: "Color card before",
                        label: "Before",
                      },
                      {
                        src: "/kaleidocolorlab/color-card2.webp",
                        alt: "Color card after",
                        label: "After",
                      },
                    ] as const
                  ).map(({ src, alt, label }) => (
                    <div key={src}>
                      <div
                        className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-[#1a1a1a] aspect-[4/3]"
                        onClick={() => setZoomedImage(src)}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                          <Maximize2 className="w-4 h-4 text-black" />
                        </div>
                      </div>
                      <p
                        className="mt-2 text-center text-sm text-zinc-500"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-zinc-500 leading-relaxed">
                  <p className="font-medium text-black">What I did:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      Changed circular swatches to full card-top color blocks –
                      larger area for better color perception.
                    </li>
                    <li>
                      Added a sorting filter to help users quickly locate target
                      colors.
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F8F4EF] border-l-4 border-secondary rounded-r-2xl p-4">
                  <p className="text-sm font-medium text-black">
                    <span className="text-zinc-500">Impact: </span>Faster
                    selection, improved color recognition confidence.
                  </p>
                </div>
              </div>

              {/* ── Beta Update: Hybrid Mix Controls ── */}
              <div className="space-y-6">
                <h3 className="text-black">
                  Beta Update: Hybrid Mix Controls – Slider + Input + Stepper
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      {
                        src: "/kaleidocolorlab/color-mix1.webp",
                        alt: "Color mix before",
                        label: "Before",
                      },
                      {
                        src: "/kaleidocolorlab/color-mix2.webp",
                        alt: "Color mix after",
                        label: "After",
                      },
                    ] as const
                  ).map(({ src, alt, label }) => (
                    <div key={src}>
                      <div
                        className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-[#1a1a1a] aspect-[4/3]"
                        onClick={() => setZoomedImage(src)}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                          <Maximize2 className="w-4 h-4 text-black" />
                        </div>
                      </div>
                      <p
                        className="mt-2 text-center text-sm text-zinc-500"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-zinc-500 leading-relaxed">
                  <p>
                    <span className="font-medium text-black">What I did: </span>
                    Kept the slider for rough adjustments. Added a manual number
                    input for exact values, plus (+) and (−) buttons for
                    step‑by‑step fine‑tuning.
                  </p>
                </div>
                <div className="bg-[#F8F4EF] border-l-4 border-secondary rounded-r-2xl p-4">
                  <p className="text-sm font-medium text-black">
                    <span className="text-zinc-500">Impact: </span>Balances
                    speed and precision; eliminates oversensitivity issues.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Feature 3: Data-Driven Dashboard ─── */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="relative group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full aspect-video object-cover rounded-xl border-2 border-zinc-300"
                  >
                    <source
                      src="/kaleidocolorlab/colorlab-dashboard.webm"
                      type="video/webm"
                    />
                    <source
                      src="/kaleidocolorlab/colorlab-dashboard.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                    onClick={() =>
                      setZoomedVideo("/kaleidocolorlab/colorlab-dashboard")
                    }
                  >
                    <Maximize2 className="w-4 h-4 text-black" />
                  </button>
                </div>
                <p
                  className="mt-4 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 3 · Data-Driven Dashboard
                </p>
              </div>
              <div className="w-full space-y-6">
                <h3 className="text-black">
                  Feature 3 · Data-Driven Dashboard：From Blind to Bold
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Pain Point:</span>{" "}
                  <span className="font-bold text-black">
                    Marketing lacked visibility into regional color trends.
                  </span>
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span>{" "}
                  <span className="font-bold text-black">
                    An admin dashboard tracking saved user color preferences by
                    region, enabling data-driven decisions.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6: ADAPTIVE PROBLEM SOLVING
          ═══════════════════════════════════════════════════════ */}
      <section
        id="adaptive"
        className="w-full py-24 bg-white relative overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-wider text-zinc-500 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ── Most Memorable Feature Moment ──
            </p>
            <h2 className="text-black mb-4 text-4xl md:text-5xl font-extrabold">
              When Tech Falls Short, Design Steps In
            </h2>
            <p className="text-xl text-zinc-500 mt-6 max-w-3xl mx-auto">
              Turning Hardware Limits into &quot;Color Notes&quot;
            </p>
          </div>

          {/* Challenge → Pivot layout */}
          <div className="space-y-16">
            {/* The Challenge */}
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="w-full md:w-5/12 flex flex-col items-center">
                <div
                  className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden cursor-zoom-in group"
                  onClick={() =>
                    setZoomedImage(
                      "/kaleidocolorlab/colorlab-memorymoment.webp",
                    )
                  }
                >
                  <Image
                    src="/kaleidocolorlab/colorlab-memorymoment.webp"
                    alt="Beta Tester Feedback"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <span
                  className="mt-3 inline-block text-xs bg-black text-white px-3 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Different screens, different color display
                </span>
                <p
                  className="mt-2 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  User skepticism
                </p>
              </div>
              <div className="w-full md:w-7/12">
                <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-zinc-200">
                  <h4 className="text-black mb-4">
                    A hardware limitation we couldn&apos;t control.
                  </h4>
                  <p className="text-zinc-500 leading-relaxed text-lg">
                    Video Testing reported that{" "}
                    <span className="font-bold text-black">
                      screen color variance made digital matching 100% accuracy{" "}
                      <span className="text-xl font-extrabold text-black">
                        impossible
                      </span>
                      .
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Problem heading */}
            <p className="text-center text-2xl md:text-3xl font-bold text-black">
              Tech Problem: Different screens, different color display.
            </p>

            {/* The UX Pivot（Feature 4） */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="relative group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full aspect-video object-cover rounded-xl border-2 border-zinc-300"
                  >
                    <source
                      src="/kaleidocolorlab/colorlab-note.webm"
                      type="video/webm"
                    />
                    <source
                      src="/kaleidocolorlab/colorlab-note.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                    onClick={() =>
                      setZoomedVideo("/kaleidocolorlab/colorlab-note")
                    }
                  >
                    <Maximize2 className="w-4 h-4 text-black" />
                  </button>
                </div>
                <p
                  className="mt-4 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 4 · Color Note
                </p>
              </div>
              <div className="w-full space-y-6">
                <h3 className="text-black">
                  Feature 4 · Color Note：From Flaw to Feature
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Pain Point:</span>{" "}
                  <span className="font-bold text-black">
                    The same color looks different on different screens.
                  </span>
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span>{" "}
                  <span className="font-bold text-black">
                    I designed a personal color note feature that lets users
                    document real-world mixing ratios and techniques, turning a
                    screen accuracy limitation into a user personal color
                    library.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── User-Centered callout ── */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              User-Centered
            </span>
            <p className="text-lg text-black leading-relaxed font-bold">
              Real user feedback made these improvements possible. We listened,
              iterated, and delivered a more intuitive color experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Real Users. Real Feedback. animated banner ── */}
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
            <span
              className="story-word inline-block mr-[0.3em]"
              style={{ opacity: 0 }}
            >
              Real
            </span>
            <span
              className="story-word inline-block mr-[0.3em]"
              style={{ opacity: 0 }}
            >
              Users.
            </span>
            <br />
            <span
              className="story-word inline-block mr-[0.3em]"
              style={{ opacity: 0 }}
            >
              Real
            </span>
            <span
              className="story-word inline-block mr-[0.3em]"
              style={{ opacity: 0 }}
            >
              Feedback.
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BETA USABILITY TEST
          ═══════════════════════════════════════════════════════ */}
      <section id="usability-test" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xl text-zinc-500 mt-6 max-w-3xl mx-auto leading-relaxed">
              We believe the best tools are built with users, not just for them.
            </p>
            <div className="mt-8">
              <div
                className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white"
                onClick={() => setZoomedImage("/kaleidocolorlab/feedback.webp")}
              >
                <Image
                  src="/kaleidocolorlab/feedback.webp"
                  alt="Feedback Page"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-black" />
                </div>
              </div>
              <p
                className="mt-3 text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Feedback Page
              </p>
            </div>
          </div>

          {/* Test images — side by side, fixed equal height with white fill */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {(
              [
                {
                  src: "/kaleidocolorlab/test1.webp",
                  alt: "Beta Usability Test 1",
                  caption: "Average rating (4.03)",
                },
                {
                  src: "/kaleidocolorlab/test2.webp",
                  alt: "Beta Usability Test 2",
                  caption: "77.3% of users rated the site easy to use",
                },
              ] as const
            ).map(({ src, alt, caption }) => (
              <div key={src} className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white aspect-[3/2]"
                  onClick={() => setZoomedImage(src)}
                >
                  <Image src={src} alt={alt} fill className="object-contain" />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {caption}
                </p>
              </div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mb-12">
            {[
              { stat: "4,000+", label: "Participants", Icon: Users },
              {
                stat: "66",
                label: "Detailed Feedback",
                Icon: FileText,
              },
              { stat: "4.03 / 5", label: "Average Rating", Icon: Star },
              {
                stat: "77.3%",
                label: "Easy to Use",
                Icon: ThumbsUp,
              },
            ].map((item) => (
              <div key={item.label} className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <item.Icon className="w-6 h-6 text-zinc-500" />
                </div>
                <div
                  className="text-4xl font-bold text-zinc-900 mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.stat}
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Result image — Color Sales Rose */}
          <div className="mt-12">
            <Image
              src="/kaleidocolorlab/result.webp"
              alt="Color product sales surged 227%"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl border-2 border-zinc-300"
            />
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Color Sales Rose
            </p>
            <p className="mt-6 text-lg text-zinc-500 text-center">
              Our color product sales surged{" "}
              <span className="text-6xl font-extrabold text-black">227%</span>.
            </p>
          </div>

          {/* Report button */}
          {/* <div className="flex justify-center">
            <a
              href="/kaleidocolorlab/Kaleido%20ColorLab%20Usability%20Test%20Analysis%20Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="flex flex-col items-center leading-tight">
                <span>View User Feedback</span>
                <span>(Desensitized)</span>
              </span>
            </a>
          </div> */}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 7: REFLECTIONS
          ═══════════════════════════════════════════════════════ */}
      <section
        id="reflections"
        className="w-full bg-[#F8F4EF] relative overflow-hidden"
      >
        {/* Story banner heading — same animated style as Post-Beta */}
        <div className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              ref={storyRef6}
              className="text-black font-bold leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                lineHeight: 1.5,
              }}
            >
              {["Reflections"].map((word, i) => (
                <span
                  key={i}
                  className="story-word inline-block mr-[0.3em]"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="text-xl text-zinc-500 mt-6 max-w-3xl mx-auto">
              The Hybrid Edge of a Design Engineer
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                Icon: Code2,
                title: "Coding Mindset",
                body: "Great designers aren't limited by tools. Code is my medium; AI is my efficiency multiplier.",
              },
              {
                Icon: Target,
                title: "User-Centered",
                body: "UX balances user needs with business viability. By uncovering real user needs, I created a new revenue engine.",
              },
              {
                Icon: BarChart2,
                title: "Business Acumen",
                body: "It's not just about executing requirements — it's about aligning with stakeholders to ensure we're always investing in the right direction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-md border-2 border-zinc-200 transition-all hover:shadow-xl hover:-translate-y-2 text-center flex flex-col items-center"
              >
                <div className="mb-4">
                  <item.Icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-black mb-3 whitespace-nowrap">
                  {item.title}
                </h4>
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
            Not just a design, but a deployable business solution.
          </h2>
          <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            See how ColorLab bridges the gap between user inspiration and
            product purchase.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-zinc-300 text-black px-10 py-5 rounded-lg hover:bg-zinc-100 transition-all transform hover:-translate-y-1"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Contact Me
              <Heart className="w-5 h-5" />
            </Link>
            <a
              href="https://www.kaleidocolorlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Explore Kaleido ColorLab
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
