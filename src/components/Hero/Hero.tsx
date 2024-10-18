import myPhoto from "@/assets/myPhoto.png"
import AbilitiesTyping from './AbilitiesTyping'
import { Button } from '@/components/ui/button';
import { Download, Github } from 'lucide-react';
import GradientHr from '@/components/GradientHr';

const stats = [
    {
        title: <>Years Of <br /> Experience</>,
        count: 3,
    },
    {
        title: <>Projects <br /> Completed</>,
        count: 10,
    },
    {
        title: <>Technologies <br /> Mastered</>,
        count: 7,
    },
    {
        title: <>Code <br /> Commits</>,
        count: 700,
    }
]

const Hero = () => {

    return (
        <div className='flex flex-col gap-8 relative'>
            <div className="h-[100px] w-[100px] dots absolute right-0 top-[10px]"></div>
            <div className='flex gap-5 md:gap-0 flex-col-reverse md:flex-row items-center justify-between relative z-10'>
                <div className='flex flex-col gap-2 w-full text-center md:text-left md:w-1/2'>
                    <div className='flex-col items-center text-[35px] sm:text-[40px]  lg:text-[65px] font-bold font-robotoSlab'>
                        <h1 className='text-primary '>YOU THINK IT<span className='text-white'></span></h1>
                        <div className="flex items-center md:justify-start justify-center"><AbilitiesTyping /></div>
                    </div>
                    <p className='text-white text-[18px]'>Hi, I’m <span className='text-primary font-bold'>MICHAEL</span>, a fullstack developer passionate about creating <span className='text-primary'>beautiful</span> and <span className='text-primary'>functional</span> web applications. Explore my projects and let’s build something amazing together!</p>
                    <div className='flex gap-4 items-center justify-center md:justify-start'>
                        <Button className="rounded-[20px] text-primary border bg-primary/20 border-primary  flex items-center gap-2 hover:bg-transparent hover:translate-x-6 transition-all duration-500 peer peer-hover:blur-md">Download CV <Download className='text-[4px]' /> </Button>
                        <a href="#" className='w-[40px] h-[40px] border bg-primary/20 border-primary rounded-full flex items-center justify-center text-primary hover:translate-x-2 transition-all duration-500 peer peer-hover:blur-md '>
                            <Github className='w-[20px] h-[20px]' />
                        </a>
                    </div>
                </div>
                <div className='overflow-hidden w-[90%] h-[300px] sm:w-[300px] sm:h-[300px] bg-customBg  lg:w-[400px] lg:h-[400px] rounded-full border-2 border-primary border-dashed '>
                    <img src={myPhoto} alt="" className='w-full h-full object-cover grayscale' />
                </div>
            </div>
            <div className='flex items-center justify-between gap-4 flex-wrap'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <p className='text-white text-[50px]'>{stat.count}</p>
                        <h2 className='text-white text-[16px] font-bold whitespace-normal w-auto'>
                            {stat.title}
                        </h2>
                    </div>
                ))}
            </div>
            <GradientHr />
        </div>
    )
}

export default Hero
