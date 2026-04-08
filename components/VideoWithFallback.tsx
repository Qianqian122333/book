"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoWithFallbackProps {
  videoSrc: string;
  webmSrc?: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  poster?: string;
}

export default function VideoWithFallback({
  videoSrc,
  webmSrc,
  fallbackSrc,
  alt,
  className,
  poster,
}: VideoWithFallbackProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

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
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </>
  );
}
