import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import { FaBars, FaX } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="absolute top-0 z-100 w-full h-24 pt-6 px-4 hidden md:block">
        <div className="flex w-full text-lg text-offWhite font-bold md:justify-between">
          <h1>DEREK HAWRYLUK</h1>
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-12 xl:gap-16">
            <NavigationLinks closeMenu={closeMenu} />
          </div>
        </div>
      </nav>
      <div className="">
        <div className="md:hidden p-4 h-full flex justify-between items-center">
          <h1 className="text-deepForestGreen md:text-offWhite font-bold">
            DEREK HAWRYLUK
          </h1>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="z-10 md:hidden bg-offWhite text-deepForestGreen p-2 rounded-lg ease-in-out duration-300 "
          >
            {!isOpen ? (
              <FaBars className="h-6 w-6" />
            ) : (
              <FaX className="h-6 w-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="top-18 right-0 w-full h-screen flex flex-col p-4 gap-4 items-end text-2xl bg-gradient-to-b from-deepForestGreen to-transparent text-offWhite font-bold md:hidden ">
            <NavigationLinks closeMenu={closeMenu} />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
