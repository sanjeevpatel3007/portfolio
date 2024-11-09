'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(200, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Create gradient material
    const geometry = new THREE.TorusKnotGeometry(3, 1, 100, 16);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec3 color1 = vec3(0.486, 0.227, 0.929); // Violet
          vec3 color2 = vec3(0.858, 0.152, 0.466); // Pink
          
          float mixValue = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
          vec3 finalColor = mix(color1, color2, mixValue);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 10;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;
      material.uniforms.time.value = time;

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-48 h-48" />;
};

export default ThreeAnimation; 