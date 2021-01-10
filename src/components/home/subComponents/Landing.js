import { useEffect, useContext } from "react";
import { gsap } from "gsap";
import { WindowWidthContext } from "../../../App";

function Landing() {
  const windowWidth = useContext(WindowWidthContext);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set("#landing", { visibility: "visible" })
      .from(".home__landing__content__line", {
        duration: 0.8,
        x: "-100%",
      })
      .from(
        ".home__landing__content h1, .home__landing__content p, .home__landing__content button, .home__landing__content__rectangle",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
        }
      )
      .from(".home__landing__img", { duration: 0.8, x: 100, opacity: 0 }, 0.8);
  }, []);

  return (
    <div className="home__landing" id="landing">
      <div className="home__landing__content">
        <div className="home__landing__content__line"></div>
        <h1>i make things on the internet</h1>
        <p>
          You heard it right. I make websites, web apps, pretty much whatever
          you want on the browser. It can be either an e-commerce site, a single
          page or whatever you want and I'll make it.
        </p>
        <button
          onClick={() => gsap.to(window, { duration: 0.7, scrollTo: "#about" })}
        >
          know more
        </button>
        <div className="home__landing__content__rectangle"></div>
      </div>
      <div className="home__landing__img">
        {windowWidth > 1000 && (
          <img src="/images/landing.jpg" alt="person using laptop" />
        )}
      </div>
    </div>
  );
}

export default Landing;
