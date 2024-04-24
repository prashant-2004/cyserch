import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="w-full h-20">
        <div className="container mx-auto px-8 h-full">
          <div className="flex justify-between justify-items-center items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-8 text-white text-[1.1rem]">
              <li>
                <Link href="/">
                  <p
                    className={
                      activeLink === "/" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/")}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <div className="relative">
                  <p className="cursor-pointer" onClick={toggleDropdown}>
                    Services
                  </p>
                  {showDropdown && (
                    <ul className="absolute top-full w-[13rem] pl-4 left-0 opacity-95 bg-gray-800 text-white py-2 rounded">
                      <li className="mb-2">
                        <Link href="/services/cloud-security">
                          <p className="hover:text-[#19FFDB]">Cloud Security</p>
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/web-security">
                          <p className="hover:text-[#19FFDB]">Web Security</p>
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/training">
                          <p className="hover:text-[#19FFDB]">Training</p>
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/api-security">
                          <p className="hover:text-[#19FFDB]">API Security</p>
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/mobile-security">
                          <p className="hover:text-[#19FFDB]">
                            Mobile Security
                          </p>
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/services/network-security">
                          <p className="hover:text-[#19FFDB]">
                            Network Security
                          </p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link href="/training">
                  <p
                    className={
                      activeLink === "/training"
                        ? "text-[#19FFDB]"
                        : "text-white"
                    }
                    onClick={() => handleLinkClick("/training")}
                  >
                    Training
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p
                    className={
                      activeLink === "/about" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/about")}
                  >
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p
                    className={
                      activeLink === "/blog" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/blog")}
                  >
                    Blog
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p
                    className={
                      activeLink === "/contacts"
                        ? "text-[#19FFDB]"
                        : "text-white"
                    }
                    onClick={() => handleLinkClick("/contacts")}
                  >
                    Contacts
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
