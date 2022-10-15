let c = 1;

setInterval(function () {
    document.getElementById("radio" + c).checked = true;
    c++;
    if (c > 4) {
        c = 1;
    }

}, 4000)


