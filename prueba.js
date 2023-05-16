//insert sort
/* let ordArr = array
  for (let i = 0; i < array.length; i++) {
    if(ordArr[i+1] < ordArr[i]){
      let aux = array[i+1]
      ordArr[i+1] = array[i]
      ordArr[i] = aux
      console.log(ordArr);
    }
    for (let j = 0; j < ordArr.length; j++) {
      if(ordArr[j+1] < ordArr[j]){
        let aux = array[j+1]
        ordArr[j+1] = array[j]
        ordArr[j] = aux
        console.log(ordArr);
      }
    }
  } */

  /* for (let i = 0; i < array.length; i++){
    for (let j = 1; j < array.length; j++) {
      if(array[j] < array[j-1]){
        let aux = array[j-1]
        array[j-1] = array[j]
        array[j] = aux
        console.log(array);
      }
    }
  } */

 /*  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    //pseudocodigo
    //comparo el segundo elemento con el anterior
    //si el elemento anterior es mayor tengo que swapearlos
    for (let i = 1; i < array.length; i++) {
      let j = i
      while(array[j] < array[j-1]){
        let aux = array[j-1]
        array[j-1] = array[j]
        array[j] = aux
        j--
      }
    }
    return array
  } */