"use strictly";

function calculadora(operador, v1, v2) {
  if (operador === "sumar") {
    let suma = v1 + v2;
    return suma;
  } else if (operador === "restar") {
    let resta = v1 - v2;
    return resta;
  } else if (operador === "multiplicar") {
    let multiplicacion = v1 * v2;
    return multiplicacion;
  } else if (operador === "dividir") {
    let division = v1 / v2;
    return division;
  } else {
    return `Operador ${operador} no es correcto!`;
  }
}

calculadora("sumar", 10, 2);
