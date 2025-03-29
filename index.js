document.getElementById('fetch-btn').addEventListener('click', async () => {
    const salaryRange = document.getElementById('salary-range').value;
    const occupation = document.getElementById('occupation').value;
    const ideasContainer = document.getElementById('ideas-container');

    ideasContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch('http://localhost:5000/api/generate-ideas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ salaryRange, occupation })
        });
        const data = await response.json();

        ideasContainer.innerHTML = "";

        if (data.ideas.length > 0) {
            data.ideas.forEach(idea => {
                const button = document.createElement('button');
                button.className = 'idea-button';
                button.textContent = idea.title;
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

async function fetchIdeaDetails(salaryRange, occupation, title) {
    const researchContainer = document.getElementById('research-container');
    researchContainer.innerHTML = "<p>Loading details...</p>";
    researchContainer.style.display = "block";

    try {
        const response = await fetch('http://localhost:5000/api/idea-details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ salaryRange, occupation, title })
        });
        const data = await response.json();

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

document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Switch to Dark Mode';
    } else {
        themeToggle.textContent = 'Switch to Light Mode';
    }
});