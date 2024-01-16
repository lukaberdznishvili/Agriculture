import React from 'react';
import photo1 from "../MediaForWeb/Photo1.png";
import photo2 from "../MediaForWeb/photo2.png";
 
export const SetionSecond = () => {
  return (
    <div className='display: flex flexDirection: row  justify-center'>
        <img src={photo1} alt='' className='mt-32 w-100 h-60 max-xl:w-80 max-xl:h-40 max-md:w-60	max-md:h-30 max-md:mt-20
        max-sm:w-[150px] max-sm:h-20 max-sm:mt-10'></img>
        <img src={photo2} className='mt-32 w-100 h-60 ml-10 max-xl:w-80 max-xl:h-40 max-md:w-60 max-md:h-30 max-md:mt-20
        max-sm:w-[150px]	max-sm:h-20 max-sm:ml-2 max-sm:mt-10' alt=''></img>
      
        
    </div>
  )
}
