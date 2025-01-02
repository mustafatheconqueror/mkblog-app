// src/pages/About.jsx
import React from 'react';
import styles from './About.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AIModel from '../../components/AIModel.jsx';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.description}>
                Yapay zeka ve teknolojiyi bir araya getirerek geleceği şekillendiriyoruz. İşte bu yolculukta kullandığımız teknolojilerden biri:
            </p>

            {/* 3D Görselleştirme */}
            <div className={styles.canvasContainer}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <AIModel />
                    <OrbitControls enableZoom={false} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                </Canvas>
            </div>

            <p className={styles.moreInfo}>
                Daha fazla bilgi için [proje linki veya diğer bilgiler].
            </p>
        </div>
    );
};

export default About;
