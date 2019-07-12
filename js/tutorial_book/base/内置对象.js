"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ECMAScript 的内置对象
var b = new Boolean(1);
var e = new Error('Error occurred');
var d = new Date();
var r = /[a-z]/;
// BOM 和 DOM
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // Do something
});
document.addEventListener('click', function (e) {
    // console.log(e.targetCurrent); // Property 'targetCurrent' does not exist on type 'MouseEvent'.
});
