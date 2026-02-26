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

function DynamicLights({ rotation }: { rotation: number }) {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.PointLight>(null);
  const fillLightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    // Update key light position based on rotation
    if (keyLightRef.current) {
      const angle = rotation + Math.PI / 4;
      keyLightRef.current.position.x = Math.cos(angle) * 8;
      keyLightRef.current.position.z = Math.sin(angle) * 8;
    }

    // Update rim light
    if (rimLightRef.current) {
      const angle = rotation + Math.PI;
      rimLightRef.current.position.x = Math.cos(angle) * 6;
      rimLightRef.current.position.z = Math.sin(angle) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={1.0} color="#e8dfff" />
      <directionalLight ref={keyLightRef} position={[8, 7, 8]} intensity={2.2} color="#ffffff" shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <directionalLight ref={fillLightRef} position={[-8, 4, -8]} intensity={0.8} color="#d8c8ff" />
      <pointLight ref={rimLightRef} position={[-6, 4, -3]} intensity={3} color="#d48fff" distance={30} />
      <pointLight position={[0, 12, 0]} intensity={2} color="#f0c8ff" distance={30} />
      <pointLight position={[6, 3, 6]} intensity={1.4} color="#b565d8" distance={25} />
      <pointLight position={[-4, 5, 8]} intensity={1.2} color="#e0b0ff" distance={28} />
    </>
  );
}

function Porsche(props: JSX.IntrinsicElements["group"]) {
  const { scene, nodes, materials } = useGLTF("/911-transformed.glb", true) as any;
  const groupRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    try {
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
        transmission: 0.95,
        opacity: 0.2
      });
      applyProps(materials.coat, { 
        roughness: 0.35, 
        metalness: 0.95,
        envMapIntensity: 1.4
      });
      applyProps(materials.paint, {
        roughness: 0.08,
        metalness: 0.95,
        color: "#000000",
        envMapIntensity: 2.4,
        clearcoat: 1.4,
        clearcoatRoughness: 0.03
      });
    } catch (err) {
      console.error("Error setting up 3D model:", err);
    }
  }, [nodes, materials]);

  // Continuous smooth auto-rotation - slower speed for premium feel
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <group
      ref={groupRef}
      scale={props.scale}
      position={props.position}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function NeuralNetwork3D() {
  const [degraded, degrade] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
        <div className="text-center p-8">
          <p className="text-muted-foreground">3D visualization unavailable</p>
        </div>
      </div>
    );
  }

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
          try {
            state.gl.setClearColor(0x000000, 0);
            state.gl.shadowMap.type = THREE.PCFShadowMap;
            state.gl.shadowMap.autoUpdate = true;
          } catch (err) {
            console.error("WebGL setup error:", err);
            setError(true);
          }
        }}
        dpr={[1, degraded ? 1.5 : 2]}
        onError={() => setError(true)}
      >
        <DynamicLights rotation={0} />
        
        <Porsche 
          scale={1.35} 
          position={[-0.3, -0.25, 0]} 
        />
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/911-transformed.glb");
