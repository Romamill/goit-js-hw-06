const loginFormEl = document.querySelector('form');

loginFormEl.addEventListener('submit', function(e) {
    e.preventDefault();   


const emailEl = loginFormEl.elements.email.value;
const passwordEl = loginFormEl.elements.password.value;

if (emailEl === '' || passwordEl === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
};

const dataFormEl = {
    emailEl,
    passwordEl,
};

console.log(dataFormEl);

loginFormEl.reset();
});


