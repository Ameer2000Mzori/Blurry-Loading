"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import css
require("./style.css");
// getting our elements
var header = document.getElementsByClassName("header")[0];
var h1Text = document.getElementsByClassName("h1-Text")[0];
// global varibale
// our functions
// our functions
var blurryHandler = function () {
    var i = 100; // Starting from 100
    // Define a function that will be called recursively with a delay
    function decreaseBlur() {
        h1Text.textContent = "".concat(i / 1, "%"); // Adjust the content based on your needs
        header.style.filter = "blur(".concat(i / 1, "px)");
        // Decrease the blur value
        i--;
        // Continue decreasing blur until it reaches 0
        if (i >= 0) {
            // Call the function recursively with a delay of, for example, 10 milliseconds
            setTimeout(decreaseBlur, 10);
        }
    }
    // Start the blur decrease
    decreaseBlur();
};
// our event listener
window.addEventListener("load", blurryHandler);
