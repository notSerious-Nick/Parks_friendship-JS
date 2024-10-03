const loginWindow = document.querySelector(".login_window");
const loginInput = document.querySelector(".login_window_form-input");
const btn = document.querySelector(".login_window_form-btn");
const input = document.querySelector(".welcome_input");
const names = document.querySelector(".welcome_name");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginWindow.style.display = "none";
    const name = loginInput.value;
    localStorage.setItem(USERNAME_KEY, name);
    paintGreetings(name);
}

function paintGreetings(username){
    input.innerHTML = `What's up`;
    names.innerHTML = `${username}`;
}
const savedName = localStorage.getItem(USERNAME_KEY);


// I cannot understand why below code require give me any situation when this code occur
if (savedName === null) {
    loginWindow.addEventListener("submit", onLoginSubmit);
  }

if(savedName !== null){
    loginWindow.style.display = "none";
    paintGreetings(savedName);
}
btn.addEventListener("click", onLoginSubmit);