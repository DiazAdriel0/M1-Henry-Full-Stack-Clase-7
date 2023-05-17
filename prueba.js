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

  /* for (let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++){
      if(array[j] < array[j-1]){
        let aux = array[j-1]
        array[j-1] = array[j]
        array[j] = aux
      }
    }
  } */

 /*  function factorear(num) {
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
  } */