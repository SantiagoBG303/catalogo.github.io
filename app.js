<script>
function buscar() {
    const texto = document.getElementById("busqueda").value.toLowerCase().trim();
    if (!texto) return;

    // Limpiar resultados anteriores
    const marcas = document.querySelectorAll(".resaltado");
    marcas.forEach(m => {
        const parent = m.parentNode;
        parent.replaceChild(document.createTextNode(m.textContent), m);
        parent.normalize();
    });

    let encontrado = false;
    const elementos = document.querySelectorAll("section, p, h1, h2, h3, h4, h5, h6, li");

    elementos.forEach(el => {
        const contenido = el.textContent.toLowerCase();
        const index = contenido.indexOf(texto);
        if (index !== -1 && !encontrado) {
            // Resaltar y hacer scroll
            const original = el.innerHTML;
            const regex = new RegExp(`(${texto})`, "gi");
            el.innerHTML = original.replace(regex, '<span class="resaltado">$1</span>');
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            encontrado = true;
        }
    });

    if (!encontrado) {
        alert("No se encontró esa palabra en la página.");
    }
}
</script>
