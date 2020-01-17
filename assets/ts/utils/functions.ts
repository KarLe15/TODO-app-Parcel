import { Color } from "./enums";

export function getDefaultDeadLine() : Date{
    return addDay(new Date());
}

export function getColorFromString(color : string): Color{
    color = color.toUpperCase();
    switch(color){
        case "RED" :
            return Color.RED;
        case "BLUE" :
            return Color.BLUE;
        case "YELLOW" :
            return Color.YELLOW;
        case "BLACK" : 
            return Color.BLACK;
        case "GREEN" : 
            return Color.GREEN;
        case "WHITE" :
            return Color.WHITE;
        default :
            return Color.WHITE;
    }
}

//* TODO :: add unit test for this function
export function isValideDate(tDate : Date): boolean {
    let now : Date = new Date();
    return tDate < now;
}

//* TODO :: add unit test for this function
export function addDay(tDate : Date) : Date {
    // return new Date(tDate.getTime() + (1000 * 60 * 60 * 24)); // Version 2;
    tDate.setDate(tDate.getDate() +1);
    return tDate;
}


export function enteredCorrectInputs(mail : string, password : string) : boolean{
    let res : boolean = true;
    
    const reMail : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const reNumber : RegExp = /[0-9]/;
    const reCapital : RegExp = /[A-Z]/;
    const reSpecialChar : RegExp = /[!?|:;#&,/%\\*$^()[\]]/;

    res = res && reMail.test(mail);
    res = res && (password.length > 5) && (password.length < 25);
    res = res && (reNumber.test(password));
    res = res && (reCapital.test(password));
    res = res && (reSpecialChar.test(password));
    return res;
}