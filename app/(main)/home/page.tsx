import Link from "next/link";
import Image from "next/image";
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
    name: "Kaleido ColorLab",
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
      <section id="projects" className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
          <h2 className="text-xl font-bold tracking-widest sm:text-2xl">
            PROJECTS
          </h2>

          <div className="mt-16 space-y-20">
            {/* KaleidoColorLab — full row */}
            <Link href={projects[0].href} className="group block">
              <div className="aspect-[2/1] w-full overflow-hidden bg-zinc-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/home/project-1.webp"
                  alt="KaleidoColorLab"
                  width={1920}
                  height={960}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-tight">
                  {projects[0].name}
                </h4>
                <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                  {projects[0].desc}
                </p>
              </div>
            </Link>

            {/* Aventus Airbrush & Gaahleri Community — two in a row */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {projects.slice(1).map((proj) => {
                const imgMap: Record<string, string> = {
                  "Aventus Airbrush": "/home/project2.webp",
                  "Gaahleri Community": "/home/project3.webp",
                };
                return (
                  <Link
                    key={proj.name}
                    href={proj.href}
                    className="group block"
                  >
                    <div className="aspect-square w-full overflow-hidden bg-zinc-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={imgMap[proj.name] ?? ""}
                        alt={proj.name}
                        width={960}
                        height={960}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-tight">
                        {proj.name}
                      </h4>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                        {proj.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
