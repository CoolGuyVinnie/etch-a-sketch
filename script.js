// Selects "container" in HTML file
const container = document.querySelector("#container");
const containercols = document.querySelector("#containercols");

// Initialize array
const rows = [];
const columns = [];

// Will need to change "i" to be user prompt for number of square
for (let i = 0; i < 16; i++) {
    // Creates new element of tag type (only creates in memory)
    rows[i] = document.createElement("div");

    // Apply Styling to square
    rows[i].classList.add("square");

    // Changes the styling for square
    rows[i].addEventListener("mouseenter", function() {
        this.style.backgroundColor = "red";
    })

    rows[i].addEventListener("mouseleave", function() {
        this.style.backgroundColor = "blue";
    })

    // Applies element into HTML
    container.append(rows[i]);
}

for (let j = 0; j < 15; j++) {
    columns[j] = document.createElement("div");
    columns[j].classList.add("square");

    columns[j].addEventListener("mouseenter", function() {
        this.style.backgroundColor = "red";
    })

    columns[j].addEventListener("mouseleave", function() {
        this.style.backgroundColor = "blue";
    })

    containercols.append(columns[j]);
}