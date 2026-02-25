"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralNode({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <Sphere ref={ref} position={position} args={[0.1, 16, 16]}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
}

function Connection({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: "#3b82f6", opacity: 0.3, transparent: true }))} />
  );
}

function NeuralNetworkMesh() {
  const groupRef = useRef<THREE.Group>(null);

  // Create network layers
  const layers = [
    { nodes: 4, z: -2 },
    { nodes: 6, z: 0 },
    { nodes: 5, z: 2 },
    { nodes: 3, z: 4 },
  ];

  const nodePositions: [number, number, number][] = [];
  layers.forEach((layer) => {
    for (let i = 0; i < layer.nodes; i++) {
      const x = (i - (layer.nodes - 1) / 2) * 0.8;
      const y = 0;
      const z = layer.z;
      nodePositions.push([x, y, z]);
    }
  });

  // Create connections
  const connections: Array<{ start: [number, number, number]; end: [number, number, number] }> = [];
  let startIndex = 0;
  for (let i = 0; i < layers.length - 1; i++) {
    const currentLayerNodes = layers[i].nodes;
    const nextLayerNodes = layers[i + 1].nodes;
    
    for (let j = 0; j < currentLayerNodes; j++) {
      for (let k = 0; k < nextLayerNodes; k++) {
        connections.push({
          start: nodePositions[startIndex + j],
          end: nodePositions[startIndex + currentLayerNodes + k],
        });
      }
    }
    startIndex += currentLayerNodes;
  }

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connections */}
      {connections.map((conn, i) => (
        <Connection key={`conn-${i}`} start={conn.start} end={conn.end} />
      ))}
      
      {/* Nodes */}
      {nodePositions.map((pos, i) => (
        <NeuralNode key={`node-${i}`} position={pos} />
      ))}

      {/* Central sphere */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 1]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </group>
  );
}

export default function NeuralNetwork3D() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center border border-purple-500/20">
        <div className="text-center">
          <div className="text-4xl mb-4">🧠</div>
          <p className="text-gray-300">WebGL not supported</p>
          <p className="text-gray-500 text-sm mt-2">3D visualization unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <NeuralNetworkMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
