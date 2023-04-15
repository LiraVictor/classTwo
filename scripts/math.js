function add() {
    let number1 = Number(document.querySelector('#number1').value)
    let number2 = Number(document.querySelector('#number2').value)
    let sum = number1 + number2
    document.querySelector('#result').value = sum
}

function subtract() {
    let number1 = Number(document.querySelector('#number1').value)
    let number2 = Number(document.querySelector('#number2').value)
    let subtraction = number1 - number2
    document.querySelector('#result').value = subtraction
}

function multiply() {
    let number1 = Number(document.querySelector('#number1').value)
    let number2 = Number(document.querySelector('#number2').value)
    let multiplication = number1 * number2
    document.querySelector('#result').value = multiplication
}

function divide() {
    let number1 = Number(document.querySelector('#number1').value)
    let number2 = Number(document.querySelector('#number2').value)
    if (number2 != 0) {
        let division = number1 / number2
        document.querySelector('#result').value = division.toFixed(2)
    } else {
        document.querySelector('#labelNumber2').innerHTML = "There is no division by zero"
        document.querySelector('#number2').value = ""
    }
}

function clearError(){
    document.querySelector('#labelNumber2').innerHTML = "Number 2"
}

function clean(){
    document.querySelector('#number1').value = ""
    document.querySelector('#number2').value = ""
    document.querySelector('#result').value = ""
    document.querySelector('#labelNumber2').innerHTML = "Number 2"
}
