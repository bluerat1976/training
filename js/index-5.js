//var admin;
//var name = 'Vasiliy';
//admin = name;
//document.write(admin);

var login = prompt('Input login');

if(login == 'admin') {
    var pass = prompt('Input password');
} else if  (login == undefined) {
    alert('Denide entrance');
} else {
    alert('I do not know you');
}
