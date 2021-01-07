import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./subComponents/Landing";
import "./Home.css";
import About from "./subComponents/About";
import Work from "./subComponents/Work";
import Contact from "./subComponents/Contact";
import { gsap } from "gsap";
function Home() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 1000px)": function () {
        gsap.to("#landing", {
          duration: 1,
          scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom top",
            onEnter: () =>
              gsap.to(window, {
                duration: 0.8,
                scrollTo: { y: "#about", offsetY: 100, autoKill: true },
              }),
            onEnterBack: () => gsap.to(window, { duration: 0.8, scrollTo: 0 }),
            scrub: true,
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
