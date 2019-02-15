import * as React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2 className="contact-me-size">
          <strong>
            <u>Contact Me</u>
          </strong>
        </h2>
        <form
          className="form-design"
          action="https://formspree.io/wbray053@gmail.com"
          method="POST"
        >
          <input
            className="name-box-size"
            placeholder=" Name"
            type="text"
            name="name"
          />
          <input
            className="email-box-size"
            placeholder=" Email"
            type="email"
            name="_replyto"
          />
          <textarea
            className="question-box-size"
            placeholder="Type your inquiry here."
            name="question-box-size"
            type="text"
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Form;
