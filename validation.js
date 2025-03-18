document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-section__form");
  const nameInput = form.querySelector("input[type='text']");
  const emailInput = form.querySelector("input[type='email']");
  const messageInput = form.querySelector("textarea");

  function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) return "Name must be at least 2 characters.";
    if (!/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/.test(value))
      return "Only letters allowed.";
    return "";
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    if (value === "") return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email format.";
    return "";
  }

  function validateMessage() {
    return messageInput.value.trim().length < 10
      ? "Message must be at least 10 characters."
      : "";
  }

  function showError(input, errorMessage) {
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error-message")) {
      errorElement = document.createElement("div");
      errorElement.classList.add("error-message");
      input.insertAdjacentElement("afterend", errorElement);
    }

    if (errorMessage) {
      input.classList.add("invalid");
      input.classList.remove("valid");
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
    } else {
      input.classList.remove("invalid");
      input.classList.add("valid");
      errorElement.style.display = "none";
    }
  }

  function validateInput(input) {
    if (input === nameInput) showError(input, validateName());
    if (input === emailInput) showError(input, validateEmail());
    if (input === messageInput) showError(input, validateMessage());
  }

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("blur", function () {
      validateInput(input);
    });

    input.addEventListener("input", function () {
      if (input.classList.contains("invalid")) {
        validateInput(input);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    [nameInput, emailInput, messageInput].forEach((input) => {
      validateInput(input);
      if (input.classList.contains("invalid")) {
        isValid = false;
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
      [nameInput, emailInput, messageInput].forEach((input) => {
        input.classList.remove("valid", "invalid");
        if (input.nextElementSibling?.classList.contains("error-message")) {
          input.nextElementSibling.style.display = "none";
        }
      });
    }
  });
});
