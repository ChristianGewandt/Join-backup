

function rednderAddTaskHTML(id) {
  
    document.getElementById(id).innerHTML = /*html*/  `
    </div>
    <div class="content-add-tast-container">
      <div class="content-add-tast-body-container">
        <div class="content-head-container">
          <div class="add-tast-container">
            <div class="hader-add-task-container">
              <h1>Add Task</h1>
            </div>
          </div>
          <div class="content-body-container">
            <div class="container-left">
              <div class="title-container">
                <p>
                  <label class="title">Titel</label>
                </p>
                
                <input
                  class="title-input no-outline"
                  type="text"
                  placeholder="Enter a title"
                  title="Geben Sie hier Ihren Text ein"
                />
                <p id="required0" class="required hidden">This field is required</p>
                
                
              </div>
              <div class="title-container">
                <p>
                  <label class="title">Description</label>
                </p>
                
                <textarea
                  class="description-field no-outline"
                  type="text"
                  placeholder="Enter a title"
                  title="Geben Sie hier Ihren Text ein"
                ></textarea>
                <p id="required0" class="required hidden">This field is required</p>
            </div>
              <div class="title-container">
                <p>
                  <label class="title">Category</label>
                </p>
                
                <div>
                  <div
                    id="new-category-contaier"
                    class="new-category-contaier d-none"
                  >
                    <input
                      class="new-category-input no-outline"
                      type="text"
                      placeholder="New category name"
                    />
                    <div class="img-container">
                      <img
                        class="x-or-hook"
                        onclick="closeNewTaskCategroy()"
                        src="./assets/img/black-x.svg"
                        alt=""
                      />
                      <div class="dash-contaier"><span class="dash"></span></div>
                      <img class="x-or-hook" src="./assets/img/black-check.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div id="select-container" class="select-container">
                  <div onclick="openNewTaskCategroy()" class="option">
                    <div>Select task category</div>
                    <img class="arrow-icon" src="./assets/img/arrow_icon.svg" alt="" />
                  </div>
                </div>
                <div id="color-container" class="color-container d-none">
                  <div class="purple color wheel"></div>
                  <div class="red color wheel"></div>
                  <div class="green color wheel"></div>
                  <div class="yellow color wheel"></div>
                  <div class="pink color wheel"></div>
                  <div class="blue color wheel"></div>
                </div>
                <p id="required0" class="required hidden">This field is required</p>
              </div>
              <div class="title-container">
                <p>
                  <label class="title">Assigned to</label>
                </p>
                
                <div>
                  <div id="Assigned-to-contaier" class="new-category-contaier d-none">
                    <input
                      class="new-category-input no-outline"
                      type="text"
                      placeholder="Contact email"
                    />
                    <div class="img-container">
                      <img
                        onclick="closeSelectContactsToAssign()"
                        src="./assets/img/black-x.svg"
                        alt=""
                      />
                      <div class="dash-contaier"><span class="dash"></span></div>
                      <img src="./assets/img/black-check.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div id="select-contacts-container" class="select-container">
                  <div onclick="openSelectContactsToAssign()" class="option">
                    <div>Select contacts to assign</div>
                    <img class="arrow-icon" src="./assets/img/arrow_icon.svg" alt="" />
                  </div>
                </div>
                <p id="required0" class="required hidden">This field is required</p>
              </div>
              
            </div>
            <div class="container-center"></div>
            <div class="container-right">
              <div class="title-container">
                <p>
                  <label class="title">Due date</label>
                </p>
                
                <div id="date-button">
                  <input class="title-input no-outline" type="date" id="due-date" name="">
                </div>
                <p id="required0" class="required hidden">This field is required</p>
              </div>
              <div class="prio-container">
                <p>
                  <label class="title">Prio</label>
                </p>
                
                <div class="prio-body-container">
                  <div id="prio-red" class="prio-button" onclick="prioColor('prio-red')">
                    <div >Urgent</div>
                    <img id="prio-urgent-icon"  class="prio-icon" src="./assets/img/prio-urgent-icon.svg" alt="">
                    <img id="prio-urgent-white-icon" class="prio-icon d-none" src="./assets/img/prio-urgent-white-icon.svg" alt="">
                  </div>
                  <div id="prio-yellow" class="prio-button " onclick="prioColor('prio-yellow')">
                    <div>Medium</div>
                    <img id="prio-medium-icon" class="prio-icon" src="./assets/img/prio-medium-icon.svg" alt="">
                    <img id="prio-medium-white-icon" class="prio-icon d-none" src="./assets/img/prio-medium-white-icon.svg" alt="">
                  </div>
                  <div id="prio-green" class="prio-button " onclick="prioColor('prio-green')">
                    <div>Low</div>
                    <img id="prio-low-icon" class="prio-icon" src="./assets/img/prio-low-icon.svg" alt="">
                    <img id="prio-low-white-icon" class="prio-icon d-none" src="./assets/img/prio-low-white-icon.svg" alt="">
                  </div>
                </div>
                <p id="required0" class="required hidden">This field is required</p>
              </div>
              <div class="subtask-container">
                <p>
                  <label class="title">subtasks</label>
                </p>
               
                <div id="contact-email-contaier" class="new-category-contaier d-none">
                  <input class="new-category-input no-outline" type="text" placeholder="Contact email">
                  <div class="img-container">
                    <img onclick="closeSelectContactEmail()" src="./assets/img/black-x.svg" alt="">
                    <div class="dash-contaier"><span class="dash"></span></div>
                    <img src="./assets/img/black-check.svg" alt="">
                  </div>
                </div>
                <div id="Add-new-subtask-contaier" class="new-category-contaier" onclick="openSubtasks()">
                  <div class="Add-new-subtask">Add new subtask</div>
                  <img class="plus-icon" src="./assets/img/plus-icon.svg" alt="">
                </div>
                <p id="required0" class="required hidden">This field is required</p>
            </div>
            <div class="submit-btns-container">
              <button class="clear-btn">
                <span>clear</span>
                <img src="./assets/img/black-x.svg" alt="">
              </button>
              <button class="create-task-btn">
                <span>Create Task</span>
                <img src="./assets/img/black-x.svg" alt="">
              </button>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      
      
    <div></div>
    `;

}