import React from "react";
import { Link } from "react-router-dom";
import Logo from "../src/MediaForWeb/Logo.png";
import BurgerMenu from "../src/MediaForWeb/bars-solid.svg";
import { useState } from "react";

const Navbar = () => {
  const design = "font-bold text-blue-950 text-xl mr-8";
  const design1 = "font-bold text-blue-950 text-xl mt-5 mb-5";
  const design2 = " font-bold text-blue-950 text-x border-black bg-gray-200 flex justify-center ";
  const [click, setClick] = useState(false);
  const handleToggleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="flex pl-20 pr-32 max-xl:pl-10">
        <img src={Logo} alt="" className="w-10 mt-16 max-sm:w-7"></img>
        <h1 className="mt-[75px] text-blue-950 text-3xl font-extrabold ml-1 max-sm:text-xl">
          Organick
        </h1>
        <div className="mt-[83px] ml-36 max-xl:ml-12 max-lg:hidden">
          <nav className="flex flex-row">
            <div className="">
              <Link to="/" className={design}>
                Home
              </Link>
              <Link to="/About" className={design}>
                About
              </Link>
              <Link to="/Shop" className={design}>
                Shop
              </Link>
              <Link to="/Portfolio" className={design}>
                Portfolio
              </Link>
              <Link to="/Service" className={design}>
                Service
              </Link>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter text..."
                className="mr-10  ml-36 rounded-lg h-9 w-56 bg-zinc-100   max-xl:ml-5 max-xl:w-[190px]"
              />
            </div>
          </nav>
        </div>
        <div className="absolute right-0 top-0 mt-10 hidden max-lg:block  ">
         <button onClick={handleToggleClick}>
          <img
            src={BurgerMenu}
            alt=""
            className="w-10 mt-7 mr-16 max-sm:w-7 max-sm:mt-8 cursor-pointer"
            onClick={() => {
              setClick(true);
            } }
          ></img>
          </button>
        </div>

      </div>
      <div className="md:flex mt-12">
  <div className="w-full flex flex-col" >
    {click ? (
      <div className={design2}><Link to="/" className={design1}>
        Home
      </Link></div>
    ) : null}
    {click ? (
      <div className={design2}> <Link to="/About" className={design1}>
        About
      </Link></div>
    ) : null}
    {click ? (
      <div className={design2}><Link to="/Shop" className={design1}>
        Shop
      </Link></div>
    ) : null}
    {click ? (
     <div className={design2}> <Link to="/Portfolio" className={design1}>
        Portfolio
      </Link></div>
    ) : null}
    {click ? (
     <div className={design2}> <Link to="/Service" className={design1}>
        Service
      </Link></div>
    ) : null}
    
  </div>
</div>
    </>
  );
};

export default Navbar;