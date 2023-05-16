'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primos = [1,2,3,5,7,11,13,17,19]
  let arrFacotres = [];
  for (let i = 8; i >= 0; i--) {
    while((num % primos[i]) === 0 && num !== 1){
      num = num / primos[i]
      arrFacotres.unshift(primos[i])
      console.log(arrFacotres)
    }
  }
  arrFacotres.unshift(1)
  return arrFacotres
}
factorear(180)

console.log(bubbleSort([5, 1, 4, 2, 8]))
console.log(bubbleSort([10, 10, 16, 12]))
console.log(bubbleSort([10, -2, -7, 4]))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]){
        let aux = array[i+1]
        array[i+1] = array[i]
        array[i] = aux
      }
    }
  }
  return array
}

//console.log(insertionSort([5, 1, 4, 2, 8]))
//console.log(insertionSort([10, 10, 16, 12]))
//console.log(insertionSort([10, -2, -7, 4]))
console.log(insertionSort([-2, 10, -7, 4]))
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //pseudocodigo
  //comparo el segundo elemento con el anterior
  //si el elemento anterior es mayor tengo que swapearlos
  for(let i = 0; i < array.length; i++) {
    for(let j = i; j >= 0; j--){
      if(array[j] < array[j-1]){
        let aux = array[j-1]
        array[j-1] = array[j]
        array[j] = aux
      }
    }
  }
  return array
}

console.log(selectionSort([5, 1, 4, 2, 8]))
console.log(selectionSort([10, 10, 16, 12]))
console.log(selectionSort([10, -2, -7, 4]))
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let currentMin = array[i]
    for (let j = i; j < array.length; j++) {
      if(array[j] < currentMin){
        currentMin = array[j]
      }
    }
    let posAux = array.indexOf(currentMin)
    let aux = array[i]
    array[i] = array[posAux]
    array[posAux] = aux
  }
  return array
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
