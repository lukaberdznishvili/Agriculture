import React from 'react';
import Banner from '../Components/Banner';
import { SetionSecond } from '../Components/SetionSecond';
import BannerTwo from '../Components/BannerTwo';
import Footerr from '../Components/Footer';
import ProductList from '../Components/ProductList';
import ShopInventoryData from "../Components/ShopInventoryData";


const Home = () => {
  return (
    <div>
    <Banner /> 
    <SetionSecond />
    <BannerTwo />
    
    <div className='absolute mt-[60%]'>
      {ShopInventoryData.map(ShopInventoryData =>(
        <ProductList 
        key = {ShopInventoryData.id}
        image = {ShopInventoryData.image}
        name = {ShopInventoryData.name}
        price = {ShopInventoryData.price}
        rating = {ShopInventoryData.rate}
        />
      ))}
      </div>
      {/* <Footerr /> */}
     
    </div>
  )
}

export default Home