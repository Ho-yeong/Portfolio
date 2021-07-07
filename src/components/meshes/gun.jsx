import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import { gun } from '../../assets';

const Gun = () => {
  const gltf = useLoader(GLTFLoader, gun);

  return <primitive object={gltf.scene} position={[0, 3, 0]} />;
};

useGLTF.preload('/gun.glb');

export default Gun;
