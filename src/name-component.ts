import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {FriendsService} from './friends'

@Component({
    selector: 'name-component',
    template: `
        <h1>Hello my name is {{name}}</h1>
        <button (click)="changeName()"></button>
    `,
    providers: []
})

export class NameComponent {
    @Input() name:string;
    @Output() nameChange:EventEmitter<string> = new EventEmitter();

    friends:string[];

    constructor(friendsService:FriendsService) {
        this.friends = friendsService.list;
    }

    changeName() {
        this.nameChange.emit(this.name + '!!!');
    }
}