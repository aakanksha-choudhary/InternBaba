import { useState } from "react";

const locations = [
  {
    name: "Delhi-NCR",
    image:
      "https://internsbaba.com/assets/delhi-3_0Okl65.webp",
  },
  {
    name: "Bangalore",
    image:
      "https://internsbaba.com/assets/bangalore-B_lTksTo.webp",
  },
  {
    name: "Mumbai",
    image:
      "https://internsbaba.com/assets/mumbai-B09vUDXQ.webp",
  },
  {
    name: "Hyderabad",
    image:
      "https://internsbaba.com/assets/hyderabad-CsWSbQKd.webp",
  },
   {
    name: "Chennai",
    image:
      "	https://internsbaba.com/assets/chennai-CpTBHgpu.webp",
  },
   {
    name: "Kolkata",
    image:
      "	https://internsbaba.com/assets/kolkata-CE34-Ruo.webp",
  },
   {
    name: "Pune",
    image:
      "		https://internsbaba.com/assets/pune-ep9fAMyJ.webp",
  },
   {
    name: "Jaipur",
    image:
      "https://internsbaba.com/assets/jaipur-B7ZfRdTB.webp",
  },
];

const DreamLocations=() => {
  const [active, setActive] = useState(0);

  return (
    <div className=" bg-slate-50">
    <div className=" py-10 px-2 md:px-3 max-w-7xl mx-auto ">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 mb-8">
        Dream Locations
      </h2>

      {/* Cards */}
      <div className="">
      <div className=" justify-center gap-4  grid grid-cols-2  md:grid md:grid-cols-4 lg:grid-cols-8  ">

        {locations.map((location, index) => (
          
         <div
            key={index}
            onClick={() => setActive(index)}
            className="relative overflow-hidden bg-white shadow-xl before:absolute before:h-0 before:w-0 before:rounded-full
                    before:bg-blue-100 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 gap-1 cursor-pointer border
                     h-36 w-auto  rounded-2xl hover:border-blue-300 duration-200 ease-out transition-all
                   hover:shadow-[0px_0px_100px_-25px_#0185b4] hover:shadow-blue-500/20 flex flex-col justify-center items-center"
           
          >

            {/* Circle Image */}
            <div className="absolute top-3  w-28 h-28 rounded-full 
             flex  justify-center hover:scale-110 ease-out transition-transform duration-500   ">

              <img
                src={location.image}
                alt={location.name}
                className="w-20 h-20 object-contain"
              />

            </div>

            {/* Text */}
            <h3 className=" absolute bottom-4 text-base  md:text-base font-medium text-gray-800 ">
              {location.name}
            </h3>

          </div>
         
        ))}

      </div>
     </div>

      {/* Dots Indicator */}

      {/* <div className="flex justify-center mt-8 gap-3 md:hidden">

        {locations.map((_, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
            ${
              active === index
                ? "bg-cyan-600 w-4 h-4"
                : "bg-gray-300"
            }`}
          />
        ))}

      </div> */}

    </div>
    </div>
  );
}
export default DreamLocations;



