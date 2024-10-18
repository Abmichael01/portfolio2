import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Typewriter from "react-typewriter-effect";

const aboutMeText = "Hello, I'm Michael! I’m a passionate full-stack developer with three years of experience in creating dynamic web applications. I have worked on various projects that have sharpened my skills in both front-end and back-end development. " +
    "I love building robust applications that provide seamless user experiences and solve real-world problems. My expertise includes working with modern frameworks and technologies, enabling me to deliver high-quality solutions. " +
    "Let's connect and create something amazing together!";

const AboutTyping: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null); 
  const isInView = useInView(sectionRef, {once: true})

  return (
    <div ref={sectionRef} className="about-section">
      {isInView && (
        <Typewriter
          textStyle={{
            fontFamily: 'Arial, sans-serif',
            color: '#00bfff',
            fontWeight: 500,
          }}
          startDelay={100}
          cursorColor="#00bfff"
          text={aboutMeText as string}
          typeSpeed={20}
          eraseSpeed={100}
          hideCursorAfterText={true} 
          displayTextRenderer={(text: string, i: number) => {
            return (
              <span key={i} style={{ fontWeight: 'normal' }}>
                {text}
              </span>
            );
          }}
        />
      )}
    </div>
  );
};

export default AboutTyping;
