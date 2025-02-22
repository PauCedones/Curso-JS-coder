document.addEventListener("DOMContentLoaded", () => inicializarApp());

const actualizarElemento = (id, contenido) => document.getElementById(id).innerHTML = contenido;

const inicializarApp = () => {
    actualizarFecha();
    obtenerDatosIniciales();
    document.getElementById("formularioViaje").addEventListener("submit", calcularPresupuesto);
    cargarHistorialDesdeLocalStorage();
};

const actualizarFecha = () => actualizarElemento("fechaHoy", new Date().toLocaleDateString("es-ES", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
}));

const obtenerDatosIniciales = async () => await Promise.all([obtenerDolarHoy(), obtenerClima("Buenos Aires")]);

const obtenerDolarHoy = async () => {
    try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/blue");
        if (!respuesta.ok) throw new Error();
        const { venta } = await respuesta.json();
        actualizarElemento("dolarHoy", `Dólar: $${venta.toFixed(2)} ARS`);
    } catch {
        actualizarElemento("dolarHoy", "Dólar: No disponible");
    }
};

const obtenerClima = async (ciudad) => {
    const apiKey = "7299ac91c0a179ab932f93d120fd561b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error();
        const { weather, main } = await respuesta.json();
        actualizarElemento("climaHoy", `${ciudad}: ${weather[0].description}, ${main.temp}°C`);
    } catch {
        actualizarElemento("climaHoy", "Clima: No disponible");
    }
};

const calcularPresupuesto = (event) => {
    event.preventDefault();
    
    const ciudad = document.getElementById("ciudad").value.trim();
    const valoresNumericos = ["distancia", "consumoPorKm", "dias", "costoHospedaje", "costoComida"].map(id => parseFloat(document.getElementById(id).value.trim()));
    
    if (!ciudad || valoresNumericos.some(isNaN)) return alert("Todos los campos son obligatorios y deben ser valores numéricos válidos");
    
    const [distancia, consumoPorKm, dias, costoHospedaje, costoComida] = valoresNumericos;
    const costoCombustible = (distancia / consumoPorKm) * 850;
    const costoTotal = (costoHospedaje * dias) + (costoComida * dias) + costoCombustible;
    
    actualizarElemento("resultado", `
        <div class="alert alert-success">
            <h4>Presupuesto para ${ciudad}</h4>
            <p>Costo total estimado: <strong>$${costoTotal.toFixed(2)} ARS</strong></p>
        </div>
    `);
    guardarPresupuestoEnHistorial({ ciudad, costoTotal });
};

const guardarPresupuestoEnHistorial = (presupuesto) => {
    const historial = JSON.parse(localStorage.getItem("historialPresupuestos")) || [];
    historial.push(presupuesto);
    localStorage.setItem("historialPresupuestos", JSON.stringify(historial));
    mostrarHistorial(historial);
};

const cargarHistorialDesdeLocalStorage = () => mostrarHistorial(JSON.parse(localStorage.getItem("historialPresupuestos")) || []);

const mostrarHistorial = (historial) => {
    actualizarElemento("historialPresupuestos", historial.map(({ ciudad, costoTotal }) =>
        `<li class="list-group-item"><strong>${ciudad}</strong>: $${costoTotal.toFixed(2)} ARS</li>`
    ).join(""));
    document.getElementById("historialContainer").style.display = historial.length ? "block" : "none";
};
