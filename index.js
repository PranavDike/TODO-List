const form = document.getElementById("#myForm");
const done = document.getElementById("donebtn");

done.addEventListener("click", () => {
  var list = document.querySelector("#taskList");
  var inputTitle = document.getElementById("taskTitle").value;
  var inputContent = document.getElementById("taskDesc").value;

  var newItem = document.createElement("li");
  newItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );

  var itemCheckbox = document.createElement("input");
  itemCheckbox.type = "checkbox";
  itemCheckbox.classList.add("form-check-input", "me-1", "align-self-center");

  var itemContent = document.createElement("div");
  itemContent.classList.add("ms-2", "me-auto");

  var itemTitle = document.createElement("h5");
  itemTitle.classList.add("m-0", "text-uppercase");
  itemTitle.textContent = inputTitle;

  var itemDesc = document.createElement("p");
  itemDesc.classList.add("m-0");
  itemDesc.textContent = inputContent;

  list.appendChild(newItem);
  newItem.appendChild(itemCheckbox);
  newItem.appendChild(itemContent);
  itemContent.appendChild(itemTitle);
  itemContent.appendChild(itemDesc);
});

function selectListItem(checkbox) {
  const listItem = checkbox.parentNode;
  listItem.classList.toggle("selected");
}

document.getElementById("removebtn").addEventListener("click", function () {
  const selectedItems = document.querySelectorAll(".selected");
});
