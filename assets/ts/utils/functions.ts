import { Color } from "./enums";

/**
 * TODO :: Change this method to return a dead line to TOMORROW
 */
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

export function isValideDate(tDate : Date): boolean {
    let now : Date = new Date();
    return tDate < now;
}

export function addDay(tDate : Date) : Date {
    // return new Date(tDate.getTime() + (1000 * 60 * 60 * 24)); // Version 2;
    tDate.setDate(tDate.getDate() +1);
    return tDate;
}