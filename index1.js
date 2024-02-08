function loadItems() {
  const todoList = document.getElementById("taskList");
  const items = JSON.parse(localStorage.getItem("items")) || [];
  todoList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-start"
    );

    const chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox");
    chkbox.classList.add("form-check-input", "me-1", "align-self-center");

    const taskContent = document.createElement("div");
    taskContent.classList.add("ms-2", "me-auto");

    const taskTitle = document.createElement("h5");
    taskTitle.classList.add("m-0", "text-uppercase");
    taskTitle.textContent = item;

    taskContent.appendChild(taskTitle);
    li.appendChild(chkbox);
    li.appendChild(taskContent);
    todoList.appendChild(li);
  });
}
// Load Items on page load
window.addEventListener("load", loadItems);

// Adding Items
document.getElementById("donebtn").addEventListener("click", function () {
  const todoList = document.getElementById("taskList");
  const taskTitle = document.getElementById("taskTitle");
  const itemText = taskTitle.value.trim();
  if (itemText !== "") {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-start"
    );

    const chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox");
    chkbox.classList.add("form-check-input", "me-1", "align-self-center");

    const taskContent = document.createElement("div");
    taskContent.classList.add("ms-2", "me-auto");

    const taskTitle = document.createElement("h5");
    taskTitle.classList.add("m-0", "text-uppercase");
    taskTitle.textContent = itemText;

    taskContent.appendChild(taskTitle);
    li.appendChild(chkbox);
    li.appendChild(taskContent);
    todoList.appendChild(li);

    saveItems();
  }
  taskTitle.value = "";
});

// Selecting Items


// Removing Items
function removeItem(li) {
  li.parentNode.removeChild(li);
  saveItems();
}

// Attach event listener to the todoList to handle removal of items
document.getElementById("taskList").addEventListener("dblclick", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    removeItem(e.target);
  }
});

// Saving Items
function saveItems() {
  const todoList = document.getElementById("taskList");
  const items = Array.from(todoList.querySelectorAll("li")).map(
    (li) => li.textContent
  );
  localStorage.setItem("items", JSON.stringify(items));
}
