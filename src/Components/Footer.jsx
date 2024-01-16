import footerPic from "../MediaForWeb/footerSubPhoto.png";
export default function Footerr(){
    return(
        <>
    <footer className=" mt-auto">
      <div className=" mt-auto">
        <div className="flex justify-center absolute">
        <img src={footerPic} alt="" className="w-[80%]" />
        </div>
      <div className="absolute">
          <h1 className="text-3xl font-extrabold text-white ml-[150px]">Subscribe to</h1>
          <h1 className="text-3xl font-extrabold text-white ml-[150px]">Our Newsletter</h1>
        </div>
        <div className="absolute flex ">
            <div className="flex-row">
            <input type="text" name="" id="" />
            <button>Subscribe</button>
            </div>
        </div>
      
      </div>
    </footer>
        </>
    )
}