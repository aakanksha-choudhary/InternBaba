import React, { useEffect, useRef } from "react";

const stories = [
  {
    name: "Gaganpal Singh",
    role: "Python Developer Intern",
    img: "https://internsbaba.com/assets/ga-KDNcCYDa.png",
    text: "InternBaba helped me land a genuine internship with Cairovision that matched my skills. The process was smooth, and I didn’t feel like my applications were going unnoticed. " 
  },
  {
    name: "Deeksha Sheravat",
    role: "Business Developer Intern",
    img: "https://internsbaba.com/assets/de-CCcvMnCz.png",
    text: " What I liked most about InternBaba was the transparency. Every step—from applying to updates—was clear and transparent, which made the experience stress-free."
  },
  {
    name: "Deeksha Sheravat",
    role: "Business Developer Intern",
    img: "https://i.pravatar.cc/100?img=3",
    text: "What I liked most was the transparency. Every step from applying to updates was clear."
  },
  {
    name: "Ravindra Negi",
    role: " Graphic Designer Intern",
    img: "https://internsbaba.com/assets/ra-B-dFj45S.png",
    text: "InternBaba didn’t just give me opportinities options—it helped me understand what companies were actually looking for. The experience felt student-first, not transactional, which made a big difference for me."
  },
  {
    name: "Anand Singh ",
    role: "Finace Intern",
    img: "	https://internsbaba.com/assets/uk-PQJtMJVs.png",
    text: "As someone applying across different platforms, trust mattered a lot to me. InternBaba felt reliable, and the platform was easy to use. I always knew the status of my application after applying."
  },
  {
    name: "Bhumika Chaudhary ",
    role: "Marketing Intern",
    img: "	https://internsbaba.com/assets/ak-BKi3fot_.png",
    text: "As a first-time intern, I was worried about fake or unclear roles. InternBaba felt trustworthy, and I always knew my application status."
  },
  {
    name: "Himanshu Jain",
    role: "Business Developer",
    img: "	https://internsbaba.com/assets/him-Bv3bqTHK.png",
    text: "I found my job through InternBaba. The job details were clear, and the process was easy to follow. The details were accurate, and that made me trust the platform."
  },
  {
    name: "Anubhuti Rajput",
    role: "Research Intern",
    img: "https://internsbaba.com/assets/anb-BH12XZoM.png",
    text: "I didn’t have a strong resume, just basic skills and a willingness to learn. InternBaba gave me a chance to apply without pressure"
  }
];

export default function SuccessStories() {
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
    <div className="  mx-auto w-full py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2">

        <h2 className="text-3xl font-bold bg-gradient-to-r w-fit from-blue-400 via-cyan-600 to-sky-800 bg-clip-text text-transparent
         mb-2">
          Success Stories
        </h2>
        <p className="text-wrap text-sm text-gray-600 font-normal mb-4">Hear from students who achieved their dreams with InternBaba.</p>

        <div
          ref={sliderRef}
          className="flex  
               
                  gap-6 overflow-hidden p-5  "
        >
          {[...stories, ...stories].map((story, index) => (
            <div
              key={index}
              className=" min-w-[80%]  md:min-w-[30%]  p-4 rounded-xl shadow-md border animate-scroll group-hover:[animation-play-state:paused]  
              
                 bg-gradient-to-br from-white via-white to-cyan-50/30 
 
              border-transparent hover:border-cyan-500 transition duration-300  hover:shadow-2xl hover:shadow-cyan-500/10
               hover:-translate-y-1
"
            >
              <p className="text-gray-600 mb-6 md:text-lg">
                "{story.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={story.img}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {story.name}
                  </h4>
                  <p className="text-sm  text-blue-500">
                    {story.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}