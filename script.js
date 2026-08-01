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
