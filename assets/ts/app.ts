import TODOElement from './components/TODOElement';
import { addDay } from './utils/functions';

function submitTodo(){
    //* Getting title and content from inputs
    const todoTitle : string = (<HTMLInputElement> document.getElementById("todo_title")).value;
    const todoContent : string = (<HTMLInputElement> document.getElementById("todo_content")).value;

    //* Construct the TODO ELEMENT 
    const todoElem = new TODOElement(todoTitle, todoContent);
    console.log(todoElem);

        //* IF the Element cannot be created send Error in the console

    //* Getting the HTML code for that TODO ELEMENT
}


const buttonSubmit = document.getElementById("soumettre_todo");
buttonSubmit.addEventListener("click", submitTodo );

