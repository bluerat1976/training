
debugger;
var test = function sayHi(name) {
    sayHi = "тест"; // попытка перезаписи
    alert( sayHi ); // function... (перезапись не удалась)
  };
  
  test(test('test'));




