import {Component} from 'angular2/core'
import {NameComponent} from './name-component'
import {FriendsService} from './friends'


@Component({
    selector: 'jazoon-app',
    template: `
        <input type="text" [(ngModel)]="myName"/>
        <name-component [(name)]="myName"></name-component>
        <ul>
        <li *ngFor="#friend of friendService.list">{{friend}}</li>
</ul>
    `,
    directives: [NameComponent],
    providers: [FriendsService]
})
export class App {
    myName:string;
    isDisabled:boolean = false;
    foos:string[];

    constructor(public friendService:FriendsService) {
        //       setInterval(() => {
        //           this.isDisabled = !this.isDisabled
        //       }, 1000);

        this.myName = 'Gabriel!'
    }

    nameChanged(name:string) {
        this.myName = name;
    }
}