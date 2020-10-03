var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var btn = document.querySelector("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function createButton (){
	for (var i=0; i<li.length; i++){
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		li[i].appendChild(btn);
		btn.onclick = removeParent;
	}
}
createButton();

function removeParent(){
	event.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.onclick = function (){
	var target = event.target;
	target.classList.toggle("done")
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. When adding a new list item, it automatically adds the delete button next to it.