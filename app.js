document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const emailLabel = document.getElementById('emailLabel');
    const errorSpan = document.getElementById('errorSpan');

    if (emailInput.value !== '') {
        emailLabel.style.transform = 'translate(0%,-75%)'
        emailLabel.style.fontSize = '12px'
    }

    emailInput.addEventListener('input', () => {
        const isValidEmail = validateEmail(emailInput.value);
        if (emailInput.value !== '') {
            emailLabel.style.transform = 'translate(0%,-75%)';
        }
        else {
            emailLabel.style.transform = 'none'
        }
        if (isValidEmail) {
            errorSpan.style.display = 'none';
        } else {
            errorSpan.style.display = 'inline';
        }
    })

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});