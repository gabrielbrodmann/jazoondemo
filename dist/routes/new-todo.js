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
var common_1 = require("angular2/common");
var NewTodoInput = (function () {
    function NewTodoInput(fp) {
        this.newTodo = {};
        this.create = new core_1.EventEmitter();
        this.myForm = fp.group({
            text: ['', common_1.Validators.minLength(3)]
        });
        // Observable!!
        this.myForm.statusChanges.subscribe(function (value) { return console.log(value); });
    }
    NewTodoInput.prototype.saveTodo = function () {
        this.newTodo.completed = false;
        this.create.emit(this.newTodo);
        this.newTodo = {};
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NewTodoInput.prototype, "create", void 0);
    NewTodoInput = __decorate([
        core_1.Component({
            selector: 'new-todo-input',
            template: "\n        <form [ngFormModel]=\"myForm\">\n            <input type=\"text\" ngControl=\"text\"/>\n            <button (click)=\"saveTodo()\">Save</button>\n            <ng-content></ng-content>\n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], NewTodoInput);
    return NewTodoInput;
}());
exports.NewTodoInput = NewTodoInput;
var NewTodo = (function () {
    function NewTodo(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    NewTodo.prototype.addTodoToService = function (newTodo) {
        this.todoService.addTodo(newTodo);
        this.router.navigate(['TodoList']);
    };
    NewTodo = __decorate([
        core_1.Component({
            selector: 'new-todo',
            template: "\n        <h1>new Todo</h1>\n        <new-todo-input (create)=\"addTodoToService($event)\">\n            <h5>Transcluded Content</h5>\n        </new-todo-input>\n    ",
            directives: [NewTodoInput],
            providers: []
        }), 
        __metadata('design:paramtypes', [todos_1.TodoService, router_1.Router])
    ], NewTodo);
    return NewTodo;
}());
exports.NewTodo = NewTodo;
