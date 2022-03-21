import React from "react";
import Base from "../components/shared/Base";
import FullCase from "../components/shared/Cases";
import BottomList from "../components/shared/BottomList";
import Layout from "../components/layout/Layout";
import "../styles/global.css";
import Helmet from "react-helmet";
const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Design your Application with UI UX design agency- Cheesecake Agency
        </title>
      </Helmet>
      <div>
        <Base
          h1="We are a UI UX design agency."
          h2="We design the best user experience"
        />
        <main>
          <FullCase path="home" />

          <BottomList
            name1="Our"
            name2="Collective's"
            name3="Culture"
            path="home"
          />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
