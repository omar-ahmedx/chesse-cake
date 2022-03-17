import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as nav from "../../styles/nav.module.css";
import * as container from "../../styles/container.module.css";
import * as animation from "../../styles/animation.module.css";

const Nav = () => {
  return (
    <header>
      <div className={container.container}>
        <div className={nav.wrapper}>
          <div className={nav.logo_container}>
            <Link to="/">
              {/* <p>CheeseCake</p> */}
              <StaticImage
                src="../../images/logo.png"
                alt="cheeseCake"
                height={70}
              />
            </Link>
          </div>
          <nav className={nav.desktop}>
            <Link to="/work">
              <div className={`${nav.link} ${animation.deconstructed}`}>
                Work
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
                <div>Work</div>
              </div>
            </Link>
            <Link to="/culture">
              <div className={`${nav.link} ${animation.deconstructed}`}>
                Culture
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
                <div>Culture</div>
              </div>
            </Link>
            <Link to="/contact">
              <div className={`${nav.link} ${animation.deconstructed}`}>
                Contact
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
                <div>Contact</div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
