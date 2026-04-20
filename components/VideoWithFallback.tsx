"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface VideoWithFallbackProps {
  videoSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  poster?: string;
}

export default function VideoWithFallback({
  videoSrc,
  fallbackSrc,
  alt,
  className,
  poster,
}: VideoWithFallbackProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    const onReady = () => setVideoReady(true);

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("playing", onReady);
    video.addEventListener("canplay", onReady);

    // If already loaded (cached), mark ready immediately
    if (video.readyState >= 2) {
      setVideoReady(true);
    }

    // iOS Safari: try to trigger play programmatically
    video.play().catch(() => {
      // autoplay blocked — keep showing poster
    });

    // Safety timeout: if video hasn't loaded after 8s, reload it
    const timeout = setTimeout(() => {
      if (!video.readyState || video.readyState < 2) {
        video.load();
        video.play().catch(() => {});
      }
    }, 8000);

    return () => {
      clearTimeout(timeout);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("playing", onReady);
      video.removeEventListener("canplay", onReady);
    };
  }, [videoFailed]);

  return (
    <>
      {/* Fallback image — always shown; fades out once video is playing */}
      <Image
        src={fallbackSrc}
        alt={alt}
        fill
        className={`${className ?? ""} transition-opacity duration-700 ${videoReady && !videoFailed ? "opacity-0" : "opacity-100"}`}
        style={{ objectFit: "cover" }}
      />
      {/* Video — invisible until ready, then fades in over the image */}
      {!videoFailed && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </>
  );
}
