function bubble() {
    var clutter = "";
    for (var i = 0; i < 253; i++) {
        var rn = Math.floor((Math.random() * 10));
        clutter += `<div id="circle">${rn}</div>`;

    }
    document.querySelector("#bottompanel").innerHTML = clutter;
}
bubble();


function timing() {
    var timer = 60;
    // for (var i = 0; i < 60; i++) {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timebox").textContent = timer;

        }
        else {
            clearInterval(timeint);
            document.getElementById("bottompanel").innerHTML = "<h1>Game Over</h1>";
            setTimeout(function () {
                window.location.reload();
            }, 5000);

        }
    }, 1000);


    // }

}
timing();
var hitt;
function gethit() {
    hitt = Math.floor(Math.random() * 10);
    document.getElementById("hitbox").textContent = hitt;

}
gethit();

var score = 0;
function scoring() {
    score += 10;
    document.getElementById("scorebox").textContent = score;
}
// scoring();
document.querySelector("#bottompanel").
    addEventListener("click", function (dets) {
        var clicked = (Number(dets.target.textContent));
        if (hitt === clicked) {
            scoring();
            gethit();
            bubble();

        }

    }
    );

