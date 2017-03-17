var rawData;
var modals = [];
var picker;

function init() {
  // tabletop.js init() function returns data as an array of objects, like this:
  // [{"animal": "horse",
  //  "color": "brown"},
  //  {"animal": "chick",
  //  "color": "yellow"}]
  // alt key: '1asZC5tWkBpMZ47S05VxJj0fh3gyMjaKYpK1sDNE2iCA'
Tabletop.init( { key: '1Obseltf_Ef0peTYXzzVkZPAgs8pcE34277QnsGAfkaM',
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
  // get all the <input> tags
  var inputs = document.getElementsByTagName("input")
  // create an array to store buttons
  var btn = [];
  // log the picker value
  console.log(picker);
  for (var i = 0; i < inputs.length; i++) {
    btn = inputs[i]
    // when user clicks the button
    btn.onclick = function() {
      // prevent default behavior of checkboxes
      preventDef(event);
      // create a picker value to choose which modal text is displayed
      picker = Math.floor(Math.random() * modals.length);
      // display the modal indexed by the picker value
      document.getElementById(modals[picker]).style.display = "block";
    }
  }
}

function preventDef(event) {
  event.preventDefault();
}

function closeModal() {
  // if there's no picker value yet, set one
  if (picker === undefined) {
    picker = Math.floor(Math.random() * modals.length);
  }
  // get the "close" span indexed by the picker value
  var span = document.getElementsByClassName("close")[picker];
  // when the user clicks the "close span",
  span.onclick = function() {
    // change style to "display: none"
    document.getElementById(modals[picker]).style.display = "none";
    resetPicker()
  }
  // if the user clicks on the window outside the modal
  window.onclick = function(event) {
    if (event.target == document.getElementById(modals[picker])) {
      // change style to "display: none"
      document.getElementById(modals[picker]).style.display = "none";
      resetPicker()
    }
  }
}

function resetPicker() {
  picker = null;
}

window.setTimeout(closeModal, 3000);
