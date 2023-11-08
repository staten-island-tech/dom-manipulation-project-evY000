 const DOMSelectors = {
            firstName: document.getElementById('first-name'),
            form: document.getElementById("form"),
            h2s: document.querySelectorAll("h2"),}
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value)
    information()}
);
function information(){
    DOMSelectors.form.addEventListener("click",function(){
    let user = DOMSelectors.firstName.value; 
    DOMSelectors.form.insertAdjacentHTML("beforeend", '<h2> ${user} </h2>');
    clear(user)
    })};
function clear(){
    DOMSelectors.firstName.value = ''
};