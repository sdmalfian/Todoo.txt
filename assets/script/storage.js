const saveLocalTodos = (todo) => {
  // check todo on local storage 
  let todos
  if ( localStorage.getItem('todos') === null ) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  if (todo != '') {
    todos.push(todo);
  } else return

  localStorage.setItem("todos", JSON.stringify(todos));
}

const getTodos = () => {
    // check todo on local storage 
  let todos
  if ( localStorage.getItem('todos') === null ) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function(todo) {
    let userTask = userInput.value;
    let tasks = document.querySelectorAll('.task');

    // delete default value
    if(!defaultTask.classList.contains('removed')) {
      defaultTask.classList.toggle('removed');
    }
  
    taskList.innerHTML += `
      <div class="active_task">
        <input type="checkbox" class="checkbox">
        <label class="task">${todo}</label><br>
        <div class="actions">
          <i class="fas fa-edit edit"></i>
          <i class="fas fa-trash-alt delete"></i>
        </div>
      </div>
      `;
  
    // delete function
    let deleteBtn = document.querySelectorAll('.delete');
    for (button of deleteBtn) {
      deleteTask(button);
    }
  
    // edit function
    let editBtnKey = document.querySelectorAll('.edit');
    for (editBtn of editBtnKey) {
      editTask(editBtn);
      console.log('test');
    }
  
    // check function
    let checkbox = document.querySelectorAll('.checkbox');
    for (checkBtn of checkbox) {
      taskFinished(checkBtn);
    }
  });
}

const removeLocalTodos = (todo) => {
  // check todo on local storage 
  let todos
  if ( localStorage.getItem('todos') === null ) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[1].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

const editLocalTodos = (oldValue, newValue) => {
  // check todo on local storage 
  let todos
  if ( localStorage.getItem('todos') === null ) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex = todos.indexOf(oldValue);
  // delete old value
  todos.splice(todos.indexOf(todoIndex), 1);
  // push new value
  todos.push(newValue.innerText);
  localStorage.setItem('todos', JSON.stringify(todos));
}

