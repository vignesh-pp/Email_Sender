import emailjs from "emailjs-com";
import React from "react";

export default function Mailer() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_anwznjg",
        "template_ros17ml",
        e.target,
        "lD1ZwrYPOAmlOcnaH"
      )
      .then((res) => console.log("send successfully", res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container" style={{ width: "500px" }}>
      <h2>PAIN REMOVING FORM</h2>
      <form onSubmit={sendEmail}>
        <div class="form-group">
          <label for="name" style={{ textAlign: "left" }}>
            Name
          </label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            name="name"
            required
            autoComplete={false}
          />
          {/* <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="email"
            name="user_email"
            required
            autoComplete={false}
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            // type="text"
            class="form-control"
            placeholder="Your lovely message for your loved one"
            name="message"
            required
            autoComplete={false}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
