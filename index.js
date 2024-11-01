function resolverFuncion() {
    console.log("La función resolverFuncion ha sido llamada"); // Mensaje de depuración
   
    // Obtener la función del usuario
    const funcionUsuario = document.getElementById('funcion').value;
   
    // Obtener el valor de x que introduzca el usuario
    const x = parseFloat(document.getElementById('valorX').value);
   
    // Validar la entrada
    if (!funcionUsuario || isNaN(x)) {
        document.getElementById('resultado').textContent = 'Por favor ingresa una función y un valor para x.';
        document.getElementById('procedimiento').innerHTML = ''; // Limpiar el procedimiento
        return; // Salimos de la función si la entrada no es válida
    }

    try {
        // Paso 1: Mostrar la función introducida
        const paso1 = `1. La función introducida es: ${funcionUsuario}.`;
       
        // Paso 2: Mostrar el valor de x
        const paso2 = `2. El valor de x es: ${x}.`;
       
        // Paso 3: Evaluar la función
        const resultado = math.evaluate(funcionUsuario, { x });
       
        // Mostrar resultado
        document.getElementById('resultado').textContent = resultado;

        // Paso 4: Mostrar el resultado
        const paso3 = `3. Al sustituir x en la función, se obtiene: ${resultado}.`;
       
        // Paso 5: Calcular el dominio (para funciones simples)
        let dominio;
        if (funcionUsuario.includes('/x')) {
            dominio = "Todos los valores de x excepto x = 0 (ya que la función tiene una división por x).";
        } else if (funcionUsuario.includes('sqrt(x)')) {
            dominio = "x >= 0 (ya que la función tiene una raíz cuadrada).";
        } else {
            dominio = "Todos los números reales";
        }
        const paso4 = `4. Dominio de la función: ${dominio}.`;

        // Paso 6: Calcular un rango aproximado evaluando la función en un intervalo
        let rangoAprox;
        try {
            const valoresY = [];
            for (let i = -10; i <= 10; i++) {
                const y = math.evaluate(funcionUsuario, { x: i });
                valoresY.push(y);
            }
            const minY = Math.min(...valoresY);
            const maxY = Math.max(...valoresY);
            rangoAprox = `[${minY}, ${maxY}]`;
        } catch {
            rangoAprox = "No se pudo determinar el rango.";
        }
        const paso5 = `5. Rango aproximado de la función en el intervalo [-10, 10]: ${rangoAprox}.`;
       
        // Actualizar el procedimiento en la lista
        const procedimiento = [paso1, paso2, paso3, paso4, paso5];
        document.getElementById('procedimiento').innerHTML = procedimiento.map(p => `<li>${p}</li>`).join('');

    } catch (error) {
        // Aquí creamos un espacio indicando si la función o el valor de x que el usuario introduce es incorrecta
        document.getElementById('resultado').textContent = 'Error en la función o el valor de x.';
        document.getElementById('procedimiento').innerHTML = ''; // Limpiar el procedimiento
        console.error('Error evaluando la función', error);
    }
}