import MessageForm from "../components/MessageForm";

function ContactMe() {
  function userInputHandler(input) {
    const url = process.env.REACT_APP_BACKEND_URL
      ? process.env.REACT_APP_BACKEND_URL
      : "http://localhost:3002/contact-me";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //received from backend
      .then((data) => console.log(data.status))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <MessageForm userInputHandler={userInputHandler} />
    </>
  );
}

export default ContactMe;
