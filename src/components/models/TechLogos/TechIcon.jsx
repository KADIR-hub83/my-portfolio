import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls, useGLTF  } from '@react-three/drei'
import { useEffect } from 'react';

import * as THREE from 'three'


const TechIcon = ({model}) => {
    
     const scene = useGLTF(model.modelPath)

     useEffect(() =>{
          if (model.name === "Three js Devloper") {
            scene.scene.traverse((child) => {
              if (child.isMesh && child.name === 'object_5'){
                 child.material = new THREE.MeshStandardMaterial({color:'blue'})
              }
            })
          }
     }, [scene]);
      
  return (
    <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5, 5, 5]} intensity={1}/>
        <Environment preset='city'/>

        <OrbitControls enableZoom={false}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon

