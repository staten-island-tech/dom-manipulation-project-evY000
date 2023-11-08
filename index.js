 const DOMSelectors = {
            firstName: document.getElementById('first-name'),
            form: document.getElementById("form"),
            h2s: document.querySelectorAll("h2"),
            deleteButton: document.createElement("button")};
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value)
    information()}
);
function information(){
    DOMSelectors.form.addEventListener("click",function(){
    let user = DOMSelectors.firstName.value; 
    DOMSelectors.form.insertAdjacentHTML("afterend", `<h2 class="enter"> ${user} </h2> <button type ="button"> Delete</button>`);
    clear(user);
    deleteThing();
    })};
    
function clear(){
    DOMSelectors.firstName.value = ''
};
function deleteThing(){
   
    DOMSelectors.deleteButton.addEventListener("click", function(event){
        event.target.user.remove()
    });
    
}