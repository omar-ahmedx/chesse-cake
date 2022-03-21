import React from "react";
import * as form from "../../styles/contact.module.css";
import * as container from "../../styles/container.module.css";

const Form = () => {
  return (
    <section>
      <div className={container.container_form}>
        <h2>Still Curious?</h2>
        <p>Need help saying hello, try our contact form</p>
        <div>
          {/* <form ref={form} onSubmit={sendEmail}> */}
          <form>
            <div className={form.row}>
              <label>
                <div>Email |</div>
                <input
                  required="True"
                  name="user_email"
                  type="email"
                  placeholder="hello@youlooknice.com"
                />
              </label>
              <label>
                <div>Subject |</div>
                <input
                  required="True"
                  name="subject"
                  type="text"
                  placeholder="tell us about your dream"
                />
              </label>
            </div>

            <div className={form.row}>
              <label>
                <div>First Name |</div>
                <input
                  required="True"
                  name="fisrt_name"
                  type="text"
                  placeholder="your given name"
                />
              </label>
              <label>
                <div>Last Name |</div>
                <input
                  required="True"
                  name="last_name"
                  type="text"
                  placeholder="your family name"
                />
              </label>
            </div>

            <label htmlFor="messageg">
              <div>Message | </div>
            </label>
            <div>
              <textarea
                required="True"
                name="message"
                placeholder="We are excited to hear from you. Truly. It makes our day. Maybe, you need UI UX for a mobile application, game, website or an innovative software. We are ready to make something amazing with you."
              ></textarea>
            </div>
            <div>
              <button type="submit" className={form.form_btn}>
                <div className={form.form_line}></div> <div>Let's Talk</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
