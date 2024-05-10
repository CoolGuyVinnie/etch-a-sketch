// Selects "container" in HTML file
const container = document.querySelector("#container");

// Initialize array
const square = [];

// Will need to change "i" to be user prompt for number of square
for (let i = 0; i < 17; i++) {
    // Creates new element of tag type (only creates in memory)
    square[i] = document.createElement("div");

    // Apply Styling to square
    square[i].classList.add("square");

    // Changes the styling for square
    square[i].addEventListener("mouseenter", function() {
        this.style.backgroundColor = "red";
    })

    square[i].addEventListener("mouseleave", function() {
        this.style.backgroundColor = "blue";
    })

    // Applies element into HTML
    container.append(square[i]);
}