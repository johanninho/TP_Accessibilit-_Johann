
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let newComment = document.createElement('li');
            newComment.textContent = this.querySelector('input[type="text"]').value;
            this.parentElement.querySelector('.comments-list').appendChild(newComment);
            this.querySelector('input[type="text"]').value = '';
        });
    });
});

// script.js
function openForm() {
    document.getElementById("form-container").classList.remove("hidden"); // Assurez-vous de retirer `hidden` si elle est présente
    document.getElementById("form-container").classList.add("active");
    document.getElementById("overlay").style.display = "block";
}

function closeForm() {
    document.getElementById("form-container").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
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
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}