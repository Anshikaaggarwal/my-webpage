import React from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";

import { Planet } from "../components/Planet";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853 });
  const text= " I can work on both front-end and back-end development, creating seamless and efficient web applications and can guarantee a smooth user experience.";
 return (
    <section id="home" className="flex flex-col justify-end min-h-screen ">
      <AnimatedHeaderSection
      subTitle={"404 No bugs found"}
      title={"Anshika Aggarwal"}
      aboutText={text}
      textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* 3D rendering canvas powered by three.js, wrapped in React. */}
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.9} />
          {/* change light intensity */}
          <Float speed={5}>
            <Planet scale= {isMobile ? 0.7 : 1 } />
          </Float>

          <Environment resolution={180}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                //lightformer is a light source that can be shaped and positioned in 3D space.
                intensity={2}
                position={[0, 3, 1]}
                scale={10} //makes the light larger
              ></Lightformer>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              ></Lightformer>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={10}
              ></Lightformer>
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
