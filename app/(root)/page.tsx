import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Summary from "../components/Summary";

export default function Home() {
  return (
    <div className="px-5">
      <Summary />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
