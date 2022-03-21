import React from "react";
import "@fontsource/inter";
import "@fontsource/gilda-display";
import "@fontsource/ibm-plex-mono";
import Footer from "./Footer";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Helmet from "react-helmet";
import SideNav from "./SideNav";
import { useEffect } from "react";
const Layout = ({ path, children }) => {
  useEffect(() => {
    let delay;
    var cursor = {
      delay: delay ? 8 : 1,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector(".cursor-dot"),
      $outline: document.querySelector(".cursor-dot-outline"),

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      setupEventListeners: function () {
        var self = this;

        document.addEventListener("mousemove", function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + "px";
          self.$dot.style.left = self.endX + "px";
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + "px";
        self.$outline.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
          self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
        }
      },

      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      },
    };
    cursor.init();
  });
  useEffect(() => {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("nav").classList.add("animate-nav");
    if (document.querySelector(".slide-header")) {
      document.querySelector(".slide-header").classList.add("animate-header");
    }
    let list = document.querySelectorAll(".mouse-hover");
    list.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-dot").classList.add("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.add("eye-outline");
      });
      item.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-dot").classList.remove("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
      });
    });
  });
  useEffect(() => {
    if (path === "work") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  });
  return (
    <div>
      <Helmet>
        <meta
          name="p:domain_verify"
          content="44916985ed4481958cdd3c8e32146400"
        />
        <meta
          name="pinterest-site-verification"
          content="44916985ed4481958cdd3c8e32146400"
        />
        <meta
          name="description"
          content="UI UX design agency that helps you to make interface user-oriented & increasing customer experience. let UI design agency design your website and app- Cheesecake Agency"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1,  max-video-preview:-1, max-image-preview:large"
        />
        <meta
          name="Keyword"
          content="UI UX design agency | UI & UX design agency | UI design agency | best UX design agencies"
        />
        <link rel="canonical" href="https://cheesecake.agency" />
        <link
          rel="alternate"
          href="https://cheesecake.agency/"
          hreflang="en-us"
        />
      </Helmet>
      <div className="cursor-dot-outline"></div>
      <div className="cursor-dot">
        <p className="drag">
          <span className="arrow-left"></span>DRAG
          <span className="arrow-right"></span>
        </p>
      </div>
      <SideNav />
      <header>
        <Nav path={path} />
        <MobileNav path={path} />
      </header>
      {children}
      <Footer path={path} />
    </div>
  );
};

export default Layout;
