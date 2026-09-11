import { IoClose } from "react-icons/io5";
import type { ITechnologiesType } from "../../dataType/dataType";

interface IStackDataProps {
  technology: ITechnologiesType;
  handleRemoveFromStack: (id: string) => void;
}

const StackCard = ({
  technology,
  handleRemoveFromStack,
}: IStackDataProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
      
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />

        <div>
          <h2 className="font-semibold text-md">
            {technology.name}
          </h2>

          <p className="text-xs font-semibold text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>

      
      <button
        onClick={() => handleRemoveFromStack(technology.id)}
        className="text-gray-400 hover:text-gray-700 cursor-pointer"
      >
        <IoClose size={24} />
      </button>
    </div>
  );
};

export default StackCard;