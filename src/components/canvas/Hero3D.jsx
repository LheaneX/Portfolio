import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function ParallaxShapes({ mouseRef }) {
    const group = useRef(null);
    useFrame((state, delta) => {
        const g = group.current;
        if (!g) return;
        const mx = mouseRef?.current?.x ?? 0;
        const my = mouseRef?.current?.y ?? 0;
        const targetY = mx * 0.45 + Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
        const targetX = my * 0.35 + Math.cos(state.clock.elapsedTime * 0.28) * 0.06;
        g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 1 - Math.pow(0.001, delta));
        g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 1 - Math.pow(0.001, delta));
    });

    return (
        <group ref={group}>
            <Float speed={2.2} rotationIntensity={0.35} floatIntensity={0.45}>
                <mesh position={[-2.2, 0.6, 0]}>
                    <icosahedronGeometry args={[0.85, 0]} />
                    <meshStandardMaterial
                        color="#2563eb"
                        metalness={0.72}
                        roughness={0.22}
                        emissive="#1e40af"
                        emissiveIntensity={0.12}
                    />
                </mesh>
            </Float>
            <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.55}>
                <mesh position={[2.4, -0.4, 0.4]} rotation={[0.4, 0.6, 0.2]}>
                    <torusGeometry args={[0.72, 0.28, 24, 48]} />
                    <meshStandardMaterial color="#4f46e5" metalness={0.68} roughness={0.25} />
                </mesh>
            </Float>
            <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.4}>
                <mesh position={[0.2, 1.5, -0.8]}>
                    <octahedronGeometry args={[0.65, 0]} />
                    <meshStandardMaterial
                        color="#7c3aed"
                        metalness={0.65}
                        roughness={0.28}
                        emissive="#5b21b6"
                        emissiveIntensity={0.1}
                    />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.35}>
                <mesh position={[-1.6, -1.1, 0.2]} rotation={[0.25, -0.5, 0]}>
                    <boxGeometry args={[0.9, 0.9, 0.9]} />
                    <meshStandardMaterial color="#3b82f6" metalness={0.55} roughness={0.35} />
                </mesh>
            </Float>
        </group>
    );
}

const Hero3D = ({ mouseRef }) => {
    return (
        <Canvas
            className="h-full w-full touch-none"
            camera={{ position: [0, 0, 7.5], fov: 42 }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.75]}
        >
            <ambientLight intensity={0.45} />
            <directionalLight position={[6, 8, 5]} intensity={1.15} />
            <directionalLight position={[-5, 4, -4]} intensity={0.4} color="#c4b5fd" />
            <spotLight position={[0, 6, 2]} angle={0.35} penumbra={0.6} intensity={0.55} color="#93c5fd" />
            <ParallaxShapes mouseRef={mouseRef} />
        </Canvas>
    );
};

export default Hero3D;
