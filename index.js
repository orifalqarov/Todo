const form = document.querySelector(".form-group");
const input = document.querySelector(".input");
const list = document.querySelector(".list-group");
const btn = document.querySelector(".btn");

var Todo = [];
function ToDos(evt) {
  evt.preventDefault();
  let inputvalue = input.value.trim()
  if(!inputvalue){
    alert ('Input todo')
  }
  var newTodo = {
    id: Todo.length + 1,
    liName: input.value,
    isCompleted: true,
  };
  input.value = "";

  Todo.unshift(newTodo);
  console.log(Todo);

  list.innerHTML = "";
  for (let i = 0; i < Todo.length; i++) {
    var elLi = document.createElement("li");
    elLi.innerHTML = `
    <input class="form-check-input mx-1" type="checkbox" value="" id="firstCheckbox"> ${Todo[i].liName} 
    
    `;
    let divBtn = document.createElement("div");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    divBtn.className = "ms-auto";
    btnEdit.className = "btn btn-outline-primary ";
    btnDelete.className = "btn btn-outline-danger ms-1";
    divBtn.appendChild(btnEdit);
    divBtn.appendChild(btnDelete);
    elLi.appendChild(divBtn);
    elLi.className = "list-group-item d-flex align-items-center";
    list.appendChild(elLi);

    btnEdit.addEventListener("click", () => {
      console.log("edit");
      Todo[i].liName = "";
    });

    btnDelete.addEventListener("click", () => {
      console.log("delete");
      Todo[i].isCompleted = false;
      Todo[i] = null;
    });
  }
}
form.addEventListener("submit", ToDos);
