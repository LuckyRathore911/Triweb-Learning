import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Styles from "../styles/MessageForm.module.css";

const MessageForm = () => {
  const form = useRef();
  const id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  function submitHandler(event) {
    event.preventDefault();

    emailjs
      .sendForm(`${id}`, `${template}`, form.current, {
        publicKey: `${key}`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <>
      <form className={Styles.form} ref={form} onSubmit={submitHandler}>
        <div className="">
          <label htmlFor="sender_name">Name</label>
          <input type="text" id="sender_name" name="sender_name"></input>
        </div>

        <div className="">
          <label htmlFor="sender_email_id">Email Id</label>
          <input
            type="email"
            id="sender_email_id"
            name="sender_email_id"
          ></input>
        </div>

        <div className="">
          <label htmlFor="sender_message">Message</label>
          <textarea id="sender_message" name="sender_message"></textarea>
        </div>

        <button>Send</button>
      </form>
    </>
  );
};

export default MessageForm;
