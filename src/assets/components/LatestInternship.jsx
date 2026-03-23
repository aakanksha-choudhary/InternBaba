



import { useState , useEffect } from "react";

const internships = [
  {
    id: 1,
    title: "Cold Calling Intern",
    company: "BTB Venture Group",
    salary: "₹ 5,000 - 8,000",
    location: "Pune",
    type: "On-Site",
     images: 
    {image1:
      "	https://images.yourstory.com/cs/images/companies/a97053f81544-BTBVentureonwhite2-1693501381844.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
      image2:"	https://images.yourstory.com/cs/images/companies/a97053f81544-BTBVentureonwhite2-1693501381844.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"},
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "BTB Venture Group",
    salary: "₹ 5,000 - 8,000",
    location: "Pune",
    type: "On-Site",
    images:
    { image1:
      "	https://internsbaba.com/photos/fc2c61e0-50f2-4166-bd5d-13baf4a6ae65_BTB%20Venture%20Group%20Co.png",
      image2:"https://internsbaba.com/photos/fc2c61e0-50f2-4166-bd5d-13baf4a6ae65_BTB%20Venture%20Group%20Co.png"},
  },
  {
    id: 3,
    title: "Sales & Marketing",
    company: "Eureka Stock & Broking",
    salary: "₹ 5,000 - 6,997",
    location: "Kolkata",
    type: "On-Site",
   images:
    { image1:
      "	https://internsbaba.com/photos/6836f6d8-e521-4697-8daf-2020c9c49977_Eureka%20logo.svg",
      image2:"https://internsbaba.com/photos/6836f6d8-e521-4697-8daf-2020c9c49977_Eureka%20logo.svg"},
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Avaltern",
    salary: "₹ 10,000 - 15,000",
    location: "Remote",
    type: "Remote",
         images:
          {image1: "https://internsbaba.com/assets/pnggraphic-DF3-VhAo.png",
     
      image2 :"https://internsbaba.com/uploads/images/company/1769501021_6978715d75cac.jpeg" },
     
  },
  {
    id: 5,
    title: "Field Marketing & Sa...",
    company: "HR",
    salary: "₹ 8,000 - 12,000",
    location: "Kolkata",
    type: "On-Site",
    images:
    {image1:
      "https://internsbaba.com/assets/pnggraphic-DF3-VhAo.png",
      image2:"	https://internsbaba.com/uploads/images/company/1770989424_698f2770196f1.png"},
  },
   {
    id: 6,
    title: "HR Intern",
    company: "First Attempt Skills Training Pvt. Ltd.",
    salary: "₹ 5,000",
    location: "Jaipur",
    type: "On-Site",
    images:
    {image1:
      "	https://internsbaba.com/uploads/images/company/1770961239_698eb957e98cb.png",
      image2:"	https://internsbaba.com/uploads/images/company/1770961239_698eb957e9383.jfif"},
  },
   {
    id: 7,
    title: "Machine Learning St...",
    company: "AvaIntern",
    salary: "₹ 10,000 - 15,000",
    
    type: "Remote",
    images:
    {image1:
      "	https://internsbaba.com/assets/pnggraphic-DF3-VhAo.png",
      image2:"	https://internsbaba.com/uploads/images/company/1769501021_6978715d75cac.jpeg"},
  },
      {
    id: 8,
    title: "Social Media & Cont...",
    company: "Synvix System",
    salary: "₹ Unpaid",
    
    type: "Remote",
    images:
    {image1:
      "	https://internsbaba.com/assets/pnggraphic-DF3-VhAo.png",
      image2:"https://internsbaba.com/uploads/images/company/1770833660_698cc6fc7b813.PNG"},
  },
   {
    id: 9,
    title: "App Developer Inter....",
    company: "Synvix System",
    salary: "₹ Unpaid",
    
    type: "Remote",
    images:
    {image1:
      "	https://internsbaba.com/assets/pnggraphic-DF3-VhAo.png",
      image2:"https://internsbaba.com/uploads/images/company/1770833660_698cc6fc7b813.PNG"},
  },
   {
    id: 10,
    title: "Sales/ Business De...",
    company: "Synvix System",
    salary: "₹ Not Disclosed",
    
    type: "Remote",
    images:
    {image1:
      "	https://internsbaba.com/assets/pnggraphic-DF3-VhAo.png",
      image2:"https://internsbaba.com/uploads/images/company/1770833660_698cc6fc7b813.PNG"},
  },
];

export default function LatestInternships() {
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
    if (index < internships.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
   const cardsToRender = Array.from({ length: visibleCards }).map((_, i) => {
    return internships[(index + i) % internships.length];
  });

  return (
   <div className="bg-slate-50">
    <div className="max-w-7xl mx-auto px-3 py-6 ">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className=" text-2xl sm:text-3xl font-semibold  text-cyan-600">
            Latest Internship Opportunities
          </h2>

          <p className="text-gray-500">
            Find the Internships that fit your career aspirations.
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

            {internships.map((item , index) => (
              <div
                key={`${item.id}-${index}`}
                className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition min-w-[23%] flex
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
          length: internships.length - visibleCards + 1,
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
  );
}