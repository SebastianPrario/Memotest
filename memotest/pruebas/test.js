// function findFirstRepeated(gifts) {
//     let res = 0
//     const arrayNumber = []
//     for (let index = 0; index < gifts.length; index++) {
//     res = (gifts.slice(index+1,gifts.length+1).filter(elem => elem== gifts[index]))
//     if (res.length > 0 ) { arrayNumber.push(res[0]) }
//     }
//     if(arrayNumber.length>0)  return  arrayNumber[0]
//     else return (-1)
// }

  //   arrayLength.push(i+index+1)
  //   })
  // }
  // if(arrayLength.length>0)  return gifts[arrayLength.sort()[0]] 
  // else return -1



// RETO "2 "//
// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'trplonesa'

// function manufacture(gifts, materials) {
//   const aceptados = []
//   for (let index = 0; index < gifts.length; index++) {
//     let element = gifts[index].split("");
//     const incluir = (element) => materials.includes(element)
//     const resp = element.every(incluir)
//     if (resp) aceptados.push(gifts[index])
//   }
//   return aceptados  // Code here
 
// }

// manufacture(gifts,materials)

//RETO 3
// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''

// const original = 'stepor'
// const modified = 'stepr'

// function findNaughtyStep(original, modified) {
  // Code here}
//   let different = ""
//   original = original.split("")
//   modified = modified.split("")
//   if (original.length == modified.length)  return different = ""
  
//   if (original.length<modified.length) {
//       console.log('segundo ')
//       let i = 0
//       while (original[i]==modified[i]) { i ++}
//       different = modified[i]
//   } 
//   if (original.length>modified.length) {
//     let i = 0
//     while (original[i]==modified[i]) { i ++}
//     different = original[i]
// }   
  
//   return different
// }
// findNaughtyStep(original, modified) 

//  reto 4
//const a = decode('hola (odnum)')
//console.log(a) // hola mundo

//const b = decode('(olleh) (dlrow)!')
//console.log(b) // hello world!

//const c =
function decode(message) {
  // Code here
   const regex = /\(([^()]+)\)/

  while (message.includes('(')) {
    const match = message.match(regex)[1]
    console.log(match)
    const effects = match.split('').reverse().join('')
    console.log(effects)
    message = message.replace(`(${match})`, effects)
  }

  console.log( message) 
}
decode('seba(n(tia)s)')

// function decode(message) {
//   const arrayNew = message.split("")
//   let posicionesEntrada  = []
//   let posicionesSalida = []
//   let aux = 0
//   for (let index = 0; index < arrayNew.length; index++) {
//     if ( arrayNew[index]==="(") {
//       aux = aux + 1 
//       posicionesEntrada.push({ posicion: [index] , repeticion: aux})
//     }
//     if ( arrayNew[index]===")") {
//       aux = aux - 1 
//       posicionesSalida.push({ posicion: [index]})
//     }
//   }

//   if (posicionesEntrada.length<1) console.log (arrayNew.join(""))
//   if (posicionesEntrada.length===1) {
//     const first =(arrayNew.slice(0,(posicionesEntrada[0].posicion)))
//     const second=(arrayNew.slice(Number(posicionesEntrada[0].posicion)+1,posicionesSalida[0].posicion).reverse())
//     const third=(arrayNew.slice(Number(posicionesSalida[0].posicion)+1))
//     const resp = [...first,...second,...third]
//     return(resp.join(""))
//   }
//   if (posicionesEntrada.length===2 && posicionesEntrada[1].repeticion===1) {
//     const first =(arrayNew.slice(0,(posicionesEntrada[0].posicion)))
//     const second=(arrayNew.slice(Number(posicionesEntrada[0].posicion)+1,posicionesSalida[0].posicion).reverse())
//     const third=(arrayNew.slice(Number(posicionesSalida[0].posicion)+1,Number(posicionesEntrada[1].posicion)))
//     const second2=(arrayNew.slice(Number(posicionesEntrada[1].posicion)+1,posicionesSalida[1].posicion).reverse())
//     const third2=(arrayNew.slice(Number(posicionesSalida[1].posicion)+1))
//     const resp1 = [...first,...second,...third,...second2,...third2]
//     return (resp1.join(""))
//   }
//   if (posicionesEntrada.length==2 && posicionesEntrada[1].repeticion===2) {
//     const first =(arrayNew.slice(0,(posicionesEntrada[0].posicion)))
//     const second=(arrayNew.slice(Number(posicionesEntrada[0].posicion)+1,posicionesEntrada[1].posicion).reverse())
//     const third=(arrayNew.slice(Number(posicionesEntrada[1].posicion)+1,Number(posicionesSalida[0].posicion)))
//     const second2=(arrayNew.slice(Number(posicionesSalida[0].posicion)+1,posicionesSalida[1].posicion).reverse())
//     const third2=(arrayNew.slice(Number(posicionesSalida[1].posicion)+1))
//     console.log(second2)
//     console.log(third)
//     console.log(first)   
//     console.log(third)
//     const resp1 = [...first,...second2,...third,...second,...third2]
//     return (resp1.join(""))
//   }
  
//   if (posicionesEntrada.length==3) {
    
//     const first =(arrayNew.slice(0,(posicionesEntrada[1].posicion)))
//     const second=(arrayNew.slice(Number(posicionesEntrada[1].posicion)+1,posicionesSalida[0].posicion))
//     const third=(arrayNew.slice(Number(posicionesEntrada[2].posicion)+1,posicionesSalida[1].posicion))
//     const first2=(arrayNew.slice(Number(posicionesSalida[1].posicion)+1))
//     const resp1 = [...third , ...second]
//     return resp1
//   }
// }



// function decode2(cadena) {
//   function invertir(array) {
//     return array.map(function(str) {
//       return str.split('').reverse().join('');
//     }).join('');
//   }
  
  
//     var resultado = '';
//     var temp = '';
//     var anidamiento = 0;
//     for (var i = 0; i < cadena.length; i++) {
//       if (cadena[i] === '(') {
//         if (anidamiento ===0) {
//           resultado += temp;
//           temp = '';
//         }
//         anidamiento++;
//       } else if (cadena[i] === ')') {
//         anidamiento--;
//         if (anidamiento === 0 || anidamiento ===2) {
//           resultado += invertir([temp]);
//           temp = '';
//         }
//       } else{
//         if (anidamiento === 0) {
//           resultado += cadena[i];
//         } else {
//           temp += cadena[i];
//         } 
//       } 
//     }
//     console.log (resultado);
//   }
  


// decode2('sa(u(cla)atn)s')

// function maxDistance(movements) {
//   // Code here
//   const newArray = movements.split("")
//   let mas = 0
//   let menos = 0
//   let neutro = 0 
//   for (const iterator of newArray) {
//   if (iterator == ">")  mas = mas + 1 
//   if (iterator === "<")  menos++
//   if (iterator === "*")  neutro++
//    }
//    if (mas>menos) return (mas - menos + neutro)
//    if (mas<menos) return (menos - mas + neutro)

// }


// maxDistance( '>***>')