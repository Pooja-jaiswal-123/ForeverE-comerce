import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <Link to="/Login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="Profile"
            />
          </Link>
          <div className="group-hover:block hidden absolute right-0 top-8 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">LogOut</p>
          </div>
        </div>

        {/* Cart Icon - Fixed */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 cursor-pointer"
            alt="Cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()} {/* <-- Function call added */}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar for Small Screen */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setVisible(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-transform transform ${
          visible ? "translate-x-0 w-64 shadow-lg" : "translate-x-full w-0"
        }`}
      >
        {/* Close Button */}
        <div
          onClick={() => setVisible(false)}
          className="flex items-center gap-4 p-3 cursor-pointer"
        >
          <img
            className="h-4 rotate-180"
            src={assets.dropdown_icon}
            alt="Back"
          />
          <p>Back</p>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col text-gray-600">
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b hover:bg-gray-100"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
