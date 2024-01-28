export default function ProductList(props) {
    return (
        <div className="">
        <div className="rounded-md bg-gray-200 p-4 md:p-6 lg:p-8 "> 
            <div key={props.id} className="bg-white rounded-lg overflow-hidden shadow-md ">
                <img className="w-full h-[350px]  object-cover" src={props.image} alt={props.name} />
                <div className="p-4">
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h1>
                    <div className="text-lg text-blue-600 font-bold mb-2">${props.price}</div>
                    <div className="flex items-center mb-2">
                       
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

