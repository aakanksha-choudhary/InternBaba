import React from 'react'
import { useState , useEffect } from "react";

const jobs=[
    {
    id: 1,
    title: "Business Developer",
    company: "JobDenz",
    salary: "₹ 12,000 - 14,998",
    location: "Noida",
    type: "On-Site",
     images: 
    {image1:
      "https://internsbaba.com/uploads/images/company/1707740256_65ca0c60b866c.jpg",
      image2:"	https://internsbaba.com/uploads/images/company/1707740256_65ca0c60b8494.jpg"},
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Cairovision",
    salary: "₹ 5,000 - 8,000",
    location: "Indore",
    type: "On-Site",
    images:
    { image1:
      "	https://internsbaba.com/photos/48a6289f-1c1a-4074-af50-13d1d725dccf_rest_zone.jpg",
      image2:"	https://internsbaba.com/uploads/images/company/34b36dfb-fa73-45b8-92ec-5f5137b87f4c_sample.JPG"},
  },
  {
    id: 3,
    title: "Social Media Manag.....",
    company: "Kooperate Innovation Technologies",
    salary: "₹ Not Disclosed",
    location: "Gurugram",
    type: "Hybrid",
   images:
    { image1:
      "https://internsbaba.com/uploads/images/company/1741256396_67c976cce834d.png",
      image2:"https://internsbaba.com/uploads/images/company/1741256622_67c977ae11068.jpg"},
  },
   {
    id: 4,
    title: "Frontend Developer...",
    company: "Kooperate Innovation Technologies",
    salary: "₹ 10,000 - 15,000",
    location: "Remote",
    type: "Remote",
         images:
          {image1: "https://internsbaba.com/uploads/images/company/1741256396_67c976cce834d.png",
     
      image2 :"https://internsbaba.com/uploads/images/company/1741256622_67c977ae11068.jpg" },
     
  },
  {
    id: 5,
    title: "ROR Developer...",
    company: "Cairovision",
    salary: "₹ 8,000 - 12,000",
    location: "Kolkata",
    type: "On-Site",
    images:
    {image1:
      "https://internsbaba.com/uploads/images/company/1707740256_65ca0c60b866c.jpg",
      image2:"	https://internsbaba.com/uploads/images/company/1707740256_65ca0c60b8494.jpg"},
  },


];

export const Recentjob = () => {

      const [index, setIndex] = useState(0);
     
       
          const [visibleCards, setVisibleCards] = useState(4);
          
         // Handle responsiveness
       useEffect(() => {
         const updateVisibleCards = () => {
           if (window.innerWidth <= 640) {
             setVisibleCards(2);
           }
           else if(window.innerWidth <= 768){
                 setVisibleCards(3);
           }
            else if (window.innerWidth <= 1024) {
             setVisibleCards(4);
           }  
     
         };
     
         updateVisibleCards();
         window.addEventListener("resize", updateVisibleCards);
         return () => window.removeEventListener("resize", updateVisibleCards);
       }, []);
  
      const nextSlide = () => {
    if (index < jobs.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
   const cardsToRender = Array.from({ length: visibleCards }).map((_, i) => {
    return jobs[(index + i) % jobs.length];
  });


  return (
    <>
    <div className="bg-slate-50">
    <div className="max-w-7xl mx-auto px-3 py-6 ">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className=" text-2xl sm:text-3xl font-semibold  text-cyan-600">
            Explore Recent Job Openings
          </h2>

          <p className="text-gray-500">
            Discover jobs that matches your career goals.
          </p>
        </div>

        <button className=" text-cyan-600 font-medium">
          View All →
        </button>
      </div>

      {/* Slider */}
      
        <div className=" ">
        {/* Cards Container */}
        <div className="overflow-hidden 
         
       ">

          <div
            className=" flex transition-transform duration-500 mb-2 
            gap-4 
           "
            style={{
              transform: `translateX(-${index * 25}%)`,
            }}
          >

            {jobs.map((item , index) => (
              <div
                key={`${item.id}-${index}`}
                className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition min-w-[24%] flex
                 flex-col 
                 flex-grow
                 flex-shrink-0
                "
              >

                {/* Image */}
                <div className="relative bg-slate-600">

                  <img
                    src={item.images.image1}
                    alt=""
                    className="h-20 w-full object-cover mix-blend-screen hover:scale-110 ease-out transition-transform duration-500  "
                  />


                  <span className="absolute top-2 left-2 bg-white text-sm px-3 py-1 rounded-md shadow">
                    {item.type}
                  </span>
                 
                  
                </div>
                <div className=" hidden  lg:block   absolute z-20 top-14 ml-56 rounded-md shadow-2xl bg-white " >
                 <div className=" rounded-md  h-14 w-14 flex justify-center items-center ">
                    <img src={item.images.image2

                    } alt="" className="rounded-md" />
                  </div>
                  </div>

                {/* Content */}
                <div className="p-4">

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.company}
                  </p>

                  <div className="flex justify-between mt-4 text-sm text-gray-600">

                    <span>{item.salary}</span>
                    <div className="flex ">
                    <span className="pr-10 flex"><img src="https://cdn-icons-png.flaticon.com/128/10391/10391990.png" className="h-4 w-4 mt-1 mr-1" /> {item.location}</span></div>
                    <span className="text-gray-500 hover:text-gray-700 cursor-pointer">
                      <svg xmlns="text-gray-500 hover:text-gray-700 cursor-pointer " width='24' height='24' viewBox="0,0,24,24"
                      fill="none" stroke="currentColor" strokeWidth='2' strokeLinecap="round" strokeLinejoin='round'
                      className="lucide lucide-external-link w-4 h-4" aria-hidden='true'>
                        <path d='M15 3h6v6'></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
        </div>
        <div className=" flex justify-center mt-8 ">
        {/* Buttons */}
 
         <button
          onClick={prevSlide}
          className=" -translate-y-1/2 bg-white font-bold border-[1px] text-blue-300 border-blue-300 shadow-lg px-[10px] py-0.5 rounded-full mt-7 hover:text-white  hover:bg-blue-500"
        >
          ←
        </button>

        {/* <button
          onClick={nextSlide}
          className=" -translate-y-1/2 bg-blue-600 text-white shadow p-2 rounded-full"
        >
          →
        </button>   */}

      

      {/* Dots */}

      <div className="flex justify-center mt-6 gap-2 mx-4">
         
        {Array.from({
          length:jobs.length - visibleCards + 1,
        }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />
        ))}

      </div>
       <button
          onClick={nextSlide}
          className=" -translate-y-1/2 bg-white  border-[1px] text-blue-300 border-blue-300 shadow-lg px-[10px] py-1 rounded-full mt-7 hover:text-white hover:bg-blue-500"
        >
          →
        </button> 
       </div>

        
    </div>
  </div>

    </>
  )
}
