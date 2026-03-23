import React from 'react'

export const Register = () => {
  return (
    <>
    <section id='register'>
        <div className='max-w-7xl mb-8 mx-auto px-2'>
            <div className='grid lg:grid-cols-3 gap-6'>
                <div className='bg-gradient-to-br order-2 lg:order-1 from-blue-50/50 to-blue-50 rounded-2xl p-6 lg:p-8
                 relative overflow-hidden'>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-blue-400/30 rounded-full -translate-y-16 translate-x-16'></div>
                    <div className='absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full translate-y-12 -translate-x-12'></div>
                    <div className='relative z-10'>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-smartphone w-6 h-6 text-white'>
                                                <rect width='14' height='20' x='5' y='2'rx='2' ry='2'></rect>
                                                <path d='M12 18h.01'></path>
                                            </svg>
                            </div>
                            <div>
                                <h3 className='text-xl lg:text-2xl font-bold text-slate-800'>Download</h3>
                                <p className='text-lg lg:text-xl font-semibold text-blue-400'>InternBaba App</p>
                            </div>
                        </div>
                        <p className='text-slate-600 text-sm lg:text-base mb-6 leading-relaxed'>Access thousands of opportunities and connect with top companies. Available on Android.</p>
                       <div className='flex flex-col sm:flex-row gap-3'>
                        <a href="https://play.google.com/store/apps/details?id=com.internsbaba" target='_blank' rel='noopener noreferrer'>
                        <button data-slot='button' className='inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm
                         font-medium transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none 
                        [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive bg-blue-400
                         text-white shadow-xs hover:brightness-115 hover:shadow-lg hover:shadow-sky-800/20 h-9 px-4 py-2 has-[>svg]:px-3' whilehover='[object Object]'
                         whiletap='[object Object]'>
                            <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-download w-4 h-4'>
                                                <path d='M12 15V3'></path>
                                                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                                                <path d="m7 10 5 5 5-5"></path>
                                            </svg>Download Now
                         </button>
                        </a>
                       </div>
                       <div className='absolute bottom-4 right-4 opacity-20'>
                        <div className='w-16 h-20 bg-blue-400 rounded-lg flex items-center justify-center'>
                            <div className='w-12 h-16 bg-white rounded border-2 border-blue-100'></div>
                        </div>
                       </div>
    
                    </div>
                 </div>
                 <div className='bg-gradient-to-br order-1 lg:order-2 lg:col-span-2 from-red-50 to-red-50 rounded-2xl p-6 lg:p-8 relative 
                 overflow-hidden'>
                    <div className='absolute top-0 left-0 w-32 h-32 bg-red-300 rounded-full -translate-y-16 -translate-x-16'></div>
                    <div className='absolute bottom-0 right-0 w-24 h-24 bg-red-300 rounded-full translate-y-12 translate-x-12'></div>
                    <div className='relative z-10'>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center text-white'>
                                <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='class="lucide lucide-building2 lucide-building-2 w-6 h-6 text-white"'>
                                                <path d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z'></path>
                                                <path d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2'></path>
                                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                                <path d='M10 6h4'></path>
                                                <path d="M10 10h4"></path>
                                                <path d ='M10 14h4'></path>
                                                <path d='M10 18h4'></path>
                                            </svg>
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Join as an</h3>
                                <p className='text-lg lg:text-xl font-semibold text-red-600'>Employer</p>
                            </div>
                        </div>
                        <p className='text-slate-600 text-sm lg:text-base mb-6 leading-relaxed'>
                            "Connect with top talent from leading universities. Find the perfect candidates for your internship and full-time positions."
                        </p>
                     <div className='flex flex-col sm:flex-row gap-3'>
                        <button data-slot='button' className='inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap 
                        rounded-lg text-sm font-medium transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 
                        [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none
                         aria-invalid:border-destructive bg-red-700 text-white hover:bg-red-500 focus-visible:ring-theme-secondary/20
                          dark:focus-visible:ring-theme-secondary/40 dark:bg-theme-secondary/60 shadow-xs hover:brightness-115 hover:shadow-lg
                           hover:shadow-red-800/20 h-9 px-4 py-2 has-[>svg]:px-3'  whilehover='[object Object]'
                         whiletap='[object Object]'>Get Started
                         <svg xmlns='http://www.w3.org/2000/svg'height='24' width='24' viewBox='0 0 24 24 ' fill='none'
                                            stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'
                                            className='lucide lucide-arrow-right w-4 h-4'>
                                                <path d='M5 12h14'></path>
                                                 <path d='m12 5 7 7-7 7'></path>
                                            </svg>

                         </button>
                     </div>
                
                    </div>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}
