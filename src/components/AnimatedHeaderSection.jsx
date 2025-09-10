import React from 'react'
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const AnimatedHeaderSection = ({
    subTitle,
    title,
    aboutText,
    textColor,
    withScrollTrigger = false
}) => {
      const constantRef = useRef(null);
      const HeaderRef = useRef(null);
      useGSAP(() => {
        const tl = gsap.timeline({
// withScrollTrigger is a boolean prop/flag.
// If it’s true, the timeline will be connected to ScrollTrigger.
// That means the animation plays when the element
//  referenced by constantRef.current comes into view.
          scrollTrigger: withScrollTrigger
            ? {
                trigger: constantRef.current,  
            }: undefined,
      });
        //Creates a timeline, a container that can hold multiple animations.
        tl.from(constantRef.current, {
          y: "50vh",
          ease: "circ.out",
          duration: 1,
        });
        tl.from(
          HeaderRef.current,
          {
            y: "200",
            opacity: 0,
            duration: 1,
            ease: "circ.out",
          }, //makes the animation start 0.2 seconds before the previous one ends
          "<+0.2"
        );
      }, []);
      // empty dependency array means the animation runs only once when the component mounts
     
  return (
      <div ref={constantRef}>
              <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                {/* using clip path as everything outside the polygon will be hidden */}
                <div
                  ref={HeaderRef}
                  className="flex flex-col justify-center gap-12 pt-16 sm:gap-16 "
                >
                  <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}">
                    {subTitle}
                    {/* text-sm Sets font size to small */}
                  </p>
                  <div className="px-10 pb-4">
                <h1 className= {`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16  
                    md:block`}
                    >
                      {title}
                    </h1>
                  </div>
                </div>
                <div className= {`relative px-10 ${textColor}`}>
                  <div className=" inset-x-0 border-t-2 ">
                    {/* inset-x-0 sets left and right to 0 and border-t-2 sets the top border width to 2 */}
                    <div className="py-12  sm:py-16 text-end">
                      <AnimatedTextLines
                        text = {aboutText}
                        className="font-light uppercase value-text-responsive"
                      ></AnimatedTextLines>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
  )
}

export default AnimatedHeaderSection
