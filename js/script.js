const submit = document.querySelector(".submit-btn");
const rating = document.querySelector(".rating-card");
const thankYou = document.querySelector(".thank-you");
const ratingBtns = document.querySelectorAll(".rating-btn");
const selectedRating = document.querySelector(".selected-rating");

ratingBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    ratingBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  rating.classList.add("hidden");
  thankYou.classList.remove("hidden");
  selectedRating.textContent += `${document.querySelector(".active").textContent}`;
});
