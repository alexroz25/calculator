let isError = false;
const display = document.getElementById("display");

function appendToDisplay(input) {
    if (isError) {
        isError = false;
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (isError) display.value = "";
    if (display.value.length == 0) return;
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
        isError = true;
    }
}