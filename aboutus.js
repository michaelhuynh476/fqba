// Get the modal
var modal1 = document.getElementById("APathakmyModal");
var modal2 = document.getElementById("NPruittmyModal");
var modal3 = document.getElementById("MHuynhmyModal");
var modal4 = document.getElementById("GAlleymyModal");


// Get the button that opens the modal
var btn1 = document.getElementById("APathakmyButton");
var btn2 = document.getElementById("NPruittmyButton");
var btn3 = document.getElementById("MHuynhmyButton");
var btn4 = document.getElementById("GAlleymyButton");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
