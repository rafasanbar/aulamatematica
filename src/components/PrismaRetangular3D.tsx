import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Edges } from '@react-three/drei';
import * as THREE from 'three';

const PrismaRetangular3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  const c = 3.5; // comprimento
  const l = 2;   // largura
  const h = 2.5; // altura

  const vertices: [number, number, number][] = [
    [-c/2, -h/2, -l/2],
    [c/2, -h/2, -l/2],
    [c/2, h/2, -l/2],
    [-c/2, h/2, -l/2],
    [-c/2, -h/2, l/2],
    [c/2, -h/2, l/2],
    [c/2, h/2, l/2],
    [-c/2, h/2, l/2],
  ];

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Caixa principal */}
      <mesh>
        <boxGeometry args={[c, h, l]} />
        <meshPhysicalMaterial
          color="#f97316"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
          roughness={0.2}
          metalness={0.1}
        />
        <Edges color="#9a3412" scale={1} />
      </mesh>

      {/* Faces individuais com cores diferentes */}
      {/* Base (frente) */}
      <mesh position={[0, 0, -l/2]}>
        <planeGeometry args={[c, h]} />
        <meshPhysicalMaterial color="#fb923c" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      {/* Base (trás) */}
      <mesh position={[0, 0, l/2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[c, h]} />
        <meshPhysicalMaterial color="#fdba74" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      {/* Topo */}
      <mesh position={[0, h/2, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[c, l]} />
        <meshPhysicalMaterial color="#fed7aa" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      {/* Base inferior */}
      <mesh position={[0, -h/2, 0]} rotation={[Math.PI/2, 0, 0]}>
        <planeGeometry args={[c, l]} />
        <meshPhysicalMaterial color="#fdba74" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      {/* Vértices */}
      {vertices.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Labels dos vértices */}
      {vertices.map((pos, i) => (
        <Html key={`label-${i}`} position={[pos[0], pos[1] + 0.25, pos[2]]} center>
          <div className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap">
            V{i + 1}
          </div>
        </Html>
      ))}

      {/* Labels de dimensões */}
      <Html position={[0, -h/2 - 0.4, -l/2]} center>
        <div className="bg-orange-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          c = {c} (comprimento)
        </div>
      </Html>
      <Html position={[c/2 + 0.5, 0, -l/2]} center>
        <div className="bg-green-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          h = {h} (altura)
        </div>
      </Html>
      <Html position={[-c/2, -h/2, 0]} center>
        <div className="bg-purple-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          l = {l} (largura)
        </div>
      </Html>
    </group>
  );
};

export default PrismaRetangular3D;
