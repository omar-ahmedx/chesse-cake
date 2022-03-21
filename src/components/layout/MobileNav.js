import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as nav from "../../styles/nav.module.css";
import * as section from "../../styles/container.module.css";

const MobileNav = ({ path }) => {
  const open = () => {
    document.querySelector("#side-nav").classList.add("show");
  };
  return (
    <div>
      <div className={section.container}>
        <div
          className={
            path === "work" ? nav.mobile_wrapper_dark : nav.mobile_wrapper
          }
        >
          <div className={nav.logo_container}>
            <Link to="/">
              {path === "work" ? (
                <StaticImage
                  src="../../images/whiteText.png"
                  alt="cheeseCake"
                  height={25}
                />
              ) : (
                <StaticImage
                  src="../../images/textLogo.png"
                  alt="cheeseCake"
                  height={25}
                />
              )}
            </Link>
          </div>
          <div className="mobile-nav-exit" onClick={open}>
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              style={path === "work" ? { fill: "white" } : { fill: "black" }}
            >
              <rect x="20" y="30" width="65" height="7"></rect>
              <rect y="50" width="65" height="7"></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
