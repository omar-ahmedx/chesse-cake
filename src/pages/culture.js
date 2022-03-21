import React from "react";
import Helmet from "react-helmet";
import Bases from "../components/shared/Base";
import Layout from "../components/layout/Layout";
import BottomList from "../components/shared/BottomList";
import How from "../components/culture/HowSection";
import Slider from "../components/culture/Slider";
import Team from "../components/culture/Team";

const Culture = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Design your Application with UI UX design agency- Cheesecake Agency
        </title>
      </Helmet>
      <div>
        <Bases
          h1="Made to make"
          h2=" We're a team of creatives who believe in designing user
                interfaces and experiences that are meaningful, unforgettable,
                and enjoyable."
        />
        <main>
          <Slider />
          <How />
          <BottomList
            name1="Digital"
            name2="Experiential"
            name3="Social"
            path="culture"
          />
          <Team />
        </main>
      </div>
    </Layout>
  );
};

export default Culture;
