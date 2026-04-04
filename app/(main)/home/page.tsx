import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const experiences = [
  {
    num: "01",
    title: "UX Developer",
    period: "08 2025 - Present, Gaahleri",
    type: "Full-time, China",
    href: "https://www.gaahleri.com/",
  },
  {
    num: "02",
    title: "UX Designer",
    period: "07 2025 - 08 2025, YoloLiv",
    type: "Full-time, China",
    href: "https://www.yololiv.com/",
  },
  {
    num: "03",
    title: "UX Specialist",
    period: "10 2023 - 06 2025, ATG",
    type: "Full-time, London",
    href: "https://www.atgtickets.com/",
  },
  {
    num: "04",
    title: "UX Designer",
    period: "03 2023 - 08 2023, Scope",
    type: "Volunteer, London",
    href: "https://shop.scope.org.uk/",
  },
  {
    num: "05",
    title: "UX Designer",
    period: "06 2021 - 08 2022, JinYun Beauty",
    type: "Full-time, China",
    href: undefined,
  },
];

const projects = [
  {
    name: "KaleidoColorLab",
    desc: "UX Design & Full-stack Development",
    href: "/projects/kaleidocolorlab",
  },
  {
    name: "Aventus Airbrush",
    desc: "UX Design & Front-end Development",
    href: "/projects/aventus-airbrush",
  },
  {
    name: "Gaahleri Community",
    desc: "UX Design & Front-end Development",
    href: "/projects/gaahleri-community",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <HeroSection />

      {/* Work Experience Section */}
      <section className="bg-[#F8F4EF] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
          <h2 className="text-xl font-bold tracking-widest sm:text-2xl">
            WORK EXPERIENCE
          </h2>

          <div className="mt-16 space-y-16">
            {experiences.map((exp) => {
              const inner = (
                <div className="grid grid-cols-[auto_1fr] items-start gap-8 transition-transform duration-300 hover:translate-x-3">
                  <span className="text-xl font-medium">{exp.num}</span>
                  <div className="w-full">
                    <h3 className="text-xl font-semibold mb-4">{exp.title}</h3>
                    <hr className="border-zinc-300" />
                    <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                      <p>
                        {exp.period}
                        <br />
                        {exp.type}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return exp.href ? (
                <a
                  key={exp.num}
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={exp.num}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-24">
          <div />
          <h2 className="text-xl font-bold tracking-widest sm:text-2xl text-left">
            PROJECTS
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-0">
            {projects.map((project, i) => (
              <Link
                key={project.href}
                href={project.href}
                className={`flex flex-col group ${
                  i === 0
                    ? "md:-translate-y-16"
                    : i === 1
                      ? "md:translate-y-32"
                      : "md:translate-y-0"
                }`}
              >
                <div className="aspect-square w-full overflow-hidden bg-zinc-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center text-[10px] text-zinc-400 uppercase tracking-widest">
                    [{project.name}]
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-tight">
                    {project.name}
                  </h4>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                    {project.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Extra space for the shifted Project 2 */}
        <div className="h-32 md:h-48"></div>
      </section>
    </div>
  );
}
