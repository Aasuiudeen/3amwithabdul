// // FAQ Section

// const faqQuestion = document.querySelectorAll(".faq-question");

// faqQuestion.forEach(function (question) {
//   const faqBtn = question.querySelector(".faq-btn");

//   faqBtn.addEventListener("click", function (e) {
//     const newQuestion = e.currenTarget;
//   });
//   console.log(question);
// });

// traversing the dom
const btns = document.querySelectorAll(".faq-question");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.lastChild.previousElementSibling;

    question.classList.toggle("open-faq-content");
    console.log(question);
  });
});
