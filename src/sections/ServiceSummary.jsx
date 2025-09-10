import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger is a plugin that allows you to create scroll-based animations
const ServiceSummary = () => {
 useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20, //move right by 20% of its width
      scrollTrigger: {
        //when title comes into view it will animate
        target: "#title-service-1", //element that triggers the animation
        scrub: true, //animation tied to scroll position, scrub means it will follow the scroll
      },
  });
   gsap.to("#title-service-2", {
      xPercent: -30, //move left by 20% of its width
      scrollTrigger: {
        //when title comes into view it will animate
        target: "#title-service-2", //element that triggers the animation
        scrub: true, //animation tied to scroll position, scrub means it will follow the scroll
      },
  });
   gsap.to("#title-service-3", {
      xPercent: 100, //move right by 100% of its width
      scrollTrigger: {
        //when title comes into view it will animate
        target: "#title-service-3", //element that triggers the animation
        scrub: true, //animation tied to scroll position, scrub means it will follow the scroll
      },
  });
  gsap.to("#title-service-4", {
      xPercent: -100, //move right by 20% of its width
      scrollTrigger: {
        //when title comes into view it will animate
        target: "#title-service-4", //element that triggers the animation
        scrub: true, //animation tied to scroll position, scrub means it will follow the scroll
      },
  });
 });
  return (
    <section
      className="mt-20 overflow-hidden font-light
    leading-snug text-center mb-42 contact-text-responsive"
    >
      {/* snug = slightly tighter than normal line height */}
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal"> Development </p>
        <div
          className="w-10 h-1.5 md:w-32 bg-gold"
          //pointing to straight  line
        />
        <p> Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3-translate-x-48"
      >
        {/* //translate-x-48 moves it to the right */}
        <p> APIs</p>

        <div
          className="w-10 h-1.5 md:w-32 bg-gold"
          //pointing to straight  line
        />
        <p className="italic"> Frontends </p>
        <div className="w-10 h-1.5 md:w-32 bg-gold" />
        <p> Scalability </p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p> Databases </p>
        </div>
    </section>
  );
};

export default ServiceSummary;
