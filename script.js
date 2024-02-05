console.log("JavaScript file is runing");

const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
if (inputbox.value === "") {
    alert("You must enter a task");
} else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = ".\u00d7";
    li.appendChild(span);


}
inputbox.value = "";
savedata();
}

listcontainer.addEventListener("click", function(event) {
if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    savedata();
}
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        savedata();
    }
})

function savedata() {
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showdata()