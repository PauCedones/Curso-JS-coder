// Simulador de presupuesto de viaje con DOM y Eventos

// Variables globales
const form = document.getElementById("formularioViaje");
const resultadoDiv = document.getElementById("resultado");

// Función para calcular el costo total del combustible
function calcularCostoCombustible(distancia, precioCombustible, consumoPorKm) {
    const litrosNecesarios = distancia / consumoPorKm;
    return litrosNecesarios * precioCombustible;
}

// Función para calcular el costo diario del viaje
function calcularCostoDiario(costoCombustible, costoHospedaje, costoComida, dias) {
    return (costoCombustible + (costoHospedaje + costoComida) * dias) / dias;
}

// Función para manejar el envío del formulario
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Captura de datos del formulario
    const distancia = parseFloat(document.getElementById("distancia").value);
    const precioCombustible = parseFloat(document.getElementById("precioCombustible").value);
    const consumoPorKm = parseFloat(document.getElementById("consumoPorKm").value);
    const dias = parseInt(document.getElementById("dias").value);
    const costoHospedaje = parseFloat(document.getElementById("costoHospedaje").value);
    const costoComida = parseFloat(document.getElementById("costoComida").value);

    // Validación básica
    if (isNaN(distancia) || isNaN(precioCombustible) || isNaN(consumoPorKm) || isNaN(dias) || isNaN(costoHospedaje) || isNaN(costoComida)) {
        resultadoDiv.innerHTML = "<p class='error'>Por favor, completa todos los campos correctamente.</p>";
        return;
    }

    // Cálculos
    const costoCombustible = calcularCostoCombustible(distancia, precioCombustible, consumoPorKm);
    const costoDiario = calcularCostoDiario(costoCombustible, costoHospedaje, costoComida, dias);
    const costoTotal = costoDiario * dias;

    // Guardar datos en localStorage
    const simulacion = {
        distancia,
        precioCombustible,
        consumoPorKm,
        dias,
        costoHospedaje,
        costoComida,
        costoCombustible,
        costoDiario,
        costoTotal
    };
    localStorage.setItem("ultimaSimulacion", JSON.stringify(simulacion));

    // Mostrar resultados
    resultadoDiv.innerHTML = `
        <h3>Resumen del presupuesto</h3>
        <p>Costo total del combustible: $${costoCombustible.toFixed(2)}</p>
        <p>Costo diario estimado: $${costoDiario.toFixed(2)}</p>
        <p>Costo total del viaje: $${costoTotal.toFixed(2)}</p>
    `;
});

// Recuperar última simulación al cargar la página
window.addEventListener("load", () => {
    const ultimaSimulacion = localStorage.getItem("ultimaSimulacion");
    if (ultimaSimulacion) {
        const datos = JSON.parse(ultimaSimulacion);
        resultadoDiv.innerHTML = `
            <h3>Última simulación</h3>
            <p>Distancia: ${datos.distancia} km</p>
            <p>Precio del combustible: $${datos.precioCombustible}/litro</p>
            <p>Consumo del vehículo: ${datos.consumoPorKm} km/litro</p>
            <p>Días de viaje: ${datos.dias}</p>
            <p>Costo diario de hospedaje: $${datos.costoHospedaje}</p>
            <p>Costo diario de comida: $${datos.costoComida}</p>
            <p>Costo total del combustible: $${datos.costoCombustible.toFixed(2)}</p>
            <p>Costo diario estimado: $${datos.costoDiario.toFixed(2)}</p>
            <p>Costo total del viaje: $${datos.costoTotal.toFixed(2)}</p>
        `;
    }
});
