import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as footer from "../../styles/footer.module.css";
import * as container from "../../styles/container.module.css";
import * as dark from "../../styles/dark.module.css";

import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsPinterest,
  BsMedium,
} from "react-icons/bs";
const Footer = ({ path }) => {
  const cheesecake = [0, 1, 2, 3];
  return (
    <footer>
      <div
        className={`${footer.links_container} ${container.container_footer}`}
      >
        <div className={footer.links_wrapper}>
          <div
            className={path === "work" ? dark.light_footer_link : footer.links}
          >
            <Link to="/">Home</Link>
            <div
              className={
                path === "work"
                  ? dark.light_border_expand
                  : footer.border_expand
              }
            ></div>
          </div>
          <div
            className={path === "work" ? dark.light_footer_link : footer.links}
          >
            <Link to="/work">Work</Link>
            <div
              className={
                path === "work"
                  ? dark.light_border_expand
                  : footer.border_expand
              }
            ></div>
          </div>
          <div
            className={path === "work" ? dark.light_footer_link : footer.links}
          >
            <Link to="/Culture">Culture</Link>
            <div
              className={
                path === "work"
                  ? dark.light_border_expand
                  : footer.border_expand
              }
            ></div>
          </div>

          <div
            className={path === "work" ? dark.light_footer_link : footer.links}
          >
            <Link to="/Culture">Contact</Link>
            <div
              className={
                path === "work"
                  ? dark.light_border_expand
                  : footer.border_expand
              }
            ></div>
          </div>
        </div>

        <div>
          <div
            className={
              path === "work" ? dark.light_footer_btn : footer.footer_btn
            }
          >
            <div
              className={
                path === "work" ? dark.light_footer_line : footer.footer_line
              }
            ></div>{" "}
            <div>Work With Us</div>
          </div>

          <div
            className={
              path === "work" ? dark.light_social_links : footer.social_links
            }
          >
            <a
              href="https://www.instagram.com/cheesecake_agency/"
              className="mouse-hover"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/cheesecake-design-6b6b55207/"
              className="mouse-hover"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://in.pinterest.com/cheesecakeagency/_created/"
              className="mouse-hover"
            >
              <BsPinterest />
            </a>
            <a
              href="https://twitter.com/cheesecake0709"
              className="mouse-hover"
            >
              <BsTwitter />
            </a>
            <a
              href="https://medium.com/@Cheesecake_Agency"
              className="mouse-hover"
            >
              <BsMedium />
            </a>
          </div>
        </div>
      </div>

      <div className={footer.outer_container}>
        <div className={footer.inner_container}>
          {cheesecake.map((i) => (
            <div key={i} className={path === "work" ? dark.light_color : ""}>
              <span>cheesecake</span>
              <span className={footer.logo}>
                {path === "work" ? (
                  <StaticImage
                    alt="cheesecake"
                    src="../../images/whiteLogo.png"
                  />
                ) : (
                  <StaticImage alt="cheesecake" src="../../images/logo.png" />
                )}
              </span>
              <span>cheesecake</span>
              <span className={footer.logo}>
                {path === "work" ? (
                  <StaticImage
                    alt="cheesecake"
                    src="../../images/whiteLogo.png"
                  />
                ) : (
                  <StaticImage alt="cheesecake" src="../../images/logo.png" />
                )}
              </span>
              <span>cheesecake</span>
              <span className={footer.logo}>
                {path === "work" ? (
                  <StaticImage
                    alt="cheesecake"
                    src="../../images/whiteLogo.png"
                  />
                ) : (
                  <StaticImage alt="cheesecake" src="../../images/logo.png" />
                )}
              </span>
              <span>cheesecake</span>
              <span className={footer.logo}>
                {path === "work" ? (
                  <StaticImage
                    alt="cheesecake"
                    src="../../images/whiteLogo.png"
                  />
                ) : (
                  <StaticImage alt="cheesecake" src="../../images/logo.png" />
                )}
              </span>
              <span>cheesecake</span>
              <span className={footer.logo}>
                {path === "work" ? (
                  <StaticImage
                    alt="cheesecake"
                    src="../../images/whiteLogo.png"
                  />
                ) : (
                  <StaticImage alt="cheesecake" src="../../images/logo.png" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${footer.trademark} ${
          path === "work" ? dark.light_color : ""
        }`}
      >
        <span>Cheesecake 2022 </span>
      </div>
    </footer>
  );
};

export default Footer;
