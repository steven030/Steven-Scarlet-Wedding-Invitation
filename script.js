
/* ==================== CUENTA REGRESIVA ==================== */

const fechaBoda = new Date("2026-11-29T18:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {
        document.querySelector(".countdown").innerHTML =
            "<h2>¡Hoy es el gran día! 💍</h2>";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/*
 ==================== RSVP WHATSAPP ==================== 

function enviarWhatsApp(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let acom = document.getElementById("acompanantes").value;
    let msg = document.getElementById("mensaje").value;

    let esNovio = document.getElementById("lado").checked;

    let numeroNovia = "18295022069";
    let numeroNovio = "18292861414";

    let numero = esNovio ? numeroNovio : numeroNovia;

    let texto = `Confirmación de Asistencia

    Nombre: ${nombre}
    Acompañantes: ${acom}
    Mensaje:
    ${msg}

    Gracias por la invitación.`;

    // Codificamos el texto completo
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    // Abrimos el link
    window.open(url, '_blank');
}
*/
/* ==================== RSVP WHATSAPP & GOOGLE SHEETS ==================== */

function enviarWhatsApp(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let acom = document.getElementById("acompanantes").value;
    let msg = document.getElementById("mensaje").value;
    let esNovio = document.getElementById("lado").checked;

    // 1. URL de tu Web App de Google Apps Script
    const urlAPI = "https://script.google.com/macros/s/AKfycbwelpPX27o4XSTkUK9oG6mamv-9q4eoIWBxPSd41BryQWGwx1ro-JxN4SGjdFwrwjrPJA/exec";

    // 2. Enviar los datos en segundo plano a Google Sheets para actualizar el estatus
    fetch(urlAPI, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Nombre: nombre,
            Status: "CONFIRMADO" // Actualiza automáticamente a confirmado
        })
    }).catch(error => console.error("Error al actualizar la hoja:", error));

    // 3. Preparar el mensaje para WhatsApp
    let numeroNovia = "18295022069";
    let numeroNovio = "18292861414";
    let numero = esNovio ? numeroNovio : numeroNovia;

    let texto = `Confirmación de Asistencia

    Nombre: ${nombre}
    Acompañantes: ${acom}
    Mensaje:
    ${msg}

    Gracias por la invitación.`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    // 4. Abrir WhatsApp
    window.open(url, '_blank');
}
/* ==================== SCROLL SUAVE EXTRA ==================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


/* ==================== GALERÍA AUTOMÁTICA ==================== */

document.addEventListener("DOMContentLoaded", function () {

    const galeria = document.querySelector(".grid-galeria");

    if (!galeria) {
        return;
    }

    const ruta = "img/Nuestra%20Historia/";
    const totalFotos = 39;

    // Generar automáticamente las imágenes
    for (let i = 1; i <= totalFotos; i++) {

        const imagen = document.createElement("img");

        imagen.src = `${ruta}Galery_NH_${i}.jpeg`;
        imagen.alt = `Nuestra historia ${i}`;

        galeria.appendChild(imagen);
    }

    const fotos = galeria.querySelectorAll("img");

    let indice = 0;

    // Cambio automático cada 4.5 segundos
    setInterval(function () {

        indice++;

        if (indice >= fotos.length) {
            indice = 0;
        }

        galeria.scrollTo({
            left: fotos[indice].offsetLeft - galeria.offsetLeft,
            behavior: "smooth"
        });

    }, 4500);

});

/* ==================== ANIMACIÓN DE ENTRADA ==================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";
    document.body.style.transition = "1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

});


/* ==================== EFECTO NAVBAR (OPCIONAL SUAVE) ==================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.85)";
        navbar.style.boxShadow = "none";
    }

});

// ==================== CARRUSEL INFINITO DE GALERÍA ====================
document.addEventListener("DOMContentLoaded", () => {
    const totalImganes = 39;
    const track = document.getElementById('carruselTrack');
    
    if (track) {
        let contenidoHTML = '';
        
        // Duplicamos el ciclo de 1 a 39 para lograr el efecto infinito continuo
        for (let j = 0; j < 2; j++) {
            for (let i = 1; i <= totalImganes; i++) {
                // Cambia '.jpeg' por '.jpg' o '.png' según el formato real de tus fotos
                contenidoHTML += `<img src="img/Nuestra\ Historia/Galery_NH_${i}.jpeg" alt="Galeria ${i}" onerror="this.style.display='none'">`;
            }
        }
        
        track.innerHTML = contenidoHTML;
    }
});

