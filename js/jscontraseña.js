// Validación de formulario de registro
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

  // Validamos que el nombre no esté vacío
  const nameInput = document.getElementById("name");
  if (nameInput.value.trim() === "") {
    showError(nameInput, "El nombre es obligatorio");
    return;
  }

  // Validamos que el correo sea válido
  const emailInput = document.getElementById("email");
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "El correo no es válido");
    return;
  }

  // Validamos que la contraseña tenga al menos 8 caracteres
  const passwordInput = document.getElementById("password");
  if (passwordInput.value.length < 8) {
    showError(passwordInput, "La contraseña debe tener al menos 8 caracteres");
    return;
  }

  // Si todo está correcto, enviamos el formulario
  registerForm.submit();
});

// Validación de formulario de inicio de sesión
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

  // Validamos que el correo sea válido
  const emailInput = document.getElementById("email");
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "El correo no es válido");
    return;
  }

  // Validamos que la contraseña tenga al menos 8 caracteres
  const passwordInput = document.getElementById("password");
  if (passwordInput.value.length < 8) {
    showError(passwordInput, "La contraseña debe tener al menos 8 caracteres");
    return;
  }

  // Si todo está correcto, enviamos el formulario
  loginForm.submit();
});

// Función para validar un correo electrónico
function validateEmail(email) {
  // Expresión regular para validar correos electrónicos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para mostrar un mensaje de error y un icono junto a un elemento
function showError(input, message) {
  const errorIcon = document.createElement("i");
  errorIcon.className = "fas fa-exclamation-circle";
  errorIcon.style.color = "red";
  errorIcon.style.marginLeft = "5px";
  errorIcon.style.fontSize = "16px";

  const errorMessage = document.createElement("span");
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = "16px";

  const parent = input.parentNode;
  parent.appendChild(errorIcon);
  parent.appendChild(errorMessage);
}

// Función para mostrar u ocultar el valor de un campo de contraseña
const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggle-password");
toggleButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Ocultar";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Mostrar";
  }
});
