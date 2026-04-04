"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const titleWords = ["Designer", "Developer."];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      wordsRef.current.forEach((word) => {
        gsap.set(word, { y: 80, opacity: 0 });
      });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(bioRef.current, { y: 40, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Wave animation: each word appears one by one with stagger
      wordsRef.current.forEach((word, i) => {
        tl.to(
          word,
          {
            y: 0,
            opacity: 1,
            duration: 1.8,
            ease: "elastic.out(0.6, 0.4)",
          },
          i * 0.55,
        );
      });

      // Image fades in
      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        },
        "-=0.6",
      );

      // Bio slides up
      tl.to(
        bioRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/home/QianqianWei.mp3");
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 pt-16 pb-32 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
        {/* Left column: title at bottom */}
        <div className="flex flex-col justify-end">
          <h1 className="font-semibold tracking-tighter text-left text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.16]">
            {titleWords.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <span
                  ref={(el) => {
                    wordsRef.current[i] = el;
                  }}
                  className="inline-block"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Right column: image top-right + bio bottom-right */}
        <div className="flex flex-col">
          <div ref={imageRef} className="self-end">
            <Image
              src="/home/hero.webp"
              alt="Qianqian Wei"
              width={220}
              height={253}
              className="rounded-lg object-cover w-[160px] h-[184px] sm:w-[180px] sm:h-[207px] md:w-[200px] md:h-[230px] lg:w-[220px] lg:h-[253px]"
              priority
            />
          </div>
          <p
            ref={bioRef}
            className="mt-12 text-right text-black self-end text-sm sm:text-base md:text-lg leading-[1.2] md:leading-[21.6px]"
          >
            Hi, I&apos;m{" "}
            <button
              onClick={toggleAudio}
              className="inline-flex items-center gap-1 hover:text-zinc-600 transition-colors cursor-pointer"
              aria-label="Play pronunciation of Qianqian Wei"
            >
              {isPlaying ? (
                <VolumeX className="w-4 h-4 inline" />
              ) : (
                <Volume2 className="w-4 h-4 inline" />
              )}
            </button>{" "}
            Qianqian Wei, A UX
            <br />
            Designer &amp; Developer,
            <br />
            Part-time Hanfu
            <br />
            Model.
          </p>
        </div>
      </div>
    </section>
  );
}
