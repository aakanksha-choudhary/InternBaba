import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className='bg-gray-100 border-t border-gray-200 '>
        <div className='py-8'>
          <div className=' max-w-7xl mx-auto px-4'>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
              <div className='col-span-2 md:col-span-3 lg:col-span-1 space-y-4'>
                <div className='h-14 w-auto object-contain cursor-pointer select-none'title='InternBala' draggable='false' >
                 <img src="https://internsbaba.com/assets/logo-DWR6Zi_2.png" alt="InternBaba" className='h-full' />
                </div>
                <div className='space-y-1 text-sm'>
                  <div className='flex items-center space-x-2 text-gray-600'>
                    <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-phone w-3 h-3' > 
                                 <path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18
                                  0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'></path>            

                           </svg>
                           <span>+91 91086 28001</span>
                  </div>
                  <div className='group flex items-center space-x-2 text-gray-600 cursor-pointer'>
                    <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-mail w-3 h-3'
                                            >
                                              <path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'></path>
                                              <rect x='2' y='4' height='16' width='20' rx='2'></rect>
                                            </svg>
                                            <span className='group-hover:underline'>support@internbaba.in</span>
                  </div>
                </div>
                <div className='cursor-pointer w-fit' tabIndex='0'>
                  <button type='button' className='flex items-center justify-center text-white w-fit px-4 bg-black rounded-lg h-10 
                  cursor-pointer'>
                    <div className='mr-3'>
                      <svg viewBox='30 336.7 120.9 129.2' width='20'>
                        <path fill='#FFD400' d='M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z'></path>
                        <path fill='#FF3333' d='M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z'></path>
                        <path fill='#48FF48' d='M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z'></path>
                        <path fill='#3BCCFF' d='M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z'></path>
                         </svg>
                    </div>
                    <div className='h-full flex flex-col items-start justify-center gap-0 '>
                      <div className='text-[8px] pl-0.5 pt-0.5'>GET IT ON</div>
                      <div className=' font-sans xl:text-lg font-semibold -mt-1.5'>Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className='space-y-3'>
                <h3 className='text-base font-semibold text-gray-800'>Locations</h3>
                <ul className='space-y-2'>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 transition-all
                     duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Work from Home</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                              <path d='m12 5 7 7-7 7'></path>
                                             </svg>
                     </button>
                  </li>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 transition-all
                     duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Bangalore</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                              <path d='m12 5 7 7-7 7'></path>
                                             </svg>
                     </button>
                  </li>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 transition-all
                     duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Delhi</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                              <path d='m12 5 7 7-7 7'></path>
                                             </svg>
                     </button>
                     </li>
                     <li>
                      <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 transition-all
                     duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Mumbai</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                              <path d='m12 5 7 7-7 7'></path>
                                             </svg>
                     </button>
                     </li>
                     <li>
                      <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 transition-all
                     duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Hyderabad</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                              <path d='m12 5 7 7-7 7'></path>
                                             </svg>
                     </button>
                     </li>
                     <li>
                      <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 transition-all
                     duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Chennai</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                              <path d='m12 5 7 7-7 7'></path>
                                             </svg>
                     </button>
                     </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h3 className='text-base font-semibold text-gray-800'>Categories</h3>
                <ul className='space-y-2'>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                       <span className='transition-all duration-300 truncate'>Web Development</span>
                       <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 
                                            transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'
              >
                <path d='M5 12h14'></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
                    </button>
                  </li>
                  <li>
                     <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                       <span className='transition-all duration-300 truncate'>App Development</span>
                       <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 
                                            transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'
              >
                <path d='M5 12h14'></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
                    </button>
                  </li>
                  <li>
                     <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                       <span className='transition-all duration-300 truncate'>Digital Marketing</span>
                       <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 
                                            transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'
              >
                <path d='M5 12h14'></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
                    </button>
                  </li>
                  <li>
                     <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                       <span className='transition-all duration-300 truncate'>Data Scientist</span>
                       <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 
                                            transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'
              >
                <path d='M5 12h14'></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
                    </button>
                  </li>
                  <li>
                     <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                       <span className='transition-all duration-300 truncate'>E-commerce</span>
                       <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 
                                            transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'
              >
                <path d='M5 12h14'></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
                    </button>
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h3 className='text-base font-semibold text-gray-800'>For Candidates</h3>
                <ul className='space-y-2'>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Latest Jobs</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Latest Internships</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Candidate Dashboard</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>

                </ul>
              </div>
               <div className='space-y-3'>
                <h3 className='text-base font-semibold text-gray-800'>For Employers</h3>
                <ul className='space-y-2'>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Post Opportunity</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                     </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Hire Talent</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Employer Dashboard</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                 </ul>
                 </div>
                 {/*........................last .... */}
                  <div className='space-y-3'>
                <h3 className='text-base font-semibold text-gray-800'>Company</h3>
                <ul className='space-y-2'>
                  <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>About Us</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                     </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Why Us</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>FAQs </span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Contact Us </span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Privacy Policy</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Terms & Conditions</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                   <li>
                    <button className='group flex w-fit items-center text-nowrap lg:max-w-36 xl:max-w-max text-gray-600 hover:text-slate-700 
                    transition-all duration-300 ease-out hover:translate-x-2 text-sm cursor-pointer bg-transparent border-none p-0'>
                      <span className='transition-all duration-300 truncate'>Cancellation & Refund Policy</span>
                      <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4 ml-1 opacity-0 group-hover:opacity-100
                                             transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out'>
                                              <path d='M5 12h14'></path>
                                               <path d="m12 5 7 7-7 7"></path>
                                             </svg>
                    </button>
                  </li>
                 </ul>
                 </div>
            </div>
          </div>
        </div>
        <div data-orientation='horizontal' role='none' data-slot='separator' className='shrink-0 data-[orientation=horizontal]:h-
         data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full
         data-[orientation=vertical]:w-px bg-gray-200 max-w-[1440px] mx-auto'> </div>
         <div className='py-4 bg-gray-100 '>
          <div className=' max-w-7xl mx-auto px-4'>
            <div className='relative flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
              <div className='flex items-center space-x-4 mb-4 md:mb-0'>
                <a href="https://www.facebook.com/people/InternBaba-App/pfbid025GJYSDP6CzYFF8PzSF3bcyaabnbHi76nEcjPHNe15eVyFQMvtUXiHZAWniWY4Vqbl/"
                target='_blank' rel='noopener noreferrer'className='text-blue-400 hover:theme-main/80 transition-colors'>
                  <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-facebook h-5 w-5'
                                    >
                                      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                                    </svg>
                </a>
                <a href="https://www.instagram.com/internbaba_app/" target='_blank' rel='noopener noreferrer' 
                className='text-blue-400 hover:theme-main/80 transition-colors'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'
                  stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                  className='lucide lucide-instagram h-5 w-5'
                  >
                    <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
                  </svg>
                </a>
               <a href="https://www.linkedin.com/company/internsbaba/" target='_blank' rel='noopener noreferrer'
               className='text-blue-400 hover:theme-main/80 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' viewBox='0 0 24 24' fill='none'
                  stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                  className='lucide lucide-linkedin h-5 w-5'>
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect width='4' height='12' x='2' y='9'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                    </svg> </a>
               
                 <a href="https://x.com/intern_baba" target='_blank'rel='noopener noreferrer'
                 className='text-blue-400 hover:theme-main/80 transition-colors'>
                  <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5'xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d='M17.53 3H21.25L13.62 10.87L22.54 21H16.16L10.77 
                    14.61L4.66 21H0.92L8.99 12.56L0.46 3H7.02L11.88 8.82L17.53 3ZM16.36 19.13H18.18L6.75 4.76H4.81L16.36 19.13Z' fill='currentColor'> </path>
                  </svg>
                 </a>
              </div>
              <div className='md:absolute right-1/2 text-center flex items-center space-x-1 text-gray-500 text-sm italic text-nowrap  
               md:translate-x-1/2'> 
               <span>~ Made with</span>
               <div>
                <svg xmlns="http://www.w3.org/2000/svg"height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-heart w-3 h-3 text-rose-500 fill-current'>

                                              <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 
                                              3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'></path>
                                            </svg>
                </div>
                <span>in India ~</span>
                </div>
                 <div className='text-gray-400 text-xs'>
                      © 
                      2026
                      InternBaba. All rights reserved.
                 </div>
            </div>
          </div>
         </div>
    </footer>
    </>
  )
}
