function cuidadoConElConsoleLog(nombre) {
  console.log(nombre);
  return nombre;
}

function otraFuncion() {
  return (
    "el nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
    cuidadoConElConsoleLog('Naldo')
  );
}

function cuidadoConElReturn(nombre) {
  return nombre;
  console.log(nombre);
}

//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
consola.log (c);