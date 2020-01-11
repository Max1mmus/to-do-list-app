
var form = document.querySelector("form");
var ul = document.getElementById("list");

form.addEventListener("submit", submit);

function submit (event){
    event.preventDefault();

    var myInput = document.getElementById("myInput");

    if(myInput.value != ""){
        newTask();
        myInput.value = "";
    }   
}

function newTask (){

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var inputEl = document.createElement("input");
    var myInput = document.getElementById("myInput").value;
    var button = document.createElement("button");

    button.className = "delete";
    button.innerHTML = "x";

    ul.appendChild(li);

    li.insertAdjacentElement("afterbegin",inputEl);
    li.insertAdjacentHTML("beforeend", myInput); 
    li.insertAdjacentElement("beforeend",button);
    inputEl.setAttribute("type", "checkbox");
    button.addEventListener("click", deleteContent);
    inputEl.addEventListener("click", isTicked);

}

function deleteContent (e){
   
    var targeted = e.target.parentNode;
    targeted.remove(targeted);   
}

function isTicked(e){
    var ticked = e.target.parentNode;
    
    if(!isTicked){
        ticked.style.textDecoration = "none"; 
    }else{   
        ticked.style.textDecoration ="line-through";
    }
    isTicked = !isTicked;   
}