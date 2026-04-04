"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const projects = [
  { name: "KaleidoColorLab", href: "/projects/kaleidocolorlab" },
  { name: "Aventus Airbrush", href: "/projects/aventus-airbrush" },
  { name: "Gaahleri Community", href: "/projects/gaahleri-community" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isProjectsActive = pathname.startsWith("/projects");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Logo */}
        <Link href="/home" className="text-lg font-bold tracking-tight">
          QianqianWei.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/home"
                  className={`inline-flex h-9 items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive("/home") ? "bg-[#F8F4EF]" : "hover:bg-[#F8F4EF]"
                  }`}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`text-sm font-medium ${
                    isProjectsActive ? "bg-[#F8F4EF]" : ""
                  }`}
                >
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    {projects.map((p) => (
                      <li key={p.href}>
                        <NavigationMenuLink
                          href={p.href}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                            isActive(p.href)
                              ? "bg-[#F8F4EF]"
                              : "hover:bg-[#F8F4EF]"
                          }`}
                        >
                          {p.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={`inline-flex h-9 items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive("/contact") ? "bg-[#F8F4EF]" : "hover:bg-[#F8F4EF]"
                  }`}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 hover:bg-[#F8F4EF] rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-6 pb-6">
          <ul className="space-y-1 pt-4">
            <li>
              <Link
                href="/home"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/home") ? "bg-[#F8F4EF]" : "hover:bg-[#F8F4EF]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isProjectsActive ? "bg-[#F8F4EF]" : "hover:bg-[#F8F4EF]"
                }`}
              >
                Projects
                <span
                  className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              {projectsOpen && (
                <ul className="ml-4 mt-1 space-y-1">
                  {projects.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors ${
                          isActive(p.href)
                            ? "bg-[#F8F4EF]"
                            : "hover:bg-[#F8F4EF]"
                        }`}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/contact") ? "bg-[#F8F4EF]" : "hover:bg-[#F8F4EF]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
