import type { ITechnologiesType } from "../../dataType/dataType";
import StackCard from "./StackCard";

interface IStack {
  stackData: ITechnologiesType[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const StackData = ({
  stackData,
  handleRemoveFromStack,
  handleRemoveAll,
}: IStack) => {
  return (
    <div className="rounded-2xl border border-gray-100 p-5">
      <h1 className="font-semibold text-2xl">
        Your Stack
      </h1>

      <p className="text-gray-400 mt-1">
        {stackData.length} Technology Selected
      </p>

      <div className="mt-4 space-y-2">
        {stackData.map((technology) => (
          <StackCard
            key={technology.id}
            technology={technology}
            handleRemoveFromStack={handleRemoveFromStack}
          />
        ))}
      </div>

      <button
        onClick={handleRemoveAll}
        className="w-full mt-12 rounded-xl border border-red-300 py-2 text-red-500 font-semibold hover:bg-red-50 cursor-pointer"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackData;
