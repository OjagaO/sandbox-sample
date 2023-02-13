let addBtn = document.getElementById("addBtn");

let todoAdd = () => {
  let input = document.getElementById("input");
  let todoArea = document.getElementById("todo_area");
  let val = input.value;
  let li = document.createElement("li");
  let compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.setAttribute("id", "complete");
  let deleBtn = document.createElement("button");
  deleBtn.innerText = "削除";
  deleBtn.setAttribute("id", "delete");
  li.append(compBtn);
  li.innerText = val;
  todoArea.append(li);
  li.append(compBtn);
  li.append(deleBtn);
  input.value = "";
};

addBtn.addEventListener("click", function () {
  todoAdd();
});

let complete = () => {};
