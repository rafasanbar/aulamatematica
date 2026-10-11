import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Edges } from '@react-three/drei';
import * as THREE from 'three';

const Paralelepipedo3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Dimensões: a=3 (largura), b=2 (profundidade), c=2.5 (altura)
  const a = 3, b = 2, c = 2.5;

  // Posições dos 8 vértices
  const vertices: [number, number, number][] = [
    [-a/2, -c/2, -b/2],  // 0 - frente-esquerda-baixo
    [a/2, -c/2, -b/2],   // 1 - frente-direita-baixo
    [a/2, c/2, -b/2],    // 2 - frente-direita-cima
    [-a/2, c/2, -b/2],   // 3 - frente-esquerda-cima
    [-a/2, -c/2, b/2],   // 4 - trás-esquerda-baixo
    [a/2, -c/2, b/2],    // 5 - trás-direita-baixo
    [a/2, c/2, b/2],     // 6 - trás-direita-cima
    [-a/2, c/2, b/2],    // 7 - trás-esquerda-cima
  ];

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Caixa principal semi-transparente */}
      <mesh>
        <boxGeometry args={[a, c, b]} />
        <meshPhysicalMaterial
          color="#60a5fa"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          roughness={0.2}
          metalness={0.1}
        />
        <Edges color="#1e40af" scale={1} />
      </mesh>

      {/* Faces coloridas para diferenciar */}
      {/* Face frontal */}
      <mesh position={[0, 0, -b/2]}>
        <planeGeometry args={[a, c]} />
        <meshPhysicalMaterial color="#3b82f6" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      {/* Face traseira */}
      <mesh position={[0, 0, b/2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[a, c]} />
        <meshPhysicalMaterial color="#6366f1" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      {/* Face superior */}
      <mesh position={[0, c/2, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[a, b]} />
        <meshPhysicalMaterial color="#8b5cf6" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      {/* Face inferior */}
      <mesh position={[0, -c/2, 0]} rotation={[Math.PI/2, 0, 0]}>
        <planeGeometry args={[a, b]} />
        <meshPhysicalMaterial color="#a78bfa" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      {/* Vértices (esferas vermelhas) */}
      {vertices.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Labels dos vértices */}
      {vertices.map((pos, i) => (
        <Html key={`label-${i}`} position={[pos[0], pos[1] + 0.2, pos[2]]} center>
          <div className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap">
            V{i + 1}
          </div>
        </Html>
      ))}

      {/* Label de dimensões */}
      <Html position={[0, -c/2 - 0.4, -b/2]} center>
        <div className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          a = {a} (largura)
        </div>
      </Html>
      <Html position={[a/2 + 0.4, 0, -b/2]} center>
        <div className="bg-green-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          c = {c} (altura)
        </div>
      </Html>
      <Html position={[-a/2, -c/2, 0]} center>
        <div className="bg-purple-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          b = {b} (prof.)
        </div>
      </Html>
    </group>
  );
};

export default Paralelepipedo3D;
