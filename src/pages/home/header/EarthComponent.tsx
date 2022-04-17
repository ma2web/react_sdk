import { useRef } from 'react';
import { TextureLoader } from 'three';
import EarthDayMap from 'assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from 'assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from 'assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from 'assets/textures/8k_earth_clouds.jpg';
import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const EarthComponent = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef() as any;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = -elapsedTime / 9;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight color={'0xffffff'} position={[2, 0, 2]} intensity={1.2} />
      <mesh>
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          specularMap={cloudsMap}
          opacity={1}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} scale={1.8}>
        <meshBasicMaterial attach="material" color={'#ffffff'} />
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          panSpeed={0.4}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default EarthComponent;
