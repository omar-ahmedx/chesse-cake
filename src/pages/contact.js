import React from "react";
import Helmet from "react-helmet";
import Base from "../components/shared/Base";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";
import Layout from "../components/layout/Layout";
const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Design your Application with UI UX design agency- Cheesecake Agency
        </title>
      </Helmet>
      <div>
        <Base
          h1=" Hello! Hola! Howdy!"
          h2="Is it possible to become our new buddy?"
          text="We sincerely hope so! Please say ''hello'' to meet our team."
        />
        <main>
          <ContactInfo />
          <Form />
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
