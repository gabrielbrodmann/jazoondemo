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
var todos_1 = require("../services/todos");
var router_1 = require("angular2/router");
var TodoStatusFilter = (function () {
    function TodoStatusFilter() {
    }
    TodoStatusFilter.prototype.transform = function (data, args) {
        return data.filter(function (todo) { return todo.completed === args[0]; });
    };
    TodoStatusFilter = __decorate([
        core_1.Pipe({
            name: 'status'
        }), 
        __metadata('design:paramtypes', [])
    ], TodoStatusFilter);
    return TodoStatusFilter;
}());
var TodoList = (function () {
    function TodoList() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoList.prototype, "todos", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n        <ul>\n            <li *ngFor=\"#todo of todos | status:false\" [class.completed]=\"todo.completed\">\n                <input type=\"checkbox\" [(ngModel)]=\"todo.completed\"/>\n                <a [routerLink]=\"['TodoDetail', {id: todo.id}]\">{{todo.text}}</a>\n            </li>\n        </ul>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [],
            pipes: [TodoStatusFilter],
            styles: [
                "\n        .completed{\n            text-decoration: line-through;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
var TodosList = (function () {
    function TodosList(todoService) {
        this.todoService = todoService;
    }
    TodosList = __decorate([
        core_1.Component({
            selector: 'todos-list',
            template: "\n        <h1>Todos list</h1>\n        <todo-list [todos]=\"todoService.todos\"></todo-list>\n    ",
            directives: [TodoList],
            providers: []
        }), 
        __metadata('design:paramtypes', [todos_1.TodoService])
    ], TodosList);
    return TodosList;
}());
exports.TodosList = TodosList;
