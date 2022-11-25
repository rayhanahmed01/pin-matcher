function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        //   console.log('got 3 digit and calling again', pin);
        return getPin();
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
            if(number == 'C'){
                calcInput.value = '';
            }    

    }
    else {
        
        const calcInput = document.getElementById('typed-numbers');
        const previousInputNumber = calcInput.value;
        const newInputNumber = previousInputNumber + number;
        calcInput.value = newInputNumber;
    }
})

//VerifyPin
function veryfyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == typedNumbers){
        
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        
        failError.style.display = 'block';
        successMessage.style.display = 'none';
        
    }

    
}