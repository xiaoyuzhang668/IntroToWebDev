
let myDiv = document.getElementById("mydiv");
let width = myDiv.style.getPropertyValue("width");
width = parseInt(width) + 100;
myDiv.style.setProperty("width", width + "px");
myDiv.style.setProperty("background-color", "red");
myDiv.style.removeProperty("width");

