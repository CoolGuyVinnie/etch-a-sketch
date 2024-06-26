// Selects IDs in HTML file
const container = document.querySelector("#container");
const btn = document.querySelector("#submit");

// Initializers
const rows = [];
let gridNum;

// Function for submittal of grids
btn.addEventListener("click", function() {
    // Clears previous HTML
    container.innerHTML = '';

    // Selects what is in the user input
    gridNum = document.getElementById("grids").value;

    if (gridNum > 64) {
        alert("Please select a number less than or equal to 64");
        return;
    }

    for (let i = 0; i < gridNum; i++) {
    // Creates new element of tag type (only creates in memory)
    rows[i] = document.createElement("div");

    // Creates rows
    rows[i].classList.add("row");

    // Creates columns
    for (let j = 0; j < gridNum; j++) {
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

})

