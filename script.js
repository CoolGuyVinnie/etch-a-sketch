// Selects "container" in HTML file
const container = document.querySelector("#container");

// Creates new element of tag type (only creates in memory)
const square = document.createElement("div");

// Apply styling to square
square.classList.add("square");

// Content to provide in HTML
square.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "red";
})

square.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "aquamarine";
})

// Applies element in HTML
container.append(square);