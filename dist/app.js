"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var index_1 = require('./routes/index');
var todos_1 = require("./services/todos");
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n        <h1>Todo</h1>\n        <div>\n            <a [routerLink]=\"['TodoList']\">Todos</a>\n            <a [routerLink]=\"['NewTodo']\">New Todo</a>\n        </div>\n        <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, todos_1.TodoService],
            styles: []
        }),
        router_1.RouteConfig([
            { name: 'TodoList', path: '/todos', component: index_1.TodosList, useAsDefault: true },
            { name: 'NewTodo', path: '/new', component: index_1.NewTodo },
            { name: 'TodoDetail', path: '/todos/:id', component: index_1.TodoDetail }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
