export default class WrongDateException extends Error{
    public constructor(message : string){
        super(message);
    }
}