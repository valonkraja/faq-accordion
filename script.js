let faq = document.querySelector(".faq");
let btns = document.querySelectorAll(".btn");
let answers = document.querySelectorAll(".answer");

faq.addEventListener("click", function (e) {
  const clicked = e.target;

  if (clicked.classList.contains("btn")) {
    answers.forEach((answer) => answer.classList.remove("active"));
    btns.forEach((btn) => btn.classList.remove("active"));
    clicked.classList.add("active");
    document
      .querySelector(`.answer-${clicked.dataset.q}`)
      .classList.add("active");
  }
});
