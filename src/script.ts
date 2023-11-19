// import css
import "./style.css";

// getting our elements
var header = document.getElementsByClassName("header")[0] as HTMLElement;
var h1Text = document.getElementsByClassName("h1-Text")[0] as HTMLElement;

// global varibale

// our functions
// our functions
var blurryHandler = (): void => {
  var i = 100; // Starting from 100

  // Define a function that will be called recursively with a delay
  function decreaseBlur() {
    h1Text.textContent = `${i / 1}%`; // Adjust the content based on your needs
    header.style.filter = `blur(${i / 1}px)`;

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
