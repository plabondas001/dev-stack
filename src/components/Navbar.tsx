import { GiHamburgerMenu } from "react-icons/gi";
import navLogo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex items-center justify-between container mx-auto p-5">
        <GiHamburgerMenu className="md:hidden" size={25} />
        <img className="w-52" src={navLogo} alt="" />

        <ul className="hidden md:flex items-center gap-10">
          <li className="font-semibold text-xl text-[#DB2777]">Home</li>
          <li className="font-semibold text-xl">Technologies</li>
          <li className="font-semibold text-xl">Projects</li>
          <li className="font-semibold text-xl">About</li>
          <li className="font-semibold text-xl">Contact</li>
        </ul>

        <div className="flex items-center gap-5">
          <span className="font-semibold text-xl">Sign In</span>
          <button className="bg-[#D91B7E] px-8 py-4 rounded-4xl text-white font-semibold text-xl cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
