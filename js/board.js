

function renderBoard() {

    let containerToDo = document.getElementById('boardContentToDo');
    let containerInProgress = document.getElementById('boardContentInProgress');
    let containerAwaiting = document.getElementById('boardContentAwaiting');
    let containerDone = document.getElementById('boardContentDone');
    deleteBoradTasks();


    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i];
        if (element.taskProgress === 'boardContentToDo') {
            containerToDo.innerHTML += addBoardCard(element, i)
        }
        if (element.taskProgress === 'boardContentInProgress') {
            containerInProgress.innerHTML += addBoardCard(element, i)
        }
        if (element.taskProgress === 'boardContentAwaiting') {
            containerAwaiting.innerHTML += addBoardCard(element, i)
        }
        if (element.taskProgress === 'boardContentDone') {
            containerDone.innerHTML += addBoardCard(element, i)
        }
    }

}

function deleteBoradTasks() {
    document.getElementById('boardContentToDo').innerHTML ='';
    document.getElementById('boardContentInProgress').innerHTML = '';
    document.getElementById('boardContentAwaiting').innerHTML = '';
    document.getElementById('boardContentDone').innerHTML = '';
}



function addBoardCard(element, i) {
    return /*hmtl*/ `
    <div class="boardCard" onclick="openActiveTaskOverlay(${i})" draggable="true" ondragstart="startDragging(${
      tasks[i]["id"]
    })">
                <div class="boardCardInner">
                    <div class="boardCardCategory" style="background-color:${
                      element["taskCategory"]["categoryColor"]
                    }"><span>${
      element["taskCategory"]["categorytext"]
    }</span></div>
                    <div class="boardCardContent">
                        <span class="boardCardTaskName">${
                          element.taskTitle
                        }</span>
                        <span class="boardCardTaskDescription">${
                          element.taskDescription
                        }</span>
                    </div>
                    ${addBoardCardSubtask(element, i)}
                    
                    <div class="boardCardAssign">
                    ${addBoardCardAssignedTo(element)}
                        <img src="${element.prio.iconColor}" alt="">
                    </div>
                </div>
            </div>
    `;
}

function addBoardCardSubtask(element, i) {
    let subtasks = element.subtasks
    if (subtasks.length > 0) {
        let subtasksDoneCounter = 0;
        for (let i = 0; i < subtasks.length; i++) {
            if (subtasks[i].subtaskDone.value === true) {
                subtasksDoneCounter++;
            } 
            if (subtasks[i].subtaskDone.value === false && subtasksDoneCounter != 0) {
              subtasksDoneCounter -1;
            }
        }


        return `
    <div class="boardCardProgress">
        <progress id="boardCardProgress${i}" max="${subtasks.length}" value="${subtasksDoneCounter}"></progress>
        <div><span>${subtasksDoneCounter}</span>/<span>${subtasks.length}</span><span> Done</span></div>
    </div>`
    } else {
        return `<div class="boardCardProgress"></div>`
    }
}

function addBoardCardAssignedTo(element) {
    let assignedTo = element.assignedTo;
    return `
    <div class="boardCardAssignedTo">
      ${generateAvatarHtml(assignedTo)}
    </div>
  `;
}

function generateAvatarHtml(assignedTo) {
    let avatarHtml = '';

    if (assignedTo.length === 3) {
        for (let index = 0; index < assignedTo.length; index++) {
            const contact = assignedTo[index];
            avatarHtml += `<div class="boardAvatar"><span>${contact.initials}</span></div>`;
        }
    } else if (assignedTo.length > 3) {
        for (let index = 0; index < 2; index++) {
            const contact = assignedTo[index];
            avatarHtml += `<div class="boardAvatar"><span>${contact.initials}</span></div>`;
        }
        avatarHtml += `<div class="boardAvatar" style="background-color:black"><span>+${assignedTo.length - 2}</span></div>`;
    } else {
        for (let index = 0; index < assignedTo.length; index++) {
            const contact = assignedTo[index];
            avatarHtml += `<div class="boardAvatar"><span>${contact.initials}</span></div>`;
        }
    }

    return avatarHtml;
}

/**
 * Opens the Add Task pop-up window in the board page. (Öffnet das Pop up Fenster Add Task in der board Seite.)
 */
function popUpWindowaddTask() {
    document.getElementById('container-opened-task').classList.remove('d-none');
    document.getElementById('add-task-window').classList.remove('d-none');

}

/**
 * Closes the Add Task pop-up window in the board page. (Schließt das Pop up Fenster Add Task in der board Seite.)
 */
function popUpWindowCloseAddTask() {
    document.getElementById('container-opened-task').classList.add('d-none');
    document.getElementById('add-task-window').classList.add('d-none');
}

function openActiveTaskOverlay(i) {
   
    document.getElementById('activeTaskOverlay').innerHTML = addActiveTaskOverlayHTML(i);
    document.getElementById('activeTaskOverlay').classList.remove('d-none');
    document.getElementById('container-aktive-task').classList.remove('d-none');
    checkboxCheckedInActivTask(i)
}

function closeActiveTaskOverlay() {
    document.getElementById('container-aktive-task').classList.add('d-none');
    document.getElementById('activeTaskOverlay').classList.add('d-none');
    document.getElementById("activeTaskEditOverlay").classList.add("d-none");
    setServer();
}




/**
 * fade in add Task Container left
 * @param {*} i 
 * @returns 
 */
function fadeInAddTaskContainerLeft() {


        
    let flyInAddTaskContainer = document.getElementById("backgroundOverlay");
    let addTastContainer = document.getElementById('container-opened-task');


        
            flyInAddTaskContainer.classList.add('fade-in-left');
            flyInAddTaskContainer.classList.remove('d-none');
            addTastContainer.classList.remove('d-none');
            flyInAddTaskContainer.classList.remove('fade-out-right');
            addTastContainer.classList.remove('fade-out-right');
            
        
    }



function addActiveTaskOverlayHTML(i) {
    let task = tasks[i]
    return /*html*/ `
    <div class="activeTaskOverlay">
    <div class="activeTaskCategory" style="background-color:${
      task.taskCategory.categoryColor
    }"><span>${task.taskCategory.categorytext}</span></div>
    <div class="activeTaskTitle">${task.taskTitle}</div>
    <div class="activeTaskDescription">${task.taskDescription}</div>
    <div class="activeTaskDueDate">
        <span>Due date:</span><span>${task.dueDate}</span>
    </div>

    <div class="activeTaskPriority">
        <span>Priority:</span>
        <div class="activeTaskPriorityButton" style="background-color:${
          task.prio.backgroundColor
        }"><span>${task.prio.name}</span><img src="${
      task.prio.iconWhite
    }" alt=""></div>
    </div>
    <div class="aktive-task-subtask-container">
        <span class="aktive-Task-points-font-blod">Subtasks:</span>
        <div id="subtasks-on-aktive-tasks">${subtasksOnAktiveTasks(
          task,
          i,
        )}</div>
    </div>
    <div class="activeTaskAssignedToHeader">Assigned To:</div>
    <div id="activeTaskAssignedToContainer">
      
        ${addActiveCardAssignedTo(task)}
       
    </div>
    <div class="activeTaskButtons">
        <div onmouseover="hover(activeTaskDelete, 'assets/img/deleteHover.svg')" onmouseout="hover(activeTaskDelete, 'assets/img/delete.svg')" class="activeTaskDelete" onclick="deleteBoardTasks(${i})">
            <img id="activeTaskDelete" src="assets/img/delete.svg" alt="">
        </div>
        <div class="activeTaskEdit" onclick="loadActiveEditTaskOverlay(${i}); okayButtonHTML(${i}, 2);">
            <img id="activeTaskEdit" src="assets/img/editTaskPen.svg" alt="">
        </div>
    </div>
    <img onclick="closeActiveTaskOverlay()" class="activeTaskCloseButton" src="assets/img/black-x.svg" alt="">
</div>
</div>
    `;
}

function subtasksOnAktiveTasks(task, i) {

    let subtasks = task.subtasks;
    let avatarHtml = '';

    for (let j = 0; j < subtasks.length; j++) {
        const subtask = subtasks[j];
        avatarHtml += `<div class="checkbox-container">
      <input id="checkbox${i}-${j}" class="checkbox" type="checkbox" onchange="checkboxChanged(${i}, ${j})">
      <div>${subtask.subtaskTitle}</div>
    </div>`
        
        
    }

    return avatarHtml;
}
   


function addActiveCardAssignedTo(task) {
    let assignedTo = task.assignedTo;
    let avatarHtml = '';
 
    for (let index = 0; index < assignedTo.length; index++) {
        const contact = assignedTo[index];
        avatarHtml += ` <div class="activeTaskAssignedTo">
        <div class="activeTaskAvartar"><span>${contact.initials}</span></div>
        <span>${contact.name}</span></div>`;
    }
    
    return avatarHtml;
  
}



function checkboxChanged(i, j) {
    let checkbox = document.getElementById(`checkbox${i}-${j}`);
    
    if(checkbox.checked) {
        changeFromFalseToTrue(i, j);
    }else {
        checkboxUncheckedInActivTask(i, j);
    }
}

function checkboxCheckedInActivTask(i, j) {
    let progressElement = document.getElementById(`boardCardProgress${i}`);
    let progressValue = progressElement.value;
    progressElement.checked = true;

    if (progressValue >= 0 ) {
        
        progressElement.value += 1
    }
}

function checkboxUncheckedInActivTask(i, j) {

    let progressElement = document.getElementById(`boardCardProgress${i}`);
    progressElement.checked = false;
    let progressValue = parseInt(progressElement.value);

    if (progressValue > 0) {
        progressValue -= 1;
        progressElement.value = progressValue;
        tasks[i].subtasks[j]["subtaskDone"].value = false;
        renderBoard();
    }
}

function changeFromFalseToTrue(i, j) {
 let contactName = tasks[i];
 contactName.subtasks[j]["subtaskDone"].value = true;
renderBoard();

}

function checkboxCheckedInActivTask(i) {
  for (let k = 0; k < tasks[i].subtasks.length; k++) {
    let taskName = tasks[i].subtasks[k].subtaskDone;
    if (taskName.value === true) {
      document.getElementById(`checkbox${i}-${k}`).checked = true;
    }
  }
}

function okayButtonHTML(i) {
    document.getElementById("edit-Button-ok-container",).innerHTML = `
    <div id="edit-Button-ok-container" class="edit-Button-ok-container" onclick="clickOnOKButton(${i}, 2)">
        <button class="edit-Button-ok">ok</button>
    </div>`;
   
}


function deleteBoardTasks(i) {
    tasks.splice(i, 1);
    setServer();
    closeActiveTaskOverlay()
    renderBoard();
    tasksInBoard()
    numberOfTasks();
}

function clickOnOKButton(i) {
    changeActiveEditTaskOverlay(i);
    changeFromTaskEditOverlayToTaskOverlay();
    renderBoard();
    openActiveTaskOverlay(i);
    setServer();
    
}

function changeActiveEditTaskOverlay(i) {
  deleteActiveTaskOverlay();
  changeheadtitle(i);
  changetaskDescription(i);
  changeDueDate(i);
  changePrio(i);
  changeAssignedto(i);
}


function changeFromTaskEditOverlayToTaskOverlay() {
    document.getElementById("activeTaskEditOverlay").classList.add("d-none");
    document.getElementById("activeTaskOverlay").classList.remove("d-none");
    
}

function deleteActiveTaskOverlay() {
    document.getElementById('activeTaskOverlay').innerHTML = "";
}



function changeheadtitle(i) {
  let nameTitle = document.getElementById("task-title-input2").value;
    tasks[i].taskTitle = nameTitle;
}


function changetaskDescription(i) {
    let text = document.getElementById("add-task-description2").value;
    tasks[i].taskDescription = text;
}

function changeDueDate(i) {
  let date = document.getElementById("due-date2").value;
  tasks[i].dueDate = date;
}

function changePrio(i) {
  addTaskSelectPrios.push(tasks[i].prio);
  tasks[i].prio.name = addTaskSelectPrios[0].name;
  tasks[i].prio.backgroundColor = addTaskSelectPrios[0].backgroundColor;
  tasks[i].prio.iconColor = addTaskSelectPrios[0].iconColor;
  tasks[i].prio.iconWhite = addTaskSelectPrios[0].iconWhite;
}

function changeAssignedto(i) {

  tasks[i].assignedTo = [];
  
  // tasks[i].assignedTo.push(selectedContacts);

  for (let j = 0; j < selectedContacts.length; j++) {
    tasks[i].assignedTo.push(selectedContacts[j]);
  }
}







/**
 * load data in task edit overlay
 */
function loadActiveEditTaskOverlay(i) {
  openActiveEditTaskOverlay(i);
  deleteAddTaskFields(2);
  loadheadtitleInTheInpuptField(i);
  loadTaskDescriptionInTheInpuptField(i);
  loadTaskDueDate(i);
  loadTaskPrio(i);
  loadAssinedTo(i);
  loadTaskAssinedToButton(i, 2);
  
}


function openActiveEditTaskOverlay(i) {
 
  document.getElementById("activeTaskEditOverlay").classList.remove("d-none");
  document.getElementById("container-aktive-task").classList.remove("d-none");
}


function loadheadtitleInTheInpuptField(i) {
  let name = tasks[i].taskTitle;
  document.getElementById("task-title-input2").value = name;
}

function loadTaskDescriptionInTheInpuptField(i) {
  let description = tasks[i].taskDescription;
  document.getElementById("add-task-description2").value = description;
}

function loadTaskDueDate(i) {
  let dueDate = tasks[i].dueDate;
  document.getElementById("due-date2").value = dueDate;
}

function loadTaskPrio(i) {
  if (tasks[i].prio.name === "Low") {
    document.getElementById("prio-green2").classList.add("prio-green");
    document.getElementById("prio-low-white-icon2").classList.remove("d-none");
    document.getElementById("prio-low-icon2").classList.add("d-none");

  } else if (tasks[i].prio.name === "Medium") {
    document.getElementById("prio-yellow2").classList.add("prio-yellow");
    document.getElementById("prio-medium-white-icon2").classList.remove("d-none");
    document.getElementById("prio-medium-icon2").classList.add("d-none");
  } else {
    document.getElementById("prio-red2").classList.add("prio-red");
    document.getElementById("prio-urgent-white-icon2") .classList.remove("d-none");
    document.getElementById("prio-urgent-icon2").classList.add("d-none");
  }
}

function loadAssinedTo(i) {
  
  selectedContacts.length = 0;
  let AssinedTo = tasks[i].assignedTo;

  for (let j = 0; j < AssinedTo.length; j++) {
    const element = AssinedTo[j];
    selectedContacts.push(element);
  }
  

}

function loadTaskAssinedToButton(i, n) {
    document.getElementById(`select-contacts-container${n}`).innerHTML = `
     <div onclick="openAndCloseContacts(${n}, ${i}); checkMandatoryFieldAssignedTo(${n}); loadTaskAssinedTo(${i},${n});" class="option selectTaskAssignedTo">
                  <div id="select-start-task-contact">
                    Select contacts to assign
                  </div>
                  <img id="arrow-rotate" class="arrow-icon" src="./assets/img/arrow_icon.svg" alt="">
                </div>
                <div id="contacts2" class=" d-none board-contact-container">
                  <div id="invite-new-contact-container${n}" onclick="inviteNewContact()" class="option ">
                    <div>Invite new contact</div>
                    <img class="contact-icon" src="assets/img/contact_icon.svg" alt="">
                  </div>
                </div>
    `;

}

function loadTaskAssinedTo(i, n) {
    let tasksId = tasks[i];

    for (let j = 0; j < tasksId.assignedTo.length; j++) {
      let assignedToName = tasksId.assignedTo[j]["name"];

      if (tasksId.assignedTo[j]["name"].includes(assignedToName) === true
      ) {
        document.getElementById( `${tasks[i].assignedTo[j]["name"] + n}`).checked = true;
      }
    
    
  }
}