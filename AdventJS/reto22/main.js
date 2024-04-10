function compile(code) {
  alert(code)
  let POINT = 0
  let result = 0
  let prueba = 0
  let condicion = true
  const processData = (value) => {
    if (value === '+') { if (condicion) { result = result + 1; if (POINT === 1) prueba = prueba + 1; } }
    if (value === '*') { if (condicion) { result = result * 2; if (POINT === 1) prueba = prueba * 2 } }
    if (value === '-') { if (condicion) { result = result - 1; if (POINT === 1) prueba = prueba - 1 }  }
    if (value === '%') { if (condicion) { POINT = 1, prueba = 0 }  };
    if (value === '<') { if (condicion) { result = result + prueba }  }
    if (value === '¿') { if ( result >= 0) { condicion = true } else { condicion = false}}
    if (value === '?') { condicion = true}
  }

  code.split('').forEach((data) => {
    processData(data)
  })

  return result
}
console.log(compile('++%++<'))// 6
console.log(compile('++*-  S') )// 3
console.log(compile('++<--') )// 0
console.log(compile('++¿+?') )// 3
console.log(compile('--¿+++?') )// -2
console.log(compile('+¿--¿++?++*?*') )// 4
console.log(compile('++%+<<%+<<<<'))// 6
