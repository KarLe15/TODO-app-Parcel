import { enteredCorrectInputs } from './utils/functions';

function submitClickHandler(event : MouseEvent) : void{
    event.preventDefault();
    let mailInput : HTMLInputElement = document.querySelector('#mail');
    let passwordInput : HTMLInputElement = document.querySelector('#password');
    let mail : string = mailInput.value;
    let password : string = passwordInput.value;

    let canConnect : boolean = true;
    canConnect = canConnect && enteredCorrectInputs(mail, password);
}

let buttonSubmit : HTMLButtonElement = document.querySelector("button.submit");
buttonSubmit.addEventListener("click", submitClickHandler);

