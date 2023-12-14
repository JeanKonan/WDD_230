document.addEventListener("DOMContentLoaded", function () {

    const rentalContainer = document.querySelector(".rental-container");

    fetch("data/rental.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error("Error fetching rental data");
            }
        })
        .then(data => displayRentalOptions(data))
        .catch(error => console.error(error));

    function displayRentalOptions(rentalData) {

        const categoryDiv = document.createElement("div");
        // Create an HTML table
        const table = document.createElement("table");
        table.classList.add("rental-table");

        // Create table headers
        const headers = document.createElement("tr");
        headers.innerHTML = "<th>Type</th><th>Category</th><th>Capacity</th><th>Half Day</th><th>Full Day</th>";
        table.appendChild(headers);
            
        for (const category in rentalData) {
            const rentalCategory = rentalData[category];

            // Iterate through each rental in the category
            rentalCategory.forEach(rental => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${rental.type}</td><td>${category}</td><td>${rental.capacity}</td><td>$${rental.halfDay}</td><td>$${rental.fullDay}</td>`;
                table.appendChild(row);
            });

            // Append the table to the category div
            categoryDiv.appendChild(table);

            // Append the category div to the rental container
            rentalContainer.appendChild(table);
        }
    }
});
