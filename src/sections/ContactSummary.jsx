import React, { useRef, useState } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Creativity",
    "Innovation",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact me",
    "contact me",
    "contact me",
    "contact me",
    "contact me",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        //the marquee scrolling get pinned
        pinSpacing: true,
      },
    });
  }, []);
  return (
    //The <marquee> tag in HTML creates a scrolling text or image effect within a webpage.
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Crafting <br />
          <span className="font-normal">beautiful</span> &{" "}
          <span className="italic">impactful</span> <br />
          digital experiences <span className="text-gold">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
