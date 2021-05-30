let up = document.getElementById("up");
let down = document.getElementById("down");
let rocket = document.getElementById("rocket");
let body = document.getElementById ("body");


up.addEventListener ("click", function () {
    rocket.style.transition = "800ms";
    rocket.style.marginTop = "-1500px";
    body.style.backgroundColor = "aqua";
})

down.addEventListener("click", function () {
    rocket.style.transition = "2000ms";
    rocket.style.marginTop = "0px";
    body.style.backgroundColor = "blue";

    

})