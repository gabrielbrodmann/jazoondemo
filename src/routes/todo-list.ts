import {Component, Input, Pipe} from 'angular2/core'
import {TodoService, Todo} from "../services/todos";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Pipe({
    name: 'status'
})
class TodoStatusFilter {
    transform(data, args) {
        return data.filter(todo => todo.completed === args[0]);
    }
}

@Component({
    selector: 'todo-list',
    template: `
        <ul>
            <li *ngFor="#todo of todos | status:false" [class.completed]="todo.completed">
                <input type="checkbox" [(ngModel)]="todo.completed"/>
                <a [routerLink]="['TodoDetail', {id: todo.id}]">{{todo.text}}</a>
            </li>
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [TodoStatusFilter],
    styles: [
        `
        .completed{
            text-decoration: line-through;
        }
        `
    ]
})
export class TodoList {
    @Input() todos:Todo[];
}

@Component({
    selector: 'todos-list',
    template: `
        <h1>Todos list</h1>
        <todo-list [todos]="todoService.todos"></todo-list>
    `,
    directives: [TodoList],
    providers: []
})
export class TodosList {
    constructor(public todoService:TodoService) {
    }
}