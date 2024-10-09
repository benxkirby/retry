document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє відправлення форми

    // Скидання попередніх повідомлень про помилки
    resetErrors();

    let isValid = true;

    // Валідація логіна
    const username = document.getElementById('username').value;
    if (username.length < 5) {
        showError('usernameError', 'Логін повинен містити мінімум 5 символів.');
        isValid = false;
    }

    // Валідація імені
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Zа-їА-ЯёЁіІїЇ]+$/.test(name)) {
        showError('nameError', 'Ім\'я повинно містити лише літери.');
        isValid = false;
    }

    // Валідація електронної пошти
    const email = document.getElementById('email').value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        showError('emailError', 'Некоректний формат електронної пошти.');
        isValid = false;
    }

    // Валідація пароля
    const password = document.getElementById('password').value;
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        showError('passwordError', 'Пароль повинен містити мінімум 8 символів, одну велику літеру та цифру.');
        isValid = false;
    }

    // Валідація номера телефону
    const phone = document.getElementById('phone').value;
    if (!/^\+?[0-9]{10,15}$/.test(phone)) {
        showError('phoneError', 'Некоректний формат номера телефону.');
        isValid = false;
    }

    // Валідація дати народження
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    if (dob >= today) {
        showError('dobError', 'Дата народження не може бути в майбутньому.');
        isValid = false;
    }

    // Якщо всі дані коректні, форма може бути надіслана
    if (isValid) {
        alert('Реєстрація успішна!');
        // Тут можна виконати додаткові дії, наприклад, надіслати форму на сервер
    }
});

// Функція для показу повідомлення про помилку
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Функція для скидання повідомлень про помилки
function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
}
