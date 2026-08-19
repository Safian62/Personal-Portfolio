import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projectData } from "../data";
import { Button } from "@/components/Button";

const projects = projectData;

export const Projects = () => {
  return (
    <section className=" relative overflow-hidden" id="projects">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass relative p-6 space-y-4 rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative rounded overflow-hidden aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pb-4">
                  {project.technologies.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex w-full justify-start absolute bottom-1 gap-8">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className=" w-[50%] text-center rounded-sm bg-primary-color hover:bg-primary-color"
                  >
                    <Button
                      size="sm"
                      className="flex-1 w-full text-white text-sm bg-primary-color hover:bg-primary-color border-primary-color hover:text-white"
                    >
                      <ExternalLink size={16} className="mr-2 inline mb-1" />{" "}
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer noopener" className="w-[30%]">
                    <Button
                      size="sm"
                      className="bg-primary-color w-full text-white hover:bg-primary-color hover:text-white"
                    >
                      <Github size={16} />
                      Github
                    </Button>{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>View All Projects</AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
