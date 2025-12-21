const firebaseConfig = {
    apiKey: "AIzaSyAH8syhtLbWuR50tH2G4EPyh9_yH-Eamfw",
    authDomain: "login-c353e.firebaseapp.com",
    projectId: "login-c353e"
};

const DUMMY_DOMAIN = '@gmail.com';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');

function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const syntheticEmail = username + DUMMY_DOMAIN;

    auth.signInWithEmailAndPassword(syntheticEmail, password)
        .then(() => {
            window.location.href = "content.html";
        })
        .catch(() => {
            errorMessage.textContent = "Invalid Username or Password";
        });
}

loginButton.addEventListener('click', handleLogin);
