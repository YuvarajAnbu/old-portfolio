import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1401px)": function () {
        gsap.to("#about", {
          duration: 1,
          scrollTrigger: {
            trigger: "#about",
            start: "60% bottom",
            end: "80% top",
            onEnter: () => {
              gsap.fromTo(
                "#about",
                { y: 100, opacity: 0 },
                {
                  duration: 0.8,
                  y: 0,
                  opacity: 1,
                  visibility: "visible",
                }
              );
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
        });
      },
      "(min-width: 999px) and (max-width: 1400px)": function () {
        gsap.to("#about", {
          duration: 1,
          scrollTrigger: {
            trigger: "#about",
            start: "60% bottom",
            end: "90% top",
            onEnter: () => {
              gsap.fromTo(
                "#about",
                { y: 100, opacity: 0 },
                { duration: 0.8, y: 0, opacity: 1, visibility: "visible" }
              );
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
        });
      },
      "(max-width: 1000px)": function () {
        gsap.to("#about", {
          duration: 1,
          scrollTrigger: {
            trigger: "#about",
            start: "60% bottom",
            end: "95% top",
            onEnter: () => {
              gsap.fromTo(
                "#about",
                { y: 50, opacity: 0 },
                { duration: 0.8, y: 0, opacity: 1, visibility: "visible" }
              );
            },
            onLeave: () => {
              gsap.to("#about", { duration: 0.8, y: -50, opacity: 0 });
            },
            onEnterBack: () => {
              gsap.to("#about", { duration: 0.8, y: 0, opacity: 1 });
            },
            onLeaveBack: () => {
              gsap.to("#about", { duration: 0.8, y: 50, opacity: 0 });
            },
          },
        });
      },
    });
  }, []);

  return (
    <div className="home__about" id="about">
      <p className="home__label">
        about <span></span>
      </p>

      <h1>
        hi, i'm xander <span>-Full Stack Developer</span>
      </h1>
      <p>
        My real name is Yuvaraj. But friends call me Xander. I'm not a big fan
        of going to college, to learn accounting which was boring to me and I
        wanted to do something interesting. so I learned how to create websites
        because I thought it was fun to create something. after creating my
        first website about ironman, I was so happy at that time that can make
        something. then I kept making websites at free time and learned a lot
        through free resources on the internet. then I quit college and tried to
        make it as a job, which I did and here I'm now.{" "}
        <span>
          TL;DR : I am a Self-Thought Web Developer who knows HTML, CSS, JS,
          React, Node.js.
        </span>
      </p>
    </div>
  );
}

export default About;
