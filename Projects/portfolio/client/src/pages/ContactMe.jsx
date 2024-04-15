import React from "react";
import { useRef } from "react";

const ContactMe = () => {
  const sender_name_ref = useRef();
  const sender_email_id_ref = useRef();
  const sender_message_ref = useRef();

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
    console.log(sender);
  }

  return (
    <>
      <form className="" onSubmit={submitHandler}>
        <div className="">
          <label htmlFor="sender_name">Name</label>
          <input type="text" id="sender_name" ref={sender_name_ref}></input>
        </div>

        <div className="">
          <label htmlFor="sender_email_id">Email Id</label>
          <input
            type="email"
            id="sender_email_id"
            ref={sender_email_id_ref}
          ></input>
        </div>

        <div className="">
          <label htmlFor="sender_message">Message</label>
          <textarea id="sender_message" ref={sender_message_ref}></textarea>
        </div>

        <button>Send</button>
      </form>
    </>
  );
};

export default ContactMe;
