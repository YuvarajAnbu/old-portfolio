import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";
import websites from "../../../state/projects";

function Work() {
  useEffect(() => {
    websites.forEach((e, i) => {
      ScrollTrigger.matchMedia({
        "(min-width: 1401px)": function () {
          gsap.to(`#project-${i}`, {
            scrollTrigger: {
              trigger: `#project-${i}`,
              start: "20% bottom",
              end: "80% top",
              onEnter: () => {
                const tl = gsap.timeline();
                tl.set(`#project-${i}`, { visibility: "visible" }).fromTo(
                  `#project-${i}`,
                  {
                    y: 100,
                    opacity: 0,
                  },
                  { duration: 0.8, y: 0, opacity: 1 }
                );
              },
              onLeave: () => {
                gsap.to(`#project-${i}`, { y: -100, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to(`#project-${i}`, { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to(`#project-${i}`, { duration: 0.8, y: 100, opacity: 0 });
              },
            },
          });
        },
        "(min-width: 999px) and (max-width: 1400px)": function () {
          gsap.to(`#project-${i}`, {
            scrollTrigger: {
              trigger: `#project-${i}`,
              start: "10% bottom",
              end: "90% top",
              onEnter: () => {
                const tl = gsap.timeline();
                tl.set(`#project-${i}`, { visibility: "visible" }).fromTo(
                  `#project-${i}`,
                  {
                    y: 100,
                    opacity: 0,
                  },
                  { duration: 0.8, y: 0, opacity: 1 }
                );
              },
              onLeave: () => {
                gsap.to(`#project-${i}`, { y: -100, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to(`#project-${i}`, { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to(`#project-${i}`, { duration: 0.8, y: 100, opacity: 0 });
              },
            },
          });
        },
        "(max-width: 1000px)": function () {
          gsap.to(`#project-${i}`, {
            scrollTrigger: {
              trigger: `#project-${i}`,
              start: "10% bottom",
              end: "90% top",
              onEnter: () => {
                const tl = gsap.timeline();
                tl.set(`#project-${i}`, { visibility: "visible" }).fromTo(
                  `#project-${i}`,
                  {
                    y: 50,
                    opacity: 0,
                  },
                  { duration: 0.8, y: 0, opacity: 1 }
                );
              },
              onLeave: () => {
                gsap.to(`#project-${i}`, { y: -50, opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to(`#project-${i}`, { duration: 0.8, y: 0, opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to(`#project-${i}`, { duration: 0.8, y: 50, opacity: 0 });
              },
            },
          });
        },
      });
    });
  }, []);

  return (
    <div className="home__work" id="work">
      <p className="home__label">
        work <span></span>
      </p>
      <div className="home__work__projects-container">
        {websites.map((el, index) => (
          <div
            key={index}
            className="home__work__projects-container__project"
            id={`project-${index}`}
          >
            <div className="home__work__projects-container__project__img-container">
              <img src={`./images/${el.img}`} alt={el.name} />
            </div>

            <div className="home__work__projects-container__project__content">
              <h3>
                {el.name} <span>{el.title}</span>
              </h3>
              <p>{el.desc}</p>
              <div className="home__work__projects-container__project__content__button-container">
                <a target="__blank" href={el.githubLink}>
                  <button type="button">
                    <FontAwesomeIcon className="icon" icon={faGithub} /> gitHub
                  </button>
                </a>
                <a target="__blank" href={el.wesiteLink}>
                  <button type="button">
                    visit site
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Link className="home__work__link" to="/dashboard">
        check out more
      </Link> */}
    </div>
  );
}

export default Work;
