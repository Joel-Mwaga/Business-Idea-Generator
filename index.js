// Event listener for the "Generate Business Ideas" button
document.getElementById('fetch-btn').addEventListener('click', async () => {
    const salaryRange = document.getElementById('salary-range').value;
    const occupation = document.getElementById('occupation').value;
    const ideasContainer = document.getElementById('ideas-container');

    // Clear the container and show a loading message
    ideasContainer.innerHTML = "<p>Loading...</p>";

    try {
        // Fetch business ideas from the server
        const response = await fetch('http://localhost:5000/api/generate-ideas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ salaryRange, occupation })
        });
        const data = await response.json();

        // Clear the container
        ideasContainer.innerHTML = "";

        // Check if there are any ideas
        if (data.ideas.length > 0) {
            // Create a button for each business idea
            data.ideas.forEach(idea => {
                const button = document.createElement('button');
                button.className = 'idea-button';
                button.textContent = idea.title; // Use the title property of the idea object
                button.addEventListener('click', () => fetchIdeaDetails(salaryRange, occupation, idea.title));
                ideasContainer.appendChild(button);
            });
        } else {
            ideasContainer.innerHTML = "<p>No business ideas found for the selected criteria.</p>";
        }
    } catch (error) {
        ideasContainer.innerHTML = "<p>Error fetching business ideas. Please try again later.</p>";
        console.error(error);
    }
});

// Function to fetch and display details of a specific business idea
async function fetchIdeaDetails(salaryRange, occupation, title) {
    const researchContainer = document.getElementById('research-container');
    researchContainer.innerHTML = "<p>Loading details...</p>";
    researchContainer.style.display = "block";

    try {
        // Fetch business idea details from the server
        const response = await fetch('http://localhost:5000/api/idea-details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ salaryRange, occupation, title })
        });
        const data = await response.json();

        // Display the details of the business idea
        if (data.idea) {
            researchContainer.innerHTML = `
                <h3>${data.idea.title}</h3>
                <p>${data.idea.description}</p>
            `;
        } else {
            researchContainer.innerHTML = "<p>Details not found for the selected business idea.</p>";
        }
    } catch (error) {
        researchContainer.innerHTML = "<p>Error fetching business idea details. Please try again later.</p>";
        console.error(error);
    }
}