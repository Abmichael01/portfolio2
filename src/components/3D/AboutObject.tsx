import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


const AboutObject: React.FC = () => {
    const torusRef = useRef<THREE.Mesh>(null!);

    // Rotate the object continuously
    useFrame(() => {
      if (torusRef.current) {
        torusRef.current.rotation.x += 0.01; // Rotate along the x-axis
        torusRef.current.rotation.y += 0.01; // Rotate along the y-axis
      }
    });
  
    return (
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.4, 300, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );
};

export default AboutObject;
