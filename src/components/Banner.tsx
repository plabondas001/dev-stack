import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between container mx-auto">
      <div className="space-y-8">
        <h1 className="text-7xl font-semibold font-['Inter']">
          Build Your Ideal <br />{" "}
          <span className="bg-linear-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="font-['Inter'] text-2xl text-gray-600">
          Explore frontend, backend, database, and tooling options, <br />{" "}
          compare them side by side, and put together the stack that fits your{" "}
          <br /> next project.
        </p>
        <div className="flex items-center gap-5">
          <button className="bg-linear-to-r from-orange-500 to-pink-500 px-4 py-3 rounded-xl text-white text-xl font-semibold cursor-pointer">
            Explore Technologies
          </button>
          <button className="btn btn-outline btn-lg border-gray-300">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img className="w-2xl" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
