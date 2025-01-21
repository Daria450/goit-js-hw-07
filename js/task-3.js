const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", setOutput);

function setOutput(event) {
    if (event.currentTarget.value.trim() !== "") {
        textOutput.textContent = event.currentTarget.value.trim();
    }
    else {
        textOutput.textContent = "Anonymous";
    }
};