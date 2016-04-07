import construct = Reflect.construct;
import {Injectable} from "angular2/core";

@Injectable()
export class FriendsService {
    list:string[];

    constructor() {
        console.log('init friends service');
        this.list = ['FirstFriend', 'SecondFriend'];
    }
}
