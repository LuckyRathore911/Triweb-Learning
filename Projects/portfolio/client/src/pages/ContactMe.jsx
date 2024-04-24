import { useNavigate } from "react-router-dom";
import { useState } from "react";

import MessageForm from "../components/MessageForm";

function ContactMe() {
  const navigate = useNavigate();
  const [senderName, setSenderName] = useState("");

  function userInputHandler(input) {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    /*this fetch request is only triggered by form submission, that's why re-rendering of the component 
    does not trigger any further fetch requests or state updates, hence does not form any infinite loop*/

    fetch(backendUrl, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //received from backend
      .then((data) => {
        console.log(data.status);
        setSenderName(data.sender.sender_name);
      })
      // .then(() => navigate("/", { replace: true }))
      .catch((err) => console.log(err));
  }
  return (
    <>
      {senderName ? (
        `Hi ${senderName}, your message has been received successfully!`
      ) : (
        <MessageForm userInputHandler={userInputHandler} />
      )}
    </>
  );
}

export default ContactMe;
