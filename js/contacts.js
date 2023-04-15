function renderContacts() {
  getFirstLetter()
  showList()
}


function getFirstLetter() {
  contacts.forEach(function (contact) {
    const initial = contact.name.charAt(0);
    if (!initials.includes(initial)) {
      initials.push(initial);
    }
  });
  initials.sort();
}

function showList() {
  let contactList = document.getElementById('contactsList')
  contactList.innerHTML = ''
  for (let i = 0; i < initials.length; i++) {
    const initial = initials[i];
    contactList.innerHTML += `
        <div class="contactListSection" id="contactListSection">
          <span>${initial}</span>
        </div>
        <div class="contactListSeperator">
          <img src="./assets/img/contactSeperator.svg" alt="">
        </div>`;

    // Call the 'Test()' function with 'initial' as an argument here
    showContacts(initial);
  }
}

function showContacts(initial) {
  let contactList = document.getElementById('contactsList')
  for (let j = 0; j < contacts.length; j++) {
    const contact = contacts[j];
    const backgroundColor = j
    if (contact.name.charAt(0) == initial) {
      contactList.innerHTML += `
          <div class="contactListElement" id='contact${j}' onclick="setActiveContact(this)">
          <div class="contantsAvatar" style="background-color: ${avatarBackgroundColors[backgroundColor]}"><span>${contact.initials}</span></div>
          <div class="contactsInfo"><span>${contact.name}</span><span>${contact.email}</span></div>
      </div>`
    }
  }
}


function openNewContactOverlay() {
  document.getElementById('addContactOverlay').classList.remove('d-none')
  document.getElementById('container-opened-task').classList.remove('d-none')
}

function setActiveContact(element) {
  var contact = document.querySelector(".contactListElementActive");
  if (contact) {
    contact.classList.remove("contactListElementActive");
    contact.querySelector(".contactsInfo").classList.remove("active");
  }
  element.classList.add("contactListElementActive");
  element.querySelector(".contactsInfo").classList.add("active");
}

async function addContact() {
  let name = document.getElementById('addContactName')
  let email = document.getElementById('addContactEmail');
  let phone = document.getElementById('addContactPhone')
  let initials = getInitials('addContactName');
  contacts.push({ name: name.value, email: email.value, phone: phone.value, initials: initials });
  await setServer();
  document.getElementById('contactOverlay').reset()
  renderContacts()
}

function checkInputsAddContact() {
  document.querySelectorAll(`.resetErrorMessage`).forEach(function (el) {
    el.classList.add('d-none');
  })
  let errorCount = 0;
  errorCount += checkInputEmpty('addContactName') ? 1 : 0;
  errorCount += checkInputEmpty('addContactEmail') ? 1 : 0;
  errorCount += checkEmailFormat('addContactEmail') ? 1 : 0;
  if (errorCount > 0) return;
  document.querySelectorAll(`.resetErrorMessage`).forEach(function (el) {
    el.classList.add('d-none');
  })
  addContact()
}