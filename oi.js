let c = 1;
// document.getElementById("radio1").checked = true;

setInterval(function () {
    document.getElementById("radio" + c).checked = true;
    c++;
    if (c > 7) {
        c = 1;
    }

}, 4000)


