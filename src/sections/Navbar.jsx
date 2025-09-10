import React, { useRef, useState, useEffect } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
// using gsap for animation
const Navbar = () => {
  const navRef = useRef(null);
  const LinksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null); //timeline for nav
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false); //to track if nav is open or closed if it is open then use cross icon else hamburger icon
  const [showBurger, setShowBurger] = useState(true); //to show or hide burger icon on scroll down or up

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([LinksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        LinksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    // to track last scroll position
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // if scroll down hide the burger icon else show the burger icon
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      // update last scroll position
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* fixed to stay at the top, z-50 to ensure it stays above other content */}
      <nav
        ref={navRef}
        className="fixed z-50 flex-col justify-between w-full h-full px-10 uppercase
      bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "contact", "about", "services", "works"].map(
            (section, index) => (
              <div key={index} ref={(el) => (LinksRef.current[index] = el)}>
                {/* get this transition when we click on links */}
                <Link
                  className="transition-all duration-300 hover:text-white"
                  to={section}
                  smooth
                  //Makes the scroll animation smooth instead of an instant jump.
                  offset={0}
                  //stop exactly at the top of the target element when u scroll
                  duration={2000}
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50"> Email </p>
            <p className="tracking-widest lowercase text-xl text-pretty">
              anshikaaggarwal02@gmail.com{" "}
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50"> Social Media </p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white 
            transition-colors duration-300"
                >
                  {"{"}
                  {social.name}
                  {"}"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300
    bg-black rounded-full cursor-pointer w-14 h-14 md:w-20  md:h-20 top-4 right-10 "
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
          //clippy helps in changing the shape of the div
        }
      >
        {/* //onclick to toggle menu is not a part of tailwind css */}
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        {/* making hamburger button using span option */}
      </div>
    </>
  );
};

export default Navbar;
