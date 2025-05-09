import { portfolio } from "@/sample-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-10">
      <div className="my-5">
        <p className="text-lg primary-text font-bold mb-1">Projects</p>
      </div>
      {data.projects.map((project, projectIndex) => (
        <div key={projectIndex}>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1">
              <Link href={project.website} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="rounded-sm"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <div className="">
                <Link
                  href={project.website}
                  className="text-base primary-text font-bold flex"
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
                  <Link href={project.github} target="_blank">
                    {project.github}
                  </Link>
                </p>
                <p className="mb-3 accent-text">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="badge-background text-white"
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
