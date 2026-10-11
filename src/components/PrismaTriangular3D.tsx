import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';

const PrismaTriangular3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  const baseSize = 2;
  const height = 3;
  const triHeight = baseSize * Math.sqrt(3) / 2;

  const triVertices: [number, number][] = [
    [0, triHeight * 2/3],
    [-baseSize/2, -triHeight * 1/3],
    [baseSize/2, -triHeight * 1/3],
  ];

  const vertices: [number, number, number][] = [
    [triVertices[0][0], triVertices[0][1], -height/2],
    [triVertices[1][0], triVertices[1][1], -height/2],
    [triVertices[2][0], triVertices[2][1], -height/2],
    [triVertices[0][0], triVertices[0][1], height/2],
    [triVertices[1][0], triVertices[1][1], height/2],
    [triVertices[2][0], triVertices[2][1], height/2],
  ];

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array([
      // Face frontal
      ...vertices[0], ...vertices[1], ...vertices[2],
      // Face traseira
      ...vertices[3], ...vertices[5], ...vertices[4],
      // Face lateral esquerda
      ...vertices[0], ...vertices[3], ...vertices[4],
      ...vertices[0], ...vertices[4], ...vertices[1],
      // Face lateral direita
      ...vertices[0], ...vertices[2], ...vertices[5],
      ...vertices[0], ...vertices[5], ...vertices[3],
      // Face inferior
      ...vertices[1], ...vertices[4], ...vertices[5],
      ...vertices[1], ...vertices[5], ...vertices[2],
    ]);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  const edges: [number, number, number][][] = [
    [vertices[0], vertices[1]],
    [vertices[1], vertices[2]],
    [vertices[2], vertices[0]],
    [vertices[3], vertices[4]],
    [vertices[4], vertices[5]],
    [vertices[5], vertices[3]],
    [vertices[0], vertices[3]],
    [vertices[1], vertices[4]],
    [vertices[2], vertices[5]],
  ];

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#22c55e"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {edges.map((edge, i) => (
        <Line
          key={i}
          points={edge}
          color="#166534"
          lineWidth={3}
        />
      ))}

      {vertices.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {vertices.map((pos, i) => (
        <Html key={`label-${i}`} position={[pos[0], pos[1] + 0.25, pos[2]]} center>
          <div className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap">
            V{i + 1}
          </div>
        </Html>
      ))}

      <Html position={[0, -triHeight * 1/3 - 0.5, -height/2]} center>
        <div className="bg-green-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          base = {baseSize.toFixed(1)}
        </div>
      </Html>
      <Html position={[0, triHeight * 2/3 + 0.5, 0]} center>
        <div className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap">
          H (altura) = {height}
        </div>
      </Html>
    </group>
  );
};

export default PrismaTriangular3D;
