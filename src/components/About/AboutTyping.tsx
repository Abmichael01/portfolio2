import React, { useEffect, useRef, useState } from "react";
import Typewriter from "react-typewriter-effect";

const aboutMeText = "Hello, I'm Michael! I’m a passionate full-stack developer with three years of experience in creating dynamic web applications. I have worked on various projects that have sharpened my skills in both front-end and back-end development. " +
    "I love building robust applications that provide seamless user experiences and solve real-world problems. My expertise includes working with modern frameworks and technologies, enabling me to deliver high-quality solutions. " +
    "Let's connect and create something amazing together!";

const AboutTyping: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); 
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); 
      }
    };
  }, []);

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
          text={aboutMeText}
          typeSpeed={20}
          eraseSpeed={100}
          hideCursorAfterText={true} 
          displayTextRenderer={(text, i) => {
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