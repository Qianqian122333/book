"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  Compass,
  Search,
  Ghost,
  HeartCrack,
  Trophy,
  BarChart2,
  Sparkles,
  ExternalLink,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "radix-ui";

const sidebarItems = [
  { id: "introduction", label: "Introduction", Icon: BookOpen },
  { id: "challenge", label: "Overview", Icon: Compass },
  { id: "discovery", label: "Research", Icon: Search },
  { id: "validation", label: "Holiday Design", Icon: Ghost },
  { id: "crisis", label: "Crisis Resolution", Icon: HeartCrack },
  { id: "gwcc", label: "Long-term Community", Icon: Trophy },
  { id: "results", label: "Result", Icon: BarChart2 },
  { id: "reflections", label: "Reflections", Icon: Sparkles },
];

export default function GaahleriCommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState<string>("introduction");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  useEffect(() => {
    const sections = sidebarItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          );
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const NavList = ({ onItemClick }: { onItemClick?: () => void }) => (
    <nav className="flex flex-col gap-1 p-2">
      {sidebarItems.map(({ id, label, Icon }) => {
        const active = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={onItemClick}
            className={`inline-flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-black text-white"
                : "text-zinc-700 hover:bg-black hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Icon className="w-4 h-4 shrink-0" />
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );

  const FooterCTA = () => (
    <div className="flex flex-col gap-2">
      <a
        href="https://www.gaahleri.com/pages/gwcconline?ref=Social"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-zinc-800 transition-all text-sm font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Explore Community Contest
        <ExternalLink className="w-4 h-4" />
      </a>
      <a
        href="https://www.gaahleri.com/pages/gaahleri-community"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 bg-white text-black border border-zinc-300 px-4 py-3 rounded-lg hover:bg-zinc-100 transition-all text-sm font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Explore Gaahleri Community
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );

  const HeaderTitle = () => (
    <h2
      className="text-lg font-bold text-black"
      style={{ fontFamily: "var(--font-body)" }}
    >
      Gaahleri Community
    </h2>
  );

  return (
    <div className="flex w-full items-start">
      {/* Desktop sidebar */}
      {desktopOpen && (
        <aside className="hidden md:flex sticky top-16 h-[calc(100svh-4rem)] w-64 shrink-0 flex-col border-r border-zinc-200 bg-white">
          <div className="border-b border-zinc-200 px-4 py-4">
            <HeaderTitle />
          </div>
          <div className="flex-1 overflow-y-auto">
            <NavList />
          </div>
          <div className="border-t border-zinc-200 p-4">
            <FooterCTA />
          </div>
        </aside>
      )}

      {/* Main content column */}
      <div className="flex-1 min-w-0">
        {/* Trigger bar */}
        <div className="sticky top-16 z-40 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 border-b border-zinc-100">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-md hover:bg-zinc-100 transition-colors"
                aria-label="Open sidebar"
              >
                <Menu className="w-5 h-5 text-black" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 flex flex-col">
              <VisuallyHidden.Root>
                <SheetTitle>Gaahleri Community navigation</SheetTitle>
                <SheetDescription>
                  Section navigation for the Gaahleri Community case study.
                </SheetDescription>
              </VisuallyHidden.Root>
              <div className="border-b border-zinc-200 px-4 py-4">
                <HeaderTitle />
              </div>
              <div className="flex-1 overflow-y-auto">
                <NavList onItemClick={() => setMobileOpen(false)} />
              </div>
              <div className="border-t border-zinc-200 p-4">
                <FooterCTA />
              </div>
            </SheetContent>
          </Sheet>

          <button
            onClick={() => setDesktopOpen((v) => !v)}
            className="hidden md:inline-flex p-2 rounded-md hover:bg-zinc-100 transition-colors"
            aria-label={desktopOpen ? "Hide sidebar" : "Show sidebar"}
            aria-expanded={desktopOpen}
          >
            <Menu className="w-5 h-5 text-black" />
          </button>

          <span
            className="text-sm font-medium text-black"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Gaahleri Community
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
