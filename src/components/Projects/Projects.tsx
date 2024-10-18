import GradientHr from '../GradientHr';
import shortly from "@/assets/projects/shortly.png";
import jsFrameworks from "@/assets/projects/jsFrameworks.png";
import calculator from "@/assets/projects/calculator.png";
import lexicon from "@/assets/projects/lexicon.png";
import vortex from "@/assets/projects/vortex.png";
import { ArrowUpRight, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        name: "JS FRAMEWORKS",
        description: "JS Frameworks is a website where I highlighted the pros and cons of popular JavaScript frameworks. This was my first project using React.",
        link: "http://js-frameworks-pros-cons.vercel.app/",
        github: "https://github.com/Abmichael01/js-frameworks",
        image: jsFrameworks,
        stack: ["React", "Tailwind CSS", "GSAP", "Javascript"],
        completed: true,
    },
    {
        name: "SHORTLY",
        description: "Shortly is a URL shortening website that offers features like authentication, personalized dashboards and link tracking.",
        link: "#",
        github: "#",
        image: shortly,
        stack: ["React", "Django", "Tailwind Css", "Javascript", "Python"],
        completed: true,
    },
    {
        name: "CALCULATOR",
        description: "I made a simple web based calculator for basic arithmetics.",
        link: "https://mycalculator-steel.vercel.app/",
        github: "#",
        image: calculator,
        stack: ["HTML", "CSS", "Javascript"],
        completed: true,
    },
    {
        name: "URKEL LEXICON",
        description: "This is a web based dictionary app. I took on this project to learn about APIs and how to handle responses from requests made to an API.",
        link: "https://urkel-lexicon.vercel.app/",
        github: "#",
        image: lexicon,
        stack: ["React", "Tailwind CSS", "Javascript", "JSX"],
        completed: true,
    },
    {
        name: "VORTEX.IO",
        description: "This is a simple landing page for a crypto updates group.",
        link: "https://vortex-io.vercel.app/",
        github: "#",
        image: vortex,
        stack: ["React", "Django", "CSS", "Javascript"],
        completed: true,
    },
];

const Projects = () => {
    return (
        <div>
            <h1 className='text-2xl mb-10 text-center font-semibold bg-gradient-to-l from-gray-600 via-blue-500 to-gray-500 bg-clip-text text-transparent '>PROJECTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
                            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                            transition={{ duration: 0.5 }}
                            className='p-[1.5px] rounded-xl bg-gradient-to-b from-gray-800 via-blue-500 to-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            <div className="flex flex-col overflow-hidden bg-customBg rounded-xl h-full">
                                <div className='border-b border-gray-700'>
                                    <img
                                        src={project.image}
                                        alt={project.description} // Add alt text for accessibility
                                        className='w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110'
                                    />
                                </div>

                                <div className='p-4 flex-1'>
                                    <h2 className='text-xl font-semibold text-primary mb-2'>{project.name}</h2>
                                    <p className='text-gray-300'>{project.description}</p>
                                </div>
                                <div className='flex justify-between items-center border-t-2 border-gray-700 p-3'>
                                    <div className='border-emerald-500 border text-emerald-500 bg-emerald-200/20 font-bold px-3 py-1 rounded-full text-[10px]  h-fit'>Completed</div>
                                    <a href={project.github} className='w-[35px] h-[35px] border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-500 '>
                                        <Github className='w-[20px] h-[20px]' />
                                    </a>
                                    <a href={project.link} className='w-[35px] h-[35px] border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-500 '>
                                        <ArrowUpRight />
                                    </a>
                                </div>
                                <div className='border-t-2 border-gray-700 p-3 flex flex-wrap gap-2'>
                                    {project.stack.map((lang, index) => (
                                        <div
                                            key={index}
                                            className='px-3 py-1 border border-primary bg-primary/20 text-primary rounded-xl text-[12px] transition-colors duration-300 hover:bg-primary/30'
                                        >
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <GradientHr />
        </div>
    );
};

export default Projects;
