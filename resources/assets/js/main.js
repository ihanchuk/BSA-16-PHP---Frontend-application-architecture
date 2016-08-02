var $ = require('jquery'),
Backbone = require('backbone'),
Marionette = require('backbone.marionette');
var date = new Date();
var date = date.toLocaleTimeString();
var cookies_js = require("cook");

//var HBS = require("./js/lib/TemplateLoader.js");


Backbone.$ = window.$;
/*
We don't need cookies for this App at all,
But i do need to test Browserify custom modules
loaded via Bower
*/
cookies_js.set('last_visited', date);

App = new Backbone.Marionette.Application();


App.addRegions({
    'nav': '#nav',
    'content': '#content'
});

App.on("start", function(options){
    /*Sending XHR token to Laravel*/
    $.ajaxSetup({
        headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
    });
    var controller = require('./js/controllers/controller.js');
    controller.bindContext(this);
    var router = require('./js/router/router.js');
    Backbone.history.start();
});

$(function() {
    App.start();
});


