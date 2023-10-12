document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let text_reg_exp = /^[a-zA-Z]+$/i;
  let email_reg_exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phone_reg_exp = /^(?:\+\d{1,3}\s?)?(\d{10})$/;

  let first_name = document.getElementById("first-name").value;
  let last_name = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let age = parseInt(document.getElementById("age").value);

  if (text_reg_exp.test(first_name)) {
    document.getElementById("fname_error").textContent = "";
  } else {
    document.getElementById("fname_error").textContent = "invalid";
    return;
  }
  if (text_reg_exp.test(last_name)) {
    document.getElementById("lname_error").textContent = "";
  } else {
    document.getElementById("lname_error").textContent = "invalid";
    return;
  }
  if (email_reg_exp.test(email)) {
    document.getElementById("email_error").textContent = "";
  } else {
    document.getElementById("email_error").textContent = "invalid";
    return;
  }
  if (phone_reg_exp.test(phone)) {
    document.getElementById("phone_error").textContent = "";
  } else {
    document.getElementById("phone_error").textContent = "invalid";
    return;
  }
  if (age >= 1 && age <= 130) {
    document.getElementById("age_error").textContent = "";
  } else {
    document.getElementById("age_error").textContent = "invalid";
    return;
  }
  window.location.href = "formSubmitted.html";
});
