function viajar (destino) {
  if (destino === 'Brasil') {
    console.log('Gire a la izquierda');
  } else if (destino === 'Argentina') {
     console.log('Gire a la derecha');
  } else {
    console.log('NOS PERDIMOS');
  }
}

viajar('priva')

function pudeManejar (edad) {
  if (edad >= 18) {
    console.log(true);
  } else{
    console.log(false);
  }
}

pudeManejar('20')