import React from 'react'
import { useRef } from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const About = () => {
  const text = "I'm a software developer with a passion for creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and delivering high-quality results.";
  const imgRef = useRef(null);
  const aboutText = 
  "Hey, I’m Anshika.  Mic has been my best friend for as long as I can remember—I’ve always loved speaking, leading, and sharing ideas. Somewhere along the way, my HP laptop joined the crew, and that’s when I discovered the thrill of engineering. It gave me the power to not just talk about ideas, but to actually build them. Since then, I’ve been busy turning concepts into code: from healthcare platforms with FastAPI & PostgreSQL, to agri-tech solutions in Next.js & TypeScript, to smart shopping assistants using React. Along the way, I interned at Salesforce, where I worked on integration testing, automation, and CI/CD pipelines, and I’ve also picked up a few hackathon wins and leadership stints, like serving as Vice President of AssetMerkle IGDTUW. At my core, I’m someone who loves experimenting, learning, and creating things that matter—whether on stage with a mic, or behind the screen with code."
  
  useGSAP(()  => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        // markers : true,
        //markers: true helps in debugging by showing the start and end points of the ScrollTrigger on the screen.
        //scrub to true links the animation progress to the scrollbar position
    },
    ease: "power1.inOut"
  });
  //set initial scale of the image to 1.05 making it slightly larger than its original size.
  gsap.set(imgRef.current, 
    {
      clipPath: "polygon(0 100%, 100% 100% , 100% 100%, 0% 100%)",
    });
    //clipPath defines a polygon that starts and ends at the bottom edge of the image, effectively hiding it.
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 0, 100% 0 , 100% 100%, 0 100%)",
    duration: 2,
    ease: "power4.out",
//power4.out starts the animation quickly and then decelerates towards the end.
    scrollTrigger: {    
      trigger: imgRef.current
    }
  });

});
  
  return (
    <section id='about' className='min-h-screen 
    bg-black rounded-b-4xl'>
      <AnimatedHeaderSection 
      title={"About"}
      subTitle={"TO learn and build scalable and efficient software solutions."}
      aboutText={text}
      textColor={"text-white"}
      withScrollTrigger={true}
      />
{/* rounded-b-4xl → makes only the bottom corners of an element
 very largely rounded (2rem radius). */}
   <div className='flex flex-col items-center justify-between gap-16
   px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 '>
 <img ref={imgRef}
 src='images/picture.jpg' alt='pic' className='w-md rounded-3xl'/>
   <AnimatedTextLines 
   text = {aboutText} 
   className={"w-full"} />
   </div>
   
    </section>
    //making it a section for semantic purposes
  )
}

export default About
