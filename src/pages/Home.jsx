import React from "react";
import Banner from "../Components/Banner";
import { SetionSecond } from "../Components/SetionSecond";
import BannerTwo from "../Components/BannerTwo";
// import Footerr from "../Components/Footer";
import ProductList from "../Components/ProductList";
import ShopInventoryData from "../Components/ShopInventoryData";

const Home = () => {
  return (
    <div>
      <div className="my-10">
        <Banner />
        <SetionSecond />
        <BannerTwo />
      </div>
      <div className="mt-[80%]">
      <div className=" ml-[10%] mr-[10%] mt-[50rem] grid grid-cols-1 space-y-10 space-x-10  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  xl:mt-[90rem]">
        {" "}
        {/* absolute mt-[60%] */}
        {ShopInventoryData.map((ShopInventoryData) => (
          <ProductList
            key={ShopInventoryData.id}
            image={ShopInventoryData.image}
            name={ShopInventoryData.name}
            price={ShopInventoryData.price}
            rating={ShopInventoryData.rate}
          />
        ))}
      </div>
      </div>
      {/* <Footerr /> */}
    </div>
  );
};

export default Home;