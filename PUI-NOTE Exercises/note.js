let data =[{id 1, content:}]

console.log(window.location);

let searchparams = new URLSearchParams(window.location.search);

let topic = searchparams.get("title");
console.log(title);

let titleelement = document.getElementById("note-title");

titleelement.innerHTML = "<strong>title</strong>";
