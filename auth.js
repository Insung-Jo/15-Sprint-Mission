const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('.email-error');
const paswordError = document.querySelector('.pasword-error');
const submitButton = document.querySelector('.auth__submit-button');
const input = document.querySelectorAll('.auth__input');

email.addEventListener('focusout', () => {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (email.value == '') {
        emailError.textContent = '이메일을 입력해주세요.';
        email.classList.add('error-input');
    } else if (pattern.test(email.value) === true) {
        emailError.textContent = '';
        email.classList.remove('error-input');
    } else {
        emailError.textContent = '잘못된 이메일입니다.';
        email.classList.add('error-input');
    }
});

password.addEventListener('focusout', () => {
    const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (password.value == '') {
        paswordError.textContent = '비밀번호를 입력해주세요.';
        password.classList.add('error-input');
    } else if (pattern.test(password.value) === true) {
        paswordError.textContent = '';
        password.classList.remove('error-input');
    } else {
        paswordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
        password.classList.add('error-input');
    }
});

for (let i = 0; i < input.length; i++){
    input[i].addEventListener('focusout', () => {
        if (paswordError.value === '' && emailError.test === t || input[i].value !== '') console.log('없음음');
    });
}
