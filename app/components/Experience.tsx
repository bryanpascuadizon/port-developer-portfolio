import { portfolio } from "@/sample-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-5">
      <div
        className="my-5 slide-in-from-right"
        style={{ animationDelay: `${0.5 * 0.3}s` }}
      >
        <p className="text-lg primary-text font-bold mb-1">Experience</p>
      </div>
      {data.experience.map((experience, experienceIndex) => (
        <div
          key={experienceIndex}
          className="slide-in-from-right"
          style={{ animationDelay: `${(experienceIndex + 1) * 0.3}s` }}
        >
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1 mt-1.5">
              <p className="text-right text-xs secondary-text">
                {experience.years}
              </p>
            </div>
            <div className="col-span-3">
              <Link
                href={experience.companyLink}
                className="text-base primary-text font-bold"
                target="_blank"
              >
                {" "}
                {experience.company}
              </Link>
              <p className="secondary-text text-sm mb-3 mt-1">
                {experience.position}
              </p>
              {experience.description.map((description, descriptionIndex) => (
                <p className="mb-3 accent-text" key={descriptionIndex}>
                  {description}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 my-4">
                {experience.skills.map((skill, skillIndex) => (
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
  );
};

export default Experience;
