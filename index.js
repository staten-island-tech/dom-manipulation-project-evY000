 const DOMSelectors = {
            firstName: document.getElementById('first-name'),
            form: document.getElementById("form"),
            h2s: document.querySelectorAll("h2"),
            inputclear : document.querySelectorAll('submit'),
        
 };
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value)
    DOMSelectors.inputclear.forEach(singlesubmit => singlesubmit.value = '');
});
