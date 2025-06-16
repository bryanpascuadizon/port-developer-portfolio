import { portfolio } from "@/sample-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-10">
      <div
        className="my-5 slide-in-from-right"
        style={{ animationDelay: `${7.5 * 0.5}s` }}
      >
        <p className="text-lg primary-text font-bold mb-1">Projects</p>
      </div>
      <div className="flex flex-col gap-5">
        {data.projects.map((project, projectIndex) => (
          <div
            className="slide-in-from-right"
            style={{ animationDelay: `${(projectIndex + 8) * 0.5}s` }}
            key={projectIndex}
          >
            <Carousel className="mx-15 mb-5">
              <CarouselContent>
                {project.image.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image}
                      alt={project.name}
                      width={300}
                      height={300}
                      className="rounded-sm object-cover object-center m-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-pointer" />
              <CarouselNext className="cursor-pointer" />
            </Carousel>
            <div className="w-full">
              <div className="">
                <Link
                  href={project.website}
                  className="text-base primary-text font-bold flex link"
                  target="_blank"
                >
                  {" "}
                  {project.name}{" "}
                  <ArrowUpRight
                    className="text-xs self-center ml-1"
                    height={15}
                    width={15}
                  />
                </Link>
                <p className="secondary-text text-sm mb-3 mt-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex gap-2 link"
                  >
                    <Github className="w-5 h-5" />{" "}
                    <span className="self-center">
                      {project.repositoryName}
                    </span>
                  </Link>
                </p>
                <p className="mb-3 accent-text">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="badge-background primary-text"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
