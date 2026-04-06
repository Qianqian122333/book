"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoWithFallbackProps {
  videoSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function VideoWithFallback({
  videoSrc,
  fallbackSrc,
  alt,
  className,
}: VideoWithFallbackProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        fill
        className={className}
        style={{ objectFit: "cover" }}
      />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className}
      onError={() => setUseFallback(true)}
    >
      <source
        src={videoSrc}
        type="video/mp4"
        onError={() => setUseFallback(true)}
      />
    </video>
  );
}
