import GradientHr from '../GradientHr';
import shortly from "@/assets/projects/shortly.png";
import jsFrameworks from "@/assets/projects/jsFrameworks.png";
import linksDashboard from "@/assets/projects/linksDashboard.png";
import urkelAnimate from "@/assets/projects/urkelAnimate.png";
import { ArrowUpRight, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import cara from "@/assets/projects/Cara.png"
import fancyCursor from "@/assets/projects/fancyCursor.gif"
import jasperStore from "@/assets/projects/jasperStore.png"
import tasty from "@/assets/projects/tasty.png"
import student from "@/assets/projects/student.png"
import believers from "@/assets/projects/believers.png"



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
        name: "CARA",
        description: "Designed a responsive e-commerce frontend with HTML, CSS, and JavaScript, featuring product listings, a cart, and dynamic interactions for a seamless user experience.",
        link: "#",
        github: "#",
        image: cara,
        stack: ["HTML", "CSS", "Javascript"],
        completed: true,
    },
    {
        name: "BELIEVERS HUB",
        description: "This is a fullstack website developed with python, django and django template to post daily charges.",
        link: "https://believers-hub.vercel.app/",
        github: "https://github.com/Abmichael01/believers-hub",
        image: believers,
        stack: ["PYTHON", "DJANGO", "JAVASCRIPT", "HTML", "CSS"],
        completed: true,
    },
    {
        name: "STUDENT MANAGEMENT SYSTEM",
        description: "This is a fullstack project developed with python and django and django templates. It allows creation of categories and students' details can be added to any category",
        link: "",
        github: "#",
        image: student,
        stack: ["PYTHON", "DJANGO", "JAVASCRIPT", "HTML", "CSS"],
        completed: true,
    },
    {
        name: "DASHBOARD",
        description: "Developed a clean and responsive frontend for a dashboard using HTML, CSS, and JavaScript. The design allows users to manage and display multiple links in a streamlined and intuitive interface.",
        link: "#",
        github: "https://github.com/Abmichael01/linksDashboard",
        image: linksDashboard,
        stack: ["HTML", "CSS", "Javascript"],
        completed: true,
    },
    {
        name: "JASPER STORE",
        description: "Jasper Store is an ecommerce store landing page.",
        link: "#",
        github: "https://github.com/Abmichael01/jasperStore",
        image: jasperStore,
        stack: ["HTML", "CSS", "Javascript"],
        completed: true,
    },
    {
        name: "TASTY FOODS",
        description: "Tasty Foods is a landing page designed for a restaurant.",
        link: "",
        github: "https://github.com/Abmichael01/tastyFoods",
        image: tasty,
        stack: ["HTML", "CSS", "Javascript"],
        completed: true,
    },
    {
        name: "URKEL ANIMATE",
        description: "Urkel Animate is a portfolio website created to showcase animations, featuring interactive galleries, video previews, and project details in a clean and user-friendly layout.",
        link: "https://urkelanimate.vercel.app/",
        github: "#",
        image: urkelAnimate,
        stack: ["HTML", "CSS", "Javascript"],
        completed: true,
    },
    {
        name: "FANCY CURSOR",
        description: "I made custom cursor to follow the system default cursor.",
        link: "#",
        github: "https://github.com/Abmichael01/fancy-cursor",
        image: fancyCursor,
        stack: ["HTML", "CSS", "Javascript"],
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
