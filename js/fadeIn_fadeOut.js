function openEditContactOverlay(j, id) {
  contactToEdit = j;
  setEditContactOverlay(j);
  openContactCardWithOverlay(id);
  // document.getElementById(`${id}`).classList.remove("fade-out-right");
  // document.getElementById(`${id}`).classList.add("fade-in-left");
  // document.getElementById(`${id}`).classList.remove("d-none");
  // document.getElementById("backgroundOverlay").classList.remove("d-none");
  // document.getElementById("backgroundOverlay").classList.add("fade-in-left");
  // document.getElementById("backgroundOverlay").classList.remove("fade-out-right");
  // document.getElementById("backgroundOverlay").classList.add("fade-in-left");
  // document.getElementById("backgroundOverlay").classList.remove("d-none");
}

// function closeEditContactOverlay(id) {
//   console.log("closeEditContactOverlay called");
//   // document.getElementById('container-opened-task').classList.add('d-none')
//   document.getElementById("editContactOverlay").classList.remove("fade-in-left");

//   document.getElementById("editContactOverlay").classList.add("fade-out-right");
//   setTimeout(function () {
//     document.getElementById("editContactOverlay").classList.add("d-none");
//   }, 1000);
// }

function closeEditContactForm(event) {
  event.stopPropagation(); // Verhindert, dass das Klickereignis auf das übergeordnete Element übergeht.
}

 function openAddTaskWindow() {
   document.getElementById("add-task-window").classList.remove("fade-out-right");
   document.getElementById("add-task-window").classList.remove("d-none"); 
   document.getElementById("add-task-window").classList.add("fade-in-left");
  openBackgroundOverlay();
}

function closeAddTaskWindow() {
  document.getElementById("add-task-window").classList.add("fade-out-right");
  document.getElementById("add-task-window").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.add("fade-out-right");

  setTimeout(function () {
    document.getElementById("add-task-window").classList.add("d-none");
    document.getElementById("backgroundOverlay").classList.add("d-none");
  }, 1500);
}

function closeBackgroundOverlay() {
  document.getElementById("backgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.add("fade-out-right");
}

function closeContactCard(id) {
  document.getElementById(id).classList.remove("fade-in-left");
  document.getElementById(id).classList.add("fade-out-right");
  document.getElementById("backgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.add("fade-out-right");
  
  setTimeout(function () {
  document.getElementById(id).classList.add("d-none");
  document.getElementById("backgroundOverlay").classList.add("d-none");
  }, 1500);
}

function closeEditCardOverlay() {
  document.getElementById("editContactOverlay").classList.remove("fade-in-left");
  document.getElementById("editContactOverlay").classList.add("fade-out-right");
  document.getElementById("backgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.add("fade-out-right");
  document.getElementById("addContactCard").classList.remove("fade-in-left");
  document.getElementById("addContactCard").classList.add("fade-out-right");
  document.getElementById("add-task-window").classList.remove("fade-in-left");
  document.getElementById("add-task-window").classList.add("fade-out-right");

  setTimeout(function () {
    document.getElementById("editContactOverlay").classList.add("d-none");
    document.getElementById("backgroundOverlay").classList.add("d-none");
  }, 1500);
}

function openContactCardWithOverlay(id) {
  document.getElementById(id).classList.remove("fade-out-right");
  document.getElementById(id).classList.add("fade-in-left");
  document.getElementById(id).classList.remove("d-none");
  openBackgroundOverlay();
}

function openBackgroundOverlay() {
  document.getElementById("backgroundOverlay").classList.remove("d-none");
  document.getElementById("backgroundOverlay").classList.add("fade-in-left");
  document.getElementById("backgroundOverlay").classList.remove("fade-out-right");
}


function openHelp() {
  document.getElementById("helpContent").classList.remove("d-none");
}

