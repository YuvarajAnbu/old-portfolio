import { useEffect } from "react";
import { gsap } from "gsap";

function Landing() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set("#landing", { visibility: "visible" })
      .from(".home__landing__content__line", {
        duration: 0.8,
        x: "-100%",
      })
      .from(
        ".home__landing__content h1, .home__landing__content p, .home__landing__content button, .home__landing__content__rectangle",
        { duration: 0.8, y: 50, opacity: 0 }
      )
      .from(".home__landing__img", { duration: 0.8, x: 100, opacity: 0 }, 0.8);
  }, []);

  return (
    <div className="home__landing" id="landing">
      <div className="home__landing__content">
        <div className="home__landing__content__line"></div>
        <h1>I make your Dream website to reality.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took{" "}
        </p>
        <button
          onClick={() => gsap.to(window, { duration: 0.5, scrollTo: "#about" })}
        >
          know more
        </button>
        <div className="home__landing__content__rectangle"></div>
      </div>
      <div className="home__landing__img">
        <img src="/images/landing.jpg" alt="person using laptop" />
      </div>
    </div>
  );
}

export default Landing;
