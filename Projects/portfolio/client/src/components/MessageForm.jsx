import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Styles from "../styles/MessageForm.module.css";

const MessageForm = (props) => {
  const sender_name_ref = useRef();
  const sender_email_id_ref = useRef();
  const sender_message_ref = useRef();

  const form = useRef();
  const id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  function submitHandler(event) {
    event.preventDefault();

    const sender_name = sender_name_ref.current.value;
    const sender_email_id = sender_email_id_ref.current.value;
    const sender_message = sender_message_ref.current.value;

    const sender = {
      sender_name,
      sender_email_id,
      sender_message,
    };
    props.userInputHandler(sender);

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
          <input
            type="text"
            id="sender_name"
            name="sender_name"
            ref={sender_name_ref}
          ></input>
        </div>

        <div className="">
          <label htmlFor="sender_email_id">Email Id</label>
          <input
            type="email"
            id="sender_email_id"
            name="sender_email_id"
            ref={sender_email_id_ref}
          ></input>
        </div>

        <div className="">
          <label htmlFor="sender_message">Message</label>
          <textarea
            id="sender_message"
            name="sender_message"
            ref={sender_message_ref}
          ></textarea>
        </div>

        <button>Send</button>
      </form>
    </>
  );
};

export default MessageForm;
