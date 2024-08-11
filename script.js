var moon = document.querySelector(".moon");
var btn = document.querySelector("button");


var on = 1;

btn.addEventListener("click", () => {

    if (on == 1) {
        moon.style.opacity = "1";
        moon.style.transform = "scale(1)";
        btn.innerText = "Hide Moon"
        on = 0;
    }
    else {
        moon.style.opacity = "0";
        moon.style.transform = "scale(0.5)";
        btn.innerText = "Show Moon"
        on = 1;
    }

})