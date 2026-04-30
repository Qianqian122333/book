"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  HeartCrack,
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
  Eye,
  Gift,
  Trophy,
  BarChart2,
  Sparkles,
} from "lucide-react";

/* ─── Tech stack icons ─── */
const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/shopify.svg", label: "Shopify" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/tailwindcss.svg", label: "TailwindCSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/typescript.svg", label: "TypeScript" },
  { icon: "/nextjs.png", label: "Next.js" },
];

/* ─── Story heading words ─── */
const storyWords = [
  "How",
  "I",
  "solved",
  "the",
  "problem",
  "of",
  "low",
  "user",
  "retention",
  "in",
  "traditional",
  "e-commerce",
  "stores.",
];

const storyWords1b = [
  "I",
  "found",
  "real",
  "user",
  "pain",
  "points",
  "through",
  "social",
  "media",
  "data",
  "analysis.",
];

const storyWords2 = [
  "Turning",
  "Holidays",
  "and",
  "Product",
  "Flaw",
  "into",
  "Community",
  "Flywheels",
];

const storyWords2b = [
  "Turning",
  "Product",
  "Flaw",
  "into",
  "Community",
  "Flywheels",
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

const storyWordsContest = [
  "How",
  "a",
  "model",
  "competition",
  "used",
  "peer",
  "recognition",
  "to",
  "build",
  "a",
  "hobby",
  "community",
];

const storyWords4 = [
  "From",
  "a",
  "\u201clinear shop\u201d",
  "to",
  "a",
  "\u201ccircular community\u201d",
];

/* ─── Contest Intro Video with fallback image ─── */
function ContestIntroVideo({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;
    video.play().catch(() => {});
  }, [failed]);

  if (failed) {
    return (
      <Image
        src="/comminity/contest%20intro%20page.webp"
        alt="Contest Intro Page"
        width={1920}
        height={1080}
        className={`w-full h-auto block ${className}`}
      />
    );
  }
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/comminity/contest%20intro%20page.webp"
      className={`w-full block ${className}`}
      onError={() => setFailed(true)}
    >
      <source src="/comminity/contest%20intro%20page.mp4" type="video/mp4" />
    </video>
  );
}

/* ─── Community Flywheel Animation ─── */
const flywheelSteps = [
  "Participate",
  "Update",
  "Interact",
  "Recognition",
  "Loyalty",
  "Share",
];
const flywheelPositions = [
  { x: 50, y: 8 },
  { x: 85, y: 29 },
  { x: 85, y: 71 },
  { x: 50, y: 92 },
  { x: 15, y: 71 },
  { x: 15, y: 29 },
];

function CommunityFlywheel() {
  return (
    <div
      className="relative w-full max-w-md mx-auto"
      style={{ aspectRatio: "1" }}
    >
      <style>{`
        @keyframes fw-glow {
          0%, 14%, 100% {
            background-color: #f4f4f5;
            color: #71717a;
            box-shadow: none;
            transform: translate(-50%, -50%) scale(1);
          }
          4% {
            background-color: #18181b;
            color: #ffffff;
            box-shadow: 0 4px 24px rgba(0,0,0,0.25);
            transform: translate(-50%, -50%) scale(1.12);
          }
          8% {
            background-color: #18181b;
            color: #ffffff;
            box-shadow: 0 4px 24px rgba(0,0,0,0.25);
            transform: translate(-50%, -50%) scale(1.12);
          }
          11% {
            background-color: #f4f4f5;
            color: #71717a;
            box-shadow: none;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>

      {/* SVG ring + traveling dot + arrows */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Dashed circle */}
        <circle
          cx="200"
          cy="200"
          r="145"
          stroke="#e4e4e7"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />

        {/* Traveling highlight dot */}
        <circle r="5" fill="#18181b" opacity="0.35">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M200,55 A145,145 0 0,1 325,127 A145,145 0 0,1 325,273 A145,145 0 0,1 200,345 A145,145 0 0,1 75,273 A145,145 0 0,1 75,127 A145,145 0 0,1 200,55Z"
          />
        </circle>

        {/* Arrow markers */}
        <defs>
          <marker
            id="fw-arrow"
            markerWidth="6"
            markerHeight="4"
            refX="5"
            refY="2"
            orient="auto"
          >
            <polygon points="0 0, 6 2, 0 4" fill="#d4d4d8" />
          </marker>
        </defs>

        {/* Connecting arrows */}
        {[
          { x1: 225, y1: 58, x2: 310, y2: 108 },
          { x1: 335, y1: 148, x2: 335, y2: 252 },
          { x1: 310, y1: 292, x2: 225, y2: 342 },
          { x1: 175, y1: 342, x2: 90, y2: 292 },
          { x1: 65, y1: 252, x2: 65, y2: 148 },
          { x1: 90, y1: 108, x2: 175, y2: 58 },
        ].map((a, i) => (
          <line
            key={i}
            x1={a.x1}
            y1={a.y1}
            x2={a.x2}
            y2={a.y2}
            stroke="#d4d4d8"
            strokeWidth="1.5"
            markerEnd="url(#fw-arrow)"
          />
        ))}

        {/* Center text */}
        <text
          x="200"
          y="193"
          textAnchor="middle"
          fill="#18181b"
          fontSize="22"
          fontWeight="800"
        >
          GWCC
        </text>
        <text x="200" y="215" textAnchor="middle" fill="#a1a1aa" fontSize="10">
          Community Flywheel
        </text>
      </svg>

      {/* Node labels */}
      {flywheelSteps.map((label, i) => (
        <div
          key={label}
          className="absolute rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap bg-zinc-100 text-zinc-500"
          style={{
            left: `${flywheelPositions[i].x}%`,
            top: `${flywheelPositions[i].y}%`,
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-body)",
            animation: "fw-glow 10s ease-in-out infinite",
            animationDelay: `${i * (10 / 6)}s`,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default function GaahleriCommunityPage() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyRef2 = useRef<HTMLDivElement>(null);
  const storyRef2b = useRef<HTMLDivElement>(null);
  const storyRef3 = useRef<HTMLDivElement>(null);
  const storyRef4 = useRef<HTMLDivElement>(null);
  const storyRef1b = useRef<HTMLDivElement>(null);
  const storyRefContest = useRef<HTMLDivElement>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    let observerInstance: IntersectionObserver | null = null;
    let observer1bInstance: IntersectionObserver | null = null;
    let observer2Instance: IntersectionObserver | null = null;
    let observer2bInstance: IntersectionObserver | null = null;
    let observer3Instance: IntersectionObserver | null = null;
    let observer4Instance: IntersectionObserver | null = null;
    let observerContestInstance: IntersectionObserver | null = null;

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

        /* ─ Story heading 1b animation ─ */
        if (storyRef1b.current) {
          const el1b = storyRef1b.current;
          const words1b = el1b.querySelectorAll<HTMLElement>(".story-word");
          observer1bInstance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words1b,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer1bInstance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observer1bInstance.observe(el1b);
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

        /* ─ Story heading 2b animation ─ */
        if (storyRef2b.current) {
          const el2b = storyRef2b.current;
          const words2b = el2b.querySelectorAll<HTMLElement>(".story-word");
          observer2bInstance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words2b,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer2bInstance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observer2bInstance.observe(el2b);
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

        /* ─ Stage 3 contest heading animation ─ */
        if (storyRefContest.current) {
          const elContest = storyRefContest.current;
          const wordsContest =
            elContest.querySelectorAll<HTMLElement>(".story-word");
          observerContestInstance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    wordsContest,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observerContestInstance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          observerContestInstance.observe(elContest);
        }
      } catch {
        if (waveRef.current) {
          waveRef.current
            .querySelectorAll<HTMLElement>(".wave-word")
            .forEach((w) => (w.style.opacity = "1"));
        }
        [
          storyRef,
          storyRef1b,
          storyRef2,
          storyRef2b,
          storyRef3,
          storyRef4,
          storyRefContest,
        ].forEach((ref) => {
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
      observer1bInstance?.disconnect();
      observer2Instance?.disconnect();
      observer2bInstance?.disconnect();
      observer3Instance?.disconnect();
      observer4Instance?.disconnect();
      observerContestInstance?.disconnect();
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
            Gaahleri Community transforms a &apos;buy-and-leave&apos; store into
            a hobby community where users grow from 3D model enthusiasts into
            creative masters — turning one-time buyers into long-term brand
            advocates.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OVERVIEW — Hero Image + Meta
          ═══════════════════════════════════════════════════════ */}
      <section id="overview" className="w-full">
        <div className="relative w-full">
          {/* Desktop image */}
          <Image
            src="/comminity/comminity-hero.webp"
            alt="Gaahleri Community Hero"
            width={1920}
            height={1080}
            className="hidden md:block h-auto w-full"
            priority
          />
          {/* Mobile image */}
          <Image
            src="/comminity/community-hero-mobile.webp"
            alt="Gaahleri Community Hero"
            width={1080}
            height={1350}
            className="block md:hidden h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p
            className="text-center text-4xl text-black font-bold mb-16"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I turned a traditional buy-and-leave e-commerce store into a hobby
            community users visit often.
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.gaahleri.com/pages/gaahleri-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-zinc-300 text-black px-8 py-4 rounded-lg hover:bg-zinc-100 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Gaahleri Community
            </a>
            <a
              href="https://www.gaahleri.com/pages/gwcconline?ref=Social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Community Contest
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
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-black shrink-0" />
              <h3 className="text-lg font-bold text-black">The Challenge</h3>
            </div>
            <ul className="ml-10 mt-3 space-y-2 list-disc list-inside">
              <li className="text-base text-zinc-500 leading-relaxed">
                Gaahleri&rsquo;s website was a standard
                &ldquo;buy-and-leave&rdquo; e-commerce store.
              </li>
              <li className="text-base text-zinc-500 leading-relaxed">
                Brand loyalty was low because there was no reason to return
                after purchase.
              </li>
            </ul>

            <Image
              src="/comminity/challenge.webp"
              alt="Low user retention in traditional e-commerce"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl mt-6 border-2 border-zinc-300"
            />
            <p
              className="text-center text-sm text-zinc-500 mt-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Low user retention in traditional e-commerce
            </p>
          </div>

          {/* Design Strategy */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-black shrink-0" />
              <h3 className="text-lg font-bold text-black">Design Strategy</h3>
            </div>
            <p className="ml-9 text-base text-zinc-500 mb-6">
              Adding a community page and building a community culture.
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-4">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white"
                  style={{ aspectRatio: "3840 / 11558" }}
                  onClick={() => setZoomedImage("/comminity/before.webp")}
                >
                  <Image
                    src="/comminity/before.webp"
                    alt="Old E-commerce Store"
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute top-3 left-3 bg-zinc-800 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Before
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Before: Product-Center
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white"
                  style={{ aspectRatio: "3840 / 11558" }}
                  onClick={() => setZoomedImage("/comminity/after.webp")}
                >
                  <Image
                    src="/comminity/after.webp"
                    alt="Community Page"
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    After
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-zinc-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  After: Build a Community Culture
                </p>
              </div>
            </div>

            {/* Contest Intro Video — below Before/After grid */}
            <div className="mt-8 relative rounded-2xl overflow-hidden border-2 border-zinc-200">
              <ContestIntroVideo />
              <div
                className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ fontFamily: "var(--font-body)" }}
              >
                After
              </div>
            </div>
            <p
              className="mt-3 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              After: Contest Intro Page
            </p>

            {/* The Result */}
            <div className="mt-16 mb-4">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-5 h-5 text-black shrink-0" />
                <h3 className="text-lg font-bold text-black">The Result</h3>
              </div>
              <p className="ml-9 text-base text-zinc-500 mb-6">
                Online store sales increased by 214%.
              </p>
              <div className="rounded-2xl overflow-hidden border-2 border-zinc-200">
                <Image
                  src="/comminity/result.webp"
                  alt="The Result"
                  width={2560}
                  height={1440}
                  className="w-full h-auto block"
                />
              </div>
              <p
                className="mt-3 text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Online store sales increased by 214%
              </p>
            </div>

            {/* Contest feature images — hidden */}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 1b
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef1b}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords1b.map((word, i) => (
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
          SECTION 1b: DISCOVERY
          ═══════════════════════════════════════════════════════ */}
      <section id="discovery" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Discovery: The 24k Insight */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart2 className="w-5 h-5 text-black shrink-0" />
              <h3 className="text-lg font-bold text-black">
                Social Media Analysis
              </h3>
            </div>

            {/* Data Analysis */}
            <div className="mb-10">
              <ul className="ml-10 mt-3 space-y-2 list-disc list-inside mb-8">
                <li className="text-base text-zinc-500 leading-relaxed">
                  The company&apos;s main promotional channels are its sales
                  website and YouTube.
                </li>
                <li className="text-base text-zinc-500 leading-relaxed">
                  While auditing YouTube performance, I found a
                  &quot;Workstation&quot; video with 24,000 views, far exceeding
                  the 6k average for product demo videos.
                </li>
              </ul>

              {/* Two video comparison images side by side */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black aspect-video"
                    onClick={() => setZoomedImage("/comminity/24k video.webp")}
                  >
                    <Image
                      src="/comminity/24k video.webp"
                      alt="Workstation Video with 24k Views"
                      fill
                      className="object-contain"
                    />
                    <div
                      className="absolute top-3 right-3 bg-white text-black font-extrabold text-3xl px-3 py-1 rounded-xl shadow-lg leading-none"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      24k
                    </div>
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
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black aspect-video"
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
                    <div
                      className="absolute top-3 right-3 bg-white text-black font-extrabold text-3xl px-3 py-1 rounded-xl shadow-lg leading-none"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      6k
                    </div>
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

            {/* User Research: 3D model first → then our product */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Search className="w-5 h-5 text-black shrink-0" />
                <h3 className="text-lg font-bold text-black">User Research</h3>
              </div>
              <ul className="ml-10 mt-3 mb-6 space-y-2 list-disc list-inside">
                <li className="text-base text-zinc-500 leading-relaxed">
                  Users are tired of searching for free, high-quality 3D models.
                </li>
                <li className="text-base text-zinc-500 leading-relaxed">
                  Users want to solve real-world problems with their own
                  hand-drawn 3D models.
                </li>
              </ul>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black aspect-video"
                    onClick={() => setZoomedImage("/comminity/feedback1.webp")}
                  >
                    <Image
                      src="/comminity/feedback1.webp"
                      alt="User Feedback 1"
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
                    Users need 3D models
                  </p>
                </div>
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black aspect-video"
                    onClick={() => setZoomedImage("/comminity/feedback2.webp")}
                  >
                    <Image
                      src="/comminity/feedback2.webp"
                      alt="User Feedback 2"
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
                    Users need 3D models
                  </p>
                </div>
              </div>
            </div>

            {/* User Research */}
            <div className="mb-10">
              <div className="grid gap-6 md:grid-cols-2 items-stretch mb-8">
                {/* Main User image */}
                <div className="flex flex-col">
                  <div className="rounded-2xl border-2 border-zinc-200 overflow-hidden">
                    <div
                      className="relative group cursor-zoom-in bg-white aspect-video"
                      onClick={() =>
                        setZoomedImage("/comminity/main%20user.webp")
                      }
                    >
                      <Image
                        src="/comminity/main%20user.webp"
                        alt="63.6% of users are model makers"
                        fill
                        className="object-contain"
                      />

                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <Maximize2 className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>
                  <p
                    className="mt-2 text-center text-sm font-medium text-zinc-600"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    63.6% of users are 3D model makers
                  </p>
                </div>
                {/* Community Persona image */}
                <div className="flex flex-col">
                  <div className="rounded-2xl border-2 border-zinc-200 overflow-hidden">
                    <div
                      className="relative group cursor-zoom-in bg-white aspect-video"
                      onClick={() =>
                        setZoomedImage("/comminity/community-persona.webp")
                      }
                    >
                      <Image
                        src="/comminity/community-persona.webp"
                        alt="User Persona"
                        fill
                        className="object-contain"
                      />

                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <Maximize2 className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>
                  <p
                    className="mt-2 text-center text-sm font-medium text-zinc-600"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Finding 3D models is often frustrating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Ideation */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-5 h-5 text-black shrink-0" />
              <h3 className="text-lg font-bold text-black">Design Ideation</h3>
            </div>
            <p className="ml-9 text-base text-zinc-500 mb-6">
              3D model community + Our Product
            </p>

            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 mb-3"
              onClick={() => setZoomedImage("/comminity/Ideation.webp")}
            >
              <Image
                src="/comminity/Ideation.webp"
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
              className="text-center text-sm text-zinc-500 mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Gaahleri 3D Model Community
            </p>

            <div className="bg-[#F8F4EF] border-l-4 border-black rounded-r-2xl p-6 ml-10">
              <span
                className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User-centered
              </span>
              <p className="text-base text-zinc-500 leading-relaxed">
                Users need 3D models before using our product. This process is
                frustrating. We&apos;ll provide them for free and build a
                community.
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
                Holiday · The Halloween Experiment
              </span>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Search className="w-5 h-5 text-black shrink-0 mt-1" />
              <p className="text-lg text-zinc-500 leading-relaxed">
                Insight: Users want to create and paint{" "}
                <span className="font-bold text-black">
                  Halloween-themed 3D models
                </span>
                .
              </p>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-black shrink-0 mt-1" />
              <p className="text-lg text-zinc-500 leading-relaxed">
                Action: We released a{" "}
                <span className="font-bold text-black">
                  Halloween color bundle
                </span>
                , created a{" "}
                <span className="font-bold text-black">
                  tutorial video on painting Halloween 3D models
                </span>
                , and offered the{" "}
                <span className="font-bold text-black">
                  3D model files for free
                </span>
                .
              </p>
            </div>
            <div className="flex items-start gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-black shrink-0 mt-1" />
              <div className="text-lg text-zinc-500 leading-relaxed">
                <p className="mb-3">Outcome:</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>
                    <span className="font-bold text-black">
                      Halloween color bundle sales spiked
                    </span>
                    .
                  </li>
                  <li>
                    <span className="font-bold text-black">
                      First wave of organic user-generated content
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>

            {/* Halloween Tutorial YouTube Video */}
            <div className="mb-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-zinc-200 mb-3">
                <iframe
                  src="https://www.youtube.com/embed/00IvSd1Kfqk"
                  title="Halloween 3D Model Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p
                className="text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Halloween 3D Model Tutorial
              </p>
            </div>

            {/* Halloween images */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black aspect-video"
                  onClick={() => setZoomedImage("/comminity/Halloween1.webp")}
                >
                  <Image
                    src="/comminity/Halloween1.webp"
                    alt="Halloween Campaign 1"
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
                  Halloween Webpage 1
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black aspect-video"
                  onClick={() => setZoomedImage("/comminity/Halloween2.webp")}
                >
                  <Image
                    src="/comminity/Halloween2.webp"
                    alt="Halloween Campaign 2"
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
                  Halloween Webpage 2
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50 aspect-video"
                  onClick={() => setZoomedImage("/comminity/user-shsare.webp")}
                >
                  <Image
                    src="/comminity/user-shsare.webp"
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
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 2b
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef2b}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords2b.map((word, i) => (
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
          SECTION 2 (cont.): VALIDATION 2 — CHRISTMAS
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Validation 2 — Christmas */}
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm mb-6 border border-zinc-200">
              <span style={{ fontFamily: "var(--font-body)" }}>
                Holiday | ProductFlaw · The Christmas Pivot: From Flaw to
                Strength
              </span>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <HeartCrack className="w-5 h-5 text-black shrink-0 mt-1" />
              <p className="text-lg text-zinc-500 leading-relaxed">
                Conflict: Users reported that airbrush{" "}
                <span className="font-bold text-black">
                  cup lids sometimes get stuck
                </span>{" "}
                —{" "}
                <span className="font-bold text-black">
                  negative product experience
                </span>
                .
              </p>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <Lightbulb className="w-5 h-5 text-black shrink-0 mt-1" />
              <p className="text-lg text-zinc-500 leading-relaxed">
                Strategy: We{" "}
                <span className="font-bold text-black">
                  designed Christmas-themed 3D-printable lid grips
                </span>{" "}
                (Santa hats, Christmas trees, etc.).
              </p>
            </div>
            <div className="flex items-start gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-black shrink-0 mt-1" />
              <p className="text-lg text-zinc-500 leading-relaxed">
                Outcome: Negative sentiment decreased significantly. Users began
                printing, customizing, and sharing their own lid designs —{" "}
                <span className="font-bold text-black">
                  customer satisfaction with the product rose from 64.3% to
                  89.2%.
                </span>
              </p>
            </div>

            {/* Christmas Pivot YouTube Video */}
            <div className="mb-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-zinc-200 mb-3">
                <iframe
                  src="https://www.youtube.com/embed/CR1yxwvQOlA"
                  title="Turn lids get struck into a custom lids opportunity"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p
                className="text-center text-sm text-zinc-500"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Turn &quot;lids get struck&quot; into a custom lids opportunity.
              </p>
            </div>

            {/* Co-creation community page — two separate cards (moved above campaign) */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white aspect-video"
                  onClick={() => setZoomedImage("/comminity/cup.webp")}
                >
                  <Image
                    src="/comminity/cup.webp"
                    alt="Co-creation Community Page"
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
                  Problem: cup lids sometimes get stuck
                </p>
              </div>
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-[#4e0c06] aspect-video"
                  onClick={() => setZoomedImage("/comminity/Christmas.webp")}
                >
                  <Image
                    src="/comminity/Christmas.webp"
                    alt="Co-creation Community Page"
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
                  Turn the problem into user-loved DIY.
                </p>
              </div>
            </div>

            {/* Born from your feedback — full width */}
            <div className="mb-8">
              <div
                className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-zinc-50"
                onClick={() =>
                  setZoomedImage("/comminity/born from your feedback.webp")
                }
              >
                <Image
                  src="/comminity/born from your feedback.webp"
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
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER CONTEST (standalone) — How a model competition…
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRefContest}
            className="text-black font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWordsContest.map((word, i) => (
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
          SECTION: GWCC — Insight → Solution → Outcome
          ═══════════════════════════════════════════════════════ */}
      <section id="gwcc" className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Competition Background ── */}
          <div className="mb-20">
            <div className="flex items-start gap-3 mb-6">
              <Flag className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">Competition Background</h3>
            </div>
            <ul className="ml-9 space-y-3 list-none">
              <li className="text-lg text-zinc-500 leading-relaxed flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                <span>
                  Halloween and Christmas taught us that giving users a{" "}
                  <span className="font-bold text-black">
                    &ldquo;reason to create&rdquo;
                  </span>{" "}
                  drives engagement.
                </span>
              </li>
              <li className="text-lg text-zinc-500 leading-relaxed flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                <span>
                  But{" "}
                  <span className="font-bold text-black">
                    seasonal spikes don&apos;t build lasting communities
                  </span>
                  .
                </span>
              </li>
              <li className="text-lg leading-relaxed flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <span className="font-bold text-black">
                  We scaled the insight into GWCC: a model competition designed
                  to turn our e-commerce into a lasting 3D model community.
                </span>
              </li>
            </ul>
          </div>

          {/* ── Solution ── */}
          <div className="mb-20">
            <div className="flex items-start gap-3 mb-3">
              <Trophy className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">
                GWCC &mdash; A 4-Month Model Creation Competition
              </h3>
            </div>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 ml-9 italic">
              Not just a contest. A rite of passage for every modeler.
            </p>

            {/* Contest Intro Images — 2×2 grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  src: "/comminity/contest%20intro%201.webp",
                  alt: "GWCC Contest Intro 1",
                },
                {
                  src: "/comminity/contest%20intro2.webp",
                  alt: "GWCC Contest Intro 2",
                },
                {
                  src: "/comminity/contest%20intro3.webp",
                  alt: "GWCC Contest Intro 3",
                },
                {
                  src: "/comminity/contest%20intro4.webp",
                  alt: "GWCC Contest Intro 4",
                },
              ].map((img) => (
                <div
                  key={img.alt}
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-black"
                  onClick={() => setZoomedImage(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={960}
                    height={540}
                    className="w-full h-auto block"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-black" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Outcome ── */}
          <div>
            <div className="flex items-start gap-3 mb-10">
              <BarChart2 className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <h3 className="text-black">Outcome</h3>
            </div>

            {/* Community Flywheel heading */}
            <h4
              className="font-bold text-black mb-2 text-xl text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Community Flywheel
            </h4>
            <p
              className="text-zinc-500 mb-10 text-center text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Participate → Update → Interact → Recognition → Loyalty → Share →
              More Participants
            </p>

            {/* Animated flywheel diagram */}
            <CommunityFlywheel />

            {/* Metrics cards — 3 cards below flywheel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
              {[
                {
                  Icon: Eye,
                  metric: "0.3× → 4.2×",
                  label: "Monthly visit frequency",
                },
                {
                  Icon: Gift,
                  metric: "67%",
                  label: "Gift card reuse rate",
                },
                {
                  Icon: TrendingUp,
                  metric: "300%+",
                  label: "Brand search growth",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center bg-white rounded-2xl border-2 border-zinc-200 p-6 shadow-sm"
                >
                  <item.Icon className="w-7 h-7 text-black mb-3" />
                  <p
                    className="text-2xl font-extrabold text-black mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.metric}
                  </p>
                  <p
                    className="text-xs text-zinc-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 3 (hidden — do not delete)
          ═══════════════════════════════════════════════════════ */}
      <section className="hidden w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
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
          {/* Feature 1 — STL Vault (hidden — do not delete) */}
          <div className="hidden mb-20">
            <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-sm mb-6 border border-zinc-200">
              <span style={{ fontFamily: "var(--font-body)" }}>
                Feature 1 · Free 3D Resource Center
              </span>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <Download className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <div>
                <p className="text-lg text-zinc-500 leading-relaxed mb-2">
                  <span className="font-bold text-black">Pain point:</span>{" "}
                  Users struggle to find high-quality 3D models.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  <span className="font-bold text-black">Solution:</span> A
                  centralized free 3D model download hub (wall mounts, desk
                  organizers, cup grips, etc.). This gave users a reason to
                  visit the website often.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white aspect-video"
                  onClick={() => setZoomedImage("/comminity/resource1.webp")}
                >
                  <Image
                    src="/comminity/resource1.webp"
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
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white aspect-video"
                  onClick={() => setZoomedImage("/comminity/resource2.webp")}
                >
                  <Image
                    src="/comminity/resource2.webp"
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

          {/* Feature 2 — Discord (hidden, do not delete) */}
          <div className="mb-12 hidden">
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
              onClick={() => setZoomedImage("/comminity/discord.webp")}
            >
              <Image
                src="/comminity/discord.webp"
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
          STORY BANNER 4
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-[#F8F4EF] relative overflow-hidden">
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
      </section>

      {/* ════════════════════════════════════════════════════════
          RESULTS & IMPACT
          ═══════════════════════════════════════════════════════ */}
      <section
        id="results"
        className="w-full py-24 bg-white relative overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flywheel diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { step: "01", label: "Shop", sub: "Buy" },
              { step: "02", label: "Community", sub: "Learn / Download" },
              { step: "03", label: "Discord", sub: "Share / Connect" },
              { step: "04", label: "Repeat Purchase", sub: "New Tools" },
            ].map((item) => (
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
              </div>
            ))}
          </div>

          {/* User reviews — result image */}
          <div className="flex flex-col mb-10">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white aspect-video"
              onClick={() => setZoomedImage("/comminity/result.webp")}
            >
              <Image
                src="/comminity/result.webp"
                alt="Online Store Sales Result"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-black" />
              </div>
            </div>
            <p
              className="mt-4 text-center text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Online store sales increased by 214%
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
            <p className="text-base text-zinc-500 leading-relaxed">
              We built a &quot;creative home&quot; &mdash; shifting from product
              vendor to creator ally, doubling customer value.
            </p>
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
                body: "A community is not a 'page' – it's a system. By aligning 3D model files, Discord, and Shopify, I created a flywheel: every free download fueled a future sale.",
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
            See how Gaahleri evolved from a product seller into the hub for 3D
            model enthusiasts. Gaahleri&apos;s community is still growing. This
            project taught me that true UX is not just about designing
            interfaces – it&apos;s about designing relationships, trust, and the
            possibility of co-creation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.gaahleri.com/pages/gaahleri-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-zinc-300 text-black px-10 py-5 rounded-lg hover:bg-zinc-100 transition-all transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Gaahleri Community
            </a>
            <a
              href="https://www.gaahleri.com/pages/gwcconline?ref=Social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Community Contest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
