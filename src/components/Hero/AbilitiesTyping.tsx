import Typewriter from "react-typewriter-effect";

const AbilitiesTyping = () => {
  
  const abilities = [
    "I BUILD IT...", "I DEVELOP IT...", "I SHOWCASE IT...",
    "I CODE IT...", 
    "I DESIGN IT...", 
    "I DEPLOY IT...",
    "I SOLVE IT..."
  ];

  return (
    <Typewriter
      textStyle={{
        fontFamily: "Nunito",
        color: "white",
        fontWeight: 900,
        
      }}
      startDelay={100}
      cursorColor="white"
      multiText={abilities} // Use the abilities array
      multiTextDelay={1500} // Delay between each word
      typeSpeed={200} // Speed of typing
      deleteSpeed={100} // Speed of deleting
      multiTextLoop // Enable looping through abilities
    />
  );
};

export default AbilitiesTyping;
