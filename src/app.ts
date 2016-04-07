import {Component} from 'angular2/core'
import {NameComponent} from './name-component'


@Component({
    selector: 'jazoon-app',
    template: `
        <input type="text" [(ngModel)]="myName"/>
        <name-component [(name)]="myName"></name-component>
    `,
    directives: [NameComponent]
})
export class App {
    myName:string;
    isDisabled:boolean = false;
    foos:string[];

    constructor() {
        //       setInterval(() => {
        //           this.isDisabled = !this.isDisabled
        //       }, 1000);
        this.foos = ['Gabriel', 'Rebi'];
        this.myName = 'Gabriel!'
    }

    nameChanged(name:string) {
        this.myName = name;
    }
}