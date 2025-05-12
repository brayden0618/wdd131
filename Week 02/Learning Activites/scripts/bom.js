const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("_____");
const li = document.querySelector("li");
const deleteButton = document.querySelector("button");
li.textContent = input.value;
deleteButton.textContent = "Delete";
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        li.append(deleteButton);
        list.append(li);
        input.value = '';
    }
});
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
input.value = "";
input.focus();