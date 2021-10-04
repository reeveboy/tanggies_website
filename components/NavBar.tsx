import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0">
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <div
            className="flex items-center justify-between md:justify-center h-14 uppercase"
            style={{ fontWeight: 500 }}>
            <div className="flex items-center justify-between w-11/12">
              <a
                href="#"
                className="m-2 lg:m-7 hidden md:block text-black px-3 py-2 text-sm border-opacity-0 hover:border-opacity-100 hover:border-b-4 hover:border-black hover:scale-105 transition-all">
                Home
              </a>

              <a
                href="#"
                className="m-2 lg:m-7 hidden md:block text-black px-3 py-2 text-sm border-opacity-0 hover:border-opacity-100 hover:border-b-4 hover:border-black hover:scale-105 transition-all">
                About Us
              </a>

              <a
                href="#"
                className="m-2 lg:m-7 hidden md:block text-black px-3 py-2 text-sm border-opacity-0 hover:border-opacity-100 hover:border-b-4 hover:border-black hover:scale-105 transition-all">
                Private Dining
              </a>

              <div className="flex-shrink-0">
                <img
                  height="48 px"
                  width="86 px"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </div>
              <a
                href="#"
                className="m-2 lg:m-7 hidden md:block text-black px-3 py-2 text-sm border-opacity-0 hover:border-opacity-100 hover:border-b-4 hover:border-black hover:scale-105 transition-all">
                Beach Café
              </a>

              <a
                href="#"
                className="m-2 lg:m-7 hidden md:block text-black px-3 py-2 text-sm border-opacity-0 hover:border-opacity-100 hover:border-b-4 hover:border-black hover:scale-105 transition-all">
                Menu
              </a>

              <a
                href="#"
                className="m-2 lg:m-7 hidden md:block text-black px-3 py-2 text-sm border-opacity-0 hover:border-opacity-100 hover:border-b-4 hover:border-black hover:scale-105 transition-all">
                Contact
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About Us
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Private Dining
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Beach Café
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Menu
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
