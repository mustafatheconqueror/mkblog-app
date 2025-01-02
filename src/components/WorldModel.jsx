import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styles from './WorldModel.module.css';

const WorldModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        camera.add(pointLight);
        scene.add(camera);

        // Dünya Geometrisi ve Malzemesi
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0077ff,
            roughness: 0.5,
            metalness: 0.1,
            wireframe: false,
            map: new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/earth-day.jpg'),
        });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        // Noktalar ve Bağlantılar
        const points = [];
        const connections = [];

        const pointCount = 20;
        const connectionProbability = 0.2;

        // Noktaların oluşturulması
        for (let i = 0; i < pointCount; i++) {
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = 2 * Math.PI * Math.random();
            const x = Math.sin(phi) * Math.cos(theta);
            const y = Math.sin(phi) * Math.sin(theta);
            const z = Math.cos(phi);
            points.push(new THREE.Vector3(x, y, z));

            // Nokta Geometrisi
            const pointGeometry = new THREE.SphereGeometry(0.02, 8, 8);
            const pointMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
            pointMesh.position.set(x, y, z);
            scene.add(pointMesh);
        }

        // Bağlantıların oluşturulması
        points.forEach((point, i) => {
            points.forEach((otherPoint, j) => {
                if (i < j && Math.random() < connectionProbability) {
                    const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
                    const geometry = new THREE.BufferGeometry().setFromPoints([point, otherPoint]);
                    const line = new THREE.Line(geometry, material);
                    connections.push(line);
                    scene.add(line);
                }
            });
        });

        // Animasyon
        const animate = () => {
            requestAnimationFrame(animate);

            earth.rotation.y += 0.001;

            renderer.render(scene, camera);
        };
        animate();

        // Responsive Ayarlar
        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Temizleme
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div className={styles.canvas} ref={mountRef}></div>;
};

export default WorldModel;
