var modal1;
function createModal() {
	modal1 = document.getElementById('myModal1');
	}
createModal();

// Get the button that opens the modal
// When the user clicks the button, open the modal 
function openModal() {
var i;
var btn = document.getElementsByTagName("input");
for (i = 0; i < btn.length; i++) {
btn = document.getElementsByTagName("input")[i]; //loop doesn't work :(
btn.onclick = function() {
    modal1.style.display = "block";
	}
}
}
openModal();


// Get the <span> element that closes the modal
// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
function closeModal() {
	
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
	}
}
closeModal();

