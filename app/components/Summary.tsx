import { portfolio } from "@/sample-data";

const Summary = () => {
  const data = portfolio;
  return (
    <div className="text-xs mb-5">
      <div className="my-5">
        <p className="text-xl primary-text font-bold mb-1">{data.name}</p>
        <p className="secondary-text text-sm"> {data.position}</p>
      </div>
      <p className="align-middle leading-relaxed accent-text">{data.summary}</p>
    </div>
  );
};

export default Summary;
