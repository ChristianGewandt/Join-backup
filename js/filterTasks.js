// filter Tasks
function filterTasks() {
  let search = document.getElementById("findTaskInput").value;
  search = search.toLowerCase();
  console.log(search);

  let containerToDo = document.getElementById("boardContentToDo");
  let containerInProgress = document.getElementById("boardContentInProgress");
  let containerAwaiting = document.getElementById("boardContentAwaiting");
  let containerDone = document.getElementById("boardContentDone");
  deleteBoradTasks();

  if (search === "") {
    renderBoard();
  }

  if (search) {
    for (let i = 0; i < tasks.length; i++) {
      const element = tasks[i];

      if (element.taskTitle.includes(search)) {
        if (element.taskProgress === "boardContentToDo") {
          containerToDo.innerHTML += addBoardCard(element, i);
        }
        if (element.taskProgress === "boardContentInProgress") {
          containerInProgress.innerHTML += addBoardCard(element, i);
        }
        if (element.taskProgress === "boardContentAwaiting") {
          containerAwaiting.innerHTML += addBoardCard(element, i);
        }
        if (element.taskProgress === "boardContentDone") {
          containerDone.innerHTML += addBoardCard(element, i);
        }
      } else if (element.taskDescription.includes(search)) {
        if (element.taskProgress === "boardContentToDo") {
          containerToDo.innerHTML += addBoardCard(element, i);
        }
        if (element.taskProgress === "boardContentInProgress") {
          containerInProgress.innerHTML += addBoardCard(element, i);
        }
        if (element.taskProgress === "boardContentAwaiting") {
          containerAwaiting.innerHTML += addBoardCard(element, i);
        }
        if (element.taskProgress === "boardContentDone") {
          containerDone.innerHTML += addBoardCard(element, i);
        }
      }
    }
  }
}
