const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute")
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let mnPosition = 130;
let scPosition = 267;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + mnPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + scPosition + "deg)";