//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
        if (event.inputType !== "deleteContentBackward" && input.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus(); // Move to next input
            }
        }
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && input.value.length === 0) {
            if (index > 0) {
                inputs[index - 1].focus(); // Move back to previous input
            }
        }
    });
});