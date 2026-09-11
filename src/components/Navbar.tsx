import { GiHamburgerMenu } from "react-icons/gi";
import navLogo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="flex items-center justify-between container mx-auto p-5">
        <GiHamburgerMenu className="md:hidden" size={25} />
        <img className="w-52" src={navLogo} alt="" />

        <ul className="hidden md:flex items-center gap-10">
          <li className="font-semibold text-xl text-[#DB2777]">
            <a href="/">Home</a>
          </li>

          <li className="font-semibold text-xl">
            <a href="/technologies">Technologies</a>
          </li>

          <li className="font-semibold text-xl">
            <a href="/projects">Projects</a>
          </li>

          <li className="font-semibold text-xl">
            <a href="/about">About</a>
          </li>

          <li className="font-semibold text-xl">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button className="font-semibold text-xl">Sign In</button>
          <button className="bg-[#D91B7E] px-8 py-4 rounded-full text-white font-semibold text-xl cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
