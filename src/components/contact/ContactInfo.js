import React from "react";

const ContactInfo = () => {
  return (
    <section className="staff-container">
      <div className="staff-section">
        <div className="staff">
          <h2>Contact</h2>
          <div className="border-bottom mouse-hover">
            <p>+1 413 489 1720</p>
          </div>
        </div>
        <div className="staff">
          <h2>Hello</h2>
          <div>
            <p className="border-bottom mouse-hover">
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
