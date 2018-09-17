var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", toggle);
    ul.appendChild(li);
    input.value = "";
    
    var delBtn = document.createElement("button");
    var buttonText = document.createTextNode("DEL");
    delBtn.appendChild(buttonText);
    delBtn.id = "delBtn";
    // delBtn.classList.add("btn\xa0btn-outline-danger");
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteLi);


    function deleteLi() {
        li.classList.add("delete");
    }

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

function toggle(event) {
    if (event.target.tagName !== "BUTTON") {
    event.target.classList.toggle('done');
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);