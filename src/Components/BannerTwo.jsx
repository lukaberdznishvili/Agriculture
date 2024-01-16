import React from "react";
import Bannertwo from "../MediaForWeb/BannerTwo.png";
import Backgorund from "../MediaForWeb/Background.png";
import AboutUs from "../MediaForWeb/AboutUs.png";
import icon1 from "../MediaForWeb/bannerTwoicon1.png";
import icon2 from "../MediaForWeb/bannerTwoicon2.png";
import button from "../MediaForWeb/bannerTwoButton.png";
function BannerTwo() {
  const styleText = "text-xl font-bold text-cyan-800 max-lg:xl max-md:text-sm ";
  const styleText1 = "font-thin max-xl:text-[11px] max-md:text-[10px] max-md:leading-none ";
  const styleText2 = 'text-5xl font-extrabold text-blue-950 max-xl:text-3xl max-lg:text-xl max-md:text-base max-md:leading-none max-sm:text-[10px] max-sm:leadong-none max-sm:hidden';
  return (
    <div className="relative mt-[10%] ">
      <img
        alt=""
        src={Backgorund}
        className="w-full h-auto object-cover absolute "
      ></img>
      <img
        alt=""
        src={Bannertwo}
        className="w-34 h-auto absolute left-0 top-0 max-sm:w-[80%] max-sm:top-7"
      ></img>
      <div className="absolute ml-[51%] mt-16 max-xl:mt-14 max-lg:mt-10 max-md:mt-5 max-sm:mt-6">
        <img
          src={AboutUs}
          alt=""
          className="max-xl:w-[100px] max-lg:w-16 max-md:w-14 max-sm:w-14">
        </img>
        <h1
          className="text-5xl font-extrabold text-blue-950 max-xl:text-3xl 
        max-lg:text-xl max-md:text-base max-sm:text-[10px] mt-2 max-sm:mt-0 max-sm:hidden">
          We Belive in Working
        </h1>
        <h1
          className={styleText2}>
          Accreditede Farmers
        </h1>
        <div className="max-sm:w-[120px] ">
        <h4 className="text-lg font-thin	max-xl:text-[14px] max-lg:text-[11px] max-md:text-[10px] max-md:leading-3 mt-3 max-sm:mt-1  max-sm:text-[6px] max-sm:leading-none max-sm:hidden">
          Simply dummy text of the printing and typesetting industry. Lorem hadceased to
        </h4>
        <h4 className="text-lg font-thin	max-xl:text-[14px] max-xl:leading-[12px] max-lg:text-[11px] max-lg:leading-none  max-md:text-[10px] max-md:leading-3 max-sm:leading-none max-sm:text-[6px] max-sm:hidden">
          been the industry's standard dummy text ever since the 1500s, when an
          unknown
        </h4>
        <h4 className="text-lg font-thin	max-xl:text-[14px] max-xl:leading-1 max-lg:text-[11px] max-md:text-[10px] max-md:leading-3 max-sm:text-[6px] max-sm:leading-none max-sm:hidden">
          printer took a galley.
        </h4>
        </div>
        <div className="max-sm:ml-[-20px]">
        <div className="mt-10 flex flex-row max-xl:mt-6 max-lg:mt-4 max-md:mt-1"> 
          <div className="w-20">
          <img src={icon1} alt="" className="max-xl:w-16 max-xl:mt-2 max-md:mt-0  max-sm:mt-3"></img>
          </div>
          <div className="ml-8 max-xl:ml-3 max-lg:ml-1">
            <h1 className={styleText}>Organic foods only</h1>
            <h4 className={styleText1}>Simply dummy text of the printing and typesetting industry.</h4>
            <h4 className={styleText1}>Been the industry's standard</h4>
          </div>
        </div>
        <div className="mt-10 flex flex-row max-xl:mt-6 max-lg:mt-4">
          <div className=" w-20">
          <img src={icon2} alt="" className="max-xl:w-16 max-xl:mt-2 max-md:mt-0 max-sm:mt-2"></img>
          </div>
          <div className="ml-8 max-xl:ml-3 max-lg:ml-1">
            <h1 className={styleText}>Quality standarts</h1>
            <h4 className={styleText1}>Simply dummy text of the printing and typesetting industry.</h4>
            <h4 className={styleText1}>Been the industry's standard</h4>
          </div>
        </div>
        <div className="mt-12 w-44 max-lg:mt-3">
          <img src={button} alt="" className="max-xl:w-[150px] max-lg:w-[120px] max-md:w-[45%] max-sm:hidden"></img>
        </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
