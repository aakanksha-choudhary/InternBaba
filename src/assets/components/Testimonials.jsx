import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Hani Chaudhary",
    role: "Hiring Manager",
    image: "https://internsbaba.com/assets/1-DjI_JCTv.png",
    text: "InternBaba helped us connect with candidates who were genuinely interested and relevant. The platform reduced unnecessary back-and-forth and made the hiring process more efficient for our team.",
  },
  {
    name: "Dolly Nagar ",
    role: "HR & Talent Partner",
    image: "	https://internsbaba.com/assets/2-Ba4Ap3T8.png",
    text: "What stood out was the quality of applicants and the clarity in the process. InternBaba positioned our opportunities well and helped us attract motivated interns without compromising.",
  },
  {
    name: "Disha",
    role: "Digital Marketer",
    image: "https://internsbaba.com/assets/7-DuTghjO1.png",
    text: " InternBaba worked well for our growing team. From posting roles to final selection, the hiring workflow felt organised and efficient.",
  },
  {
    name: "Anamika Rajput",
    role: "Project Manager",
    image: "	https://internsbaba.com/assets/8-D5GAz78_.png",
    text: "Managing applications became easier with InternBaba’s dashboard. From reviewing profiles to final hiring, everything was in one place..",
  },
  {
    name: "Yash Kanojia",
    role: " Founder of Ek Umang NGO",
    image: "	https://internsbaba.com/assets/3-DfyuSPFU.png",
    text: "The platform helped us find interns who were serious about gaining experience. Communication and coordination were clear throughout. ",
  },
  {
    name: "Bhavna Singh",
    role: "Operations Manager",
    image: "	https://internsbaba.com/assets/4-BOJk9rJv.png",
    text: "InternBaba supported us with timely responses and a steady flow of applicants. It reduced the effort usually involved in intern hiring.",
  },
  {
    name: "Ramesh Prajapat",
    role: " Sr. Recruitment Manger",
    image: "	https://internsbaba.com/assets/5-C6mQhL1b.png	",
    text: "We liked the transparency and structure InternBaba offers. The Candidates we hired were enthusiastic and ready to learn from day one.    ",
  },
  {
    name: "Aditya ",
    role: "HR Executive",
    image: "	https://internsbaba.com/assets/6-BKr2GFe1.png",
    text: "InternBaba helped us connect with relevant candidates quickly. The applications we received were more aligned with our requirements.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef();

   useEffect(() => {
      const slider = sliderRef.current;
      let scrollAmount = 0;
  
      const slide = () => {
        scrollAmount += 0.6;
  
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
  
        slider.scrollLeft = scrollAmount;
        requestAnimationFrame(slide);
      };
  
      slide();
    }, []);
  return (
    <section className="py-8 bg-gray-50 mb-4">
      <div className="max-w-7xl  mx-auto px-2">

        {/* Heading */}
        <h2 className="text-3xl font-bold bg-gradient-to-r w-fit from-blue-400 via-cyan-600 to-sky-800 bg-clip-text text-transparent mb-2">
          Testimonials
        </h2>

        <p className="text-gray-500 mb-10">
          Trusted voices sharing their experiences and outcomes with InternBaba
        </p>

        {/* Slider */}
        <div
        ref={sliderRef}
        className="overflow-hidden pt-2 pb-3">

          <div 
          
          className="flex  max-w-auto gap-6 animate-testimonials">

            {[...testimonials, ...testimonials].map((item, index) => (

              <div
                key={index}
                className="min-w-[80%]  sm:min-w-[30%]  bg-white max-w-auto   rounded-xl shadow-md p-6 border-[2px]  border-gray-200 hover:shadow-xl
                 hover:shadow-cyan-500/10
                 
                 bg-gradient-to-br from-white via-white to-cyan-100
                
                hover:border-cyan-300/50  
                hover:bg-cyan-300
                hover:scale-105 ease-out transition-transform duration-500 "
              >

                {/* Profile */}
                <div className="flex items-center gap-3 mb-8">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-300  "
                  />

                  <div>
                    <h4 className="font-bold text-gray-800 text-xl ">
                      {item.name}
                    </h4>

                    <p className="text-sm text-cyan-500">
                      {item.role}
                    </p>
                  </div>

                </div>

                {/* Text */}
                <p className="text-gray-600 md:text-lg leading-relaxed">
                  "{item.text}"
                </p>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
}