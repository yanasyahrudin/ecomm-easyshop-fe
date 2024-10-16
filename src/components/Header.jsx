import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
import {
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaList,
  FaLock,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const { pathname } = useLocation();

  const [showSidebar, setShowSidebar] = useState(true);
  const user = false;

  const whishlist_count = 3;

  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#caddff] md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[50px] text-slate-500">
            <ul className="flex justify-start items-center gap-8 font-semibold text-black">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] ">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span>+62 896-3953-9018</span>
              </li>
            </ul>

            <div>
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4 text-black">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaGithub />
                  </a>
                </div>
                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
                  <img src="http://localhost:3000/images/language.png" alt="" />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>Indonesia</li>
                    <li>English</li>
                  </ul>
                </div>

                {user ? (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black "
                    to="/dashboard"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span>Yana Syahrudin</span>
                  </Link>
                ) : (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black "
                    to="/dashboard"
                  >
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 md-lg:pt-4">
              <div className="flex justify-between items-center">
                <Link to="/">
                  <img src="http://localhost:3000/images/logo.png" alt="" />
                </Link>
                <div
                  className="justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden"
                  onClick={() => setShowSidebar(false)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>

            <div className="md:lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/" ? "text-[#059473]" : "text-slate-600"
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/shop"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/about"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]">
                      <span className="text-xl text-green-500">
                        <FaHeart />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {whishlist_count}
                      </div>
                    </div>

                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]">
                      <span className="text-xl text-green-500">
                        <FaCartShopping />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {whishlist_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md-lg:block">
        <div
          onClick={() => setShowSidebar(true)}
          className={`fixed duration-200 transition-all ${
            showSidebar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 left-0 z-20`}
        >
        </div>
        <div
            className={`w-[300px] z-[9999] transition-all duration-200 fixed ${
              showSidebar ? "-left-[300px]" : "left-0 top-0"
            } overflow-y-auto bg-white h-screen py-6 px-8`}
          >
            <div className="flex justify-start flex-col gap-6">
              <Link to="/">
                <img src="http://localhost:3000/images/logo.png" alt="" />
              </Link>
              <div className="flex justify-start items-center gap-10">
                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute ">
                  <img src="http://localhost:3000/images/language.png" alt="" />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>Indonesia</li>
                    <li>English</li>
                  </ul>
                </div>

                {user ? (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black "
                    to="/dashboard"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span>Yana Syahrudin</span>
                  </Link>
                ) : (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black "
                    to="/dashboard"
                  >
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </Link>
                )}
              </div>

              <ul className="flex flex-col justify-start items-start text-sm font-bold uppercase ">
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/" ? "text-[#059473]" : "text-slate-600"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/shop" ? "text-[#059473]" : "text-slate-600"
                    }`}
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/blog" ? "text-[#059473]" : "text-slate-600"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/about"
                        ? "text-[#059473]"
                        : "text-slate-600"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/contact"
                        ? "text-[#059473]"
                        : "text-slate-600"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
