import React, { useState } from "react";
import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-12 left-0 z-10"
        style={{
          opacity: isOpen ? 1 : 0,
          top: isOpen ? 0 : "-100%",
        }}
      >
        <button className="absolute top-0 right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-gray-600"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/>
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-lg">
          <li className="mb-4">
            <Link href="/" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">About Us</span>
            </Link>
          </li>
          <li className="mb-4">
            <div className="relative">
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer" onClick={toggleDropdown}>
                Services
              </span>
              {showDropdown && (
                <ul className=" left-0 w-[25rem] bg-gray-100 text-gray-800 py-2 rounded z-100">
                  <li className="px-4 py-2">
                    <Link href="/services/cloud-security" onClick={toggle}>
                      <span className="hover:text-[#19FFDB] cursor-pointer">Cloud Security</span>
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link href="/services/web-security" onClick={toggle}>
                      <span className="hover:text-[#19FFDB] cursor-pointer">Web Security</span>
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link href="/services/api-security" onClick={toggle}>
                      <span className="hover:text-[#19FFDB] cursor-pointer">API Security</span>
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link href="/services/mobile-security" onClick={toggle}>
                      <span className="hover:text-[#19FFDB] cursor-pointer">Mobile Security</span>
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link href="/services/network-security" onClick={toggle}>
                      <span className="hover:text-[#19FFDB] cursor-pointer">Network Security</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="mb-4">
            <Link href="/training" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Training</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/blog" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Contacts</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
