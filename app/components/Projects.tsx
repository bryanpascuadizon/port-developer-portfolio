import { portfolio } from "@/sample-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-10">
      <div className="my-5">
        <p className="text-lg primary-text font-bold mb-1">Projects</p>
      </div>
      {data.projects.map((project, projectIndex) => (
        <div key={projectIndex} className="">
          <div className="md:grid md:grid-cols-4 gap-5">
            <div className="md:col-span-1 w-full">
              <Link href={project.website} target="_blank" className="link">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="rounded-sm object-cover object-center m-auto mb-10"
                />
              </Link>
            </div>
            <div className="col-span-3">
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
                <p className="secondary-text text-sm mb-3 mt-1">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex gap-2 link"
                  >
                    <Github />{" "}
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
        </div>
      ))}
    </div>
  );
};

export default Projects;
