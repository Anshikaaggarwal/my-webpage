import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { experienceData, skillsData } from "../constants";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const expRefs = useRef([]);
  const skillRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    [...expRefs.current, ...skillRefs.current].forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="experience-skills" className="min-h-screen bg-black rounded-t-4xl">
      {/* Heading */}
      <AnimatedHeaderSection
        subTitle={"Journey & Expertise"}
        title={"Experience & Skills"}
        aboutText={
          "A mix of professional experiences and the technical toolkit I bring to every project."
        }
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {/* Experience Section */}
      {experienceData.map((exp, index) => (
        <div
          ref={(el) => (expRefs.current[index] = el)}
          key={`exp-${index}`}
          className="sticky px-10 pt-6 pb-4 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index + 5}px)`,
                  marginBottom: `${(experienceData.length - index - 1) * 2}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex flex-col gap-6 font-light">
            <h2 className="text-4xl lg:text-5xl">{exp.title}</h2>
            <p className="text-lg text-white/50">{exp.period}</p>
            <p className="text-lg lg:text-xl leading-relaxed text-white/70">
              {exp.description}
            </p>
            <div className="flex flex-col gap-2 text-2xl lg:text-3xl text-white/80">
              {exp.items.map((item, idx) => (
                <div key={`exp-item-${index}-${idx}`}>
                  <h3 className="flex">
                    <span className="mr-12 text-lg text-white/30">
                      0{idx + 1}
                    </span>
                    {item.title}
                  </h3>
                  {idx < exp.items.length - 1 && (
                    <div className="w-full h-px my-2.5 bg-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Skills Section */}
      {skillsData.map((skill, index) => (
        <div
          ref={(el) => (skillRefs.current[index] = el)}
          key={`skill-${index}`}
          className="sticky px-10 pt-6 pb-4 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index + 10}px)`,
                  marginBottom: `${(skillsData.length - index - 1) * 3}rem`,
                  //making this 2 so vertical spacing is very low between new headings like prog languages
                }
              : { top: 0 }
          }
        >
          <div className="flex flex-col gap-4 font-light">
            <h2 className="text-4xl lg:text-5xl">{skill.title}</h2>
            <div className="flex flex-wrap gap-3 mt-2 lg:mt-2">
              {skill.items.map((item, i) => (
                <span
                  key={`skill-item-${index}-${i}`}
                  className="px-4 py-2 border border-white/40 rounded-lg text-lg text-white/80"
                >
                  [ {item} ]
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
