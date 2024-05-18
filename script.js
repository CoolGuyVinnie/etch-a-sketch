// Selects "container" in HTML file
const container = document.querySelector("#container");

// Initializers
const rows = [];

// Will need to change "i" to be user prompt for number of square
for (let i = 0; i < 2; i++) {
    // Creates new element of tag type (only creates in memory)
    rows[i] = document.createElement("div");

    // Creates rows
    rows[i].classList.add("row");

    // Creates columns
    for (let j = 0; j < 3; j++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Changes the styling for square
        square.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "red";
        })

        square.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "blue";
        })
        rows[i].append(square);
    }

    // Applies element into HTML
    container.append(rows[i]);
}