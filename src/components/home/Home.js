import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Landing from "./subComponents/Landing";
import "./Home.css";
import About from "./subComponents/About";
import Work from "./subComponents/Work";
import Contact from "./subComponents/Contact";
function Home() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 1000px)": function () {
        gsap.to("#landing", {
          scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom top",
            onEnter: () => {
              console.log("e");
              gsap.to(window, {
                duration: 0.8,
                scrollTo: "#about",
              });
            },
            id: "enterTrigger",
          },
        });
      },
    });
    ScrollTrigger.matchMedia({
      "(max-width: 1000px)": function () {
        gsap.to("#landing", {
          scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom top",

            onEnterBack: () => {
              ScrollTrigger.getById("enterTrigger").enable();
              gsap.to(window, { duration: 0.8, scrollTo: 0 });
            },
            id: "exitTrigger",
          },
        });
      },
    });
  }, []);

  return (
    <div className="home" id="home">
      <Landing />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
