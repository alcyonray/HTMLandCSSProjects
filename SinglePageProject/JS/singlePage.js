function openModal() {
    document.getElementById("myModal").style.display = "block";
    console.log("openModal has executed.");
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    console.log("closeModal was triggered");
}
var closeButton = document.getElementById("modalClose");
closeButton.addEventListener("click", closeModal());

function modalCheck() {
    if (document.getElementById("myModal").style.display === "block") {
        document.getElementById("myModal").style.display = "none";
    }
    console.log("modalCheck was triggered");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    for (let i = 0; i < slides.length; i++) {
        const element = slides[i];
        element.style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.className = element.className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}