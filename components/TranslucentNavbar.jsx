import {
  FaApple,
  FaCode,
  FaGit,
  FaGithub,
  FaHome,
  FaLinkedin,
} from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export default function TranslucentNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8 h-12">
        {/* Left: Apple logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-200 text-xl">
            <FaCode />
          </a>
          <a
            href="#home"
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Home
          </a>
          <a
            href="#education"
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#extras"
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Contact
          </a>
        </div>
        {/* Right: Search and Bag */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-gray-200 text-lg hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-gray-200 text-lg hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
