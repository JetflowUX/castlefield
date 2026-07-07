import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0e10, 0.025);
    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 8);
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);
    const redLight = new THREE.PointLight(0xe01e1e, 150, 20);
    redLight.position.set(3, 2, 2);
    scene.add(redLight);
    const whiteLight = new THREE.DirectionalLight(0xffffff, 2);
    whiteLight.position.set(-5, 5, 5);
    scene.add(whiteLight);
    const blueFillLight = new THREE.PointLight(0x2244ff, 50, 20);
    blueFillLight.position.set(-3, 1, -2);
    scene.add(blueFillLight);
    // Floor Grid (Reflective illusion)
    const gridHelper = new THREE.GridHelper(100, 100, 0xe01e1e, 0x1a1a1a);
    gridHelper.position.y = -1.5;
    (gridHelper.material as THREE.Material).opacity = 0.15;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);
    // Central Object: Stylized Automotive Emblem/Wheel
    const centerGroup = new THREE.Group();
    scene.add(centerGroup);
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 1,
      roughness: 0.15,
      envMapIntensity: 2
    });
    const redMaterial = new THREE.MeshStandardMaterial({
      color: 0xe01e1e,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xe01e1e,
      emissiveIntensity: 0.2
    });
    // Outer Rim
    const rimGeo = new THREE.TorusGeometry(2, 0.2, 32, 100);
    const rim = new THREE.Mesh(rimGeo, metalMaterial);
    centerGroup.add(rim);
    // Inner Ring
    const innerRingGeo = new THREE.TorusGeometry(1.5, 0.05, 16, 100);
    const innerRing = new THREE.Mesh(innerRingGeo, redMaterial);
    centerGroup.add(innerRing);
    // Spokes
    for (let i = 0; i < 5; i++) {
      const spokeGeo = new THREE.CylinderGeometry(0.05, 0.1, 3, 16);
      const spoke = new THREE.Mesh(spokeGeo, metalMaterial);
      spoke.rotation.z = i * Math.PI * 2 / 5;
      centerGroup.add(spoke);
    }
    // Center Cap
    const capGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const cap = new THREE.Mesh(capGeo, metalMaterial);
    cap.rotation.x = Math.PI / 2;
    centerGroup.add(cap);
    // Speed Lines / Particles
    const particlesCount = 300;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 40; // x
      posArray[i + 1] = (Math.random() - 0.5) * 10 + 2; // y
      posArray[i + 2] = (Math.random() - 0.5) * 40; // z
    }
    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);
    // Mouse Interaction for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener('mousemove', onMouseMove);
    // Resize Handler
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
    // Animation Loop
    let frameId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      // Rotate central object
      centerGroup.rotation.y = time * 0.5;
      centerGroup.rotation.x = Math.sin(time * 0.5) * 0.2;
      // Move particles to simulate speed
      const positions = particles.geometry.attributes.position.
      array as Float32Array;
      for (let i = 2; i < particlesCount * 3; i += 3) {
        positions[i] += 0.3; // move towards camera
        if (positions[i] > 10) {
          positions[i] = -30; // reset far back
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      // Camera Parallax
      targetX = mouseX * 2;
      targetY = mouseY * 1;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY + 1.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 1, 0);
      // Pulse red light
      redLight.intensity = 150 + Math.sin(time * 2) * 50;
      renderer.render(scene, camera);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      rimGeo.dispose();
      innerRingGeo.dispose();
      metalMaterial.dispose();
      redMaterial.dispose();
    };
  }, []);
  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full bg-[#0E0E10]"
      style={{
        pointerEvents: 'none'
      }} // Let clicks pass through to UI
    />);

}