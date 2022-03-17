import React from "react";
import Base from "../components/shared/Base";
import FullCase from "../components/shared/Cases";
import BottomList from "../components/shared/BottomList";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import "../styles/global.css";
const Home = () => {
  return (
    <Layout>
      <div>
        <Base
          h1="We're a UI UX design agency"
          h2="We design the best user experience"
        />
        <main>
          <FullCase path="home" />

          <BottomList
            name1="Our"
            name2="Collectives"
            name3="Culture"
            path="home"
          />
        </main>

        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
