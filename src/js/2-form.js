const form = document.querySelector('.feedback-form');

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.email.value = savedFormData.email || '';
form.message.value = savedFormData.message || '';

form.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {

    const currentState = {
        email: form.email.value,
        message: form.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
});

    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
    email: form.email.value,
    message: form.message.value
    };
    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
});

