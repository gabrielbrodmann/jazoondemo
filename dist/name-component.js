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
var friends_1 = require('./friends');
var NameComponent = (function () {
    function NameComponent(friendsService) {
        this.nameChange = new core_1.EventEmitter();
        this.friends = friendsService.list;
    }
    NameComponent.prototype.changeName = function () {
        this.nameChange.emit(this.name + '!!!');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NameComponent.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NameComponent.prototype, "nameChange", void 0);
    NameComponent = __decorate([
        core_1.Component({
            selector: 'name-component',
            template: "\n        <h1>Hello my name is {{name}}</h1>\n        <button (click)=\"changeName()\"></button>\n    ",
            providers: []
        }), 
        __metadata('design:paramtypes', [friends_1.FriendsService])
    ], NameComponent);
    return NameComponent;
}());
exports.NameComponent = NameComponent;
