const textarea=document.getElementById("textarea");
const listTask=document.getElementById("listTask");

function AddTask(){

    if (textarea.value === ''){
        alert("write your task please");
    }
    else{
        let li=document.createElement("li");

        li.innerHTML=textarea.value;
        listTask.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    textarea.value="";
    save();

}

listTask.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false)

function save(){
    localStorage.setItem("data",listTask.innerHTML);

}
function showtask(){
    listTask.innerHTML=localStorage.getItem("data");

}

showtask();