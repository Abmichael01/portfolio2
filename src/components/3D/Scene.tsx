import React, { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// Defining the type for props, which allows children to be passed in
interface SceneProps {
  children: ReactNode;
}

const Scene: React.FC<SceneProps> = ({ children }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Environment preset="sunset" />
      
      {children}
    </Canvas>
  );
};

export default Scene;
