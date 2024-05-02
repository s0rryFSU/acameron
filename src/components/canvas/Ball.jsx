/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}> 
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={'white'}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          position={[0, 0, 0.5]}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;