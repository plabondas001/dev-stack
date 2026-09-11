import { IoStar } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import type { ITechnologiesType } from "../../dataType/dataType";

interface ITechCard {
  techCard: ITechnologiesType;
  handleAddtoStack: (technology: ITechnologiesType) => void;
  isAdded: boolean;
}

const TechDataCards = ({
  techCard,
  handleAddtoStack,
  isAdded,
}: ITechCard) => {
  return (
    <div
      className={`border border-gray-100 shadow-xs rounded-2xl p-5 space-y-3 flex flex-col ${
        isAdded ? "border-pink-500" : "hover:shadow-2xl"
      }`}
    >
      
      <div className="flex items-center justify-between">
        <img
          className="w-16"
          src={techCard.icon}
          alt={techCard.name}
        />

        <span className="bg-gray-100 px-5 py-1 rounded-full font-semibold">
          {techCard.badge}
        </span>
      </div>

      
      <h1 className="font-semibold text-3xl">
        {techCard.name}
      </h1>

    
      <p className="text-lg text-gray-500">
        {techCard.description}
      </p>

      <div className="border-b text-gray-100"></div>

      
      <div className="flex items-center justify-between">
        <span className="bg-gray-100 px-4 py-2 rounded-md font-semibold">
          {techCard.category}
        </span>

        <p className="font-semibold text-gray-500">
          {techCard.difficulty}
        </p>

        <div className="flex items-center gap-2">
          <IoStar
            className="text-yellow-500"
            size={20}
          />

          <p>{techCard.rating}</p>
        </div>
      </div>

      
      <button
        onClick={() => handleAddtoStack(techCard)}
        className={`w-full h-13 mt-auto text-white text-xl font-semibold rounded-xl flex items-center justify-center gap-2 ${
          isAdded
            ? "bg-rose-500 cursor-not-allowed"
            : "bg-black cursor-pointer"
        }`}
        disabled={isAdded}
      >
        {isAdded ? (
          <>
            <FaCheck />
            <span>Added to Stack</span>
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechDataCards;