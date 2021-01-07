import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1401px)": function () {
        const tl = gsap.timeline();
        tl.set("#about", { y: 100, opacity: 0, visibility: "visible" }).to(
          "#about",
          {
            duration: 1,
            scrollTrigger: {
              trigger: "#about",
              start: "60% bottom",
              end: "60% top",
              onEnter: () => {
                gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeave: () => {
                gsap.to("#about", { duration: 0.8, y: -100, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to("#about", { duration: 0.8, y: 100, opacity: 0 });
              },
            },
          }
        );
      },
      "(min-width: 999px) and (max-width: 1400px)": function () {
        const tl = gsap.timeline();
        tl.set("#about", { y: 100, opacity: 0, visibility: "visible" }).to(
          "#about",
          {
            duration: 1,
            scrollTrigger: {
              trigger: "#about",
              start: "60% bottom",
              end: "90% top",
              onEnter: () => {
                gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeave: () => {
                gsap.to("#about", { duration: 0.8, y: -100, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to("#about", { duration: 0.8, y: 100, opacity: 0 });
              },
            },
          }
        );
      },
      "(max-width: 1000px)": function () {
        const tl = gsap.timeline();
        tl.set("#about", { y: 100, opacity: 0, visibility: "visible" }).to(
          "#about",
          {
            duration: 1,
            scrollTrigger: {
              trigger: "#about",
              start: "60% bottom",
              end: "95% top",
              onEnter: () => {
                gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeave: () => {
                gsap.to("#about", { duration: 0.8, y: -100, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to("#about", { duration: 0.8, y: 100, opacity: 0 });
              },
            },
          }
        );
      },
    });
  }, []);

  return (
    <div className="home__about" id="about">
      <p className="home__label">
        about <span></span>
      </p>

      <h1>
        hi, i'm xander <span>-full stack developer</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum integer
        enim neque volutpat. Egestas dui id ornare arcu odio. Rhoncus aenean vel
        elit scelerisque. Eu tincidunt tortor aliquam nulla.
      </p>
    </div>
  );
}

export default About;
