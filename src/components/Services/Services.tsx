import React from 'react'
import GradientHr from '../GradientHr'
import { Database, Server, Cloud, Code, Shield, GitMerge, Computer } from 'lucide-react'; // Add other icons as needed
import SectionName from '../SectionName';


const services = [
    {
        icon: <Computer className='w-full h-full' />,
        name: "Frontend Development",
    },
    {
        icon: <Server className='w-full h-full' />,
        name: "Backend Development",
    },
    {
        icon: <Database className='w-full h-full' />,
        name: "Database Management",
    },
    {
        icon: <Cloud className='w-full h-full' />,
        name: "Cloud Integration & Deployment",
    },
    {
        icon: <Shield className='w-full h-full' />,
        name: "Security & Authentication",
    },
    {
        icon: <GitMerge className='w-full h-full' />,
        name: "Version Control & Collaboration",
    },
    {
        icon: <Code className='w-full h-full' />,
        name: "API Development & Integration",
    },
];


const Services = () => {
    return (
        <div>
            <div className='flex flex-col gap-10'>
                <SectionName name="Services" />
                <div className='flex flex-wrap gap-3 sm:gap-5 md:gap-10 justify-center '>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-[150px] sm:w-[200px] lg:w-[250px] h-[250px] md:h-[210px] rounded-xl card-wrapper overflow-hidden flex items-center justify-center"
                        >
                            <div className='h-[calc(100%-2px)] w-[calc(100%-2px)] bg-customBg relative z-10 flex items-center flex-col justify-center rounded-xl '>
                                <div className=" bg-primary/60 bg-opacity-10 p-6 w-fit rounded-full mb-3  shadow-md">
                                    <div className="text-5xl md:text-6xl w-10 h-10 md:w-16 md:h-16 text-white">{service.icon}</div>
                                </div>
                                <p className="text-[16px] md:text-xl font-bold text-center text-wrap w-[90%]">{service.name}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <GradientHr />
        </div>
    )
}

export default Services
