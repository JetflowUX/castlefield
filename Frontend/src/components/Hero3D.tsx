import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene & Environment
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0e10, 0.018);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 9.5);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mountRef.current.appendChild(renderer.domElement);

    // 4. Lighting System
    // Ambient Base
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    // Main Studio Light
    const studioLight = new THREE.DirectionalLight(0xffffff, 2.5);
    studioLight.position.set(5, 10, 5);
    studioLight.castShadow = true;
    studioLight.shadow.mapSize.width = 2048;
    studioLight.shadow.mapSize.height = 2048;
    studioLight.shadow.bias = -0.0005;
    scene.add(studioLight);

    // Red Showcase Rim Light (Castlefield Brand Color)
    const redNeonLight = new THREE.PointLight(0xe01e1e, 120, 15);
    redNeonLight.position.set(-4, 3, -2);
    scene.add(redNeonLight);

    // Blue Fill/Cool contrast light
    const coolFillLight = new THREE.PointLight(0x0088ff, 60, 15);
    coolFillLight.position.set(4, 2, 4);
    scene.add(coolFillLight);

    // Underglow Neon for Car
    const underglowLight = new THREE.PointLight(0xe01e1e, 80, 5);
    underglowLight.position.set(0, -0.6, 0);
    scene.add(underglowLight);

    // 5. Materials
    const carbonPaintMat = new THREE.MeshStandardMaterial({
      color: 0x888e99, // Titanium Silver
      metalness: 1.0,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 1.0,
      roughness: 0.05
    });

    const rubberMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      metalness: 0.1,
      roughness: 0.8
    });

    const darkGlassMat = new THREE.MeshStandardMaterial({
      color: 0x111625,
      metalness: 0.9,
      roughness: 0.05,
      transparent: true,
      opacity: 0.75
    });

    const neonRedMat = new THREE.MeshStandardMaterial({
      color: 0xe01e1e,
      emissive: 0xe01e1e,
      emissiveIntensity: 3
    });

    const neonWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 4
    });

    // 6. Showcase Platform / Stage
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Reflective Metallic Disc
    const stageGeo = new THREE.CylinderGeometry(4.5, 4.6, 0.2, 64);
    const stageMesh = new THREE.Mesh(stageGeo, new THREE.MeshStandardMaterial({
      color: 0x1a1a1f,
      metalness: 0.85,
      roughness: 0.25
    }));
    stageMesh.position.y = -1.0;
    stageMesh.receiveShadow = true;
    stageGroup.add(stageMesh);

    // Neon Red Outer Ring on Stage
    const ringGeo = new THREE.TorusGeometry(4.45, 0.12, 16, 100); // Thicker ring for better visual glow
    ringGeo.rotateX(Math.PI / 2);
    const stageRing = new THREE.Mesh(ringGeo, neonRedMat);
    stageRing.position.y = -0.9;
    stageGroup.add(stageRing);

    // 7. Procedural 3D Supercar
    const carGroup = new THREE.Group();
    carGroup.position.y = -0.8;
    stageGroup.add(carGroup);

    // Car Body / Main Chassis
    const chassisGeo = new THREE.BoxGeometry(2.2, 0.5, 4.2);
    const chassis = new THREE.Mesh(chassisGeo, carbonPaintMat);
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    carGroup.add(chassis);

    // Front Hood (slanted box)
    const hoodGeo = new THREE.BoxGeometry(2.18, 0.25, 1.4);
    const hood = new THREE.Mesh(hoodGeo, carbonPaintMat);
    hood.position.set(0, -0.05, 1.4);
    hood.rotation.x = -0.08;
    hood.castShadow = true;
    carGroup.add(hood);

    // Cabin / Windshield (scaled sphere dome)
    const cabinGeo = new THREE.SphereGeometry(0.9, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const cabin = new THREE.Mesh(cabinGeo, darkGlassMat);
    cabin.scale.set(1.1, 0.75, 1.8);
    cabin.position.set(0, 0.25, -0.2);
    cabin.castShadow = true;
    carGroup.add(cabin);

    // Spoiler / Rear Wing
    const spoilerWingGeo = new THREE.BoxGeometry(2.3, 0.05, 0.4);
    const spoilerWing = new THREE.Mesh(spoilerWingGeo, new THREE.MeshStandardMaterial({ color: 0x111113, metalness: 0.9, roughness: 0.1 }));
    spoilerWing.position.set(0, 0.6, -1.9);
    spoilerWing.castShadow = true;
    carGroup.add(spoilerWing);

    // Spoiler struts
    const strutLGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 8);
    const strutL = new THREE.Mesh(strutLGeo, chromeMat);
    strutL.position.set(-0.8, 0.4, -1.9);
    strutL.rotation.x = 0.2;
    strutL.castShadow = true;
    const strutR = strutL.clone();
    strutR.position.x = 0.8;
    carGroup.add(strutL);
    carGroup.add(strutR);

    // Wheels (4 cylinders with chrome rims)
    const wheelGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.35, 32);
    wheelGeo.rotateZ(Math.PI / 2);

    const rimGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.37, 16);
    rimGeo.rotateZ(Math.PI / 2);

    const wheelPositions = [
      { x: -1.15, y: -0.3, z: 1.2 },  // Front Left
      { x: 1.15, y: -0.3, z: 1.2 },   // Front Right
      { x: -1.15, y: -0.3, z: -1.2 }, // Rear Left
      { x: 1.15, y: -0.3, z: -1.2 }   // Rear Right
    ];

    const wheelMeshes: THREE.Mesh[] = [];

    wheelPositions.forEach((pos) => {
      const wheelAssembly = new THREE.Group();
      wheelAssembly.position.set(pos.x, pos.y, pos.z);

      const tire = new THREE.Mesh(wheelGeo, rubberMat);
      tire.castShadow = true;
      wheelAssembly.add(tire);

      const rim = new THREE.Mesh(rimGeo, chromeMat);
      wheelAssembly.add(rim);

      // Cool brake caliper (red detail)
      const caliperGeo = new THREE.BoxGeometry(0.08, 0.2, 0.1);
      const caliper = new THREE.Mesh(caliperGeo, neonRedMat);
      caliper.position.set(pos.x > 0 ? -0.16 : 0.16, 0.15, 0.05);
      wheelAssembly.add(caliper);

      carGroup.add(wheelAssembly);
      wheelMeshes.push(tire);
    });

    // Front Headlight Bars (Glows)
    const lightBarGeo = new THREE.BoxGeometry(0.4, 0.04, 0.15);
    const headlightL = new THREE.Mesh(lightBarGeo, neonWhiteMat);
    headlightL.position.set(-0.85, 0.08, 2.05);
    headlightL.rotation.y = 0.2;
    const headlightR = headlightL.clone();
    headlightR.position.x = 0.85;
    headlightR.rotation.y = -0.2;
    carGroup.add(headlightL);
    carGroup.add(headlightR);

    // Active Headlight Projector Cones (SpotLights)
    const headlightConeL = new THREE.SpotLight(0xffffff, 15, 12, Math.PI / 6, 0.5, 1);
    headlightConeL.position.set(-0.85, 0.08, 2.1);
    const targetL = new THREE.Object3D();
    targetL.position.set(-0.85, -0.5, 8);
    carGroup.add(targetL);
    headlightConeL.target = targetL;
    headlightConeL.castShadow = true;
    carGroup.add(headlightConeL);

    const headlightConeR = new THREE.SpotLight(0xffffff, 15, 12, Math.PI / 6, 0.5, 1);
    headlightConeR.position.set(0.85, 0.08, 2.1);
    const targetR = new THREE.Object3D();
    targetR.position.set(0.85, -0.5, 8);
    carGroup.add(targetR);
    headlightConeR.target = targetR;
    headlightConeR.castShadow = true;
    carGroup.add(headlightConeR);

    // Rear Taillights (Glowing Red strips)
    const tailLightGeo = new THREE.BoxGeometry(0.8, 0.04, 0.05);
    const tailLightL = new THREE.Mesh(tailLightGeo, neonRedMat);
    tailLightL.position.set(-0.6, 0.15, -2.1);
    const tailLightR = tailLightL.clone();
    tailLightR.position.x = 0.6;
    carGroup.add(tailLightL);
    carGroup.add(tailLightR);

    // 8. Space Speed Particles
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;       // x
      particlePositions[i + 1] = (Math.random() - 0.2) * 12;   // y
      particlePositions[i + 2] = (Math.random() - 0.5) * 35;   // z
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 9. Floating Holographic HUD Gauges (Inspired by Spline text layers)
    const hudGroup = new THREE.Group();
    hudGroup.position.set(0, 0, 0);
    scene.add(hudGroup);

    // Radial Speedo Arch
    const speedoRingGeo = new THREE.TorusGeometry(1.6, 0.015, 8, 48, Math.PI * 1.2);
    speedoRingGeo.rotateZ(Math.PI * 0.9);
    const speedoRing = new THREE.Mesh(speedoRingGeo, neonRedMat);
    speedoRing.position.set(-2.5, 1.2, 0);
    hudGroup.add(speedoRing);

    // Radial RPM Arch
    const rpmRingGeo = new THREE.TorusGeometry(1.2, 0.01, 8, 48, Math.PI * 1.0);
    rpmRingGeo.rotateZ(Math.PI * 1.0);
    const rpmRing = new THREE.Mesh(rpmRingGeo, new THREE.MeshStandardMaterial({
      color: 0x0088ff,
      emissive: 0x0088ff,
      emissiveIntensity: 2
    }));
    rpmRing.position.set(2.5, 1.0, 0.5);
    hudGroup.add(rpmRing);

    // Grid Floor Overlay
    const gridHelper = new THREE.GridHelper(80, 80, 0x222225, 0x141416);
    gridHelper.position.y = -1.02;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.2;
    scene.add(gridHelper);

    // 10. Interaction logic (Mouse drag & move)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0.5;

    let mouseX = 0;
    let mouseY = 0;
    let activeRevTime = 0; // engine rev animation timing

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      // Mouse position for parallax
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;

      if (!isDragging) return;

      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;

      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;

      // Limit vertical rotation to avoid flipping
      targetRotationX = Math.max(-Math.PI / 8, Math.min(Math.PI / 4, targetRotationX));

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseClick = () => {
      // Trigger Engine Rev effect!
      activeRevTime = 3.0; // Seconds of visual revving
    };

    // Attach local mouse listeners to renderer container to allow dragging
    const canvasElement = renderer.domElement;
    canvasElement.style.cursor = 'grab';
    canvasElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMoveGlobal);
    window.addEventListener('mouseup', handleMouseUp);
    canvasElement.addEventListener('click', handleMouseClick);

    // Window Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;

      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // 11. Animation Loop
    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Rev multiplier factor
      let revFactor = 1.0;
      if (activeRevTime > 0) {
        activeRevTime -= delta;
        revFactor = 1.0 + Math.sin(activeRevTime * Math.PI) * 4.5;
        // Pulse headlight intensity with rev
        headlightConeL.intensity = 15 + Math.sin(time * 25) * 8 * revFactor;
        headlightConeR.intensity = 15 + Math.sin(time * 25) * 8 * revFactor;
        underglowLight.intensity = 80 + Math.sin(time * 30) * 40 * revFactor;
      } else {
        // Subtle ambient pulse
        headlightConeL.intensity = 12 + Math.sin(time * 2) * 2;
        headlightConeR.intensity = 12 + Math.sin(time * 2) * 2;
        underglowLight.intensity = 60 + Math.sin(time * 2.5) * 15;
      }

      // Rotate Platform & Car
      if (!isDragging) {
        // Slow passive showcase rotation
        targetRotationY += 0.05 * delta;
      }
      
      stageGroup.rotation.y += (targetRotationY - stageGroup.rotation.y) * 0.08;
      stageGroup.rotation.x += (targetRotationX - stageGroup.rotation.x) * 0.08;

      // Spin Wheels (proportional to rotation & rev engine factor)
      wheelMeshes.forEach((wheel) => {
        wheel.rotation.x += delta * 2.0 * revFactor;
      });

      // Move Speed Particles
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 2; i < particleCount * 3; i += 3) {
        posArray[i] += 0.15 * revFactor; // Z movement towards camera
        if (posArray[i] > 18) {
          posArray[i] = -18; // reset back
          posArray[i - 2] = (Math.random() - 0.5) * 35; // random x
          posArray[i - 1] = (Math.random() - 0.2) * 12;  // random y
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // HUD Floating Animation & Parallax
      hudGroup.position.y = Math.sin(time * 1.5) * 0.08;
      hudGroup.rotation.y = mouseX * 0.2;
      hudGroup.rotation.x = -mouseY * 0.2;

      // Animate HUD scale dials slightly
      speedoRing.rotation.z = Math.sin(time * 0.8) * 0.2 * revFactor;
      rpmRing.rotation.z = -Math.cos(time * 1.2) * 0.15 * revFactor;

      // Dynamic Camera Parallax (from cursor move)
      const targetCamX = mouseX * 2.5;
      const targetCamY = 2.5 - mouseY * 1.2;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.lookAt(0, 0.4, 0);

      // Headlight Sweeping targets (follow mouse slightly for interaction)
      targetL.position.x = -0.85 + mouseX * 12;
      targetL.position.y = -0.5 - mouseY * 8;
      targetR.position.x = 0.85 + mouseX * 12;
      targetR.position.y = -0.5 - mouseY * 8;

      renderer.render(scene, camera);
    };

    animate();

    // 12. Cleanup
    return () => {
      canvasElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('mouseup', handleMouseUp);
      canvasElement.removeEventListener('click', handleMouseClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      stageGeo.dispose();
      ringGeo.dispose();
      chassisGeo.dispose();
      hoodGeo.dispose();
      cabinGeo.dispose();
      spoilerWingGeo.dispose();
      strutLGeo.dispose();
      wheelGeo.dispose();
      rimGeo.dispose();
      lightBarGeo.dispose();
      tailLightGeo.dispose();
      speedoRingGeo.dispose();
      rpmRingGeo.dispose();
      carbonPaintMat.dispose();
      chromeMat.dispose();
      rubberMat.dispose();
      darkGlassMat.dispose();
      neonRedMat.dispose();
      neonWhiteMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full bg-[#0E0E10]"
      style={{
        zIndex: 0
      }}
    />
  );
}