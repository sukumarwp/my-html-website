
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  formMessage.textContent =
    "Thanks, " + name + "! Your message was received in this demo.";

  contactForm.reset();
});