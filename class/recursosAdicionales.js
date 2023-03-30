//switch
function valores(valor) {
  switch (valor) {
    case 'valor1':
      return 'this is valor1';
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      breack;
    case 'valor2':
      return 'this is valor2';
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      breack;
    //...
    case 'valorN':
      return 'this is valorN';
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      breack;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      return 'Ningun valor';
  }
}


//do while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"


//CONTINUE:
//Sintaxis: continue [ etiqueta ];

//Continue con "while"
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}

//Continue con "etiqueta":
checkiandj:
while (i < 4) {
  document.write(i + "<br>");
  i += 1;

  checkj:
  while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if ((j % 2) == 0)
      continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>");
  document.write("j = " + j + "<br>");
}


//Break
//Sintaxis: break [etiqueta];
function comprobarBreak(x) {
  var i = 0;
  while (i < 6) {
     if (i == 3)
        break;
     i++;
  }
  return i * x;
}
