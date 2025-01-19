
const button = document.querySelector(".login-form>button");
const emailInput = document.querySelector("input[name=email]");
const passwordInput = document.querySelector("input[name=password]");
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const data = {
        email: email,
        password: password,
    }
    if (email == 0 || password == 0) {
        alert("All form fields must be filled in");
    }
    else {
        console.log(data);
        form.reset();
    };

}

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
// }
