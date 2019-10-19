import IComponent from '../interfaces/IComponent';
import { Color } from '../enums';

class TODOElement implements IComponent{
    content  : string;
    title : string;
    color : Color;
    deadline : Date; // TODO :: maybe modify the type with momentJS or something like that

    constructor(){
        this.color = Color.RED;
    }

    render(): string {
        throw new Error("Method not implemented.");
    }


}


export default TODOElement;