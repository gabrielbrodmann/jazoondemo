"use strict";
var browser_1 = require('angular2/platform/browser');
var app_1 = require('./app');
var friends_1 = require('./friends');
browser_1.bootstrap(app_1.App, [friends_1.FriendsService]);
