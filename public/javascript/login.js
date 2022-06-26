async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector("#username-signup").value = "";
  document.querySelector("#email-signup").value = "";
  document.querySelector("#password-signup").value = "";
}

async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const email = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector("#username-login").value = "";
  document.querySelector("#password-login").value = "";
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);