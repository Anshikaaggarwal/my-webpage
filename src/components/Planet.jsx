import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
//we converted using gltf to jsx https://gltf.pmnd.rs/
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react';
// Import the useGSAP hook from the @gsap/react package
export function Planet(props) {
  const shapeContainer = useRef(null); 
  const ringContainer = useRef(null);
  const spheresContainer = useRef(null);
  // This reference can be used to manipulate the group if needed
  const { nodes, materials } = useGLTF('/models/Planet.glb');

  useGSAP(() => {
    const tl = gsap.timeline();
    //if we write to then ring will go away from screen
    tl.from(shapeContainer.current.position, {
      y: 5,
      duration: 3,
      ease: "circ.out",
  });
  tl.from(spheresContainer.current.rotation, {
    x:0,
    y: Math.PI,
    z: -Math.PI,
    duration: 10,
    ease: "power1.inOut"
  },
  "-=25%"
);
  tl.from(ringContainer.current.position, {
    y: 0,
    x: 0,
    z: 0,
    duration: 10,
    ease: "power1.inOut",
  },
  "<"
   );
  }, [] // Empty dependency array ensures this runs only once on mount
   );
  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      {/* A <group> in React Three Fiber corresponds to a THREE.Group */}
      <group ref={spheresContainer}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        rotation={[0, 0, 0.741]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
      </group>
      <mesh 

      //points to the second sphere which is the small one orbiting the planet
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Sphere2.geometry}
        material={materials['Material.001']}
        position={[0.647, 1.03, -0.724]}
        rotation={[0, 0, 0.741]}
        scale={0.223}
      />
    </group>
  );
}

useGLTF.preload('/models/Planet.glb')
