import { use } from "react";
import type { ITechnologiesType } from "../../dataType/dataType";
import TechDataCards from "./TechDataCards";

interface ITechData {
  techDatas: Promise<ITechnologiesType[]>;
}

const TechData = ({ techDatas }: ITechData) => {
  const techData = use(techDatas);

  return (
    <div className="container mx-auto my-25 grid grid-cols-12 gap-10">
      {/* Left side */}
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-8">
          {techData.map((techCard) => (
            <TechDataCards key={techCard.id} techCard={techCard} />
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="col-span-3">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h1 className="font-semibold text-2xl">Your Stack</h1>
          <p className="font-semibold text-gray-400">
            No technologies selected yet.
          </p>

          <div className="mt-4 rounded-xl border border-dashed border-gray-200 p-8 text-center">
            <p className="text-xl text-gray-400">Your stack is empty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechData;
