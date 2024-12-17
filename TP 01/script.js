// Simulador: Calculadora de presupuesto de viaje

// Entradas
const distancia = parseFloat(
  prompt("Ingresa la distancia del viaje en kilómetros: ")
);
const precioCombustible = parseFloat(
  prompt("Ingresa el precio de la nafta por litro: ")
);
const consumoPorKm = parseFloat(
  prompt("Ingresa el consumo de tu auto (km por litro): ")
);
const dias = parseInt(
  prompt("Ingresa la cantidad de días que durará el viaje: ")
);
const costoHospedaje = parseFloat(
  prompt("Ingresa el costo diario del hotel: ")
);
const costoComida = parseFloat(
  prompt("Ingresa el costo diario de la comida: ")
);

// Función para calcular el costo total del combustible
function calcularCostoCombustible(distancia, precioCombustible, consumoPorKm) {
  const litrosNecesarios = distancia / consumoPorKm;
  return litrosNecesarios * precioCombustible;
}

// Función para calcular el costo diario del viaje
function calcularCostoDiario(
  costoCombustible,
  costoHospedaje,
  costoComida,
  dias
) {
  const costoTotal = costoCombustible + (costoHospedaje + costoComida) * dias;
  return costoTotal / dias;
}

// Función principal para interactuar con el usuario
function simuladorPresupuestoViaje() {
  alert("¡Bienvenido al simulador de presupuesto de viaje!");

  // Procesamiento
  const costoCombustible = calcularCostoCombustible(
    distancia,
    precioCombustible,
    consumoPorKm
  );
  const costoDiario = calcularCostoDiario(
    costoCombustible,
    costoHospedaje,
    costoComida,
    dias
  );
  const costoTotal = costoDiario * dias;

  // Salidas
  alert(
    `Resumen del presupuesto:\n\n` +
      `Costo total del combustible: $${costoCombustible.toFixed(2)}\n` +
      `Costo diario estimado: $${costoDiario.toFixed(2)}\n` +
      `Costo total del viaje: $${costoTotal.toFixed(2)}`
  );
}

// Llamada al simulador
simuladorPresupuestoViaje();
