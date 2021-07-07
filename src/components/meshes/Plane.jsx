import React from 'react';

const Plane = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshBasicMaterial attach="material" color="#1c1c1c" />
    </mesh>
  );
};

export default Plane;
