"use client";

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, PresentationControls, useGLTF, useProgress, Html } from '@react-three/drei';
import styles from '../app/page.module.css';

const MODEL_PATHS = ['/modern_house.glb', '/abstract_ball.glb', '/cube.glb'] as const;

// Preload ALL models on page load so tab switching is instant
MODEL_PATHS.forEach((path) => useGLTF.preload(path));

// Loading spinner shown inside the Canvas while a model is streaming
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-inter), sans-serif',
      }}>
        <div style={{
          width: 40,
          height: 40,
          border: '3px solid #E2E8F0',
          borderTopColor: '#0F172A',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
          {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
}

// Individual model components – each uses the cached GLB
function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene.clone()} dispose={null} />;
}

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState(0);

  // Suppress Three.js internal deprecation warnings
  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('THREE.')) return;
      originalWarn(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  const tabs = [
    { title: "Bespoke Architecture", path: MODEL_PATHS[0], rotation: [0.05, 0, 0] as [number, number, number], offsetY: '-10%' },
    { title: "Parametric Sphere",   path: MODEL_PATHS[1], rotation: [0.4, -0.6, 0] as [number, number, number], offsetY: '0%' },
    { title: "Modular Monolith",    path: MODEL_PATHS[2], rotation: [0.4, -0.6, 0] as [number, number, number], offsetY: '0%' }
  ];

  return (
    <section id="demo" className={styles.demoSection}>
      <div className="container">
        <h2 style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1rem' }}>
          Beyond Static Pages: Meet Immersive 3D Commerce.
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Stop relying on boring product images. Give your clients the power to visualize, customize, and price your most complex products in real-time.
        </p>

        <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-blue)' }}>
          Your Industry. Your Product. Fully Configurable.
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="btn btn-secondary"
              style={{
                borderColor: activeTab === idx ? 'var(--accent-emerald)' : 'var(--border-color)',
                backgroundColor: activeTab === idx ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                color: activeTab === idx ? 'var(--accent-emerald)' : 'var(--text-muted)'
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className={styles.demoContainer} style={{ height: '600px', position: 'relative' }}>
          <div className={styles.browserHeader} style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
            <div className={styles.browserDot}></div>
            <div className={styles.browserDot}></div>
            <div className={styles.browserDot}></div>
            <div style={{ marginLeft: '1rem', color: '#9CA3AF', fontSize: '0.875rem', fontFamily: 'var(--font-geist-mono), monospace' }}>
              https://ticosystem.com/
            </div>
          </div>

          <div style={{ width: '100%', height: '100%', cursor: 'grab', background: 'radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 100%)' }}>
            <div style={{ width: '100%', height: '100%', transform: `translateY(${tabs[activeTab].offsetY})`, transition: 'transform 0.4s ease' }}>
              <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                <PresentationControls
                  key={activeTab}
                  speed={1.5}
                  global
                  zoom={0.8}
                  rotation={tabs[activeTab].rotation}
                  polar={[-Math.PI / 3, Math.PI / 3]}
                >
                  <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.6}>
                      <Model path={tabs[activeTab].path} />
                    </Stage>
                  </Suspense>
                </PresentationControls>
              </Canvas>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 10, display: 'flex', pointerEvents: 'none' }}>
            <div className={styles.hintBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
              </svg>
              <span>Click &amp; Drag to Rotate 3D Model</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
