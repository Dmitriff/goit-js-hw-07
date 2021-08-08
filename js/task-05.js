const inputEl = document.querySelector('[type="text"]');

const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value.trim() || "незнакомец";
}
