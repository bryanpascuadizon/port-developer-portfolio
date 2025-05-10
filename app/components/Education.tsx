import { portfolio } from "@/sample-data";
import Link from "next/link";

const Education = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-10">
      <div
        className="my-5 slide-in-from-right"
        style={{ animationDelay: `${6.5 * 0.5}s` }}
      >
        <p className="text-lg primary-text font-bold mb-1">Education</p>
      </div>
      {data.education.map((education, educationIndex) => (
        <div
          key={educationIndex}
          className="slide-in-from-right"
          style={{ animationDelay: `${(educationIndex + 7) * 0.5}s` }}
        >
          {" "}
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1 mt-1.5">
              <p className="text-right text-xs secondary-text">
                {education.years}
              </p>
            </div>
            <div className="col-span-3">
              <Link
                href={education.school_link}
                className="text-base primary-text font-bold link"
                target="_blank"
              >
                {" "}
                {education.name}
              </Link>
              <Link
                href={education.course_link}
                className="text-sm secondary-text mt-1 block link"
                target="_blank"
              >
                {" "}
                {education.course}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
