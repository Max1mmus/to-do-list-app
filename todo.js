var form = document.querySelector("form");
var ul = document.getElementById("list");
form.addEventListener("submit", submit);
//localStorage.clear();
let listArr = [];

function submit (event){
    event.preventDefault();
    var myInput = document.getElementById("myInput");

    if(myInput.value != ""){
        newTask(myInput.value);
        listArr.push(myInput.value);
        localStorage.setItem("list", JSON.stringify(listArr));
        myInput.value = "";
    }   
}

function newTask (myInput){

    var li = document.createElement("li");
    var inputEl = document.createElement("input");
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
    var toRemove = targeted.firstChild.nextSibling.data;
    var iOfR = listArr.indexOf(toRemove)
    if(iOfR > -1){
        listArr.splice(iOfR,1)
    }
    localStorage.setItem("list", JSON.stringify(listArr));
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

function checkStor(){ 
if(localStorage.getItem("list")){
    var data = JSON.parse(localStorage.getItem("list"));
    listArr = JSON.parse(localStorage.getItem("list"))
    data.forEach(item => {
    newTask(item)})
}else{
    listArr = [];
}
}
window.onload = checkStor();