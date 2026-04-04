import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-32 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
          {/* Left column: empty top + title bottom */}
          <div className="flex flex-col justify-end">
            <h1
              className="font-semibold tracking-tighter text-left"
              style={{ fontSize: 186, lineHeight: "215.8px" }}
            >
              Designer
              <br />
              Developer
            </h1>
          </div>

          {/* Right column: image top + bio bottom */}
          <div className="flex flex-col items-end">
            <div className="mt-16">
              <Image
                src="/home/hero.webp"
                alt="Qianqian Wei"
                width={342}
                height={394}
                className="rounded-lg object-cover"
                style={{ borderRadius: 8 }}
                priority
              />
            </div>
            <p
              className="mt-6 text-right text-black"
              style={{ fontSize: 18, lineHeight: "21.6px" }}
            >
              Hi, I&apos;m Qianqian Wei, A UX
              <br />
              Designer &amp; Developer,
              <br />
              Part-time Hanfu
              <br />
              Model.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="bg-[#F8F4EF] px-6 py-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8">
          <h2 className="text-xl font-bold tracking-widest sm:text-2xl">
            WORK EXPERIENCE
          </h2>

          {/* Right column: offset down by ~one row height */}
          <div className="mt-16 space-y-16">
            {/* Experience Item 01 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-8">
              <span className="text-xl font-medium">01</span>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">UX Developer</h3>
                <hr className="border-zinc-300" />
                <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                  <p>
                    08 2025 - Present, Cashlier
                    <br />
                    Full-time, China
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 02 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-8">
              <span className="text-xl font-medium">02</span>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">UX Designer</h3>
                <hr className="border-zinc-300" />
                <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                  <p>
                    07 2024 - 08 2025, Welaliv
                    <br />
                    Full-time, China
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 03 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-8">
              <span className="text-xl font-medium">03</span>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">UX Specialist</h3>
                <hr className="border-zinc-300" />
                <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                  <p>
                    10 2023 - 06 2024, AIS
                    <br />
                    Full-time, London
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 04 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-8">
              <span className="text-xl font-medium">04</span>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">UX Designer</h3>
                <hr className="border-zinc-300" />
                <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                  <p>
                    05 2023 - 09 2023, Loops
                    <br />
                    Volunteer, London
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 05 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-8">
              <span className="text-xl font-medium">05</span>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">UX Designer</h3>
                <hr className="border-zinc-300" />
                <div className="mt-4 flex justify-end text-right text-[10px] text-zinc-500 sm:text-xs">
                  <p>
                    06 2021 - 06 2022, JiYan Beauty
                    <br />
                    Full-time, China
                  </p>
                </div>
              </div>
            </div>
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
            {/* Project 1 - Left Column, Slightly Higher */}
            <div className="flex flex-col md:-translate-y-16">
              <div className="aspect-square w-full overflow-hidden bg-zinc-100 shadow-sm">
                <div className="flex h-full w-full items-center justify-center text-[10px] text-zinc-400 uppercase tracking-widest">
                  [Banana 1]
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-tight">
                  KaleidoColorLab
                </h4>
                <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                  UX Design & Full-stack Development
                </p>
              </div>
            </div>

            {/* Project 2 - Middle Column, Shifted Down */}
            <div className="flex flex-col md:translate-y-32">
              <div className="aspect-square w-full overflow-hidden bg-zinc-100 shadow-sm">
                <div className="flex h-full w-full items-center justify-center text-[10px] text-zinc-400 uppercase tracking-widest">
                  [Banana 2]
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-tight">
                  Azurite Antique
                </h4>
                <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                  UX Design & Front-end Development
                </p>
              </div>
            </div>

            {/* Project 3 - Right Column, Normal Position */}
            <div className="flex flex-col md:translate-y-0">
              <div className="aspect-square w-full overflow-hidden bg-zinc-100 shadow-sm">
                <div className="flex h-full w-full items-center justify-center text-[10px] text-zinc-400 uppercase tracking-widest">
                  [Banana 3]
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-tight">
                  Cashlier Community
                </h4>
                <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">
                  UX Design & Front-end Development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra space for the shifted Project 2 */}
        <div className="h-32 md:h-48"></div>
      </section>
    </div>
  );
}
