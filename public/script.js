const submitButton = document.querySelector(".submit_btn");
const ratingSelection = document.querySelectorAll(".circle");
const ratingSelectionElement = document.querySelector(".rating_element");
const finalElement = document.querySelector(".final_element");
const ratingElement = document.querySelector(".rating");
const insertElement = document.querySelector(".insert_element");

ratingSelection.forEach(function (circle, idx) {
  circle.addEventListener("click", function () {
    hideAllActive();
    circle.classList.add("bg-Neutral-Light_Grey");
    circle.classList.add("text-white");
    ratingElement.textContent = `${idx + 1}`;
  });
});

function hideAllActive() {
  ratingSelection.forEach(function (item) {
    item.classList.remove("bg-Neutral-Light_Grey");
    item.classList.remove("text-white");
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  ratingSelectionElement.classList.add("hidden");
  finalElement.classList.remove("hidden");
});
//  removing element before adding in
