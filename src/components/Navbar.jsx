import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center
    justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly
    "
    >
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Ezatullah
      </Link>
      <ul className="hidden md:flex gap-10 text-white">
        <li>
          <Link
            to="/"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            About Me
          </Link>
        </li>

        <li>
          <Link
            to="/tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="hidden md:flex gap-5">
        <a href="https://www.instagram.com/ez4tullah._._.120" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-400 hover:opacity-100">
            <BsInstagram />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/ezatullah-ahmadi" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://github.com/Ahmadi104" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-100 hover:opacity-100">
            <BsGithub />
          </li>
        </a>
        <a href="https://t.me/ezat_120" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100">
            <BsTelegram />
          </li>
        </a>
      </ul>
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}
      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-center gap-10 border-1 border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <li>
              <Link
                to="/"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/tech"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <a
              href="https://www.instagram.com/ez4tullah._._.120"
              target="_blank"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-400 hover:opacity-100">
                <BsInstagram />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/ezatullah-ahmadi"
              target="_blank"
            >
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsLinkedin />
              </li>
            </a>
            <a href="https://github.com/Ahmadi104" target="_blank">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-100 hover:opacity-100">
                <BsGithub />
              </li>
            </a>
            <a href="https://t.me/ezat_120" target="_blank">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100">
                <BsTelegram />
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
