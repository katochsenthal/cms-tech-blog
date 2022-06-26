async function signupFormHandler(event) {
  console.log("click");
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

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
