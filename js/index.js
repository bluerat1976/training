debugger;

var a = ['nose', 'ears', 'head'];
var b = ['red', 'terrible', 'big'];
var c = ['hors', 'snake', 'crocodile'];

var a = a[Math.floor(Math.random() * a.length)];
var b = b[Math.floor(Math.random() * b.length)];
var c = c[Math.floor(Math.random() * c.length)];


var result = 'You have ' + a +  + b + ' ' + c + ' !';
console.log(result);

var result = ['You have ', a, ' like ', b, ' ', c, ' !'  ].join(' ');
console.log(result);

