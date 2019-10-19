import IComponent           from '../interfaces/IComponent';
import { Color }            from '../utils/enums';
import WrongDateException   from "../exeptions/WrongDateException";

//* import to optimise after
import { 
    getDefaultDeadLine, 
    getColorFromString,
    isValideDate
 }                          from "../utils/functions";




class TODOElement implements IComponent{
    private _content  : string;
    private _title : string;
    private _color : Color;
    private _deadline : Date; // TODO :: maybe modify the type with momentJS or something like that

    public constructor(title="", content="", deadLine? : Date){
        this._content  = content;
        this._title    = title;
        this._deadline = (deadLine !== undefined) ? deadLine : getDefaultDeadLine();
        this._color    = Color.WHITE;
    }

    get content() : string{
        return this._content;
    }
    // TODO :: check this setter
    set content(newContent : string){
       this.content = newContent; 
    }

    get title() : string {
        return this._title;
    }

    // TODO :: check this setter
    set title(newTitle : string){
        this._title = newTitle;
    }

    get color() : Color{
        return this._color;
    }
    set color(newColor : Color ){
        this._color = newColor;
    }
    public setColor(newColor : string | Color ) : void{
        if(typeof newColor === "string" ){
            this._color = getColorFromString(newColor);
        }else {
            this.color = newColor;
        }
    }

    get deadline(): Date{
        return this._deadline;
    }

    /**
     * This method throws WrongDateException
     * TODO :: Check exceptions and dates
     */
    set deadline(newDate : Date){
        if( isValideDate(newDate) ){
            this._deadline = newDate;
        }else{
            throw new WrongDateException("The date for the dead line is incorrect");
        }

    } 


    /**
     *  This method must return the HTML code for a TODO ELEMENT
     *  TODO :: Implement this Method
     *  TODO :: Check if this Method should return string or HTML ELEMENT 
     *  TODO :: Check if I should add a method that render a TODO element for a list like in TRELLO
     */
    render(): string {
        throw new Error("Method not implemented.");
    }

    

}


export default TODOElement;