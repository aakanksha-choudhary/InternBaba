import React from 'react'
import {useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import './Head.css'
  const companies=[
          "https://internsbaba.com/assets/adani_1-D5FhaST7.webp",
         " https://internsbaba.com/assets/JSW-n91evTN9.webp",
         "https://internsbaba.com/assets/updata-CGxCBoIq.webp",
         "data:image/webp;base64,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",
       "https://internsbaba.com/assets/Ayana-DawHwZA7.webp",
           "data:image/webp;base64,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",
       "https://internsbaba.com/assets/tvs_1-CuHlDeh_.webp",
       "https://internsbaba.com/assets/tata-CRJWm4bh.webp",
       "https://internsbaba.com/assets/Hinduja-BuOODN8Q.webp",
       "https://internsbaba.com/assets/cairo-CTAlRwPS.png",
       "https://internsbaba.com/assets/JaksonGreen-eeRe0wn8.png",
       "https://internsbaba.com/assets/fortum-8K_4hKcY.png",
       "https://internsbaba.com/assets/SM-C0FvMqIg.png",
       "https://internsbaba.com/assets/cid-BSMuCbkV.jfif",
       "https://internsbaba.com/assets/vctpl-CW7K_ZEO.png",
       "https://internsbaba.com/assets/igcar-Cfe4J-Bm.png",
       "https://internsbaba.com/assets/wistron-Bpiti3Gh.jpg",
       "https://internsbaba.com/assets/bg-B4hiRm7G.jpg",
       "https://internsbaba.com/assets/first-energy-CmJyLvxj.png",
       "https://internsbaba.com/assets/Hitachi-energy-mark-red.svg-C0Kyggir.png",
       "https://internsbaba.com/assets/renew-power-DdY1Qvxp.png",
       
       "https://internsbaba.com/assets/sam-GdNKH1H0.png",
       "https://internsbaba.com/assets/sprng-logo-1-BpHwjTlF.png",
        "https://internsbaba.com/assets/kalpa-DRAROJLl.png",
        "	https://internsbaba.com/assets/SW-BzQdomMr.png",
        "https://internsbaba.com/assets/ada-BU8Z3bHX.png",
         "https://internsbaba.com/assets/sse-wxB5HXo5.png",
          "https://internsbaba.com/assets/ssb-DEbSZO21.png",
           "https://internsbaba.com/assets/bcp-CAeCbWxj.png",
           "https://internsbaba.com/assets/bhansali-6Ffu9j5D.png",
           "https://internsbaba.com/assets/MM-D7ciKfqa.png",
           "https://internsbaba.com/assets/Arinsun-CmYYUFGp.jpg",
          
          
          
  ]; 
export const Head_section = () => {

    
  
  return (
    <>
    <div className='bg-slate-50 '>
    <div className='max-w-7xl mx-auto'>
    <div data-scroll-container='true' className='container mx-auto max-w-[1440px] pt-24 px-1 2xl:px-0 '>
      <div data-scroll-container='true' className='w-full  '>
        <div data-scroll-container='true' className=' space-y-8 overflow-x-hidden'>
          <section id='hero'>
           
            <div className='relative bg-gradient-to-br from-secondary via-blue-50 to-slate-50 w-full h-[478px] lg:h-[612px] rounded-2xl
             md:rounded-3xl overflow-hidden border hero-container'>
             <div className='absolute inset-0 pointer-events-none h-[332px] lg:h-[500px] overflow-hidden' >
                <div className='relative flex h-[500px]  w-full items-center  justify-center bg-white '>
                  <div className='absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] 
                  dark:[background-image:radial-gradient(#bfbfbf_1px,transparent_1px)]'></div>
                  <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
                   dark:bg-blue-50'></div>
                 </div>
                 <div className='rounded-full w-96 h-96 bg-blue-500/10 absolute top-0 left-0 -translate-x-32 -translate-y-32 
                 filter blur-[120px]'></div>
                 <div className='rounded-full w-80 h-80 bg-violet-500/10 absolute bottom-0 right-0 translate-x-32 translate-y-32 filter blur-[120px]'></div>
                 <div className='rounded-full w-64 h-64 bg-emerald-500/8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-[100px]'></div>
                 </div>
                 <div className='absolute inset-0 pointer-events-none h-[332px] lg:h-[500px] overflow-hidden'>
                   <div className='absolute top-20 right-20 w-4 h-4 bg-blue-300 rounded-full bg-float-up-down'></div>
                  <div className='absolute top-32 left-16 w-6 h-6 bg-blue-300 rotate-45 bg-float-rotate'></div>
                  <div className='absolute bottom-[132px] left-28 w-3 h-3 bg-blue-300 rounded-full bg-float-x-scale'></div>
                   <div className='absolute inset-0 opacity-5'>
                    <div className='grid grid-cols-12 grid-rows-8 h-full w-full gap-px'>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*....................12................. */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*............24.............. */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*........................36........... */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*................48............ */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*.....................60.............. */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*...................72............ */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      {/*.............84.................... */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                   </div>
                 </div>
              <div className='relative grid  grid-cols-1  lg:grid-cols-2 items-center py-4 lg:pt-6 lg:pb-6 px-2 lg:px-10 
              gap-8 overflow-clip lg:h-[500px]'>
                <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-1 z-20 text-center lg:text-start h-[300px] lg:h-fit p-6 hero-content'>
                  <h2 className='text-lg md:text-xl xl:text-[27px] font-bold text-blue-900 leading-tight lg:text-nowrap hero-item-1'>
                    Unlock Your Future with the Right <span className='bg-gradient-to-r font-bold w-fit from-blue-400 via-cyan-600 to-sky-800 bg-clip-text 
                    text-transparent mb-1 tracking-tight'>Internships and Jobs</span>
                   </h2>
                  <span className='text-slate-600 lg:text-slate-500 text-sm xl:text-lg leading-relaxed  w-fit  
                   lg:text-nowrap hero-item-2'> 
                     Explore internships and jobs tailored to your career journey.
                                
                  </span>
                  <div className='flex items-center p-1 md:px-2 bg-white/95 backdrop-blur-sm rounded-full md:rounded-xl shadow-md md:shadow-2xl w-full sm:max-w-2xl my-4 md:my-7 hero-item-3 
                  search-bar-hover'>
                    <div className='flex items-center flex-1 px-3 py-2 h-9 md:h-9'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
                      strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-search h-4 w-4 md:h-5 md:w-5 text-gray-400 mr-2'
                      area-hidden='true'>
                        <path d='m21 21-4.34-4.34'></path>
                        <circle cx='11' cy='11' r='8'></circle>
                      </svg>
                      <div className='relative flex-1'>
                        <input data-slote='input' className ='file:text-foreground placeholder:text-sm selection:bg-theme-main/60 selection:text-primary-foreground dark:bg-input/30 border-input flex md:h-9 min-w-0 rounded-md border bg-white py-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 hover:border-theme-main/50 focus-visible:border-theme-main focus-visible:ring-theme-main/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-none shadow-none
                         focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-auto text-xs md:text-sm placeholder:text-gray-500 w-full' placeholder='Internship Title'
                            type="text"  />
                      </div>
                    </div>
                    <div className='h-8 w-px bg-gray-300 mx-2 hidden lg:block'></div>
                    <div className='hidden md:flex items-center flex-1 px-3 py-2'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
                      strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-map-pin h-5 w-5 md:h-5 md:w-5 text-gray-400 mr-2'
                      area-hidden='true'>
                        <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 04'></path>
                       <circle cx='12' cy='10' r='3'></circle>
                      </svg>
                      <input data-slot='input' className='file:text-foreground placeholder:text-sm selection:bg-theme-main/60 selection:text-primary-foreground dark:bg-input/30 border-input flex md:h-9 w-full min-w-0 rounded-md border bg-white py-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm hover:border-theme-main/50 focus-visible:border-theme-main focus-visible:ring-theme-main/50
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-none shadow-none focus-visible:ring-0
                        focus-visible:ring-offset-0 px-0 h-auto text-base placeholder:text-gray-500' placeholder='Enter Location'
                       type="text" />
                    </div>
                    <button data-slot='button'className='cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium
                     duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 
                     shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive bg-theme-main text-white shadow-xs hover:brightness-115 
                     hover:shadow-lg hover:shadow-sky-800/20 h-9 px-4 py-2 has-[>svg]:px-3 transition-colors hidden md:flex bg-blue-400'>
                    Find Internship</button>
                    <button data-slot='button' className='cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium duration-300 ease-out 
                    disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 
                    [&_svg]:shrink-0 outline-none aria-invalid:border-destructive bg-theme-main text-white shadow-xs hover:brightness-115
                     hover:shadow-lg hover:shadow-sky-800/20 px-4 py-2 has-[>svg]:px-3 transition-colors flex md:hidden rounded-full w-9 h-9'
                     title='Find Opportunities'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
                      strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-arrow-right h-5 w-5 md:h-5 md:w-5 text-gray-400 mr-2'
                      area-hidden='true'>
                        <path d='M5 12h14'></path>
                        <path d='m12 5 7 7-7 7'></path>
                      </svg>
                    </button>
                  </div>
                  <div className='flex flex-wrap items-center gap-1 md:gap-2 hero-item-4'>
                    <h5 className='text-sm text-slate-500'>Popular searches: </h5>
                    <div className='badge-hover'>
                      <span data-slot='badge' className='inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap
                       shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden [a&]:hover:bg-primary/90
                        bg-sky-50 text-blue-400 border border-blue-400 
                      rounded-full cursor-pointer transition-all duration-200'>Software Developer</span>
                    </div>
                    <div className='badge-hover'>
                      <span data-slot='badge' className='inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap
                       shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden
                        [a&]:hover:bg-primary/90 bg-sky-50 text-blue-400 border border-blue-400
                      rounded-full cursor-pointer transition-all duration-200'>AI/ML Engineer</span>
                    </div>
                    <div className='badge-hover'>
                      <span data-slot='badge' className='inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap
                       shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden
                        [a&]:hover:bg-primary/90 bg-sky-50 text-blue-400 border border-blue-400 
                      rounded-full cursor-pointer transition-all duration-200'>HR Management</span>
                    </div>
                    <div className='badge-hover'>
                      <span data-slot='badge' className='inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap
                       shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden 
                       [a&]:hover:bg-primary/90 bg-sky-50 text-blue-400 border border-blue-400 
                      rounded-full cursor-pointer transition-all duration-200'>Digital Marketing</span>
                    </div>
                  </div>
                </div>
               <div className='relative hidden lg:flex justify-center items-center xl:pl-20 hero-image'>
                <div className='relative w-full h-[480px]'>
                  <div className='absolute inset-0 rounded-full w-[500px] h-[500px] border border-blue-200 scale-150 animate-pulse 
                  overflow-hidden'></div>
                  <div className='relative z-10 flex items-center justify-center'>
                    <div className='absolute w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full left-16 top-32 animate-none'></div>
                  <div className='absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full right-12 bottom-28 animate-none
                  animation-delay-2000'></div>
                  <div className='absolute w-64 h-64 bg-gradient-to-r from-blue-800/10 to-cyan-400/30 rounded-full blur-3xl -left-20 top-20 animate-blob'></div>
                  <div className='absolute w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl -right-0 bottom-20 animate-blob animation-delay-2000'></div>
                  <div className='absolute w-full h-96 bg-gradient-to-r from-theme-main/50 rounded-full blur-3xl -right-20 bottom-10 animate-blob animation-delay-2000 opacity-50'></div>
                  <div className='absolute w-72 h-72 bg-gradient-to-r from-white mix-blend-overlay rounded-full blur-3xl -right-20 bottom-50 animate-blob animation-delay-2000'></div>
                 <img src="https://internsbaba.com/assets/hero-BM2jnJYu.webp" alt="Student holding laptop and notebook while searching for internships on Internbaba" fetchPriority='high'
                 className='w-auto h-[700px] rounded-xl pb-20 drop-shadow-2xl relative z-10'/>
                 <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-800 to-blue-900 rounded-full opacity-80 hero-orb-right'></div>
                 <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-900 to-blue-500 rounded-full opacity-80 
                 hero-orb-left'></div>
                  </div>
                </div>
               </div>
              </div>
              {/*............Trusted by .......... */}
              <div className='h-[146px] lg:h-28 bg-white flex flex-col justify-around lg:flex-row items-center py-2 border-t'>
              <div className='lg:h-28 w-full lg:w-1/5 flex flex-col items-center justify-center lg:px-4'>
              <h4 className='lg:text-xl font-medium text-slate-700'> Trusted by</h4>
              <span className='text-center text-xs lg:text-sm text-muted-foreground'>2000+ Leading Companies Worldwide</span>
              </div>
              <div className=' lg:w-4/5  relative overflow-x-hidden'>
              <div className=' mx-auto  lg:h-28  flex items-center'>
                <div className=' flex-shrink-0 mx-4 flex items-center justify-center'>
                  < motion.div
                    initial={{x:0}}
                    animate={{x: "-100%"}}
                    transition={{duration: 40, repeat:Infinity, ease:"linear"}}
                    className='flex flex-shrink-0 '
                  >
                    {companies.map((image,index)=>{
                      return <img className='h-28 w-40 pr-8 object-contain  transition-transform duration-200 hover:scale-105 '
                      src={image} key={index}/>
                    })}
                  </motion.div>
                  < motion.div
                    initial={{x:0}}
                    animate={{x: "-100%"}}
                    transition={{duration: 40, repeat:Infinity, ease:'linear'}}
                    className='flex flex-shrink-0  '
                  >
                    {companies.map((image,index)=>{
                      return <img className='h-28 w-40 pr-8  object-contain  transition-transform duration-200 hover:scale-105 '
                      src={image} key={index}/>
                    })}
                  </motion.div>
                     </div>
                </div>
              </div>
              </div>
    
              </div>
             </section>
              </div>
             
          
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
