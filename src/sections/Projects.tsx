import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { allProjects } from "@/data/projects";

const featuredProjectIds = [
  "arroyo-insurance",
  "a-bit-rude",
  "east-river-plaza",
  "einfach-finanzieren",
  "child-psychology-assessments",
  "spark-studio",
  "userlify",
];

const portfolioProjects = allProjects.filter((project) =>
  featuredProjectIds.includes(project.id)
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 scroll-mt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Client Work"
          title="Featured Projects"
          description="Explore a selection of live websites built for businesses across insurance, retail, finance, e-commerce, and healthcare."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" p-8 px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
                <div className="relative mt-8 h-64 overflow-hidden rounded-t-2xl md:h-80 lg:mt-0 lg:h-auto lg:min-h-full lg:rounded-t-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized={typeof project.image === "string" && project.image.endsWith(".svg")}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/25"
          >
            <span>View All Projects</span>
            <ArrowUpRightIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
