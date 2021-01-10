import { useEffect, useState, useContext } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { WindowWidthContext } from "../../App";
import "./Header.css";

function Header() {
  const windowWidth = useContext(WindowWidthContext);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (windowWidth > 1000) {
      setVisible(false);
    }
  }, [windowWidth]);

  return (
    <div className="header">
      <div className="header__logo">
        <h1>Xander</h1>
      </div>

      <div className="header__hamburger">
        <div
          className="header__hamburger__icon"
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
          <div className="header__hamburger__icon__line header__hamburger__icon__line-1"></div>
          <div className="header__hamburger__icon__line header__hamburger__icon__line-2"></div>
          <div className="header__hamburger__icon__line header__hamburger__icon__line-3"></div>
        </div>
      </div>

      <ul
        className={
          visible
            ? "header__nav-links header__nav-links--visible"
            : "header__nav-links"
        }
      >
        <li
          onClick={() => {
            if (windowWidth <= 1000) {
              setVisible(false);
              ScrollTrigger.getById("enterTrigger").disable();
            }
            gsap.to(window, { duration: 0.8, scrollTo: "#home" });
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            if (windowWidth <= 1000) {
              setVisible(false);
              ScrollTrigger.getById("enterTrigger").disable();
            }
            gsap.to(window, { duration: 0.8, scrollTo: "#about" });
          }}
        >
          about
        </li>
        <li
          onClick={() => {
            if (windowWidth <= 1000) {
              setVisible(false);
              ScrollTrigger.getById("enterTrigger").disable();
            }
            gsap.to(window, { duration: 0.8, scrollTo: "#work" });
          }}
        >
          work
        </li>
        <li
          onClick={() => {
            if (windowWidth <= 1000) {
              setVisible(false);
              ScrollTrigger.getById("enterTrigger").disable();
            }
            gsap.to(window, { duration: 0.8, scrollTo: "#contact" });
          }}
        >
          let's talk
        </li>
      </ul>
    </div>
  );
}

export default Header;
