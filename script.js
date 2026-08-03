let sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = function(){

    let name = document.getElementById("name").value;

    let mobile = document.getElementById("mobile").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");


    if(name == ""){

        formMessage.textContent = "Please Enter Your Name";

    }

    else if(mobile == ""){

        formMessage.textContent = "Please Enter Mobile Number";

    }

    else if(mobile.length != 10){

        formMessage.textContent = "Mobile Number Must Be 10 Digits";

    }

    else if(email == ""){

        formMessage.textContent = "Please Enter Email";

    }

    else if(message == ""){

        formMessage.textContent = "Please Enter Your Message";

    }

    else{

        formMessage.textContent = "Message Sent Successfully";

    }
};
let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("navMenu");

hamburger.onclick = function(){

    navMenu.classList.toggle("active");

};
let currentSlide = 0;

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

const totalSlides = 4;


function showSlide(index) {

    if (index >= totalSlides) {
        currentSlide = 0;
    }
    else if (index < 0) {
        currentSlide = totalSlides - 1;
    }
    else {
        currentSlide = index;
    }


    slides.style.transform =
        "translateX(-" +
        (currentSlide * 100) +
        "%)";


    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    dots[currentSlide].classList.add("active");
}


function nextSlide() {

    showSlide(currentSlide + 1);

}


function prevSlide() {

    showSlide(currentSlide - 1);

}


function goToSlide(index) {

    showSlide(index);

}


/* Automatic Slider */

setInterval(function() {

    nextSlide();

}, 3000);
