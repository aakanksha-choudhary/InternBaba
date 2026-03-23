import React from 'react' 
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from 'react';
export const Navbar = () => {
   const [jobOpen, setJobOpen] = useState(false);
  const [internshipOpen, setInternshipOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const internshipLinks = [
    "AI & Machine Learning Internship",
    "App Development Internship",
    "Data Science Internship",
    "Digital Marketing Internship",
    "UI / UX Design Internship",
    "Web Development Internship",
    "Graphic Design Internship",
    "Operations Internship",
    
  ];
  const locationLinks=[
    "Work From Home Vacancies",
    "Vacancies in Delhi-NCR ",
    "Vacancies in Bangalore",
    " Vacancies in Mumbai",
    "Vacancies in Hyderabad",
    "Vacancies in Chennai",
    "Vacancies in Kolkata",
    "Vacancies in Chandigarh",
    "Vacancies in Pune",
    "Vacancies in Jaipur",
    "View All",
  ] ;
  const jobLinks=[
   "AI & Machine Learning Jobs",
   "Web Devalopment Jobs",
   "Data Science Jobs",
   "Digital Marketing Jobs",
   "Animation Jobs",
   "MBA Jobs",
   "Sales & Business Development",
   "Project Management",
   
  ];

  return (
    <div className='bg-white  h-20 w-full  fixed top-0 right-0 left-0 z-40 transition-transform duration-300 ease-in-out translate-y-0  shadow-lg'>
       <div className='container mx-auto max-w-7xl flex items-center justify-between h-full pr-4 pl-2 md:px-6 2xl:px-0'>
         <div className='flex items-center'>
            <button  data-slot='sheet-trigger' className='inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 lg:hidden mr-2' 
             aria-label='Open menu' type='button' aria-haspopup='dialog' aria-expanded='false' aria-controls='radix-«r0»'
             data-state='closed' > 
             <svg xmlns='http://www.w3.org/2000/svg 'height='24' width='24' viewBox='0 0 24 24' fill='none'
              stroke='CurrentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-menu  w-6 h-6'
              aria-hidden='true'
             >
                <path d='M4 12h16'></path>
                <path d='M4 18h16'></path>
                <path d='M4 6h16'></path>
             </svg>
            </button> 
            <div className='h-10 md:h-12 w-auto object-contain cursor-pointer select-none' title='InternBaba' draggable='false'>
                <img className='h-full' src="https://internsbaba.com/uploads/app/logo/cWjjDC1tFotd8e7cHittJeZ4lub9o1sw0RKCgSeg.png" alt="InternBaba" />
            </div>
            <nav  aria-label='Main' data-orientation='horizontal' dir='ltr' data-slot='navigation-menu' dataviewport='false' 
            className='group/navigation-menu relative max-w-max flex-1 items-center justify-center ml-5 hidden lg:flex'> 
            <div className='relative' >
               <ul data-orientation='horizontal' data-slot='navigation-menu-list' className='group flex flex-1 list-none items-center justify-center 
               gap-1'dir='ltr'  >
               <li data-slot='navigation-menu-trigger' className='relative' 
                 onMouseEnter={() => setLocationOpen(true)}
              onMouseLeave={() => setLocationOpen(false)}
                 >
                  <button 
                           
                 
                   id='radix-«r3»-trigger-radix-«r4»' data-state='closed'aria-expanded='false' aria-controls='radix-«r3»-content-radix-«r4»'
                  data-slot='radix-«r3»-content-radix-«r4»' className='group inline-flex h-9 w-max items-center justify-center rounded-lg bg-background 
                   px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none
                    disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent 
                     data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] [&_svg]:hover:rotate-180
                      focus-visible:outline-1 group cursor-pointer font-normal hover:bg-blue-50' data-radix-collection-item>
                        Top Locations  <svg xmlns="http://www.w3.org/2000/svg" height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
                        strokeWidth='2' strokeLinecap='round'strokeLinejoin='round' className='lucide lucide-chevron-down relative top-[1px] ml-1 size-3 transition duration-200 ease-out
                         group-data-[state=open]:rotate-180 ' aria-hidden='true'  >
                           <path d='m6 9 6 6 6-6'></path>
                         </svg>
                      </button>
                        {locationOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl p-4 w-56 border">
                  <ul className="space-y-3 text-sm text-gray-700">
                    {locationLinks.map((item, index) => (
                      <li
                        key={index}
                        className="hover:text-blue-600 cursor-pointer transition"
                      >
                        {item}
                      </li>
                    ))}
                  
                  </ul>
                </div>
              )}
               </li>


               {/*................internship */}
               <li data-slot='navigation-menu-trigger' className='relative'
                  onMouseEnter={() => setInternshipOpen(true)}
              onMouseLeave={() => setInternshipOpen(false)}
               >
             <button id='radix-«r3»-trigger-radix-«r5»' data-state='closed'aria-expanded='false' aria-controls='radix-«r3»-content-radix-«r4»'
                  data-slot='radix-«r3»-content-radix-«r4»' className='group inline-flex h-9 w-max items-center justify-center rounded-lg bg-background 
                   px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none
                    disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent 
                     data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] 
                      focus-visible:outline-1 group cursor-pointer font-normal hover:bg-blue-50 [&_svg]:hover:rotate-180' data-radix-collection-item>
                        Interships <svg xmlns="http://www.w3.org/2000/svg" height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
                        strokeWidth='2' strokeLinecap='round'strokeLinejoin='round' className='lucide lucide-chevron-down relative top-[1px] ml-1 size-3 transition duration-200 ease-out
                         group-data-[state=open]:rotate-180' aria-hidden='true'  >
                           <path d='m6 9 6 6 6-6'></path>
                         </svg>
                      </button>
                      {/*.......................................................................... */}
                       {internshipOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl  w-64 border">
                  <ul className="space-y-4 text-sm text-gray-700 p-4">
                    {internshipLinks.map((item, index) => (
                      <li
                        key={index}
                        className="hover:text-blue-600 cursor-pointer transition"
                      >
                        {item}
                      </li>
                    ))}
                      
                  </ul>
                  <div className='border-t-[1px] border-gray-300 w-auto  mt-1 mx-2 ' ><li className='text-sm text-gray-600 pt-3 pl-4 pb-4' >All Internship</li> </div>
                </div>
                
                
              )}

               </li>
               {/*...............jobs........... */}
             <li data-slot='navigation-menu-trigger' className='relative'
                onMouseEnter={() => setJobOpen(true)}
              onMouseLeave={() => setJobOpen(false)}
             >
                  <button id='radix-«r3»-trigger-radix-«r6»' data-state='closed'aria-expanded='false' aria-controls='radix-«r3»-content-radix-«r4»'
                  data-slot='radix-«r3»-content-radix-«r4»' className='group inline-flex h-9 w-max items-center justify-center rounded-lg bg-background 
                   px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none
                    disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent 
                     data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] 
                      focus-visible:outline-1 group cursor-pointer font-normal hover:bg-blue-50 [&_svg]:hover:rotate-180' data-radix-collection-item>
                        Jobs <svg xmlns="http://www.w3.org/2000/svg" height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
                        strokeWidth='2' strokeLinecap='round'strokeLinejoin='round' className='lucide lucide-chevron-down relative top-[1px] ml-1 size-3 transition duration-200 ease-out
                         group-data-[state=open]:rotate-180' aria-hidden='true'  >
                           <path d='m6 9 6 6 6-6'></path>
                         </svg>
                      </button>
                   {jobOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl  w-64 border">
                  <ul className="space-y-4 text-sm text-gray-700 p-4">
                    {jobLinks.map((item, index) => (
                      <li
                        key={index}
                        className="hover:text-blue-600 cursor-pointer transition"
                      >
                        {item}
                      </li>
                    ))}
                      
                  </ul>
                  <div className='border-t-[1px] border-gray-300 w-auto  mt-1 mx-2 ' ><li className='text-sm text-gray-600 pt-3 pl-4 pb-4' >All Jobs</li> </div>
                </div>
                
                
              )}

               </li>

               {/*..................Pricing............. */}
                  <button data-slote='button' className='inline-flex  cursor-pointer hover:bg-blue-50 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 font-normal'>
                  Pricing</button>
               </ul>
            </div>
            </nav> 
            </div> 
            <div className='flex items-center gap-3'>
           <button data-slot='button' className='inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 
           shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 
           px-4 py-2 has-[>svg]:px-3 text-blue-400  h-8 rounded-md text-xs md:h-9 md:text-sm md:rounded-lg  hover:bg-blue-50' >Login</button>
           <button data-slot='dropdown-menu-trigger' className='cursor-pointer justify-center whitespace-nowrap transition-all duration-300
            ease-out disabled:cursor-not-allowed 
           disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none 
           aria-invalid:border-destructive bg-theme-main text-white bg-blue-400 shadow-xs hover:brightness-115 hover:shadow-lg
            hover:shadow-sky-800/20 
            px-4 py-2 has-[>svg]:px-3 hidden sm:flex h-8  rounded-md text-xs md:h-9 md:text-sm md:rounded-lg font-normal items-center gap-1
            ' type='button' id='radix-«r7»'area-haspopup='menu'aria-expanded='true' data-state='open' area-controls='radix-«r8»'>
               <span className='pl-1'>Register</span>
               <svg xmlns="http://www.w3.org/2000/svg" height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
                        strokeWidth='2' strokeLinecap='round'strokeLinejoin='round' className='lucide lucide-chevron-down relative top-[1px] ml-1 size-3 transition duration-200 
                        rotate-180' aria-hidden='true'  >
                           <path d='m6 9 6 6 6-6'></path>
                         </svg>
               
            </button>
            <a href="https://play.google.com/store/apps/details?id=com.internsbaba&hl=en_IN" target='_blank'>
            <button data-slot='button' className='cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all
             duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive border bg-background shadow-xs hover:bg-theme-main/5 hover:text-theme-main dark:bg-input/30
             dark:border-input dark:hover:bg-input/50 border-blue-400 h-9 px-4 py-2 has-[>svg]:px-3 hidden md:flex items-center hover:bg-blue-50'>
               <div className='w-4 h-4.5'>
                <img src="https://internsbaba.solarvision-cairo.com/assets/play-r2TWS6VZ.png" alt="playstore" />
               </div>
               <span className='text-sm text-blue-400'>Get Android App</span>
             </button>
            </a>
            </div>
       </div>
         
        
    </div>
 



)
}
