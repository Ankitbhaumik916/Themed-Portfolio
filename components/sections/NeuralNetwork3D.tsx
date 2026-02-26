"use client";

import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
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

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node: any) => {
      if (node?.isMesh) {
        node.receiveShadow = true;
        node.castShadow = true;
      }
    });

    applyProps(materials.rubber, {
      color: "#1f1f24",
      roughness: 0.65,
      roughnessMap: null,
      normalScale: [3, 3],
    });
    applyProps(materials.window, { color: "#101018", roughness: 0.15, clearcoat: 0.2 });
    applyProps(materials.coat, { envMapIntensity: 3.2, roughness: 0.55, metalness: 1 });
    applyProps(materials.paint, {
      envMapIntensity: 2.6,
      roughness: 0.35,
      metalness: 0.9,
      color: "#0b0b10",
    });
  }, [nodes, materials]);

  return <primitive object={scene} {...props} />;
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
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={1.7} shadow-bias={-0.0001} />
        <ambientLight intensity={0.65} color="#d6c4e3" />
        <directionalLight position={[6, 6, 6]} intensity={0.7} color="#c7b2de" />
        <Porsche scale={1.35} position={[-0.3, -0.25, 0]} rotation={[0, Math.PI / 5, 0]} />
        <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
          <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Environment frames={degraded ? 1 : Infinity} resolution={256} background={false} blur={1}>
          <Lightformers />
        </Environment>
        <CameraRig />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/911-transformed.glb");
