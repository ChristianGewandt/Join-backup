setURL('https://gruppenarbeit-485join.developerakademie.net/join/smallest_backend_ever')
let users

async function init() {
  loadServer();
  loadLocalStorage();
}

function addUser() {
  let name = document.getElementById('registerName')
  let email = document.getElementById('registerEmail');
  let password = document.getElementById('registerPassword')
  users.push({ email: email.value, password: password.value })
  window.location.href = './login.html?msg=Du hast dich erfolgreich registriert'
}

function login() {
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let user = users.find(u => u.email == email.value && u.password == password.value);

}

function setServer(){
  let tasksAsText = JSON.stringify(tasks);
  let contactsAsText = JSON.stringify(contacts);
  console.log(tasksAsText)
    // let contactsTitelsAsText = JSON.stringify(contacts);
  
  backend.setItem('tasks', tasksAsText)
  backend.setItem('contacts', contactsAsText)
  console.log('testtest')
}

async function loadServer() {
  await downloadFromServer();
  tasks = JSON.parse(backend.getItem('tasks')) || [];
  contacts = JSON.parse(backend.getItem('contacts')) || [];
  console.log(contacts)
  
 
}



// zeige das ausgewählte Content auf index.html
function showContent(x) {
  var content = document.querySelectorAll(".indexContent");
  content.forEach(function (element) {
    element.classList.add("d-none");
  });
  document.getElementById(x).classList.remove('d-none')
}

// zeige welcher Content aktuell ausgewählt ist
function setActiveElement(element) {
  var icon = document.querySelector(".desktopTemplateIconActive");
    icon.classList.remove("desktopTemplateIconActive");
  
  document.getElementById('legalNotice').classList.remove('desktopTemplateIconActive')
  element.classList.add("desktopTemplateIconActive");
  setActiveIcon(element)
}

function setActiveIcon(){
  var icons = document.getElementsByClassName("desktopTemplateMenuElements");
  for (var i = 0; i < icons.length; i++) {
    var img = icons[i].querySelector("img");
    img.src = img.src.replace("_active.svg", ".svg");
  }
  var icon = document.querySelector(".desktopTemplateIconActive");
  var img= icon.querySelector("img");
  img.src = img.src.replace(".svg", "_active.svg");
}

// ändere img bei hover auf buttons
function hover(element, url) {
  element.setAttribute('src', url);
}

function unhover(element, url) {
  element.setAttribute('src', url);
}