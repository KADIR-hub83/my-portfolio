import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const path = import.meta.env.BASE_URL + "models/compressed-computer-optimized.glb";
  const { nodes, materials } = useGLTF(path);

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "models/compressed-computer-optimized.glb");
