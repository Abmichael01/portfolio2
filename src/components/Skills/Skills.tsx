// import GradientHr from '../GradientHr'
// import "devicon/devicon.min.css"
// import SectionName from '../SectionName';

// const Skills = () => {
//     const skills = [
//         { name: "JavaScript", class: "devicon-javascript-plain colored" },
//         { name: "TypeScript", class: "devicon-typescript-plain colored" },
//         { name: "React", class: "devicon-react-plain colored" },
//         { name: "Python", class: "devicon-python-plain colored" },
//         { name: "Django", class: "devicon-django-plain colored" },
//         { name: "C++", class: "devicon-cplusplus-plain colored" },
//         { name: "HTML5", class: "devicon-html5-plain colored" },
//         { name: "CSS3", class: "devicon-css3-plain colored" },
//     ];
//     return (
//         <div>
//             <div className=' text-white flex flex-col gap-8 w-full items-center'>
//                 <SectionName name='My Tech Stack' />
//                 <div className='flex flex-wrap w-full gap-8 md:gap-20 justify-center'>
//                     {skills.map((skill, index) => (
//                         <div key={index} className="text-center flex flex-col gap-2 items-center cursor-pointer">
//                             <i className={`${skill.class} text-5xl lg:text-7xl text-primary`}></i>
//                             <p className="mt-2 text-slate-700 font-semibold text-sm">{skill.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <GradientHr />
//         </div>
//     )
// }

// export default Skills

import GradientHr from "../GradientHr";
import "devicon/devicon.min.css";
import SectionName from "../SectionName";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", class: "devicon-javascript-plain colored" },
    { name: "TypeScript", class: "devicon-typescript-plain colored" },
    { name: "React", class: "devicon-react-plain colored" },
    { name: "Python", class: "devicon-python-plain colored" },
    { name: "Django", class: "devicon-django-plain colored" },
    { name: "C++", class: "devicon-cplusplus-plain colored" },
    { name: "HTML5", class: "devicon-html5-plain colored" },
    { name: "CSS3", class: "devicon-css3-plain colored" },
  ];

  return (
    <div>
      <div className="text-white flex flex-col gap-8 w-full items-center">
        <SectionName name="My Tech Stack" />
        <div className="flex flex-wrap w-full gap-8 md:gap-20 justify-center">
          {skills.map((skill, index) => {
            // Create a ref for each skill
            const skillRef = useRef(null);
            const isInView = useInView(skillRef, { once: true });

            return (
              <motion.div
                key={index}
                ref={skillRef} // Assign the ref to each skill
                className="text-center flex flex-col gap-2 items-center cursor-pointer"
                initial={{ opacity: 0, scale: 0, filter: "blur(20px)" }}
                animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.3, delay: isInView ? index * 0.2 : 0 }} // Duration for the animation
              >
                <i className={`${skill.class} text-5xl lg:text-7xl text-primary`}></i>
                <motion.p className="mt-2 text-slate-700 font-semibold text-sm">
                  {skill.name}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <GradientHr />
    </div>
  );
};

export default Skills;
