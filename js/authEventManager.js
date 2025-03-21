import {
    inputs, loginButton, signUpButton, email, password, passwordConfirm, nickName, emailError,
    passwordError, nickNameError, confirmError
} from './authConstants.js'; 

let isEmail = false;
let isPassword = false;
let isNickName = false;
let isConfirm = false;

const checkEmail = () => {
    const patternEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (email.value === '') {
        emailError.textContent = '이메일을 입력해주세요.';
        email.classList.add('error-input');
        isEmail = false;
    } else if (patternEmail.test(email.value) === true) {
        emailError.textContent = '';
        email.classList.remove('error-input');
        isEmail = true;
    } else {
        emailError.textContent = '잘못된 이메일입니다.';
        email.classList.add('error-input');
        isEmail = false;
    }
}

const checkPassword = () => {
    const patternPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (password.value === '') {
        passwordError.textContent = '비밀번호를 입력해주세요.';
        password.classList.add('error-input');
        isPassword = false;
    } else if (patternPassword.test(password.value) === true) {
        passwordError.textContent = '';
        password.classList.remove('error-input');
        isPassword = true;
    } else {
        passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
        password.classList.add('error-input');
        isPassword = false;
    }
}

const checkNickname = () => {
    if (nickName.value === '') {
        nickNameError.textContent = '닉네임을 입력해주세요.';
        nickName.classList.add('error-input');
        isNickName = false;
    } else {
        nickNameError.textContent = '';
        nickName.classList.remove('error-input');
        isNickName = true;
    }
}

const checkPasswordConfirm = () => {
    if (passwordConfirm.value !== password.value) {
        confirmError.textContent = '비밀번호가 일치하지 않습니다.';
        passwordConfirm.classList.add('error-input');
        isConfirm = false;
    } else if (passwordConfirm.value === password.value) {
        confirmError.textContent = '';
        passwordConfirm.classList.remove('error-input');
        isConfirm = true;
    }
}



const updateSubmitButtonState = () => {
    if (inputs.length === 2) {
        if (isEmail && isPassword) {
            loginButton.disabled = false;
            loginButton.classList.add('button');
            } else {
                loginButton.disabled = true;
                loginButton.classList.remove('button');
        }
    } else if (inputs.length === 4){
        if (isEmail && isNickName && isPassword && isConfirm) {
            signUpButton.disabled = false;
            signUpButton.classList.add('button');
            } else {
                signUpButton.disabled = true;
                signUpButton.classList.remove('button');
        }
    }
}
const visibilityToggle = (button) => {
    const input = button.previousElementSibling; 
    button.classList.toggle('auth__password-toggle--confirm');
    if (button.classList.contains('auth__password-toggle--confirm')) {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}




export { checkEmail, checkNickname, checkPassword, checkPasswordConfirm, updateSubmitButtonState, visibilityToggle};