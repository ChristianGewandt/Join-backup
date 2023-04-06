
let visibleIcon = 'assets/img/visibleIcon.svg';
let unVisibleIcon = 'assets/img/notVisibleIcon.svg';
let standartIcon = 'assets/img/loginPassword.svg';


document.addEventListener('DOMContentLoaded', function () {
    let logo = document.querySelector('.logo');
    let contentContainer = document.querySelector('.loginContainer');
    logo.addEventListener('animationend', () => {
        contentContainer.classList.add('show');

    });
    updateCheckbox();
    addListener();
    loadRememberedData()
});


function updateCheckbox() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var pathChecked = document.getElementById('checked');
    var pathUnchecked = document.getElementById('unchecked');
    if (checkbox.checked) {
        pathChecked.style.display = 'block';
        pathUnchecked.style.display = 'none';
    } else {
        pathChecked.style.display = 'none';
        pathUnchecked.style.display = 'block';
    }
}


function addListener() {
    let passwordInput = document.getElementById('loginPassword');
    let passwordToggle = document.getElementById('loginPasswordImg');
    passwordInput.addEventListener('keyup', changePasswortImage)
    passwordToggle.addEventListener('click', togglePasswordVisibility);
}


function togglePasswordVisibility() {
    let passwordInput = document.getElementById('loginPassword');
    let passwordToggle = document.getElementById('loginPasswordImg');
    let visibleIcon = 'assets/img/visibleIcon.svg';
    let unVisibleIcon = 'assets/img/notVisibleIcon.svg';
    let standartIcon = 'assets/img/loginPassword.svg';
    if (passwordInput.value === '') {
        passwordToggle.src = standartIcon;
    } else {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.src = visibleIcon;
        } else {
            passwordInput.type = 'password';
            if (passwordToggle.src !== 'assets/img/loginPassword.svg') {
                passwordToggle.src = unVisibleIcon;
            }
        }
    }
}


function changePasswortImage() {
    let passwordInput = document.getElementById('loginPassword');
    let passwordToggle = document.getElementById('loginPasswordImg');
    let visibleIcon = 'assets/img/visibleIcon.svg';
    let unVisibleIcon = 'assets/img/notVisibleIcon.svg';
    let standartIcon = 'assets/img/loginPassword.svg';
    if (passwordInput.value === '') {
        passwordToggle.src = standartIcon;
    } else if (passwordInput.type == 'text') {
        passwordToggle.src = visibleIcon;
    }
    else {
        passwordToggle.src = unVisibleIcon
    }
}


async function checkInputsLogin() {
    document.querySelectorAll('.errorMessage').forEach(function (el) {
        el.classList.add('d-none');
    })
    checkLoginEmail()
}


async function checkLoginEmail() {
    const email = document.getElementById('loginEmail');
    user = await getUser(email.value);
    if (email.value === '') {
        document.getElementById('loginEmailError').classList.remove('d-none');
        return
    }
    if (email.value.indexOf('@') === -1) {
        document.getElementById('loginEmailFormatError').classList.remove('d-none');
        return
    }
    if (!user) {
        document.getElementById('loginEmailNotFoundError').classList.remove('d-none');
        return
    } else {
        checkLoginPassword()
    }
}


async function checkLoginPassword() {
    const password = document.getElementById('loginPassword').value;
    let userPassword = await getPassword(user);
    if (password === '') {
        document.getElementById('loginPasswordError').classList.remove('d-none');
        return
    }
    if (password.length < 7) {
        document.getElementById('loginPasswordLengthError').classList.remove('d-none');
        return
    }
    if (password !== userPassword) {
        document.getElementById('loginPasswordIncorrectError').classList.remove('d-none');
        return
    }
    rememberMe()
    let currentUser=user.name
    window.location.href = 'index.html?variable=' + currentUser; 
}


async function getUser(email) {
    user = users.find(user => user.email === email);
    return user;
}


async function getPassword(user) {
    const password = user.password;
    return password;
}


function rememberMe() {
        const checkbox = document.getElementById('rememberMe');
        const usernameInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
      
        if (checkbox.checked) {
          localStorage.setItem('rememberedUser', usernameInput.value);
          localStorage.setItem('rememberedPass', passwordInput.value);
        } else {
            localStorage.removeItem('rememberedUser');
            localStorage.removeItem('rememberedPass');
            document.querySelector('.loginContainer').reset()
        }

}

function loadRememberedData() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    const rememberedPass = localStorage.getItem('rememberedPass');
    const usernameInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
  
    if (rememberedUser && rememberedPass) {
      usernameInput.value = rememberedUser;
      passwordInput.value = rememberedPass;
      document.getElementById('rememberMe').checked = true;
    }
  }

