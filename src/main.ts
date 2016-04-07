import {bootstrap} from 'angular2/platform/browser'
import {App} from './app'
import {FriendsService} from './friends'

bootstrap(App, [FriendsService]);