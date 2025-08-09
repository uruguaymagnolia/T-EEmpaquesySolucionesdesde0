/* eslint-disable react/no-unknown-property */
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function BoxModel(props: any) {
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={'#1a2435'} wireframe />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <BoxModel scale={1.2} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
