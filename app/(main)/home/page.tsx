import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import VideoWithFallback from "@/components/VideoWithFallback";

const skills = [
  {
    num: "01",
    title: "Research",
    desc: "User interviews · Surveys · Usability testing · Data analysis",
  },
  {
    num: "02",
    title: "UX Design",
    desc: "Figma · User flows · Wireframing · Prototyping",
  },
  {
    num: "03",
    title: "Front-end Development",
    desc: "HTML · CSS · JavaScript · TypeScript · React · Next.js",
  },
  {
    num: "04",
    title: "Project Management",
    desc: "Agile · Cross-team collaboration · Stakeholder communication",
  },
  {
    num: "05",
    title: "Marketing",
    desc: "Social media · Content strategy · Analytics",
  },
];

const projects = [
  {
    name: "Kaleido ColorLab",
    desc: "UX Design & Full-stack Development",
    href: "/projects/kaleidocolorlab",
  },
  {
    name: "Gaahleri Community",
    desc: "UX Design & Front-end Development",
    href: "/projects/gaahleri-community",
  },
  {
    name: "Aventus Airbrush",
    desc: "UX Design & Front-end Development",
    href: "/projects/aventus-airbrush",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <HeroSection />

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-[#F8F4EF] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
          <h2 className="text-xl font-bold tracking-widest sm:text-2xl">
            PROJECTS
          </h2>

          <div className="mt-16 space-y-20">
            {/* KaleidoColorLab — full row */}
            <Link href={projects[0].href} className="group block">
              <div className="relative aspect-2/1 w-full overflow-hidden rounded-lg bg-zinc-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <VideoWithFallback
                  webmSrc="/kaleidocolorlab/colorlab-hero-video.webm"
                  videoSrc="/kaleidocolorlab/colorlab-hero-video.mp4"
                  fallbackSrc="/kaleidocolorlab/poster.webp"
                  poster="/kaleidocolorlab/poster.webp"
                  alt="KaleidoColorLab"
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
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-zinc-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
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

      {/* Work Experience Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
          <h2 className="text-xl font-bold tracking-widest sm:text-2xl">
            SKILLS
          </h2>

          <div className="mt-16 space-y-16">
            {skills.map((skill) => (
              <div
                key={skill.num}
                className="grid grid-cols-[auto_1fr] items-start gap-8 transition-transform duration-300 hover:translate-x-3"
              >
                <span className="text-xl font-medium">{skill.num}</span>
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                  <hr className="border-zinc-300" />
                  <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                    <p>{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
