"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Volume2, VolumeX } from "lucide-react";

export default function CoverPage() {
  const router = useRouter();
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isQianqianPlaying, setIsQianqianPlaying] = useState(false);
  const qianqianAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow pulsing glow on image only
      gsap.to(imageRef.current, {
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    router.push("/home");
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div
        ref={imageRef}
        onClick={handleEnter}
        className="cursor-pointer transition-transform duration-300 hover:rotate-2"
      >
        <Image
          src="/home/bookcover.webp"
          alt="Qianqian's Book"
          width={400}
          height={560}
          className="rounded-lg shadow-2xl max-w-[80vw] h-auto"
          priority
        />
      </div>
      <div ref={textRef} className="mt-14 text-center space-y-5">
        <p className="text-xl sm:text-2xl font-medium tracking-wide text-zinc-700 inline-flex items-center gap-1.5">
          You&apos;ve discovered{" "}
          <button
            onClick={toggleQianqian}
            className="inline-flex items-center hover:text-zinc-500 transition-colors cursor-pointer"
            aria-label="Play pronunciation of Qianqian"
          >
            {isQianqianPlaying ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          Qianqian&apos;s book.
        </p>
        <p className="text-xl sm:text-2xl font-medium tracking-wide text-zinc-500">
          Click to read.
        </p>
      </div>
    </div>
  );
}
