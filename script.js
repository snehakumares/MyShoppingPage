var loginbutton = document.getElementById("loginclick");
var cl = document.getElementById("closelogin");
var loginmodal = document.getElementById("login");
loginbutton.onclick = function() {
    loginmodal.style.display = "flex";
}
cl.onclick = function() {
    loginmodal.style.display = "none";
}


var signupbutton = document.getElementById("singupclick");
var cs = document.getElementById("closesignup");
var signupmodal = document.getElementById("signup");
signupbutton.onclick = function() {
    signupmodal.style.display = "flex";
}
cs.onclick = function() {
    signupmodal.style.display = "none";
}


function openPage(pageName, elmnt, name) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    if (pageName == "Contact" || pageName == "Category_1") {
        document.getElementById(pageName).style.display = "flex";
    }
    if (elmnt == "topnav") {
        var topnav = document.getElementById("myTopnav");
        var i;
        topnav.className = "topnav";
        show = document.getElementById("show");
        show.innerHTML = name;
    }
    scrollToTop();
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function scrollToTop() {
    window.scrollTo(0, 0);
}