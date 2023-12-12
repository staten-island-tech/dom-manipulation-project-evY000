 const DOMSelectors = {
            firstName: document.getElementById('first-name'),
            form: document.getElementById("form"),
            h2s: document.querySelectorAll("h2"),
 }

            

    information()

function information(){
    DOMSelectors.form.addEventListener("submit",function(event){
        event.preventDefault();
    let user = DOMSelectors.firstName.value; 
    let input = DOMSelectors.form.insertAdjacentHTML("afterend", `<h2 class="enter"> ${user} </h2> <button type ="deletebutton"> Delete</button>`);
     clear(user);
    deleteThing(input);
    })};
    
function clear(){
    DOMSelectors.firstName.value = ''
};
function deleteThing(){
    DOMSelectors.deletebutton.addEventListener("click", function(event){
        event.input.remove();
    })
    

    
}