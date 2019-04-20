var note = 0;

window.onload = () => {
    //check if anything is stored in localStorage
  if(localStorage.length > 0){
    note = localStorage.length;
    //loop through length of localStorage
    for(i = 0; i <= note; i++){
      let idName = "note" + i;
      let original = localStorage.key(i);
      let originalVal = localStorage.getItem(original);
      //rename all localStorage keys note0-note'n'
      localStorage.removeItem(original);
      localStorage.setItem(idName, originalVal);
      //if item has been deleted, remove it from localStorage
      if(localStorage.getItem(idName) === "null"){
        localStorage.removeItem(idName);
        continue;
      }  
      //Display all localStorage items as list elements
      let list = document.createElement("li");
      let node = document.createTextNode(localStorage.getItem(idName));
      let removeBtn = document.createElement("button");
      list.setAttribute("id", idName);
      removeBtn.setAttribute("class", "removeBtn");
      removeBtn.innerHTML = "X";
      list.appendChild(node);
      list.appendChild(removeBtn);
      document.getElementById("output").appendChild(list);
      //on button click, remove item from localStorage
        document.addEventListener('click', function (event){
    if(event.target.matches('.removeBtn')){
       let removeStore = event.target.parentNode.id;
       localStorage.removeItem(removeStore);
       event.target.parentNode.remove();
       };
        });
    }
  }else{
    note = 0;
  }
  document.getElementById("save").addEventListener("click",function(){
    saveInfo();
});
}

function saveInfo() {
    console.log("testing");
  var idName = "note" + note;
  var input = document.getElementById('input').value;
  var text = localStorage.setItem(idName, input);
  var list = document.createElement("li");
  var node = document.createTextNode(input);
  var removeBtn = document.createElement("button");
 
  display(idName,list,node,removeBtn);
  
  note += 1;
}
function display(idName, list, node, removeBtn) {
  list.setAttribute("id", idName);
  removeBtn.setAttribute("class", "removeBtn");
  removeBtn.innerHTML = "X";
  list.appendChild(node);
  list.appendChild(removeBtn);
  document.getElementById("output").appendChild(list);
  document.addEventListener('click', function (event){
    if(event.target.matches('.removeBtn')){
       let removeStore = event.target.parentNode.id;
       localStorage.removeItem(removeStore);
       event.target.parentNode.remove();
       };
  });
}