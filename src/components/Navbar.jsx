import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../constants/index";
import { FaBasketShopping } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../hooks/AppContext";

const Navbar = () => {
  const { sideToggle, setSideToggle } = useContext(AppContext);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="sticky top-0 z-30 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img
              className="w-full mr-2"
              src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-200x35.png"
              alt="logo"
            />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-xl">
            {navItems.map((item, index) => {
              return (
                <li key={index} className="text-black text-[16px]">
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-[#7e8427] ${
                        isActive ? "text-green-600" : "text-gray-700"
                      }`
                    }
                    to={item.href}>
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <Link
              to="#"
              className="py-2 px-3 border border-neutral-300 rounded-md relative">
              <FaBasketShopping
                size={20}
                onClick={() => setSideToggle(!sideToggle)}
              />
            </Link>
            <p className="w-5 h-5 flex justify-center items-center p-3 bg-green-700 text-white rounded-full absolute top-0 right-0">
              1
            </p>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {navOpen ? <IoMdClose size={30} /> : <BiMenu size={30} />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-white">
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="py-4">
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="py-2 px-3 border border-neutral-400 rounded-md">
                <FaBasketShopping
                  size={30}
                  onClick={() => setSideToggle(!sideToggle)}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
