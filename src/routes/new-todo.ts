import {Component, Output, EventEmitter} from 'angular2/core'
import {TodoService, Todo} from "../services/todos";
import {Router} from "angular2/router";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";

@Component({
    selector: 'new-todo-input',
    template: `
        <form [ngFormModel]="myForm">
            <input type="text" ngControl="text"/>
            <button (click)="saveTodo()">Save</button>
            <ng-content></ng-content>
        </form>
    `
})
export class NewTodoInput {
    myForm:ControlGroup;

    constructor(fp:FormBuilder) {
        this.myForm = fp.group({
            text: ['', Validators.minLength(3)]
        })

        // Observable!!
        this.myForm.statusChanges.subscribe(value => console.log(value));
    }

    newTodo:Todo = {};
    @Output() create:EventEmitter<Todo> = new EventEmitter();

    saveTodo() {
        this.newTodo.completed = false;
        this.create.emit(this.newTodo);
        this.newTodo = {};
    }
}

@Component({
    selector: 'new-todo',
    template: `
        <h1>new Todo</h1>
        <new-todo-input (create)="addTodoToService($event)">
            <h5>Transcluded Content</h5>
        </new-todo-input>
    `,
    directives: [NewTodoInput],
    providers: []
})
export class NewTodo {
    constructor(public todoService:TodoService, public router:Router) {
    }

    addTodoToService(newTodo) {
        this.todoService.addTodo(newTodo);
        this.router.navigate(['TodoList']);
    }
}