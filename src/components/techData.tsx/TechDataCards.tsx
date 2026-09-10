import { IoStar } from "react-icons/io5";
import type { ITechnologiesType } from "../../dataType/dataType";

interface ITechCard {
  techCard: ITechnologiesType;
}

const TechDataCards = ({ techCard }: ITechCard) => {
  return (
    <div className="border border-gray-100 shadow-xs rounded-2xl p-5 space-y-3 flex flex-col">
      <div className="flex items-center justify-between">
        <img className="w-16" src={techCard.icon} alt="" />
        <span className="bg-gray-100 px-5 py-1 rounded-full font-semibold">
          {techCard.badge}
        </span>
      </div>
      <h1 className="font-semibold text-3xl">{techCard.name}</h1>
      <p className="text-lg text-gray-500">{techCard.description}</p>
      <div className="border-b text-gray-100"></div>

      <div className="flex items-center justify-between">
        <span className="bg-gray-100 px-4 py-2 rounded-md font-semibold">
          {techCard.category}
        </span>
        <p className="font-semibold text-gray-500">{techCard.difficulty}</p>
        <div className="flex items-center gap-2">
          <IoStar className="text-yellow-500" size={20} />
          <p>{techCard.rating}</p>
        </div>
      </div>

      <button className="btn w-full h-13 mt-auto bg-black text-white text-xl font-semibold rounded-xl">
        Add to Stack
      </button>
    </div>
  );
};

export default TechDataCards;
