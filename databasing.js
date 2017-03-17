var rawData;
var modals = [];
var picker;

function init() {
  // tabletop.js init() function returns data as an array of objects, like this:
  // [{"animal": "horse",
  //  "color": "brown"},
  //  {"animal": "chick",
  //  "color": "yellow"}]
Tabletop.init( { key: '1asZC5tWkBpMZ47S05VxJj0fh3gyMjaKYpK1sDNE2iCA',
                   callback: gotData,
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)

function gotData(data, tabletop) {
  rawData = data;
  console.log("raw data: ", rawData)
  createModal();
}

function createModal() {
  var modalName;
  var modalText;
  var parentDiv;
  // if there's data
  if (rawData.length) {
    // iterate over each object in the data set
    for (var i = 0; i < rawData.length; i++) {
      // assign each object a modalName
      modalName = 'modal' + i;
      // push the modal name to the modals array
      modals.push(modalName);
      // get the modal text from the "text2" column of the spreadsheet
      modalText = rawData[i]["text2"];
      // set the parent element to the <p> tags
      parentEl = document.getElementById(modals[i]).children[0].children[1]
      parentEl.innerText = modalText;
      console.log(parentEl);
    }
  }
  openModal();
}

function openModal() {
  var inputs = document.getElementsByTagName("input");
  var btn = [];
  picker = Math.floor(Math.random() * modals.length);
  console.log(picker);
  for (var i = 0; i < inputs.length; i++) {
    btn = inputs[i]
    btn.onclick = function() {
      document.getElementById(modals[picker]).style.display = "block";
    }
  }
}

function closeModal() {
  var span = document.getElementsByClassName("close")[picker];
  // if the user clicks the 'x', close it
  span.onclick = function() {
    console.log("picker: ", picker)
    console.log("modals[picker]: ", modals[picker])
    document.getElementById(modals[picker]).style.display = "none";
  }
  // if the user clicks inside the modal, close it
  window.onclick = function(event) {
    if (event.target == document.getElementById(modals[picker])) {
      document.getElementById(modals[picker]).style.display = "none";
    }
  }
  // TODO: how do i reset the picker value?
}

window.setTimeout(closeModal, 3000);
