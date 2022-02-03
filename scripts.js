function accordionClick() {
    var acc = document.getElementsByClassName("accordion"); 
    var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active"); 
        var panel = this.nextElementSibling; 
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; 
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
       }
    });
    };
};

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
    var slides = document.getElementsByClassName("myPhotos"); 
    if (n > slideIndex.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.lenght }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    slides[slideIndex - 1].style.display = "block";
}

