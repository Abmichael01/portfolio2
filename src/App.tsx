import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero/Hero"
import About from '@/components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (

    <div className='bg-customBg flex flex-col gap-12 min-h-screen px-4 sm:px-8 lg:px-20 font-nunito text-white pb-10'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Toaster />
      <Analytics />
    </div>

  )
}

export default App
