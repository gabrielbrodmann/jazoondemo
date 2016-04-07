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
var TodoDetail = (function () {
    function TodoDetail(todoService, routeParams) {
        this.todo = todoService.getTodoById(parseInt(routeParams.get('id'), 10));
    }
    TodoDetail = __decorate([
        core_1.Component({
            selector: 'todo-detail',
            template: "\n        <h1>Todo detail</h1>\n        <h3>{{todo.text}}</h3>\n    ",
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [todos_1.TodoService, router_1.RouteParams])
    ], TodoDetail);
    return TodoDetail;
}());
exports.TodoDetail = TodoDetail;
