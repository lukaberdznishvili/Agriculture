import React from "react";
import BannerPhoto from "../MediaForWeb/Banner.png";
import Backgound from "../MediaForWeb/BackgroundPatterns.png";
import BannerText from "../MediaForWeb/BannerT1.png";

function Banner() {
  const TextClass = 'text-5xl font-extrabold text-blue-950 mt-4 max-xl:text-4xl max-lg:text-2xl max-lg:mt-3 max-md:text-xl max-md:mt-2 max-sm:text-xs max-sm:mt-1'
return (<>
    <div className="relative bg">
      <img src={Backgound} alt="" className="w-full h-auto object-cover mt-0 absolute"></img>  
      <img src={BannerPhoto} alt =" " className="w-full h-auto object-cover mt-14 "></img>
      <div className="absolute top-[31%] left-[12%]">
      <img src={BannerText} alt=" " className="w-26 max-xl:w-22 max-lg:w-[190px]	max-md:w-[150px] max-sm:w-[90px]" ></img>
      <h1 className={TextClass}>Choose the best</h1>
      <h1 className="text-5xl font-extrabold text-blue-950 mt-1 max-xl:text-4xl max-lg:text-2xl max-lg:mt-0 max-md:text-xl max-sm:text-xs">heltier way</h1>
      <h1 className="text-5xl font-extrabold text-blue-950 mt-1 max-xl:text-4xl max-lg:text-2xl max-lg:mt-0 max-md:text-xl max-sm:text-xs">of life</h1>
      <button className="w-40 h-14 bg-yellow-500 rounded-xl mt-10 max-lg:mt-6 max-lg:w-32 max-lg:h-12  max-md:w-20 max-md:h-8 max-md:mt-3 max-sm:mt-1 max-sm:w-12 max-sm:h-6 ">
      <h1 className="text-base font-bold text-blue-900 max-lg:text-sm max-md:text-[10px] max-sm:text-[5px]">Explore Now</h1></button>

      </div>
    </div>
    </>
  )
}

export default Banner
