import { Button } from '@/components/ui/button';

const navs = ["Home", "About", "Projects"]

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 '>
      <div className='flex items-end'>
        <h1 className='text-[40px] text-white font-bold '><span className=''>Urkel</span> <span className='text-[56px] text-primary'>.</span></h1>
      </div>
      <div>
        <nav className='flex gap-4 text-primary-foreground items-center'>
          {/* {
            navs.map((nav, index) => (
              <a href={`#${nav.toLowerCase()}`} key={index} className='text-white hover:text-primary'>
                {nav}
              </a>
            ))
          } */}
          <Button>Contact Me</Button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
