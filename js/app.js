function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    console.log(pinString.length)
    if (pinString.length === 4) {
        console.log('not error')
        return pin;
    }
    else {
        genaratePin()


    }
}
document.getElementById('pin-genaretor').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field');
    const pinValueString = pinField.value;
    const pinValue = parseInt(pinValueString);
    const getPinFunction = getPin()
    pinField.value = getPinFunction;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-field');
    const previousInputValue = inputField.value;
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number === 'C') {
            inputField.value = '';
        }
        else if (number === '<') {
            const digits = previousInputValue.split('');
            digits.pop();
            const remainDigits = digits.join('');
            inputField.value = remainDigits;
        }
    }
    else {
        inputField.value = previousInputValue + event.target.innerText;
    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const typedField = document.getElementById('input-field');
    const typedValue = typedField.value;
    const pinField = document.getElementById('pin-field');
    const pin = pinField.value;
    if (pin === typedValue) {
        const pinSuccess = document.getElementById('pin-success');
        pinSuccess.style.display = 'block';
        const pinFaild = document.getElementById('pin-failed');
        pinFaild.style.display = 'none';
    }
    else {
        const pinFaild = document.getElementById('pin-failed');
        pinFaild.style.display = 'block';
        const pinSuccess = document.getElementById('pin-success');
        pinSuccess.style.display = 'none';
    }
})