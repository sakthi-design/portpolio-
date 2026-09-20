import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return Boolean(gl);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!containerRef.current || !webglSupported) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.appendChild(renderer.domElement);

    // Group for combined rotation
    const intelligenceGroup = new THREE.Group();
    scene.add(intelligenceGroup);

    // 1. Outer Wireframe Sphere / Icosahedron (Intelligence Mesh)
    const sphereGeo = new THREE.IcosahedronGeometry(2.3, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4F4B46,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, wireframeMaterial);
    intelligenceGroup.add(sphereMesh);

    // 2. Inner Quantum Core
    const coreGeo = new THREE.OctahedronGeometry(1.2, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xE2F952,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    intelligenceGroup.add(coreMesh);

    // 3. Orbital Particles / Neural Synapse Nodes
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(0xE2F952);
    const mutedColor = new THREE.Color(0x8E8B85);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? baseColor : mutedColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMaterial);
    intelligenceGroup.add(particles);

    // Mouse Tracking with smooth dampening
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotation.y = normX * 0.45;
      targetRotation.x = normY * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll parallax reaction
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Ambient idle rotation
      sphereMesh.rotation.y = elapsedTime * 0.08;
      sphereMesh.rotation.x = elapsedTime * 0.04;

      coreMesh.rotation.y = -elapsedTime * 0.16;
      coreMesh.rotation.z = elapsedTime * 0.1;

      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = -elapsedTime * 0.02;

      // Mouse interactive tilt dampening
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      intelligenceGroup.rotation.x = currentRotation.x + scrollY * 0.0006;
      intelligenceGroup.rotation.y = currentRotation.y + scrollY * 0.001;

      // Subtle scroll retreat
      intelligenceGroup.position.y = -scrollY * 0.0012;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Three resources
      sphereGeo.dispose();
      wireframeMaterial.dispose();
      coreGeo.dispose();
      coreMaterial.dispose();
      particleGeo.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [webglSupported]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-85"
      aria-hidden="true"
    >
      {!webglSupported && (
        <div className="w-80 h-80 rounded-full border border-white/10 flex items-center justify-center animate-pulse-subtle">
          <div className="w-52 h-52 rounded-full border border-[#E2F952]/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-white/20" />
          </div>
        </div>
      )}
    </div>
  );
};
