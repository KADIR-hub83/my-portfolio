import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './room.jsx'
import HeroLights from './HeroLights'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{ position: [42 , 5 ,9
    ], fov:45}}>
        <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        />
        <HeroLights/>
       <group
        scale={isMobile? 0.7:1}
        position={[ 0, -5.5,-2]}
     
        rotation={[0, Math.PI / 5, 0]}
       >
         <Room/>
       </group>
    </Canvas>
  )
}

export default HeroExperience
