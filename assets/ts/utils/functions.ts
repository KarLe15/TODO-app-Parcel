import { Color } from "./enums";

/**
 * TODO :: Change this method to return a dead line to TOMORROW
 */
export function getDefaultDeadLine() : Date{
    return new Date();
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