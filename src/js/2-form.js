const form = document.querySelector('.feedback-form');

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.email.value = (savedFormData.email || '').trim();
form.message.value = (savedFormData.message || '').trim();

form.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
        
        const currentState = {
            email: form.email.value.trim(),
            message: form.message.value.trim()
        };
        
        localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
});
