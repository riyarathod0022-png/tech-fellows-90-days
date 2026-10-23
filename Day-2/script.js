document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully: Personal Profile page is ready.");

  const button = document.getElementById("messageButton");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.textContent =
      "Great job! Keep practicing HTML, CSS, and JavaScript every day.";
  });
});
