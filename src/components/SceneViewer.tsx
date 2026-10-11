import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { ReactNode, Suspense, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AutoRotateControllerProps {
  enabled: boolean;
}

const AutoRotateController = ({ enabled }: AutoRotateControllerProps) => {
  const controlsRef = useRef<any>(null);
  
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = enabled;
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      autoRotate={enabled}
      autoRotateSpeed={1.5}
      minDistance={3}
      maxDistance={15}
    />
  );
};

interface SceneViewerProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
}

const SceneViewer = ({ children, cameraPosition = [5, 4, 5] }: SceneViewerProps) => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-purple-200 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, 3, -3]} intensity={0.3} />
        <Suspense fallback={null}>
          {children}
          <Environment preset="city" />
        </Suspense>
        <AutoRotateController enabled={autoRotate} />
        <gridHelper args={[10, 10, '#4a5568', '#2d3748']} position={[0, -2, 0]} />
      </Canvas>
      
      {/* Controls overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg">
          🖱️ Arraste para rotacionar • Scroll para zoom
        </div>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
            autoRotate
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
          }`}
        >
          {autoRotate ? '⏸️ Pausar rotação' : '▶️ Girar'}
        </button>
      </div>
    </div>
  );
};

export default SceneViewer;
