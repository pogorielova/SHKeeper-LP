const burgerIcon = document.getElementById("burger-icon");
const navList = document.querySelector(".header__list");

burgerIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
});


document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-section__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-section__question");
    const answer = item.querySelector(".faq-section__answer");
    const icon = question.querySelector(".faq-section__icon");

    question.addEventListener("click", () => {
      const isActive = answer.classList.contains("active");

      document.querySelectorAll(".faq-section__answer").forEach((el) => {
        el.classList.remove("active");
        el.previousElementSibling.querySelector(".faq-section__icon").textContent = "+";
      });

      if (!isActive) {
        answer.classList.add("active");
        icon.textContent = "-";
      }
    });
  });
});

function toggleInfo(el) {
  el.classList.toggle("active");
}
