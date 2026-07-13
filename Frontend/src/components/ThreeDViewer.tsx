import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, ContactShadows, Center } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

// Props for the model component
interface CarModelProps {
  modelType: 'bmw' | 'mercedes';
  scrollYProgress: any; // MotionValue<number>
}

// BMW X7 M60i / Mercedes C220 Model component
function CarModel({ modelType, scrollYProgress }: CarModelProps) {
  // Load model from static public folder
  const modelPath = modelType === 'bmw' ? '/models/bmw.glb' : '/models/mercedes.glb';
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);
  
  // Clone scene to isolate each mounted instance and prevent R3F unmount disposal bugs
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((object: any) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        // Boost metallic look for luxurious render styling
        if (object.material) {
          // Clone material to avoid mutating shared cache resources
          object.material = object.material.clone();
          object.material.roughness = Math.min(object.material.roughness, 0.35);
          object.material.metalness = Math.max(object.material.metalness, 0.85);
        }
      }
    });
    return clone;
  }, [scene]);

  // Rotate and float car mesh on frame based on page scroll progress
  useFrame((state) => {
    if (groupRef.current) {
      const scroll = scrollYProgress.get();
      
      // Dynamically rotate the car as the user scrolls
      const scrollRotation = scroll * Math.PI * 1.5;
      const time = state.clock.getElapsedTime();
      const autoRotation = time * 0.03;

      groupRef.current.rotation.y = scrollRotation + autoRotation;
      
      // Floating animation relative to calibrated baseline
      const baselineY = modelType === 'bmw' ? -0.05 : -0.15;
      groupRef.current.position.y = baselineY + Math.sin(time * 1.2) * 0.025;
    }
  });

  // Calibrated scale adjustments for model formats
  const baseScale = 0.85;

  return (
    <group ref={groupRef}>
      <primitive 
        object={clonedScene} 
        scale={baseScale} 
        position={[0, 0, 0]} 
        dispose={null}
      />
    </group>
  );
}

// Custom Loader overlay
function Loader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
      <div className="w-12 h-12 rounded-full border-2 border-brand-red/20 border-t-brand-red animate-spin mb-4" />
      <span className="text-xs uppercase tracking-widest text-white/60 font-semibold font-sans">
        Loading Interactive 3D Studio...
      </span>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("3D Studio WebGL Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function StaticFallback() {
  return (
    <div 
      className="w-full h-full relative rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center p-6 text-center border border-white/10"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=3269')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <span className="relative z-10 text-xs font-semibold uppercase tracking-wider text-white/60">
        Discover Premium Used Cars
      </span>
    </div>
  );
}

interface ThreeDViewerProps {
  selectedModel: 'bmw' | 'mercedes';
}

export function ThreeDViewer({ selectedModel }: ThreeDViewerProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full h-full relative group">
      <ErrorBoundary fallback={<StaticFallback />}>
        <Suspense fallback={<Loader />}>
          <Canvas 
            shadows 
            camera={{ position: [4.5, 2.2, 4.5], fov: 38 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Studio Lights */}
            <ambientLight intensity={0.4} />
            
            <spotLight 
              position={[10, 15, 10]} 
              angle={0.3} 
              penumbra={1} 
              intensity={2.0} 
              castShadow 
              shadow-bias={-0.0001}
            />
            
            <directionalLight 
              position={[-5, 5, -5]} 
              intensity={0.8} 
            />
            
            <directionalLight 
              position={[5, 3, -5]} 
              intensity={0.6} 
            />

            <Center>
              <CarModel key={selectedModel} modelType={selectedModel} scrollYProgress={scrollYProgress} />
            </Center>

            {/* Realistic Floor Shadow */}
            <ContactShadows 
              position={[0, -0.45, 0]} 
              opacity={0.8} 
              scale={12} 
              blur={2.5} 
              far={1.5} 
            />

            {/* Interactive Controls */}
            <OrbitControls 
              enableZoom={false} // Disable scroll zoom to protect page scroll hygiene
              enablePan={false}
              minPolarAngle={Math.PI / 4} // Limit camera angle so it doesn't go below floor
              maxPolarAngle={Math.PI / 2.1}
              makeDefault
            />
          </Canvas>
        </Suspense>
      </ErrorBoundary>

      {/* Click instructions overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/50 pointer-events-none backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Drag to Rotate 360°
      </div>
    </div>
  );
}

// Pre-load models
useGLTF.preload('/models/bmw.glb');
useGLTF.preload('/models/mercedes.glb');
