function onMouseOverImg(id, src) {
    document.getElementById(id).setAttribute("src", src);
}

function onMouseOutImg(id, src) {
    document.getElementById(id).setAttribute("src", src);
}

function greetingAds() {
    let now = new Date();
    let hours = now.getHours();

    let greeting;
    if (hours >= 6 && hours < 11) {
        greeting = "Good morning";
    } else if (hours >= 11 && hours < 18) {
        greeting = "Good afternoon";
    } else if (hours >= 18 && hours < 23) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
    document.getElementById("welcome-text-desk").innerHTML = `${greeting}`;
    greetingCurrentUser();
}

function greetingCurrentUser() {
    document.getElementById("welcome-name-desk").innerHTML = currentUser;
}

function renderSummary() {
    getCurrentUser();
    tasksInBoard();
    numberOfTasks();
    upcomingDeadline();
}

function tasksInBoard() {
    document.getElementById("tasks-in-board").innerHTML = `${tasks.length}`;
}

function numberOfTasks() {
    let countProgress = 0;
    let countAwaitingFeedback = 0;
    let countToDo = 0;
    let countDone = 0;
    let countUrgent = 0;
    for (let task of tasks) {
        if (task.taskProgress === "boardContentInProgress") {
            countProgress += 1;
        }
        if (task.taskProgress === "boardContentAwaiting") {
            countAwaitingFeedback += 1;
        }
        if (task.taskProgress === "boardContentToDo") {
            countToDo += 1;
        }
        if (task.taskProgress === "boardContentDone") {
            countDone += 1;
        }
        if (
            task.prio.name === "Urgent" &&
            task.taskProgress !== "boardContentDone"
        ) {
            countUrgent += 1;
        }
    }

    document.getElementById("tasks-in-progress").innerHTML = countProgress;
    document.getElementById("tasks-in-feedback").innerHTML = countAwaitingFeedback;
    document.getElementById("tasks-in-to-do").innerHTML = countToDo;
    document.getElementById("tasks-in-done").innerHTML = countDone;
    document.getElementById("tasks-in-urgent").innerHTML = countUrgent;
}

function upcomingDeadline() {
    let urgentTasks = [];

    urgentTasks.splice(length);
    for (let task of tasks) {
        if (
            task.dueDate &&
            task.taskProgress !== "boardContentDone" &&
            task.prio.name === "Urgent"
        ) {
            urgentTasks.push(task.dueDate);
        }
    }
    urgentTasks.sort();

    if (urgentTasks.length === 0) {
        document.getElementById("urgent-date").innerHTML = "currently no";
    } else {
        document.getElementById("urgent-date").innerHTML = urgentTasks[0];
    }
}
