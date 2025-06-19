let images = document.querySelectorAll(".carousel img");
let index = 0;

function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

// Alternância automática com fade
setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 3000);

function ordenarListaPorTexto(seletor) {
    const lista = document.querySelector(seletor);
    if (!lista) return;
    const itens = Array.from(lista.children);
    itens.sort((a, b) => a.textContent.localeCompare(b.textContent));
    itens.forEach(item => lista.appendChild(item));
}

// Exemplo de uso para o footer:
// ordenarListaPorTexto("#list_footer");