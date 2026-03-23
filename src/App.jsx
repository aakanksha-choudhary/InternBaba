import { useState } from 'react'

import { Navbar } from './assets/components/Navbar.jsx'
import { Head_section } from './assets/components/Head_section.jsx'
import Location_section from './assets/components/Location_section.jsx'
import LatestInternships from './assets/components/LatestInternship.jsx'
import { Recentjob } from './assets/components/Recentjob.jsx'
import { Work } from './assets/components/Work.jsx'
import SuccessStory from './assets/components/SuccessStory.jsx'
import Testimonials from './assets/components/Testimonials.jsx'
import { Register } from './assets/components/Register.jsx'
import { Footer } from './assets/components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
      <Head_section/>
      <Location_section/>
      <LatestInternships/>
      <Recentjob/>
      <Work/>
      <SuccessStory/>
      <Testimonials/>
      <Register/>
      <Footer/>
    </>
  )
}

export default App
