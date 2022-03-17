import * as React from "react";
import Layout from "../../components/layout/Layout";
import WorkCases from "../../components/shared/Cases";

const Work = () => {
  return (
    <Layout>
      <main>
        <WorkCases path="work" />
      </main>
    </Layout>
  );
};

export default Work;
