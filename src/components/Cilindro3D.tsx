import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';

const Cilindro3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  const radius = 1.5;
  const height = 3;
  const segments = 32;

  // Gerar pontos do círculo para as arestas
  const topCirclePoints = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push([
        Math.cos(angle) * radius,
        height / 2,
        Math.sin(angle) * radius
      ]);
    }
    return points;
  }, []);

  const bottomCirclePoints = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push([
        Math.cos(angle) * radius,
        -height / 2,
        Math.sin(angle) * radius
      ]);
    }
    return points;
  }, []);

  // Gerar linhas verticais (geratrizes)
  const verticalLines = useMemo(() => {
    const lines: [number, number, number][][] = [];
    const numLines = 8;
    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      lines.push([
        [x, -height/2, z],
        [x, height/2, z]
      ]);
    }
    return lines;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Corpo do cilindro */}
      <mesh>
        <cylinderGeometry args={[radius, radius, height, segments, 1, true]} />
        <meshPhysicalMaterial
          color="#a855f7"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Base superior */}
      <mesh position={[0, height/2, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <circleGeometry args={[radius, segments]} />
        <meshPhysicalMaterial
          color="#c084fc"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
          roughness={0.2}
        />
      </mesh>

      {/* Base inferior */}
      <mesh position={[0, -height/2, 0]} rotation={[Math.PI/2, 0, 0]}>
        <circleGeometry args={[radius, segments]} />
        <meshPhysicalMaterial
          color="#c084fc"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
          roughness={0.2}
        />
      </mesh>

      {/* Arestas circulares */}
      <Line points={topCirclePoints} color="#6b21a8" lineWidth={3} />
      <Line points={bottomCirclePoints} color="#6b21a8" lineWidth={3} />

      {/* Linhas verticais (geratrizes) */}
      {verticalLines.map((line, i) => (
        <Line key={i} points={line} color="#7c3aed" lineWidth={1} />
      ))}

      {/* Centro das bases */}
      <mesh position={[0, height/2, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -height/2, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
      </mesh>

      {/* Linha do raio */}
      <Line
        points={[[0, height/2, 0], [radius, height/2, 0]]}
        color="#ef4444"
        lineWidth={2}
      />

      {/* Labels */}
      <Html position={[radius/2, height/2 + 0.3, 0]} center>
        <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          r = {radius} (raio)
        </div>
      </Html>
      <Html position={[radius + 0.5, 0, 0]} center>
        <div className="bg-green-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          h = {height} (altura)
        </div>
      </Html>
      <Html position={[0, height/2 + 0.5, 0]} center>
        <div className="bg-yellow-500 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          Centro
        </div>
      </Html>
      <Html position={[0, -height/2 - 0.5, 0]} center>
        <div className="bg-yellow-500 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          Centro
        </div>
      </Html>
    </group>
  );
};

export default Cilindro3D;
