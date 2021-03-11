const buttonWrapper = document.querySelector(".button-wrapper");
const formShow = document.querySelector(".form-show");
const arrivalDate = formShow.querySelector("#arrival-date-field");
const departureDate = formShow.querySelector("#departure-date-field");
const adult = formShow.querySelector("#adults-number-field");
const child = formShow.querySelector("#child-number-field");

let isStorageSupport = true;
let storageAdult = "";
let storageChild = "";

 try {
  storageAdult = localStorage.getItem("adult");
  storageChild = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdult) {
  adult.value = storageAdult;
}

if(storageChild) {
  child.value = storageChildren;
}

formShow.classList.add("form-show-hidden");

buttonWrapper.addEventListener("click", function(event) {
  event.preventDefault();
  if (formShow.classList.contains("form-show-hidden")) {
    formShow.classList.remove("form-show-hidden");
    arrivalDate.focus();
  } else {
    formShow.classList.add("form-show-hidden");
    formShow.classList.remove("form-show-error");
  }
})

formShow.addEventListener("submit", function(event) {
  if (!arrivalDate.value || !departureDate.value || !adult.value) {
    event.preventDefault();
    formShow.classList.remove("form-show-error");
    formShow.offsetWidth = formShow.offsetWidth;
    formShow.classList.add("form-show-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("child", child.value);
    }
  }
})

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!formShow.classList.contains("form-show-hidden")) {
      event.preventDefault();
      formShow.classList.add("form-show-hidden");
      formShow.classList.remove("form-show-error");
    }
  }
})



