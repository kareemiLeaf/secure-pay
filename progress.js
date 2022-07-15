const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");
const step6 = document.getElementById("step6");

step1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});

step2.addEventListener("click", (e) => {
  e.preventDefault();
  step1.src = "images/5.png";
  step2.src = "images/2.png";
});

step3.addEventListener("click", (e) => {
  e.preventDefault();
  step2.src = "images/5.png";
  step3.src = "images/2.png";
});

step4.addEventListener("click", (e) => {
  e.preventDefault();
  step3.src = "images/3.png";
  step4.src = "images/2.png";
});
step5.addEventListener("click", (e) => {
  e.preventDefault();
  step4.src = "images/4.png";
  step5.src = "images/2.png";
});

step6.addEventListener("click", (e) => {
  e.preventDefault();
  step5.src = "images/5.png";
  step6.src = "images/2.png";
});
