const form = document.getElementById("form");
const location1 = document.getElementById("location1");
const email = document.getElementById("email");
const industry = document.getElementById("industry");
const service = document.getElementById("service");
const cart = document.getElementById("mounth");
const sales = document.getElementById("sales");
const locationSel = document.getElementById("location-iput");
const loc1 = document.getElementById("loc1");
const loc2 = document.getElementById("loc2");
const loc3 = document.getElementById("loc3");
const ind1 = document.getElementById("ind1");
const ind2 = document.getElementById("ind2");
const ind3 = document.getElementById("ind3");
const ser1 = document.getElementById("ser1");
const ser2 = document.getElementById("ser2");
const ser3 = document.getElementById("ser3");

location1.addEventListener("click", (e) => {
  e.preventDefault();
  option1.style.display = option1.style.display === "none" ? "block" : "none";
});
industry.addEventListener("click", (e) => {
  e.preventDefault();
  option2.style.display = option2.style.display === "none" ? "block" : "none";
});
service.addEventListener("click", (e) => {
  e.preventDefault();
  option3.style.display = option3.style.display === "none" ? "block" : "none";
});
cart.addEventListener("click", (e) => {
  e.preventDefault();
  option4.style.display = option4.style.display === "none" ? "block" : "none";
});

sales.addEventListener("click", (e) => {
  e.preventDefault();
  option5.style.display = option5.style.display === "none" ? "block" : "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

loc1.addEventListener("click", (e) => {
  e.preventDefault();
  location1.value = "Option 1";
  option1.style.display = option1.style.display === "none" ? "block" : "none";
});
loc2.addEventListener("click", (e) => {
  e.preventDefault();
  location1.value = "Option 2";
  option1.style.display = option1.style.display === "none" ? "block" : "none";
});
loc3.addEventListener("click", (e) => {
  e.preventDefault();
  location1.value = "Option 3";
  option1.style.display = option1.style.display === "none" ? "block" : "none";
});

ind1.addEventListener("click", (e) => {
  e.preventDefault();
  industry.value = "Option 1";
  option2.style.display = option2.style.display === "none" ? "block" : "none";
});
ind2.addEventListener("click", (e) => {
  e.preventDefault();
  industry.value = "Option 2";
  option2.style.display = option2.style.display === "none" ? "block" : "none";
});
ind3.addEventListener("click", (e) => {
  e.preventDefault();
  industry.value = "Option 3";
  option2.style.display = option2.style.display === "none" ? "block" : "none";
});

ser1.addEventListener("click", (e) => {
  e.preventDefault();
  service.value = "Option 1";
  option3.style.display = option3.style.display === "none" ? "block" : "none";
});
ser2.addEventListener("click", (e) => {
  e.preventDefault();
  service.value = "Option 2";
  option3.style.display = option3.style.display === "none" ? "block" : "none";
});
ser3.addEventListener("click", (e) => {
  e.preventDefault();
  service.value = "Option 3";
  option3.style.display = option3.style.display === "none" ? "block" : "none";
});

cart1.addEventListener("click", (e) => {
  e.preventDefault();
  cart.value = "Option 1";
  option4.style.display = option4.style.display === "none" ? "block" : "none";
});
cart2.addEventListener("click", (e) => {
  e.preventDefault();
  cart.value = "Option 2";
  option4.style.display = option4.style.display === "none" ? "block" : "none";
});
cart3.addEventListener("click", (e) => {
  e.preventDefault();
  cart.value = "Option 3";
  option4.style.display = option4.style.display === "none" ? "block" : "none";
});

sale1.addEventListener("click", (e) => {
  e.preventDefault();
  sales.value = "Option 1";
  option5.style.display = option5.style.display === "none" ? "block" : "none";
});
sale2.addEventListener("click", (e) => {
  e.preventDefault();
  sales.value = "Option 2";
  option5.style.display = option5.style.display === "none" ? "block" : "none";
});
sale3.addEventListener("click", (e) => {
  e.preventDefault();
  sales.value = "Option 3";
  option5.style.display = option5.style.display === "none" ? "block" : "none";
});

const checkInputs = () => {
  const emailValue = email.value.trim();
  const locationValue = location1.value;
  const industryValue = industry.value;
  const serviceValue = service.value;
  const cartValue = cart.value;
  const salesValue = sales.value;
  console.log("industryValue", industryValue);

  if (locationValue === "") {
    const error = document.getElementById("error1");
    error.style.visibility = "visible";
    location1.style.border = "1px solid #e74c3c";
  } else {
    const error = document.getElementById("error1");
    error.style.visibility = "hidden";
    location1.style.border = "1px solid #becad6";
  }
  if (!emailValue) {
    const error = document.getElementById("error2");
    error.style.visibility = "visible";
    email.style.border = "1px solid #e74c3c";
  } else if (!isEmail(emailValue)) {
    const error = document.getElementById("error2");
    error.style.visibility = "visible";
    email.style.border = "1px solid #e74c3c";
  } else {
    const error = document.getElementById("error2");
    error.style.visibility = "hidden";
    email.style.border = "1px solid #becad6";
  }

  if (industryValue === "") {
    const error = document.getElementById("error3");
    error.style.visibility = "visible";
    industry.style.border = "1px solid #e74c3c";
  } else {
    const error = document.getElementById("error3");
    error.style.visibility = "hidden";
    industry.style.border = "1px solid #becad6";
  }
  if (serviceValue === "") {
    const error = document.getElementById("error4");
    error.style.visibility = "visible";
    service.style.border = "1px solid #e74c3c";
  } else {
    const error = document.getElementById("error4");
    error.style.visibility = "hidden";
    service.style.border = "1px solid #becad6";
  }
  if (cartValue === "") {
    const error = document.getElementById("error5");
    error.style.visibility = "visible";
    cart.style.border = "1px solid #e74c3c";
  } else {
    const error = document.getElementById("error5");
    error.style.visibility = "hidden";
    cart.style.border = "1px solid #becad6";
  }
  if (salesValue === "") {
    const error = document.getElementById("error6");
    error.style.visibility = "visible";
    sales.style.border = "1px solid #e74c3c";
  } else {
    const error = document.getElementById("error6");
    error.style.visibility = "hidden";
    sales.style.border = "1px solid #becad6";
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; //this is the .form-control
  const small = document.getElementsByClassName("small");
  //add error message inside small
  small.innerText = message;
  service.style.backgroundColor = "red";

  //add error class
  small.className = "error";
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement; //this is the .form-control

  //add success class
  formControl.className = "success";
};

const isEmail = (email) => {
  //this checks if the email is valid
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
