

// this is to change the background gradient color while selecting the input color
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
// var css = document.querySelector("h3");
var body = document.getElementById("grad");
function colChange() {
    body.style.background ="linear-gradient(to right, " + col1.value + "," + col2.value +")";
    // css.textContent= body.style.background + ",";
}
col1.addEventListener("input", colChange);
col2.addEventListener("input", colChange);











// var bgc = document.getElementsByTagName("input")
// console.log(bgc)
//   bgc.addEventListener("input", function()
//   {document.getElementById("grad").style.background ="linear-gradient(to right, " + input.color1.value + "," + input.color2.value +")"});

// function colo()
//   {document.getElementById("grad").style.backgroundColor="input.value"};

// function rand(min, max) {
//     let randomNum = Math.random() * (max - min) + min;
//     return Math.round(randomNum);
// }


// var generateColor = function () {
//     // hex numbers 
//     var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var color = '#';
// // we will generate hex color with 6 digit length
// for (var i = 0; i < 6; i++) {
//     let index = rand(0,15);
//    // Append hex value at the index
//    color += hex[index];
// }
// return color;
// };