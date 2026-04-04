"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Volume2, VolumeX } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Footer() {
  const [isNamePlaying, setIsNamePlaying] = useState(false);
  const nameAudioRef = useRef<HTMLAudioElement | null>(null);

  const toggleName = () => {
    if (!nameAudioRef.current) {
      nameAudioRef.current = new Audio("/home/QianqianWei.mp3");
      nameAudioRef.current.addEventListener("ended", () =>
        setIsNamePlaying(false),
      );
    }
    if (isNamePlaying) {
      nameAudioRef.current.pause();
      nameAudioRef.current.currentTime = 0;
      setIsNamePlaying(false);
    } else {
      nameAudioRef.current.play();
      setIsNamePlaying(true);
    }
  };

  return (
    <footer className="bg-zinc-950 text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
            <button
              onClick={toggleName}
              className="text-white hover:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Play pronunciation of Qianqian Wei"
            >
              {isNamePlaying ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            Qianqian Wei
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            UX Designer &amp; Front-end Developer
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Connect
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:qianqianwei112233@gmail.com"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                qianqianwei112233@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/qianqianwei112233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Qianqian122333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Location
          </h4>
          <div className="flex items-start gap-2 text-sm text-zinc-300">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              Netherlands
              <br />
              <span className="text-zinc-500">Willing to relocate</span>
              <br />
              <span className="text-zinc-500">Available for remote work</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Qianqian Wei. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/home"
            className="text-xs text-zinc-500 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-xs text-zinc-500 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
