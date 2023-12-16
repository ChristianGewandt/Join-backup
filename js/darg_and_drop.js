let currentDraggedElement;


/**
 * This function initiate a function call.
 * @param {array} todos - array of all todos, saved in the backend
 */

function renderBoard8() {
    // clearBoard();
    renderCardColumn(tasks, 'toDo');
    renderCardColumn(tasks, 'progress');
    renderCardColumn(tasks, 'feedback');
    renderCardColumn(tasks, 'done');
}

function renderCardColumn(tasks, column) {
    let task = tasks.filter(t => t.taskProgress === column);
    for (let i = 0; i < task.length; i++) {
        const element1 = task[i]['taskProgress']
            ;
        const id = task[i].id;
        const assignments = task[i].assignments;
        document.getElementById('boardContentInProgress').innerHTML += addBoardCard(element1, i);

    }
}

function startDragging(idCounter) {
    currentDraggedElement = idCounter;
    document.getElementById('boardContentToDo').classList.add('task-area-background');
    document.getElementById('boardContentInProgress').classList.add('task-area-background');
    document.getElementById('boardContentAwaiting').classList.add('task-area-background');
    document.getElementById('boardContentDone').classList.add('task-area-background');

}

function EndDragging(idCounter) {
    
    document.getElementById('boardContentToDo').classList.remove('task-area-background');
    document.getElementById('boardContentInProgress').classList.remove('task-area-background');
    document.getElementById('boardContentAwaiting').classList.remove('task-area-background');
    document.getElementById('boardContentDone').classList.remove('task-area-background');

}


function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    tasks[currentDraggedElement]['taskProgress'] = category;
    //renderBoard8();
    renderBoard();
    EndDragging();
    renderSummary();
    setServer();
        

}
