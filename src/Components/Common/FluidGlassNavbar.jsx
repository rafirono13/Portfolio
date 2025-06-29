/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  MeshTransmissionMaterial,
  Text,
} from '@react-three/drei';
import { easing } from 'maath';

// Your navigation items
const navItems = [
  { label: 'About', link: '#about' },
  { label: 'Projects', link: '#projects' },
  { label: 'Contact', link: '#contact' },
];

export default function FluidGlassNavbar({ className = '', style = {} }) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full ${className}`}
      style={{ height: '120px', ...style }}
    >
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
        <NavBar />
      </Canvas>
    </div>
  );
}

const NavBar = memo(function NavBar() {
  const ref = useRef();
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const navGroup = useRef();

  // Create a simple bar geometry instead of loading GLB
  const barGeometry = new THREE.BoxGeometry(4, 0.2, 0.1);

  useFrame((state, delta) => {
    const { gl, viewport, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Position the glass bar at the top center, fixed position
    easing.damp3(
      ref.current.position,
      [0, v.height / 2 - 0.3, 15],
      0.15,
      delta,
    );

    // Scale to fit nicely across the top
    const desiredWidth = Math.min(v.width * 0.8, 6);
    ref.current.scale.set(desiredWidth / 4, 1, 1);

    // Render the background scene to texture
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Set a subtle background color
    gl.setClearColor(0x000000, 0);
  });

  return (
    <>
      {/* Background scene - could add some subtle elements here */}
      {createPortal(<BackgroundElements />, scene)}

      {/* Background texture plane */}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>

      {/* Glass bar */}
      <mesh ref={ref} geometry={barGeometry}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.15}
          thickness={10}
          roughness={0}
          transmission={1}
          chromaticAberration={0.1}
          anisotropy={0.01}
          color="#ffffff"
          attenuationColor="#ffffff"
          attenuationDistance={0.25}
        />
      </mesh>

      {/* Navigation items */}
      <NavItems items={navItems} />
    </>
  );
});

function NavItems({ items }) {
  const group = useRef();
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.8, fontSize: 0.08 },
    tablet: { max: 1023, spacing: 1.2, fontSize: 0.1 },
    desktop: { max: Infinity, spacing: 1.6, fontSize: 0.12 },
  };

  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max
      ? 'mobile'
      : w <= DEVICE.tablet.max
        ? 'tablet'
        : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Position nav items at the top center
    group.current.position.set(0, v.height / 2 - 0.3, 15.1);

    // Distribute items horizontally
    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link) => {
    if (!link) return;
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }, index) => (
        <Text
          key={label}
          fontSize={fontSize}
          color={hoveredItem === index ? '#ff7597' : 'white'}
          anchorX="center"
          anchorY="middle"
          depthWrite={false}
          outlineWidth={0.002}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.8}
          depthTest={false}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => {
            document.body.style.cursor = 'pointer';
            setHoveredItem(index);
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
            setHoveredItem(null);
          }}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function BackgroundElements() {
  return (
    <>
      {/* Add some subtle background elements that will be distorted through the glass */}
      <mesh position={[-3, 1, 0]}>
        <circleGeometry args={[0.5]} />
        <meshBasicMaterial color="#ff7597" opacity={0.1} transparent />
      </mesh>
      <mesh position={[3, -1, 0]}>
        <circleGeometry args={[0.3]} />
        <meshBasicMaterial color="#00bcd4" opacity={0.1} transparent />
      </mesh>
      <mesh position={[0, 0, -2]}>
        <circleGeometry args={[0.8]} />
        <meshBasicMaterial color="#ffffff" opacity={0.05} transparent />
      </mesh>
    </>
  );
}
