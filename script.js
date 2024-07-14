"use strict"

document.querySelector("#btn1").addEventListener("click", function () {
    let val = document.querySelector("#input").value;
    if (val) {
        val = val.toUpperCase();
        document.querySelector(".txt").textContent = val;
        document.querySelector(".txt").classList.remove("hidden");
        document.querySelector("#btn2").classList.remove("hidden");
        document.querySelector("#btn1").classList.add("hidden");
        document.querySelector("#input").classList.add("hidden");
    }
});

document.querySelector("#btn2").addEventListener("click", function () {
    document.querySelector(".txt").classList.add("hidden");
    document.querySelector("#btn2").classList.add("hidden");
    document.querySelector("#input").value = "";
    document.querySelector("#btn1").classList.remove("hidden");
    document.querySelector("#input").classList.remove("hidden");
});
