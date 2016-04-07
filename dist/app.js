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
var name_component_1 = require('./name-component');
var friends_1 = require('./friends');
var App = (function () {
    function App(friendService) {
        //       setInterval(() => {
        //           this.isDisabled = !this.isDisabled
        //       }, 1000);
        this.friendService = friendService;
        this.isDisabled = false;
        this.myName = 'Gabriel!';
    }
    App.prototype.nameChanged = function (name) {
        this.myName = name;
    };
    App = __decorate([
        core_1.Component({
            selector: 'jazoon-app',
            template: "\n        <input type=\"text\" [(ngModel)]=\"myName\"/>\n        <name-component [(name)]=\"myName\"></name-component>\n        <ul>\n        <li *ngFor=\"#friend of friendService.list\">{{friend}}</li>\n</ul>\n    ",
            directives: [name_component_1.NameComponent],
            providers: [friends_1.FriendsService]
        }), 
        __metadata('design:paramtypes', [friends_1.FriendsService])
    ], App);
    return App;
}());
exports.App = App;
