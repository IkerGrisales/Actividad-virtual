function calcular() {
    // Obtiene los valores de los campos de entrada y los convierte a números con decimales (float).
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
// Estructura de control que evalúa la operación seleccionada por el usuario.
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2; 
            break;
        case "*":
            resultado = num1 * num2; 
            break;
        case "/":
            if (num2 !== 0) { 
                resultado = num1 / num2;
            } else {
                resultado = "No se puede dividir por cero";
            }
            break;
        default:
            resultado = "Operación no válida"; 
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado; // Agregado espacio después de "Resultado:"
}
