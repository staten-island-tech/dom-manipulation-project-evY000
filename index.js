 const DOMSelectors = {
            firstName: document.getElementById('first-name'),
            form: document.getElementById("form"),
            h2s: document.querySelectorAll("h2"),
            imageLink :document.getElementById("img"),
 }
information()
function information(){
    DOMSelectors.form.addEventListener("submit",function(event){
        event.preventDefault();
    let user = DOMSelectors.firstName.value; 
    let image = DOMSelectors.imageLink.value;
    DOMSelectors.form.insertAdjacentHTML("afterend", `<div id = "box"><h2 class="enter"> ${user}<br> <img src=${image} width="500" length="500"> </h2> <button id ="DeleteButton" class="delete" onclick="deleteThing()"> Delete </button></div>`);
   clear(user);
    })
}
    
function clear(){
    DOMSelectors.firstName.value = ''
    DOMSelectors.imageLink.value = ''
};
function deleteThing(){
  box.remove() 
}



