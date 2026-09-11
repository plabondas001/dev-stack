import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="border-t border-gray-200 mt-30">
      <div className="container mx-auto my-20">
        <div className="flex items-start justify-between">
          <div className="space-y-5">
            <img className="w-44" src={footerLogo} alt="" />
            <p className="font-semibold text-lg text-gray-400">
              Curated tools, technologies, and resources for developers building{" "}
              <br />
              modern software.
            </p>

            <ul className="flex items-center gap-10 my-3">
              <li>
                <a href="https://github.com/plabondas001">
                  <FaGithub size={30} />
                </a>
              </li>

              <li>
                <a href="https://x.com/">
                  <FaTwitter size={30} />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/plabon-das-aab7b6378/">
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-xl">PRODUCT</li>
              <li className="text-lg text-gray-400">Home</li>
              <li className="text-lg text-gray-400">Technologies</li>
              <li className="text-lg text-gray-400">Projects</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-xl">COMPANY</li>
              <li className="text-lg text-gray-400">About</li>
              <li className="text-lg text-gray-400">Contact</li>
              <li className="text-lg text-gray-400">Careers</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-xl">LEGAL</li>
              <li className="text-lg text-gray-400">Privacy Policy</li>
              <li className="text-lg text-gray-400">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-200 mt-10"></div>

        <div className="flex items-center justify-between mt-10">
          <p className="text-xl text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="text-xl text-gray-400">
              Privacy
            </a>

            <a href="/terms" className="text-xl text-gray-400">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
