/**
 * This function is called when the user connects and lefts one of the fields empty
 * @param mail
 * @param password
 */
function connexionInputsEmptyHandler(mail: string, password: string) {
    //* TODO :: Add the red effect element in the input
    throw new Error("Method not implemented");
}

function connexionHandler(mail: string, password: string) {
    function sendConnexionServer (mail: string, password: string, response : any) {
        //* TODO :: redirect in the good place
        console.log(response);
    }
    //* TODO :: Check if I use MD5 or another cipher in the front
    // throw new Error("Method not implemented");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status == 200 ){
            sendConnexionServer(mail, password, this.response);
        }
    };
    const url = "/test?m="+mail+"&p="+password;
    xhr.open("GET", url , true);
    xhr.send();

}

function submitClickHandler(event : MouseEvent) : void{
    event.preventDefault();
    let mailInput : HTMLInputElement|null = document.querySelector('#mail');
    let passwordInput : HTMLInputElement|null = document.querySelector('#password');
    if(mailInput !== null && passwordInput !== null){
        let mail : string = mailInput.value;
        let password : string = passwordInput.value;
        if(mail === "" || password == ""){
            connexionInputsEmptyHandler(mail, password);
            return;
        }
        connexionHandler(mail, password);
    }else{
        throw new Error("Page not completly loaded");
    }

}

let buttonSubmit : HTMLButtonElement|null = document.querySelector("button.submit");
if(buttonSubmit !== null){
    buttonSubmit.addEventListener("click", submitClickHandler);
}else{
    throw new Error("Page not completly loaded")
}

