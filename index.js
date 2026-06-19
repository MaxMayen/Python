const buscador = document.getElementById('buscador');
const secciones = document.querySelectorAll('.seccion-wiki');

// ESTE ARCHIVO ES COPIA, EL ORIGINAL TIENE UN COMENTARIO DIFERENTE
buscador.addEventListener('input', function(evento) {
    const textoUsuario = evento.target.value.toLowerCase();

    secciones.forEach(seccion => {
        const parrafos = seccion.querySelectorAll('p');
        let parrafosVisibles = 0;

        parrafos.forEach(parrafo => {
            const textoParrafo = parrafo.textContent.toLowerCase();

            if (textoParrafo.includes(textoUsuario)) {
                parrafo.style.display = "block";
                parrafosVisibles++;              
            } else {
                parrafo.style.display = "none";  
            }
        });

        if (parrafosVisibles > 0) {
            seccion.style.display = "block";
        } else {
            seccion.style.display = "none";
        }
    });
});