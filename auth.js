const input = document.querySelectorAll('.auth__input');
const button = document.querySelector('.deactivate-button');

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const nickName = document.querySelector('#nickname');

const emailError = document.querySelector('.email-error');
const paswordError = document.querySelector('.pasword-error');
const nickNameError = document.querySelector('.nickname-error');
const confirmError = document.querySelector('.confirm-error');

const patternEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const patternPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;


email.addEventListener('focusout', () => {
    if (email.value === '') {
        emailError.textContent = '이메일을 입력해주세요.';
        email.classList.add('error-input');
    } else if (patternEmail.test(email.value) === true) {
        emailError.textContent = '';
        email.classList.remove('error-input');
    } else {
        emailError.textContent = '잘못된 이메일입니다.';
        email.classList.add('error-input');
    }
});

password.addEventListener('focusout', () => {
    if (password.value === '') {
        paswordError.textContent = '비밀번호를 입력해주세요.';
        password.classList.add('error-input');
    } else if (patternPassword.test(password.value) === true) {
        paswordError.textContent = '';
        password.classList.remove('error-input');
    } else {
        paswordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
        password.classList.add('error-input');
    }
});

// nickName.addEventListener('focusout', () => {
//     if (nickName.value === '') {
//         nickNameError.textContent = '닉네임을 입력해주세요.';
//         nickName.classList.add('error-input');
//     } else {
//         paswordError.textContent = '';
//         password.classList.remove('error-input');
//     }
// });

// passwordConfirm.addEventListener('focusout', () => {
//     if (password.value !== passwordConfirm.value) {
//         confirmError.textContent = '비밀번호가 일치하지 않습니다.';
//         passwordConfirm.classList.add('error-input');
//     } else {
//         confirmError.textContent = '';r
//         passwordConfirm.classList.remove('error-input');
//     }
// })

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('focusout', () => {
        if (patternEmail.test(email.value) === true && patternPassword.test(password.value) === true && input.includes('')) {
            button.disabled = false;
            button.classList.add('button');
        } else {
            button.disabled = true;
            button.classList.remove('button');
        }
    });
}



// function checkInput() {
//     if (input.length === 2) {
//         if (patternEmail.test(email.value) === true && patternPassword.test(password.value) === true && input[0].value !== '' && input[1].value !== '') {
//             button.disabled = false;
//             button.classList.add('button');
//         } else {
//             button.disabled = true;
//             button.classList.remove('button');
//         }
//     } else {
//         if (patternEmail.test(email.value) === true && patternPassword.test(password.value) === true && ) {
//             button.disabled = false;
//             button.classList.add('button');
//         } else {
//             button.disabled = true;
//             button.classList.remove('button');
//         }
//     }
    
// }