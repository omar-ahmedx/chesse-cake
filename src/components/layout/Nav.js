import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as nav from "../../styles/nav.module.css";
import * as section from "../../styles/container.module.css";
import * as animation from "../../styles/animation.module.css";

const Nav = ({ path }) => {
  return (
    <div>
      <div className={section.container}>
        <div className={nav.desktop_wrapper}>
          <div className={nav.logo_container}>
            <Link to="/">
              {/* <p>CheeseCake</p> */}
              {path === "work" ? (
                <StaticImage
                  src="../../images/whiteLogo.png"
                  alt="cheeseCake"
                  height={70}
                />
              ) : (
                <StaticImage
                  src="../../images/logo.png"
                  alt="cheeseCake"
                  height={70}
                />
              )}
            </Link>
          </div>
          <nav className={nav.desktop}>
            <Link
              to="/work"
              activeStyle={
                path === "work"
                  ? { borderBottomColor: "white" }
                  : { borderBottomColor: "black" }
              }
            >
              <div
                className={`${nav.link} ${
                  path === "work"
                    ? animation.deconstructed_light
                    : animation.deconstructed
                }`}
              >
                Work
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
              </div>
            </Link>
            <Link
              to="/culture"
              activeStyle={
                path === "work"
                  ? { borderBottomColor: "white" }
                  : { borderBottomColor: "black" }
              }
            >
              <div
                className={`${nav.link} ${
                  path === "work"
                    ? animation.deconstructed_light
                    : animation.deconstructed
                }`}
              >
                Culture
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
              </div>
            </Link>
            <Link
              to="/contact"
              activeStyle={
                path === "work"
                  ? { borderBottomColor: "white" }
                  : { borderBottomColor: "black" }
              }
            >
              <div
                className={`${nav.link} ${
                  path === "work"
                    ? animation.deconstructed_light
                    : animation.deconstructed
                }`}
              >
                Contact
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
              </div>
            </Link>
            <Link
              to="/blog"
              activeStyle={
                path === "work"
                  ? { borderBottomColor: "white" }
                  : { borderBottomColor: "black" }
              }
            >
              <div
                className={`${nav.link} ${
                  path === "work"
                    ? animation.deconstructed_light
                    : animation.deconstructed
                }`}
              >
                Blog
                <div>Blog</div>
                <div>Blog</div>
                <div>Blog</div>
                <div>Blog</div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
