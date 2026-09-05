
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


/* ==================== RSVP WHATSAPP ==================== */

function enviarWhatsApp(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const acompanantes = document.getElementById("acompanantes").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || acompanantes === "") {
        alert("Por favor completa los campos obligatorios 💚");
        return;
    }

    const texto = `
💍 Confirmación de Boda

Nombre: ${nombre}
Acompañantes: ${acompanantes}
Mensaje: ${mensaje || "Sin mensaje"}
    `;

    const numero = "18290000000"; // 👈 cambia aquí tu número real

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
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
    const fotos = document.querySelectorAll(".grid-galeria img");

    if (!galeria || fotos.length === 0) {
        return;
    }

    let indice = 0;

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


