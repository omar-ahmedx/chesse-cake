import * as React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout/Layout";
import WorkCases from "../../components/shared/Cases";

const Work = () => {
  return (
    <Layout path="work">
      <Helmet>
        <title>
          Design your Application with UI UX design agency- Cheesecake Agency
        </title>
      </Helmet>
      <main>
        <WorkCases path="work" />
      </main>
    </Layout>
  );
};

export default Work;
