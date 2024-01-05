const form = document.querySelector(".feedback-form");
const formElements = document.querySelectorAll('.feedback-form input, .feedback-form textarea');
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

let formData = {}; 
form.addEventListener("input", (evt) => {
    formElements.forEach(function (element) {
        formData[element.name] = element.value;
    });
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});