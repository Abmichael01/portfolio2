// import GradientHr from '@/components/GradientHr'
// import Scene from '../3D/Scene'
// import AboutObject from '../3D/AboutObject'
// import AboutTyping from './AboutTyping'

// const About = () => {
//     return (
//         <div>
//             <div className='flex gap-20 flex-col lg:flex-row'>
//                 <div className='h-[250px]'>
//                     <Scene>
//                         <AboutObject />
//                     </Scene>
//                 </div>
//                 <div className="border border-gray-700 min-h-[400px] rounded-2xl shadow-lg bg-gray-900 w-full">
//                     {/* Window header with controls */}
//                     <div className="flex items-center justify-between border-b border-gray-700 py-2 px-4 rounded-t-2xl bg-gray-800">
//                         {/* Window controls */}
//                         <div className="flex gap-2">
//                             <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
//                             <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full"></div>
//                             <div className="w-[15px] h-[15px] bg-green-600 rounded-full"></div>
//                         </div>

//                         {/* Window title */}
//                         <h1 className="text-lg font-medium text-blue-400">About Me</h1>

//                         {/* Empty space for balance */}
//                         <div className="w-[45px]"></div>
//                     </div>

//                     {/* Content Area */}
//                     <div className="p-6 text-gray-200 text-[14px] sm:text-[20px] lg:text-[24px]">
//                         <AboutTyping />
//                     </div>

//                 </div>
//             </div>
//             <div className='mt-8'></div>
//             <GradientHr />
//         </div >

//     )
// }

// export default About

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GradientHr from "@/components/GradientHr";
import Scene from "../3D/Scene";
import AboutObject from "../3D/AboutObject";
import AboutTyping from "./AboutTyping";

const About = () => {
  // Refs for triggering animations on scroll
  const sceneRef = useRef(null);
  const aboutMeRef = useRef(null);

  // useInView to trigger animations when in viewport
  const isSceneInView = useInView(sceneRef, { once: true });
  const isAboutMeInView = useInView(aboutMeRef, { once: true });

  return (
    <div>
      <div className="flex gap-20 flex-col lg:flex-row">
        {/* 3D Scene Animation on Scroll */}
        <motion.div
          ref={sceneRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isSceneInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="h-[250px]"
        >
          <Scene>
            <AboutObject />
          </Scene>
        </motion.div>

        {/* About Me Section Animation on Scroll */}
        <motion.div
          ref={aboutMeRef}
          initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
          animate={isAboutMeInView ? { opacity: 1, y: 0, filter: "blur(0px)"  } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-gray-700 min-h-[400px] rounded-2xl shadow-lg bg-gray-900 w-full"
        >
          {/* Window header with controls */}
          <div className="flex items-center justify-between border-b border-gray-700 py-2 px-4 rounded-t-2xl bg-gray-800">
            {/* Window controls */}
            <div className="flex gap-2">
              <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
              <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full"></div>
              <div className="w-[15px] h-[15px] bg-green-600 rounded-full"></div>
            </div>

            {/* Window title */}
            <h1 className="text-lg font-medium text-blue-400">About Me</h1>

            {/* Empty space for balance */}
            <div className="w-[45px]"></div>
          </div>

          {/* Content Area */}
          <div className="p-6 text-gray-200 text-[14px] sm:text-[20px] lg:text-[24px]">
            <AboutTyping />
          </div>
        </motion.div>
      </div>
      <div className="mt-8"></div>
      <GradientHr />
    </div>
  );
};

export default About;
