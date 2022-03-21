import React from "react";
import * as container from "../../styles/container.module.css";
import * as contact from "../../styles/contact.module.css";

const ContactInfo = () => {
  return (
    <section className={container.container_contact}>
      <div className={contact.contact_info_wrapper}>
        <div>
          <h2>Contact</h2>
          <div>
            <p>+1 413 489 1720</p>
          </div>
        </div>
        <div>
          <h2>Hello</h2>
          <div>
            <p>
              <a href="mailto: hello@cheesecake.agency">
                hello@cheesecake.agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
