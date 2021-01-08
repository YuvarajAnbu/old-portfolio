import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1001px)": function () {
        const tl = gsap.timeline();
        tl.set("#contact", { visibility: "visible" })
          .set(".home__contact__img-container", { x: -50, opacity: 0 })
          .set(".home__contact__content", { x: 50, opacity: 0 })
          .to("#contact", {
            duration: 1,
            scrollTrigger: {
              trigger: "#contact",
              start: "40% bottom",
              end: "bottom top",
              onEnter: () => {
                gsap.to(".home__contact__img-container", {
                  duration: 0.8,
                  x: 0,
                  opacity: 1,
                });
                gsap.to(".home__contact__content", {
                  duration: 0.8,
                  x: 0,
                  opacity: 1,
                });
              },
              onLeaveBack: () => {
                gsap.to(".home__contact__img-container", {
                  duration: 0.8,
                  x: -50,
                  opacity: 0,
                });
                gsap.to(".home__contact__content", {
                  duration: 0.8,
                  x: 50,
                  opacity: 0,
                });
              },
            },
          });
      },
      "(max-width: 1000px)": function () {
        const tl = gsap.timeline();
        tl.set("#contact", { visibility: "visible" })
          .set(".home__contact__img-container", { x: 0, opacity: 1 })
          .set(".home__contact__content", { x: 0, opacity: 1 })
          .to("#contact", {
            duration: 1,
            scrollTrigger: {
              trigger: "#contact",
              start: "60% bottom",
              end: "95% top",
              onEnter: () => {
                gsap.fromTo(
                  "#contact",
                  { y: 50, opacity: 0 },
                  { duration: 0.8, y: 0, opacity: 1 }
                );
              },
              onLeave: () => {
                gsap.to("#contact", { duration: 0.8, y: -50, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to("#contact", { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to("#contact", { duration: 0.8, y: 50, opacity: 0 });
              },
            },
          });
      },
    });
  }, []);

  return (
    <div className="home__contact" id="contact">
      <p className="home__label">
        contact <span></span>
      </p>
      <div className="home__contact__img-container">
        <img src="/images/contact.jpg" alt="person using laptop" />
      </div>
      <div className="home__contact__content">
        <h3>Contact me on any social media. Just say hi and lets talk.</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            e-mail
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            instagram
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faDiscord} />
            discord
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
            facebook
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
