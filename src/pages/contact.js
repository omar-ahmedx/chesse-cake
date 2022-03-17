import React from "react";
import Base from "../components/shared/Base";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";
import Layout from "../components/layout/Layout";
const Contact = () => {
  return (
    <Layout>
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
