import {Injectable} from "angular2/core";

export interface Todo {
    text?:string;
    completed?:boolean;
    id?:number;
}

let todoId = 1;

@Injectable()
export class TodoService {
    todos:Todo[] = [];

    constructor() {
        fetch('todos.json').then(res => res.json()).then(todos => {
            this.todos = todos;
        });
    }

    addTodo(newTodo:Todo) {
        newTodo.id = todoId++;
        this.todos = this.todos.concat([newTodo]);
    }

    getTodoById(id:number) {
        return this.todos.find(todo => todo.id === id);
        //return this.todos.filter(todo => todo.id === id).pop();
    }
}