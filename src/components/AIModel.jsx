// src/components/AIModel.jsx
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const AIModel = () => {
    const meshRef = useRef();
    const { theme } = useThree();

    // Sürekli animasyon için useFrame kullanıyoruz
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.rotation.x += 0.003;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color={theme === 'dark' ? '#bb86fc' : '#03dac6'}
                wireframe
            />
        </mesh>
    );
};

export default AIModel;
