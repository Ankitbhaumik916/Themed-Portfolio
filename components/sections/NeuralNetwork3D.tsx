"use client";

import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Environment,
  PerformanceMonitor,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";

type DynamicLightsProps = {
  rotation: number;
};

function DynamicLights({ rotation }: DynamicLightsProps) {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.PointLight>(null);
  const lastRotationRef = useRef(0);

  useFrame(() => {
    // Only update lights if rotation changed significantly
    if (Math.abs(rotation - lastRotationRef.current) < 0.01) return;
    lastRotationRef.current = rotation;

    // Update key light position
    if (keyLightRef.current) {
      const angle = rotation + Math.PI / 4;
      keyLightRef.current.position.x = Math.cos(angle) * 8;
      keyLightRef.current.position.z = Math.sin(angle) * 8;
    }

    // Update rim light behind the car
    if (rimLightRef.current) {
      const angle = rotation + Math.PI;
      rimLightRef.current.position.x = Math.cos(angle) * 6;
      rimLightRef.current.position.z = Math.sin(angle) * 3;
    }
  });

  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.6} color="#e8dfff" />
      
      {/* Key light - dynamically positioned */}
      <directionalLight ref={keyLightRef} position={[8, 5, 8]} intensity={1.4} color="#ffffff" />
      
      {/* Single rim light */}
      <pointLight ref={rimLightRef} position={[-6, 2, -3]} intensity={1.8} color="#8b5cf6" distance={18} />
      
      {/* Fixed top light */}
      <pointLight position={[0, 8, 0]} intensity={1} color="#ffffff" distance={20} />
    </>
  );
}

function Porsche(props: JSX.IntrinsicElements["group"] & { onRotationChange?: (rotation: number) => void }) {
  const { scene, nodes, materials } = useGLTF("/911-transformed.glb", true) as any;
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(Math.PI / 5);
  const dragStart = useRef({ x: 0, rotation: Math.PI / 5 });
  const updateFrameRef = useRef(0);

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node: any) => {
      if (node?.isMesh) {
        node.receiveShadow = true;
        node.castShadow = true;
      }
    });

    applyProps(materials.rubber, {
      color: "#1a1a1f",
      roughness: 0.8,
      metalness: 0.1,
    });
    applyProps(materials.window, { 
      color: "#050508", 
      roughness: 0.05, 
      metalness: 0.1,
      transmission: 0.9,
      opacity: 0.25
    });
    applyProps(materials.coat, { 
      roughness: 0.4, 
      metalness: 0.9,
      envMapIntensity: 1.2
    });
    applyProps(materials.paint, {
      roughness: 0.2,
      metalness: 0.95,
      color: "#2d1b4e",
      envMapIntensity: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });
  }, [nodes, materials]);

  // Smooth rotation interpolation with frame limiting
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      rotation,
      0.12
    );
    
    // Update parent only every 3 frames to reduce re-renders
    updateFrameRef.current++;
    if (updateFrameRef.current % 3 === 0) {
      props.onRotationChange?.(groupRef.current.rotation.y);
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={(e) => {
        e.stopPropagation();
        setIsDragging(true);
        dragStart.current = { x: e.clientX, rotation };
        document.body.style.cursor = 'grabbing';
      }}
      onPointerMove={(e) => {
        if (!isDragging) return;
        e.stopPropagation();
        const deltaX = e.clientX - dragStart.current.x;
        setRotation(dragStart.current.rotation + deltaX * 0.01);
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
        setIsDragging(false);
        document.body.style.cursor = 'grab';
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'grab';
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setIsDragging(false);
        document.body.style.cursor = 'auto';
      }}
      scale={props.scale}
      position={props.position}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function NeuralNetwork3D() {
  const [degraded, degrade] = useState(false);
  const [carRotation, setCarRotation] = useState(Math.PI / 5);

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [4.2, 0.3, 12], fov: 32 }}
        frameloop="always"
        gl={{ 
          alpha: true, 
          antialias: true, 
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          precision: "highp"
        }}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0);
          state.gl.shadowMap.type = THREE.PCFShadowMap;
          state.gl.shadowMap.autoUpdate = true;
        }}
        dpr={[1, degraded ? 1.25 : 2]}
      >
        <DynamicLights rotation={carRotation} />
        
        <Porsche 
          scale={1.35} 
          position={[-0.3, -0.25, 0]} 
          onRotationChange={setCarRotation}
        />
        <AccumulativeShadows 
          position={[0, -1.16, 0]} 
          frames={degraded ? 40 : 80} 
          alphaTest={0.9} 
          scale={10} 
          opacity={0.7}
          toneMapped={true}
        >
          <RandomizedLight amount={degraded ? 4 : 10} radius={6.5} ambient={0.45} position={[2.5, 5.5, -1.5]} />
        </AccumulativeShadows>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/911-transformed.glb");
