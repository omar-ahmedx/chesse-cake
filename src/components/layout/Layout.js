import React from "react";
import "@fontsource/inter";
import "@fontsource/gilda-display";
import "@fontsource/ibm-plex-mono";
import Footer from "./Footer";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Helmet from "react-helmet";
import SideNav from "./SideNav";

const Layout = ({ path, children }) => {
  if (path === "work") {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
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
