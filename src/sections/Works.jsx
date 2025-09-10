import React, { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Works = () => {
  const overlayref = useRef([]);
  const previewRef = React.useRef(null);
  const text = "Projects that showcase innovation, creativity, and impact.";
  const mouse = useRef({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(null);
  const moveX = useRef(null);
  const moveY = useRef(null);
  //we will invoke these animations in some other function so we are creating these ref
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power2.out",
    });
    //from means entering animation and to means exiting animation
    moveY.current = gsap.quickTo(
      previewRef.current,
      "y",
      //moveY is a function that will move the image in y direction
      { duration: 2, ease: "power3.out" }
      //scale 0.95 means the image will be slightly smaller than its original size
    );

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    // sets the current index to the index of the project being hovered over and whenever we hover over a project the image changes to that project image

    const el = overlayref.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );
    gsap.to(previewRef.current, {
      opacity: 1,
      duration: 1,
      scale: 1,
      ease: "power2.out",
    });
  };
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    // resets the current index when the mouse leaves the project
    const el = overlayref.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    //this is to put a smooth animation when we hover over the project names- black white transition
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      duration: 1,
      scale: 0.95,
      ease: "power2.out",
      //now we have a pop up animation when we hover over the image
    });
  };
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24; //24 is to give some space between the cursor and the image
    mouse.current.y = e.clientY + 24;
    //clientX and clientY are the coordinates of the mouse cursor relative to the viewport
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Ideation to Execution"}
        text={text}
        title="My Works"
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            //group marks this element as a parent container that can influence its children on hover/focus states.
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => window.open(project.href, "_blank")}
          >
            <div
              ref={(el) => {
                overlayref.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-gray-600 -z-10 clip-path"
            />

            {/*title */}
            <div
              className="flex justify-between px-10 text-black transition-all
            duration-500 md:group-hover:px-12 md:group-hover:text-white"
              //when u hover over the project names the text color changes to white and padding increases
            >
              <h2 className="lg:text-[32px]  text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* framework */}
            <div
              className="flex px-10 text-xs leading-loose uppercase transition-all duration-500
            md:text-sm gap-x-5 md:group-hover:px-12"
            >
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white "
                >
                  {framework.name}
                  {/* transition-colors enables smooth animation when colors change */}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.bgImage}
                alt={project.name}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name} - image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}
        {/* desktop floating preview image */}
        <div
          ref={previewRef}
          //ref is used to access the DOM element directly if u remove this ref then the image will not move with the cursor
          className="fixed -top-2/6 left-0 z-50 overflow-hidden
border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
        >
          {/* show this image when current index is being displayed */}

          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
