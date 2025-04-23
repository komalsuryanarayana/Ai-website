import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

interface Social3DProps {
  icon: string;
  color: string;
  onClick?: () => void;
}

export function Social3D({ icon, color, onClick }: Social3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas className="h-24 w-24 cursor-pointer" onClick={onClick}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Center>
        <motion.mesh
          ref={meshRef}
          animate={{
            rotateY: [0, Math.PI * 2],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        >
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={1.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {icon}
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </Text3D>
        </motion.mesh>
      </Center>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}