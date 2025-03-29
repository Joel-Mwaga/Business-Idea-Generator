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
                const card = document.createElement('div');
                card.className = 'idea-card';
                card.innerHTML = `<h3>${idea}</h3>`;
                ideasContainer.appendChild(card);
            });
        } else {
            ideasContainer.innerHTML = `<p class="no-ideas">No business ideas found for this selection.</p>`;
        }
    } catch (error) {
        ideasContainer.innerHTML = `<p class="no-ideas">Error fetching ideas. Please try again.</p>`;
        console.error(error);
    }
});