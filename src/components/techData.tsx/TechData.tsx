import { use, useState } from "react";
import type { ITechnologiesType } from "../../dataType/dataType";
import TechDataCards from "./TechDataCards";
import StackData from "../stackData/StackData";
import { toast } from "react-toastify";

interface ITechData {
  techDatas: Promise<ITechnologiesType[]>;
}

const TechData = ({ techDatas }: ITechData) => {
  const techData = use(techDatas);

  const [stackData, setStackData] = useState<ITechnologiesType[]>([]);

  const handleAddtoStack = (technology: ITechnologiesType) => {
    
    const alreadyExists = stackData.some((tech) => tech.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setStackData([...stackData, technology]);
    toast.success(`${technology.name} Added in your stack`);
  };

  const handleRemoveFromStack = (id: string): void => {
    const removedTechnology = stackData.find((tech) => tech.id === id);

    setStackData(stackData.filter((tech) => tech.id !== id));

    if (removedTechnology) {
      toast.warning(`${removedTechnology.name} removed from your stack`);
    }
  };

  const handleRemoveAll = (): void => {
    setStackData([]);
    toast.warning("All technologies removed from your stack");
  };

  return (
    <div className="container mx-auto my-12 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <div className="lg:col-span-8 xl:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techData.map((techCard) => {
            const isAdded = stackData.some((tech) => tech.id === techCard.id);

            return (
              <TechDataCards
                key={techCard.id}
                techCard={techCard}
                handleAddtoStack={handleAddtoStack}
                isAdded={isAdded}
              />
            );
          })}
        </div>
      </div>

      
      <div className="col-span-1 lg:col-span-4 xl:col-span-3">
        {stackData.length > 0 ? (
          <StackData
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
            stackData={stackData}
          />
        ) : (
          <div className="rounded-2xl border border-gray-100 p-5 shadow-xs">
            <h1 className="font-semibold text-2xl">Your Stack</h1>

            <p className="text-gray-400 mt-1">0 Technology Selected</p>

            <p className="font-semibold text-gray-400 mt-1">
              No technologies selected yet.
            </p>

            <div className="mt-4 rounded-xl border border-dashed border-gray-200 p-8 text-center">
              <p className="text-xl text-gray-400">Your stack is empty.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechData;