var text = document.querySelector(".text")
var btn = document.querySelector(".Create_notes")
let notes = document.querySelectorAll(".input-box")


function showNotes(){
    text.innerHTML = localStorage.getItem("notes");
}
showNotes();
 
function updateStorage(){
    localStorage.setItem("notes", text.innerHTML);
}


btn.addEventListener("click", ()=>{
    let p = document.createElement("p")
    let img = document.createElement("img")
    p.className="input-box";
    p.setAttribute("contenteditable", "true");
    img.src = "images/delete.png"; 
    text.appendChild(p).appendChild(img);

    p.addEventListener("input", updateStorage)
    updateStorage();
})

text.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagname === "p"){
        notes =  document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.addEventListener("input", updateStorage)
        });  
    }
})