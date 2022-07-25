document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key == "Enter") e.target.value = " ";

        document.querySelectorAll(".pelicula").forEach(peliculas => {

            peliculas.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
                peliculas.classList.remove("filtro") :
                peliculas.classList.add("filtro")
        })

    }




})















/*form.addEventListener("submit", e => {
    e.preventDefault();
if (buscador.value == "comedia") {
    titulo.innerText = buscador;
    comedia.style.display = 'block';
} 
if (buscador == "accion") {
    titulo.innerText = buscador;
    accion.style.display = 'block';
}

if (valor == "suspenso") {
    titulo.innerText = buscador;
    suspenso.style.display = 'block';
}

if (valor == "terror") {
    titulo.innerText = valor;
    terror.style.display = 'block';
} 

})*/