import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'name-component',
    template: `
        <h1>Hello my name is {{name}}</h1>
        <button (click)="changeName()"></button>
    `
})

export class NameComponent {
    @Input() name:string;
    @Output() nameChange:EventEmitter<string> = new EventEmitter();

    changeName() {
        this.nameChange.emit(this.name + '!!!');
    }
}