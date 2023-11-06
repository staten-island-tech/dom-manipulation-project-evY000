 const DOMSelectors = {
            firstName: document.getElementById('first-name'),
            form: document.getElementById("form"),
            h2s: document.querySelectorAll("h2"),
 }
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value)
    information()}
);
function information(){
    const user ={
        firstName: DOMSelectors.firstName.value
    }
    
    clear(user)
}
function clear(){
    DOMSelectors.firstName.value = ''
};
// inject needed
// subtract inject needed
