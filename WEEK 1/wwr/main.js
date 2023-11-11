let slideIndex = 1;
mostrarSlide(slideIndex);

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}
