async function addPost(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document
    .querySelector('input[name="post-content"]')
    .value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.querySelector('input[name="post-title"]').value = "";
  document.querySelector('input[name="post-content"]').value = "";

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
    å;
  }
}

document.querySelector(".new-post-form").addEventListener("submit", addPost);
