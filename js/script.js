var b1 = document.getElementById("about");
var b2 = document.getElementById("code");
var b3 = document.getElementById("resume");
var group = document.getElementsByClassName("btn-group")[0];

b1.onclick = function () {
    buttonFade();
    document.getElementsByClassName("label")[0].classList.add("show-label");
}

b2.onclick = function () {
    buttonFade();
    document.getElementsByClassName("label")[1].classList.add("show-label");
}

b3.onclick = function () {
    buttonFade();
    document.getElementsByClassName("label")[2].classList.add("show-label");

}

function buttonFade() {
    b1.classList.add("btn-hide");
    b2.classList.add("btn-hide");
    b3.classList.add("btn-hide");
    group.classList.add("group-hide");
}