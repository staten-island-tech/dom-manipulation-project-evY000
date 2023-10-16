 const DOMSelectors = {
            button:document.getElementById("btn"),
            box:document.getElementById("container-box"),
            input : document.querySelector("#input"), };
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstName.value)
});