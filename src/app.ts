import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'

import {NewTodo, TodoDetail, TodoList} from './routes/index'


@Component({
    selector: 'todo-app',
    template: `
        <h1>TODO</h1>
        <div>
            <a [routerLink]="['TodoList']">Todos</a>
            <a [routerLink]="['NewTodo']">New Todo</a>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    styles: []
})
@RouteConfig([
    {name: 'TodoList', path: '/todos', component: TodoList, useAsDefaultDefault: true},
    {name: 'NewTodo', path: '/new', component: NewTodo}
])
export class App {

}