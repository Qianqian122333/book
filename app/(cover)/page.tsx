"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Volume2, VolumeX } from "lucide-react";

export default function CoverPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const bookWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isQianqianPlaying, setIsQianqianPlaying] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const qianqianAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text: start off-screen bottom-right, glide to center
      gsap.fromTo(
        textRef.current,
        { x: 120, y: 80, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.2,
        },
      );

      // Book cover: start off-screen top-left, glide to center, then shimmer
      gsap.fromTo(
        imageRef.current,
        { x: -120, y: -80, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.1,
          onComplete: () => {
            // Subtle scale pulse to hint the book is clickable
            gsap.to(imageRef.current, {
              scale: 1.02,
              duration: 0.8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    if (isOpening) return;
    setIsOpening(true);

    const tl = gsap.timeline({
      onComplete: () => router.push("/home"),
    });

    // 3D book-opening effect: rotate the book cover like opening a book
    tl.to(bookWrapperRef.current, {
      rotateY: -180,
      scale: 1.05,
      duration: 1.8,
      ease: "power2.inOut",
    });

    // Fade out the whole page
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.4",
    );
  };

  const toggleQianqian = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!qianqianAudioRef.current) {
      qianqianAudioRef.current = new Audio("/home/Qianqian.mp3");
      qianqianAudioRef.current.addEventListener("ended", () =>
        setIsQianqianPlaying(false),
      );
    }
    if (isQianqianPlaying) {
      qianqianAudioRef.current.pause();
      qianqianAudioRef.current.currentTime = 0;
      setIsQianqianPlaying(false);
    } else {
      qianqianAudioRef.current.play();
      setIsQianqianPlaying(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={bookWrapperRef}
        onClick={handleEnter}
        className="cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
        }}
      >
        <div ref={imageRef} style={{ opacity: 0 }}>
          <Image
            src="/home/bookcover.webp"
            alt="Qianqian's Book"
            width={400}
            height={560}
            className="rounded-lg max-w-[55vw] sm:max-w-[80vw] h-auto transition-transform duration-300 hover:rotate-2"
            priority
          />
        </div>
      </div>
      <div
        ref={textRef}
        className="mt-6 sm:mt-14 text-center space-y-3 sm:space-y-5"
        style={{ opacity: 0 }}
      >
        <p className="text-xl sm:text-2xl font-medium tracking-wide text-zinc-700">
          You&apos;ve discovered{" "}
          <button
            onClick={toggleQianqian}
            className="inline-flex items-center align-middle hover:text-zinc-500 transition-colors cursor-pointer"
            aria-label="Play pronunciation of Qianqian"
          >
            {isQianqianPlaying ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>{" "}
          Qianqian&apos;s book.
        </p>
        <p className="text-xl sm:text-2xl font-medium tracking-wide text-zinc-500">
          Click to read.
        </p>
      </div>
    </div>
  );
}
