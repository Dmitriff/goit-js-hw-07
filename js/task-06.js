const inputEl = document.getElementById("validation-input");

const dataLengthEl = inputEl.dataset.length;

console.log(dataLengthEl);

inputEl.addEventListener("blur", onInputElBlur);

function onInputElBlur(event) {
  console.log("onblur", inputEl.value.length);
  if (inputEl.value.length == dataLengthEl) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
