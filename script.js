// Selects "container" in HTML file
const container = document.querySelector("#container");

// Creates new element of tag type (only creates in memory)
const square = document.createElement("div");
const square1 = document.createElement("div");

// Apply styling to square
square.classList.add("square");
square1.classList.add("square");

// Changes the styling element for square
square.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "red";
})

square.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "aquamarine";
})

square1.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "red";
})

square1.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "aquamarine";
})

// Applies element in HTML
container.append(square);
container.append(square1);