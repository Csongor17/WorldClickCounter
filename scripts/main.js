console.log("main.js loaded")

let counter = parseInt(localStorage.getItem("clickcount")) || 0;

function add() {
    counter++;
    document.getElementById("clickcount").innerHTML = counter;

    localStorage.setItem("clickcount", counter.toString());
}

window.addEventListener("load", function () {
    document.getElementById("clickcount").innerHTML = counter;
});
