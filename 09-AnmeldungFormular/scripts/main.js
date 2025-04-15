const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

// Registrierung-Button
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    container.classList.remove("remove-panel-active");  // Stellen Sie sicher, dass nur eine Klasse entfernt wird
});

// Anmelde-Button
logInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    container.classList.add("remove-panel-active");
});
