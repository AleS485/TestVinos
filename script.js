document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMACIÓN DEL HEADER AL HACER SCROLL ---
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scroll");
        } else {
            header.classList.remove("header-scroll");
        }
    });

    // --- 2. EFECTO DE ESCRITURA (TYPEWRITER) ---
    const texto = "Somos Exportacus S.R.L y nos dedicamos a la distribucion de vinos artesanales";
    const contenedor = document.getElementById("titulo-tipeado");
    let i = 0;
    const velocidad = 70;

    function escribir() {
        if (contenedor && i < texto.length) {
            contenedor.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();

    // --- 3. CAMBIO AUTOMÁTICO DE FOTOS ---
    const imagenNosotros = document.getElementById('foto-nosotros');
    const misFotos = [
        "img/vino1.webp",
        "img/vino2.jpg",
        "img/vino3.jpg"
    ];
    
    // Precarga para evitar parpadeos
    misFotos.forEach(ruta => {
        const img = new Image();
        img.src = ruta;
    });

    let indice = 0;
    if (imagenNosotros) {
        setInterval(() => {
            imagenNosotros.style.opacity = "0";
            setTimeout(() => {
                indice = (indice + 1) % misFotos.length;
                imagenNosotros.src = misFotos[indice];
                imagenNosotros.style.opacity = "1";
            }, 500);
        }, 3500);
    }
});