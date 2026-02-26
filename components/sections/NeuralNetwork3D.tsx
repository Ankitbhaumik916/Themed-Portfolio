"use client";

import * as THREE from "three";
import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Environment,
  Float,
  Lightformer,
  PerformanceMonitor,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";

type CameraRigProps = {
  v?: THREE.Vector3;
};

type LightformersProps = {
  positions?: number[];
};

function Porsche(props: JSX.IntrinsicElements["group"]) {
  const { scene, nodes, materials } = useGLTF("/911-transformed.glb") as any;
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node: any) => {
      if (node?.isMesh) {
        node.receiveShadow = true;
        node.castShadow = true;
      }
    });

    if (materials?.rubber) {
      applyProps(materials.rubber, {
        color: "#1a1a1f",
        roughness: 0.7,
        roughnessMap: null,
        normalScale: [3, 3],
      });
    }
    if (materials?.window) {
      applyProps(materials.window, { color: "#050508", roughness: 0.05, clearcoat: 0.3, metalness: 0.1 });
    }
    if (materials?.coat) {
      applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.4, metalness: 1 });
    }
    if (materials?.paint) {
      applyProps(materials.paint, {
        envMapIntensity: 3.5,
        roughness: 0.25,
        metalness: 1,
        color: "#0a0a12",
        clearcoat: 0.3,
        clearcoatRoughness: 0.1,
      });
    }
  }, [nodes, materials]);

  // Interactive rotation and hover effect
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth rotation animation when hovered
    const targetRotationY = hovered ? Math.PI / 5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15 : Math.PI / 5;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.1
    );

    // Subtle floating effect when hovered
    const targetY = hovered ? -0.15 : -0.25;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      {...props}
    >
      <primitive object={scene} />
    </group>
  );
}

function CameraRig({ v = new THREE.Vector3() }: CameraRigProps) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }: LightformersProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.position.z += delta * 10;
    if (group.current.position.z > 20) {
      group.current.position.z = -60;
    }
  });

  return (
    <>
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#b6a4be" side={THREE.BackSide} />
      </mesh>
    </>
  );
}

export default function NeuralNetwork3D() {
  const [degraded, degrade] = useState(false);

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [4.2, 0.3, 12], fov: 32 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0);
        }}
      >
        {/* Main spotlight from above */}
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2.2} shadow-bias={-0.0001} color="#ffffff" />
        
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.4} color="#e8dfff" />
        
        {/* Key light - front right */}
        <directionalLight position={[8, 5, 8]} intensity={1.2} color="#ffffff" castShadow />
        
        {/* Fill light - front left (softer) */}
        <directionalLight position={[-6, 3, 6]} intensity={0.6} color="#b8a4e8" />
        
        {/* Rim light - back left (purple accent) */}
        <pointLight position={[-8, 2, -4]} intensity={1.5} color="#8b5cf6" distance={20} />
        
        {/* Rim light - back right (blue accent) */}
        <pointLight position={[8, 2, -4]} intensity={1.2} color="#3b82f6" distance={20} />
        
        {/* Ground bounce light */}
        <pointLight position={[0, -2, 2]} intensity={0.5} color="#c7b2de" distance={15} />
        
        <Suspense fallback={null}>
          <Porsche scale={1.65} position={[-0.3, -0.25, 0]} />
          <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.85} scale={12} opacity={0.8}>
            <RandomizedLight amount={12} radius={8} ambient={0.6} position={[2, 8, -1]} bias={0.001} />
          </AccumulativeShadows>
          <Environment frames={degraded ? 1 : Infinity} resolution={256} background={false} blur={1}>
            <Lightformers />
          </Environment>
        </Suspense>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <CameraRig />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/911-transformed.glb");
