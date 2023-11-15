//Heterograma

// Definir la función isHeterogram que recibe un argumento string
function isHeterogram(string) {
    // Convertir el string a minúsculas y eliminar los espacios
    string = string.toLowerCase().replace(/\s/g, "");
    // Crear un objeto vacío para almacenar las letras del string
    let letters = {};
    // Recorrer el string con un bucle for
    for (let i = 0; i < string.length; i++) {
      // Obtener la letra actual del string
      let letter = string[i];
      // Si la letra ya existe en el objeto, significa que se repite
      if (letters[letter]) {
        // Devolver false, no es un heterograma
        return false;
      } else {
        // Si la letra no existe en el objeto, agregarla con un valor de 1
        letters[letter] = 1;
      }
    }
    // Si el bucle termina sin devolver false, significa que no hay letras repetidas
    // Devolver true, es un heterograma
    return true;
  }

  // Crear una función que imprima en la consola si el string es un heterograma o no
function printHeterogram(string) {
    // Llamar a la función isHeterogram con el string como argumento
    let result = isHeterogram(string);
    // Si el resultado es true, imprimir "Es un heterograma"
    if (result) {
      console.log("Es un heterograma");
    } else {
      // Si el resultado es false, imprimir "No es un heterograma"
      console.log("No es un heterograma");
    }
  }

  // Ejemplos de uso de la función printHeterogram
printHeterogram("murciélago"); // Es un heterograma
printHeterogram("platzi"); // Es un heterograma
printHeterogram("milanesa cruda"); // No un heterograma


//Isogrma

// Definir la función isIsogram que recibe un argumento string
function isIsogram(string) {
    // Convertir el string a minúsculas y eliminar los espacios
    string = string.toLowerCase().replace(/\s/g, "");
    // Crear una expresión regular que busca letras repetidas
    let regex = /([a-z]).*\1/i;
    // Si el string coincide con la expresión regular, significa que no es un isograma
    if (string.match(regex)) {
      return false;
    } else {
      // Si el string no coincide con la expresión regular, significa que es un isograma
      return true;
    }
  }
  
  // Crear una función que imprima en la consola si el string es un isograma o no
  function printIsogram(string) {
    // Llamar a la función isIsogram con el string como argumento
    let result = isIsogram(string);
    // Si el resultado es true, imprimir "Es un isograma"
    if (result) {
      console.log("No es un isograma");
    } else {
      // Si el resultado es false, imprimir "No es un isograma"
      console.log("Es un isograma");
    }
  }
  
  // Ejemplos de uso de la función printIsogram
  printIsogram("murciélago"); // No es un isograma
  printIsogram("platzi"); // No es un isograma
  printIsogram("casa"); // Es un isograma
  


  //Panagrama

  // Definir la función esPangrama que recibe un argumento string
function esPangrama(string) {
    // Convertir el string a minúsculas y eliminar los espacios
    string = string.toLowerCase().replace(/\s/g, "");
    // Crear una variable con el alfabeto español en minúsculas
    let alfabeto = "abcdefghijklmnñopqrstuvwxyz";
    // Recorrer el alfabeto con un bucle for
    for (let i = 0; i < alfabeto.length; i++) {
      // Obtener la letra actual del alfabeto
      let letra = alfabeto[i];
      // Si la letra no está en el string, significa que no es un pangrama
      if (!string.includes(letra)) {
        return false;
      }
    }
    // Si el bucle termina sin devolver false, significa que todas las letras están en el string
    // Devolver true, es un pangrama
    return true;
  }
  
  // Crear una función que imprima en la consola si el string es un pangrama o no
  function imprimirPangrama(string) {
    // Llamar a la función esPangrama con el string como argumento
    let resultado = esPangrama(string);
    // Si el resultado es true, imprimir "Es un pangrama"
    if (resultado) {
      console.log("Es un pangrama");
    } else {
      // Si el resultado es false, imprimir "No es un pangrama"
      console.log("No es un pangrama");
    }
  }
  
  // Ejemplos de uso de la función imprimirPangrama
  imprimirPangrama("El veloz murciélago hindú comía feliz cardillo y kiwi"); // No es un pangrama
  imprimirPangrama("La cigüeña tocaba el saxofón detrás del palenque de paja"); // No es un pangrama
  imprimirPangrama("Hola mundo"); // No es un pangrama
  imprimirPangrama("qwertyuiopasdfghjklzxcvbnmñ"); // Es un pangrama

  


