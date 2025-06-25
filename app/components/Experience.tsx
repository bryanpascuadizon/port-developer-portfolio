import { portfolio } from "@/sample-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-5">
      <div
        className="my-5 slide-in-from-right"
        style={{ animationDelay: `${1.5 * 0.5}s` }}
      >
        <p className="text-lg primary-text font-bold mb-1">Experience</p>
      </div>
      {data.experience.map((experience, experienceIndex) => (
        <div
          key={experienceIndex}
          className="slide-in-from-right"
          style={{ animationDelay: `${(experienceIndex + 2) * 0.5}s` }}
        >
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1 mt-1.5">
              <p className="text-right text-xs secondary-text">
                {experience.years}
              </p>
            </div>
            <div className="col-span-3">
              <p className="primary-text text-base font-bold mb-1">
                {experience.position}
              </p>
              <Link
                href={experience.companyLink}
                className="secondary-text text-sm link"
                target="_blank"
              >
                {" "}
                {experience.company}
              </Link>

              {experience.description.map((description, descriptionIndex) => (
                <p className="mt-3 mb-3 secondary-text" key={descriptionIndex}>
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
