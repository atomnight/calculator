let clearButton  = document.getElementById("clear");
let deleteButton  = document.getElementById("delete");
let moduloButton  = document.getElementById("modulo");
let additionButton  = document.getElementById("addition");
let abstractButton = document.getElementById("abstract");
let multiplyButton = document.getElementById("multiply");
let divisionButton  = document.getElementById("division");
let negativeButton  = document.getElementById("negative");
let dotButton  = document.getElementById("dot");
let equalButton = document.getElementById("equal");

let number0Button  = document.getElementById("number0");
let number1Button  = document.getElementById("number1");
let number2Button  = document.getElementById("number2");
let number3Button  = document.getElementById("number3");
let number4Button  = document.getElementById("number4");
let number5Button = document.getElementById("number5");
let number6Button = document.getElementById("number6");
let number7Button = document.getElementById("number7");
let number8Button = document.getElementById("number8");
let number9Button = document.getElementById("number9");

let inputScreen = document.getElementById("input");
let outputScreen = document.getElementById("output");

let inputText = [];
let outputText = [];
let string = "";
let firstTimeDot = true;
let outcome;
let outputString;

clearButton.addEventListener("click", clearInputScreen);
    function clearInputScreen() {
        inputScreen.innerText = "";
        outputScreen.innerText = "";
}
deleteButton.addEventListener("click", deleteInputLastNumber);
    function deleteInputLastNumber() {
        inputText = inputScreen.innerText.split("");
        if (inputText.length > 0) {
            inputText.pop();
            inputScreen.innerText = inputText.join("");
        }
}

moduloButton.addEventListener("click", mod);
    function mod() {
        if (inputScreen.innerText != "") {
            outputScreen.innerText = inputScreen.innerText + " %"  
            inputScreen.innerText = "";
        }
}

additionButton.addEventListener("click", add);
    function add() {
        if (inputScreen.innerText != "") {
            outputScreen.innerText = inputScreen.innerText + " +"  
            inputScreen.innerText = "";
        }
}

abstractButton.addEventListener("click", abstract);
    function abstract() {
        if (inputScreen.innerText != "" ) {
            outputScreen.innerText = inputScreen.innerText + " -"  
            inputScreen.innerText = "";
        }
}

multiplyButton.addEventListener("click", multiply);
    function multiply() {
        if (inputScreen.innerText != "") {
            outputScreen.innerText = inputScreen.innerText + " x"  
            inputScreen.innerText = "";
        }
}

divisionButton.addEventListener("click", division);
    function division() {
        if (inputScreen.innerText != "") {
            outputScreen.innerText = inputScreen.innerText + " /"  
            inputScreen.innerText = "";
        }
}

equalButton.addEventListener("click", equal);
    function equal() {
        outputText = outputScreen.innerText.split("");
        if (outputText[outputText.length - 1] == "%") {
            outcome = (parseInt(outputScreen.innerText) % parseInt(inputScreen.innerText));
            outputText.pop();
            outputScreen.innerText = outputText.join("") + "% " + inputScreen.innerText;
            inputScreen.innerText = outcome;
        }
        else if(outputText[outputText.length - 1] == "+") {
            outcome = (parseInt(outputScreen.innerText) + parseInt(inputScreen.innerText));
            outputText.pop();
            outputScreen.innerText = outputText.join("") + "+ " + inputScreen.innerText;
            inputScreen.innerText = outcome;
        }
        else if(outputText[outputText.length - 1] == "-") {
            outcome = (parseInt(outputScreen.innerText) - parseInt(inputScreen.innerText));
            outputText.pop();
            outputScreen.innerText = outputText.join("") + "- " + inputScreen.innerText;
            inputScreen.innerText = outcome;
        }
        else if(outputText[outputText.length - 1] == "x") {
            outcome = (parseInt(outputScreen.innerText) * parseInt(inputScreen.innerText));
            outputText.pop();
            outputScreen.innerText = outputText.join("") + "x " + inputScreen.innerText;
            inputScreen.innerText = outcome;
        }
        else if(outputText[outputText.length - 1] == "/") {
            outcome = (parseInt(outputScreen.innerText) / parseInt(inputScreen.innerText));
            outputText.pop();
            outputScreen.innerText = outputText.join("") + "/ " + inputScreen.innerText;
            inputScreen.innerText = outcome;
        }
}

/*number buttons functions*/

number0Button.addEventListener("click", number0);
    function number0() {
        if(inputScreen.innerText != "") {
            inputScreen.insertAdjacentText('beforeend', '0');
        }
}

number1Button.addEventListener("click", number1);
    function number1() {
        inputScreen.insertAdjacentText('beforeend', '1');
}

number2Button.addEventListener("click", number2);
    function number2() {
        inputScreen.insertAdjacentText('beforeend', '2');
}

number3Button.addEventListener("click", number3);
    function number3() {
        inputScreen.insertAdjacentText('beforeend', '3');
}

number4Button.addEventListener("click", number4);
    function number4() {
        inputScreen.insertAdjacentText('beforeend', '4');
}

number5Button.addEventListener("click", number5);
    function number5() {
        inputScreen.insertAdjacentText('beforeend', '5');
}

number6Button.addEventListener("click", number6);
    function number6() {
        inputScreen.insertAdjacentText('beforeend', '6');
}

number7Button.addEventListener("click", number7);
    function number7() {
        inputScreen.insertAdjacentText('beforeend', '7');
}

number8Button.addEventListener("click", number8);
    function number8() {
        inputScreen.insertAdjacentText('beforeend', '8');

}

number9Button.addEventListener("click", number9);
    function number9() {
        inputScreen.insertAdjacentText('beforeend', '9');
}



