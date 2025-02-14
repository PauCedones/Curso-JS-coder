document.addEventListener("DOMContentLoaded", () => {
    actualizarFecha();
    obtenerDolarHoy();
    obtenerClima("Buenos Aires");
    document.getElementById("formularioViaje").addEventListener("submit", calcularPresupuesto);
    cargarHistorialDesdeLocalStorage();
});

function actualizarFecha() {
    const fechaHoy = new Date().toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("fechaHoy").textContent = fechaHoy;
}

async function obtenerDolarHoy() {
    try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/blue");
        if (!respuesta.ok) throw new Error("Error al obtener datos");
        const data = await respuesta.json();
        document.getElementById("dolarHoy").textContent = `Dólar: $${data.venta.toFixed(2)} ARS`;
    } catch (error) {
        document.getElementById("dolarHoy").textContent = "Dólar: No disponible";
    }
}

async function obtenerClima(ciudad) {
    const apiKey = "7299ac91c0a179ab932f93d120fd561b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error al obtener el clima");
        const data = await respuesta.json();
        document.getElementById("climaHoy").textContent = `Buenos Aires: ${data.weather[0].description}, ${data.main.temp}°C`;
    } catch (error) {
        document.getElementById("climaHoy").textContent = "Clima: No disponible";
    }
}

function calcularPresupuesto(event) {
    event.preventDefault();
    
    const ciudad = document.getElementById("ciudad").value.trim();
    const distancia = document.getElementById("distancia").value.trim();
    const consumoPorKm = document.getElementById("consumoPorKm").value.trim();
    const dias = document.getElementById("dias").value.trim();
    const costoHospedaje = document.getElementById("costoHospedaje").value.trim();
    const costoComida = document.getElementById("costoComida").value.trim();
    const precioCombustible = 850; 
    


    
    const distanciaNum = parseFloat(distancia);
    const consumoPorKmNum = parseFloat(consumoPorKm);
    const diasNum = parseInt(dias);
    const costoHospedajeNum = parseFloat(costoHospedaje);
    const costoComidaNum = parseFloat(costoComida);
    

    
    const costoCombustible = (distanciaNum / consumoPorKmNum) * precioCombustible;
    const costoTotal = (costoHospedajeNum * diasNum) + (costoComidaNum * diasNum) + costoCombustible;
    
    document.getElementById("resultado").innerHTML = `
        <div class="alert alert-success">
            <h4>Presupuesto para ${ciudad}</h4>
            <p>Costo total estimado: <strong>$${costoTotal.toFixed(2)} ARS</strong></p>
        </div>`;
    
    guardarPresupuestoEnHistorial({ ciudad, costoTotal });
}

function guardarPresupuestoEnHistorial(presupuesto) {
    let historial = JSON.parse(localStorage.getItem("historialPresupuestos")) || [];
    historial.push(presupuesto);
    localStorage.setItem("historialPresupuestos", JSON.stringify(historial));
    mostrarHistorial(historial);
}

function cargarHistorialDesdeLocalStorage() {
    const historial = JSON.parse(localStorage.getItem("historialPresupuestos")) || [];
    mostrarHistorial(historial);
}

function mostrarHistorial(historial) {
    const historialContainer = document.getElementById("historialContainer");
    const historialLista = document.getElementById("historialPresupuestos");
    historialLista.innerHTML = "";
    
    if (historial.length > 0) {
        historial.forEach(presupuesto => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = `<strong>${presupuesto.ciudad}</strong>: $${presupuesto.costoTotal.toFixed(2)} ARS`;
            historialLista.appendChild(li);
        });
        historialContainer.style.display = "block";
    } else {
        historialContainer.style.display = "none";
    }
}
