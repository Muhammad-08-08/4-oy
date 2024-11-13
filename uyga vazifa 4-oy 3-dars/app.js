let table = document.querySelector("table");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let data = [
  { id: 1, name: "John Doe", age: 25, action: "del edit" },
  { id: 2, name: "Jane Doe", age: 30, action: "del edit" },
  { id: 3, name: "Alice Doe", age: 28, action: "del edit" },
];

data.forEach((val) => {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdAge = document.createElement("td");
  let tdAction = document.createElement("td");

  tdId.textContent = val.id;
  tdName.textContent = val.name;
  tdAge.textContent = val.age;

  tr.append(tdId, tdName, tdAge);

  val.action.split(" ").forEach((item) => {
    let btn = document.createElement("button");
    btn.textContent = item;

    if (item === "del") {
      btn.addEventListener("click", () => {
        tr.remove();
      });
    } else if (item === "edit") {
      btn.addEventListener("click", () => {
        tdName.contentEditable = true;
        tdAge.contentEditable = true;
        tdName.focus();
      });

      tdName.addEventListener("blur", () => {
        tdName.contentEditable = false;
      });
      tdAge.addEventListener("blur", () => {
        tdAge.contentEditable = false;
      });
    }

    tdAction.append(btn);
  });

  tr.append(tdAction);
  tbody.append(tr);
});
