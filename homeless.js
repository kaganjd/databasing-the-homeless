// adapted from modal tutorial here: http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

document.ready = function () {

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// When the user clicks the button, open the modal 
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

